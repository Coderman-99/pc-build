import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {



  const [builds, setBuilds] = useState();

  const getBuilds = async () => {

    try {
      const response = await api.get();

      console.log(response.data)

      setBuilds(response.data)

    } catch (err) {
      console.log("error")
    }

  }

  useEffect(() => {
    getBuilds();
  }, []
  )
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home builds={builds} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
