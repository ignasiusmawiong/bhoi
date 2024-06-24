import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Container from './Pages/Container';
import Footer from './Components/Footer';
import Category from './Pages/Category';
import banner_service from './assets/banner_service.jpg'
import MenuCategory from './Pages/MenuCategory';
import banner_work from './assets/banner_work.jpg'
import About from './Components/About';
import Form from './Components/Form';

const App = () => {
  return (
    <div id="root">
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Container />} />
              <Route path='/services' element={<MenuCategory banner ={banner_service}/>} />
              <Route path='/work' element={<MenuCategory banner ={banner_work}/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Form/>} />
              <Route path='/donate' element={<Category/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
