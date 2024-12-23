import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/layout';
import {Routes, Route} from 'react-router-dom';


function App() {
  const [movies, setMovies] = useState();

  const getmMovies = async () => {
    try {
      const response = await api.get('/movies');
      console.log(response.data);
      setMovies(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getmMovies();
  }, []);
  return (
    <div className="App">

      <Routes>
        <Route path = "/" element = {Layout}>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
