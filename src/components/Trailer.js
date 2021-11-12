import $ from "jquery";
import { useState } from "react";
const Trailer = () => {
  const [play, setPlay] = useState(false);

  let image =
    "https://www.pngkit.com/png/detail/94-948126_spider-man-flying-spiderman-png.png";

  // if(play){
  //   $('.play').css('display','block')
  // }

  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="inner-card">
        <p className="date">5 Dec</p>
        <div className="voting">
          <span>
            <i className="fa fa-thumbs-up"></i>100%
          </span>
          <h6>55555 votes</h6>
        </div>
      </div>
      <button className="btn">
        <i className="fa fa-play"></i>
      </button>
      <p className="movieName">Movie Name</p>
    </div>
  );
};
export default Trailer;
