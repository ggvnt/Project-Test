import React from "react";
import "./style/main.css";
import "./style/Home.css";


export default function Home(){
    return(
        <div className="img1">
            <img src="../../Images/read and black.jpg" alt="Read and Black"  width="1857" height="850"  />
            <div className="overlay">
                <h1 className="welcome">WELCOME TO</h1>
                <h1 className="born">BORN TO</h1>
                <h1 className="battle">BATTLE</h1>
            </div>

            <div className="overlay2">
                <h1 className="intro">2024 Srilanka Dance Championship.</h1>
                <h1 className="date">July 24 - September 25</h1>
                <h1 className="add1">Royal College Union Office,</h1>
                <h1 className="add2">Rrajakeeya Mawatha,</h1>
                <h1 className="add3">Collombo</h1>
            </div>

            <img src="../../Images/reg.jpg" alt="Read and Black"  width="1857" height="950"  />
            
            <div className="overlay3">
            <h1 className="btob">B TO B</h1>    
            <h1 className="regInfo">Registration Information</h1>
            <p className="ph">Registration opens on June 3, 2024 at 12:00am . SPOTS ARE LIMITED...BE SURE TO REGISTER EARLY!</p> 
            <p className="ph">Registration will be accepted on a first-come, first served basis.Spots are limited in each division.  Once a division is full, no more entries will be accepted for that division</p>  
            <p className="ph">Payment must be made in FULL in order for registration to be processed.</p> 
            <button type="button" class="btn btn-primary btn-lg custom-btn">More Information</button>
            </div>

        </div>
               


    );
}
