const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "First name is required"]
    },
    lastName:{
        type: String,
        required: [true, "Last name is required"]
    },
    email:{
        type:String,
        required: [true, "Email is required"]
    },
    password:{
        type:String,
        required: [true, "Password is required"],
        minlength: [3,"Must be at least 3 characters"]
    }
}, {timestamps:true})

UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword)
.set(value=>this._confirmPassword = value)

UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Passwords must match')
    }
    next()
})

UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword
        next()
    }catch{
        console.log('error in save', error)
    }
})

module.exports = mongoose.model('User', UserSchema)
