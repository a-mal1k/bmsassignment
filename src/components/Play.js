import ReactPlayer from "react-player";
import $ from "jquery";
const Play = (props) => {
  const clickHandler = () => {
    $(".playContainer").css("display", "none");
  };
  return (
    <div className="playContainer">
      <ReactPlayer
        url={props.url}
        className="react-player"
        playing
        width="100%"
        height="100%"
        controls={false}
      />
      <p className="closeBanner" onClick={clickHandler}>
        Close
      </p>
    </div>
  );
};
export default Play;
