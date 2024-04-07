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
            
            <div className="overlay3">
            <h1 className="regInfo">Registration Information</h1>
                
            </div>

        </div>
               


    );
}
