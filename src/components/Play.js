const Play = (props) => {
  return (
    <div className="playContainer">
      <div ClassName="play">
        <iframe
          title={props.name}
          width="560"
          height="315"
          src={props.url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};
export default Play;
