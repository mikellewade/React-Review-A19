import React from "react";

function Entry({ entry }) {
  console.log(entry)
//   const { title, location, startDate, img, googleMapsUrl, description } = props;
//   console.log("Image Link", img);
  return (
    <div>
      <div className="entryContainer">
        <div>
          <div id={"carousel"} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 travelImg"
                  src={require(`../imgs/${entry.img}`)}
                  alt={`Attraction in ${entry.location}`}
                />
              </div>
              <div className="carousel-item"></div>
            </div>
          </div>
        </div>

        <div className="infoContainer">
          {/* <img src= "./logos/Pinpoint.png"/> */}
          <span className="destination">{entry.location}</span>
          <a className="googleLink" href={entry.googleMapsUrl}>
            View on Google Maps
          </a>

          <p className="attraction">{entry.title}</p>
          <p className="year">{entry.startDate}</p>
          <p className="description">{entry.description}</p>
        </div>
      </div>
      <div className="breaker"></div>
    </div>
  );
}

export default Entry;
