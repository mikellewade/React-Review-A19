import React from 'react';

function Entry(props) {
  console.log(props)
  return (
      <div>
          <div className="entryContainer">
              <div>
                  <div id={"carousel"} className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                      <img className="d-block w-100 travelImg" src={''} alt="Destination Img"/>
                      </div>
                      <div className="carousel-item">
                      {/* <img className="d-block w-100 travelImg" src={path + props.entry.imgs.img2}alt="Second slide"/> */}
                      </div>
                  </div>
                  </div>               
              </div>
              
              <div className="infoContainer">
                  {/* <img src= "./logos/Pinpoint.png"/> */}
                  <span className="destination">Destination</span>
                  <a className="googleLink" href='#'>View on Google Maps</a>
                  
                  <p className="attraction">Attraction</p>
                  <p className="year">Trip Year</p>
                  <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
          
          </div>
          <div className="breaker"></div>
      </div>
  )
}



export default Entry