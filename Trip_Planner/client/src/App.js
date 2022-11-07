import './App.css';
import Main from './views/Main'
import TripDetails from './components/TripDetails'
import EditTrip from './components/EditTrip'
import Register from './components/Register'
import Form from './components/Form'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/trips' />
          <Route element={<TripDetails />} path='/trip/:id' />
          <Route element={<EditTrip />} path='/trip/edit/:id'/>
          <Route element={<Form />} path='/trip/create'/>
          <Route element={<Register />} path='/' default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
