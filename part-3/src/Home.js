import React from 'react'
import './Home.css'
import image from './pngtree-large-library-with-wooden-bookshelves-and-wooden-floors-with-a-dark-image_2642910.jpg'
import  CountUp  from 'react-countup';
import Signin from './signin';
import Signup from './signup';
import profile from './profile';
import minecraft from './minecraft.png'
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate(); 


    const handleSignup = () => {
        navigate('/signup'); 
    };

    const handleProfile = () => {
        navigate('/signin'); 
    };
  return (
    <section className = 'Landing-wrapper'>
        <div className="hero-Container">
            <div className="heroLeft">
                <div className="heroTitle">
                
                    <h1>
                        Library Management
                    </h1>
                </div>
                <div className='heroDescription'>
                    <span>Find a variety of books that will satisfy ur imagination</span>
                </div>
                <div className="buttons">
                    <button onClick={handleSignup}>SignUp</button>
                    <button onClick={handleProfile}>Go to your Profile</button>
                </div>

                <div className="stats">
                    <div className="stat">
                        <span>
                            <CountUp start = {80000} end = {100000} duration ={4}/>
                            <span>+</span>
                            Books
                        </span>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp start = {4000} end = {5000} duration ={4}/>
                            <span>+</span>
                            Members
                        </span>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp start = {35} end = {45} duration ={4}/>
                            <span>+</span>
                            Genres
                        </span>
                    </div>
                </div>
            </div>
            <div className="heroRight">
                <div className="imageContainer">
                    <img src={minecraft} />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Home
