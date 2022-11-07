import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'
import Moment from 'moment'

const TripList = (props) => {
    const {trip, setTrip} = props
    const navigate = useNavigate()

    useEffect( () => {
        axios.get("http://localhost:8000/api/trips", {withCredentials:true, credentials:'include'})
        .then((result) => setTrip(result.data))
        .catch((error) => console.log(error))
    }, [setTrip])

    const logout = (e) => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true, credentials:'include'})
            .then((res)=>{
                console.log('logged out')
                navigate('/')
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className='d-flex flex-row justify-content-end'>
                <Link to="/trip/create" className="btn btn-outline-success m-3">Add Trip</Link>
                <button onClick={logout} className="btn btn-outline-danger m-3">Logout</button>
            </div>
            <div>
                <h1 className="p-4 m-1 d-flex justify-content-center">Your upcoming trips!</h1>
            </div>
            <div>
                {
                    trip.map((trip, index) =>{
                        return(
                            <div className='card m-5 col-5 mx-auto text-center' key={index}>
                                <div className="card-header bg-primary text-white"> {trip.city}, {trip.country}</div>
                                <div className='card-body m-2'>
                                    <h3 className='card-title'>{trip.name}</h3>
                                    <h6 className='card-text'>{Moment(trip.arrival).format('MM-DD-YYYY')} - {Moment(trip.departure).format('MM-DD-YYYY')}</h6>
                                    <div>
                                        <Link className="btn btn-outline-primary mx-1" to={`/trip/${trip._id}`}>Trip Details</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TripList