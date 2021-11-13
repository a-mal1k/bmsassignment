import $ from "jquery";
import { useState } from "react";
const Trailer = (props) => {
  const [play, setPlay] = useState(false);

  if (play) {
    $(".play").css("display", "block");
  } else {
    $(".play").css("display", "none");
  }
  return (
    <div className="card" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="inner-card">
        <p className="date">{props.date}</p>

        <div className="voting">
          <span>
            <i className="fa fa-thumbs-up"></i>
            {props.votePer}
          </span>
          <h6>{props.vote} votes</h6>
        </div>
      </div>
      <button
        className="btn"
        onClick={() => setPlay(true)}
        onDoubleClick={() => setPlay(false)}
      >
        <i className="fa fa-play"></i>
      </button>
      <p className="movieName">{props.movieName}</p>
    </div>
  );
};
export default Trailer;
