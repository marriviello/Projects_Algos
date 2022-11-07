import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Form = (props) => {
    const {trip, setTrip} = props

    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [travelInfo, setTravelInfo] = useState("")
    const [travelConfirmation, setTravelConfirmation] = useState("")
    const [hotel, setHotel] = useState("")
    const [hotelConfirmation, setHotelConfirmation] = useState("")
    const [arrival, setArrival] = useState("")
    const [departure, setDeparture] = useState("")

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/trip/create",{
            name,
            city,
            country,
            travelInfo,
            travelConfirmation,
            hotel,
            hotelConfirmation,
            arrival,
            departure
        }, {withCredentials:true, credentials:'include'})
        .then((result) => {
            navigate("/trips")
            console.log(result.data)
            setTrip([...trip, result.data])
            setName("")
            setCity("")
            setCountry("")
            setTravelInfo("")
            setTravelConfirmation("")
            setHotel("")
            setHotelConfirmation("")
            setArrival("")
            setDeparture("")
        }).catch((err)=>{
            console.log(err.response)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <form onSubmit={ submitHandler } className="flex-column justify-content-center m-5 col-4 mx-auto">
                <h3>Plan a trip:</h3><br/>
                <div className="form-group">
                    <label>Trip name: </label> 
                    <input 
                        className="form-control" 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={ (e) => setName(e.target.value) } /> 
                    { errors.name ? <p className='alert alert-danger'>{errors.name.message}</p> : null}
                    <br />
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label>City: </label> 
                        <input 
                            className="form-control" 
                            type="text" 
                            name="city" 
                            value={city} 
                            onChange={ (e) => setCity(e.target.value) } /> 
                        { errors.city ? <p className='alert alert-danger'>{errors.city.message}</p> : null}
                        <br />
                    </div>
                    <div className="form-group col">
                        <label>State or Country: </label> 
                        <input 
                            className="form-control" 
                            type="text" 
                            name="country" 
                            value={country} 
                            onChange={ (e) => setCountry(e.target.value) } /> 
                        { errors.country ? <p className='alert alert-danger'>{errors.country.message}</p> : null}
                        <br />
                    </div>
                </div>
                <div className="form-group">
                    <label>Travel Type: </label> 
                    <select 
                        className="form-control custom-select" 
                        name="travelInfo" 
                        value={travelInfo} 
                        onChange={ (e) => setTravelInfo(e.target.value) }> 
                        <option>Select travel type</option>
                        <option>Airplane</option>
                        <option>Bus</option>
                        <option>Train</option>
                        <option>Car</option>
                    </select>
                    { errors.travelInfo ? <p className='alert alert-danger'>{errors.travelInfo.message}</p> : null}
                    <br />
                </div>
                <div className="form-group">
                    <label>Travel Confirmation: </label> 
                    <input 
                        className="form-control" 
                        type="text" 
                        name="travelConfirmation" 
                        value={travelConfirmation} 
                        onChange={ (e) => setTravelConfirmation(e.target.value) } /> 
                    { errors.travelConfirmation ? <p className='alert alert-danger'>{errors.travelConfirmation.message}</p> : null}
                    <br />
                </div>
                <div className="form-group">
                    <label>Accommodation: </label> 
                    <select 
                        className="form-control" 
                        name="hotel" 
                        value={hotel} 
                        onChange={ (e) => setHotel(e.target.value) }>
                        <option>Select accommodation type</option>
                        <option>Hotel</option>
                        <option>Airbnb</option>
                        <option>Hostel</option>
                    </select>
                    { errors.hotel ? <p className='alert alert-danger'>{errors.hotel.message}</p> : null}
                    <br />
                </div>
                <div className="form-group">
                    <label>Accommodation Confirmation: </label> 
                    <input 
                        className="form-control" 
                        type="text" 
                        name="hotelConfirmation" 
                        value={hotelConfirmation} 
                        onChange={ (e) => setHotelConfirmation(e.target.value) } /> 
                    { errors.hotelConfirmation ? <p className='alert alert-danger'>{errors.hotelConfirmation.message}</p> : null}
                    <br />
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label>Arrival Date: </label> 
                        <input
                            className="form-control" 
                            type="date" 
                            name="arrival" 
                            value={arrival} 
                            onChange={ (e) => setArrival(e.target.value) } />
                        { errors.arrival ? <p className='alert alert-danger'>{errors.arrival.message}</p>: null}
                        <br />
                    </div>
                    <div className="form-group col">
                        <label>Departure Date: </label> 
                        <input 
                            className="form-control" 
                            type="date" name="departure" 
                            value={departure} 
                            onChange={ (e) => setDeparture(e.target.value) } />
                            { errors.departure ? <p className='alert alert-danger' >{errors.departure.message}</p>: null}
                    </div>
                </div>
                <button className="form-control btn btn-primary" type="submit" value="Add Trip">Add a trip!</button>
            </form>
        </div>
    );
}

export default Form;