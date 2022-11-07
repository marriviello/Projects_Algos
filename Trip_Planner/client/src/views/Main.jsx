import React, {useState} from 'react'
import TripList from '../components/TripList'
import NavBar from '../components/NavBar'

const Main = () => {

    const [trip, setTrip] = useState([])

    return (
    <div>
        <div>
            <NavBar />
        </div>
        <div>
            <TripList trip={trip} setTrip={setTrip} />
        </div>
    </div>
    )
}

export default Main;