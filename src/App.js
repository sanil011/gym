import React from "react";
import ExerciseDetail from "./Pages/ExerciseDetails";
import Home from "./Pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Route, Routes } from 'react-router-dom';
import {Box}  from '@mui/material'
import './app.css';
const App = () => {
    return (
        <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={ <ExerciseDetail/>} />
            </Routes>
            <Footer/>
        </Box>
    )
}

export default App;