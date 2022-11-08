import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import NavBar from './NavBar'
import Moment from 'moment'

const TripDetails = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [oneTrip, setOneTrip] = useState({})

    // const today = new Date()
    // const timeSpan = oneTrip.arrival - today

    // const countDown= () => {
    //     if (timeSpan <= -today){
    //         console.log("Past the day")
    //     }
    //     else if (timeSpan <= 0){
    //         console.log("Today is the trip day!")
    //     }
    //     else{
    //         const days=Math.floor(timeSpan / day)
    //         console.log(days)
    //     }
    // }

    //Specific Trip Info
    useEffect(() => {
        axios.get(`http://localhost:8000/api/trip/${id}`, {withCredentials:true, credentials:'include'})
        .then((result) => {
            setOneTrip(result.data)
        }).catch((error) => console.log(error))
    }, [id])

    // Delete Trip
    const deleteTrip = (id) => {
        axios.delete(`http://localhost:8000/api/trip/delete/${id}`, {withCredentials:true, credentials:'include'})
            .then(res => navigate('/trips'))
            .catch(err => console.log(err))
    }

    return (
    <div>
        {/* Nav Bar Component */}
        <NavBar/>

        {/* Trip Title */}
        <div>
            <div className="d-flex align-items-center flex-column">
                <h1 className="mt-5">{oneTrip.name}</h1>
                <div className="w-70">
                    <p className="m-2">Arrival: {Moment(oneTrip.arrival).format('MM-DD-YYYY')} Departure: {Moment(oneTrip.departure).format('MM-DD-YYYY')}</p>
                </div>
                <div className="d-flex flex-row m-3">
                    <Link to ={`/trip/edit/${oneTrip._id}`} className="btn btn-light btn-outline-success m-3">Edit Trip</Link><br/>
                    <button className="btn btn-outline-danger m-3" onClick={(e)=>deleteTrip(oneTrip._id)}>Delete Trip</button> <br/>
                </div>
            </div>

            {/* Card Info */}
            <div id="details-card" className='d-flex align-items-center flex-column m-5 col-5 mx-auto bg-light'>
                <div className='m-3'>
                    <h3 id="details-card-location">{oneTrip.city}, {oneTrip.country}</h3><br/>
                </div>
                <div>
                    <p>Travel Type: {oneTrip.travelInfo} </p>
                    <p>{oneTrip.travelInfo}: {oneTrip.travelConfirmation} </p>
                    <p>Accommodation Type: {oneTrip.hotel} </p>
                    <p>{oneTrip.hotel}: {oneTrip.hotelConfirmation} </p>
                </div>
            </div>
        </div>
        <br/>
    </div>

)
}

export default TripDetails