import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';

const EditTrip = (props) => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [city, setCity] = useState()
    const [country, setCountry] = useState()
    const [travelInfo, setTravelInfo] = useState()
    const [travelConfirmation, setTravelConfirmation] = useState()
    const [hotel, setHotel] = useState()
    const [hotelConfirmation, setHotelConfirmation] = useState()
    const [arrival, setArrival] = useState()
    const [departure, setDeparture] = useState()

    const [errors, setErrors] = useState("")
    const navigate = useNavigate();

    // const arrivalDate = dateFormat(arrival, "yyyy-mm-d")
    // const departureDate = dateFormat(departure, "yyyy-mm-d")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trip/${id}`, {withCredentials:true, credentials:'include'})
            .then(res => {
                setName(res.data.name)
                setCity(res.data.city)
                setCountry(res.data.country)
                setTravelInfo(res.data.travelInfo)
                setTravelConfirmation(res.data.travelConfirmation)
                setHotel(res.data.hotel)
                setHotelConfirmation(res.data.hotelConfirmation)
                setArrival(res.data.arrival)
                setDeparture(res.data.departure)
            }).catch(err => console.log(err))
    }, [id])

    const updateTrip = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/trip/edit/${id}`, {
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
        .then(res => {
                console.log(res)
                navigate(`/trip/${id}`)
        }).catch(err => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    
    return (
        <div>
            <NavBar />
            <div className="m-5 col-4 mx-auto">
            <h1>Edit {name} Trip</h1>
            <form onSubmit={updateTrip}>
                <p class="form-group"> 
                    <label>Trip Name:</label><br />
                    <input type="text" 
                    class="form-control"
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    { errors.name ? <span style={{color: "red"}}>{errors.name.message}</span>: null}
                </p>
                <div className="form-group row">
                    <div className="col">
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
                    <div className='col'>
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
                <div className='row'>
                <p class="form-group col">
                    <label>Arrival Date:</label><br />
                    <input type="date" 
                    class="form-control"
                    name="arrival"
                    value={arrival} 
                    onChange={(e) => { setArrival(e.target.value) }} />
                    { errors.arrival ? <span style={{color: "red"}}>{errors.arrival.message}</span>: null}
                </p>
                <p class="form-group col">
                    <label>Departure Date:</label><br />
                    <input type="date" 
                    class="form-control"
                    name="departure"
                    value={departure}
                    onChange={(e) => { setDeparture(e.target.value) }} />
                    { errors.departure ? <span style={{color: "red"}}>{errors.departure.message}</span>: null}
                </p>
                </div>
                <input type="submit" value="Update" class="btn btn-primary"/>
            </form>
            </div>
        </div>
    )
}
export default EditTrip

