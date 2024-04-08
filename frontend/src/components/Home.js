import React from "react";
import "./style/main.css";
import "./style/Home.css";


export default function Home(){
    return(
        <div className="img1">
            <img src="../../Images/read and black.jpg" alt="Read and Black"  width="100%" height="auto"  />
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

                        
            <div class="overlay3">
                <img src="../../Images/reg.jpg" alt="Read and Black"  />
                <div class="overlay-text">
                    <h1 class="btob">B TO B</h1>
                    <h1 class="regInfo">Registration Information</h1>
                    <p class="ph">Registration opens on June 3, 2024 at 12:00am. SPOTS ARE LIMITED...BE SURE TO REGISTER EARLY!</p>
                    <p class="ph">Registration will be accepted on a first-come, first-served basis. Spots are limited in each division. Once a division is full, no more entries will be accepted for that division</p>
                    <p class="ph">Payment must be made in FULL in order for registration to be processed.</p>
                    <button type="button" class="btn btn-primary btn-lg custom-btn">More Information</button>
                </div>
            </div>


            <div class="overlay5">
                <div class="centered-content">
                    <div class="image-container">
                        <img src="../../Images/dns1.jpg" class="img2" alt="Read and Black" width="1300" height="425" />
                        <div class="text-overlay">
                            <h1 class="text-over-image">2024 SCHEDULE</h1>
                            <h2 class="text-over-image2">SEE THE ROUTINE SCHEDULE</h2>
                            <button type="button" class="btn btn-primary btn-lg custom-btn4">VIEW SCHEDULE</button>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../../Images/dns2.jpg" class="img2" alt="Read and Black" width="1300" height="425" />
                        <div class="text-overlay">
                            <h1 class="text-over-image">RULES</h1>
                            <h2 class="text-over-image2">SEE THE COMPETITION RULES</h2>
                            <button type="button" class="btn btn-primary btn-lg custom-btn4">VIEW RULES</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="overlay8">
            
                <div className="image">
                    <img src="../../Images/read and black.jpg" alt="Read and Black"  width="100%" height="auto"  />
                </div>
                <h1 className="gallery">GALLERY</h1>

                <div class="button-images">
                    <div class="button-image">
                        <img src="../../Images/img1.jpg" alt="Image 1" />
                        <p>Image 1</p>
                    </div>
                    <div class="button-image">
                        <img src="../../Images/img2.jpg" alt="Image 2" />
                        <p>Image 2</p>
                    </div>
                    
                </div>
                <div class="button-images2">
                    <div class="button-image">
                        <img src="../../Images/img3.jpg" alt="Image 1" h />
                        <p>Image 3</p>
                    </div>
                    <div class="button-image">
                        <img src="../../Images/img4.jpg" alt="Image 2" />
                        <p>Image 4</p>
                    </div>
                    
                </div>
                <button class="view-more-button">View More</button>
            </div>


            <div className="overlay4">
               
                <div className="butt">
                <button type="button" class="btn btn-primary btn-lg custom-btn3">2023 MEDALISTS </button>
                <button type="button" class="btn btn-primary btn-lg custom-btn3">2023 RESULTS</button>
                </div>
            </div>
                <hr />
            <div className="overlay7">
                <h1 className="payment">Buy Your Own Tickets.</h1>
                <button type="button" class="btn btn-primary btn-lg custom-btn2">BUY</button>
                
            </div>
    
            </div>
               


    );
}
