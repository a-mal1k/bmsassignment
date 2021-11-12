import { useEffect, useState } from "react";
import Trailer from "./Trailer";
const Trailers = () => {
  var apiData = [
    { date: "" },
    { image: "" },
    { vote: "" },
    { votePer: "" },
    { movieName: "" }
  ];
  const fetchData = () => {
    fetch("https://peaceful-forest-62260.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        Object.values(data.moviesData).map((t) => {
          apiData.date.push(t.showDate);
          apiData.image.push(t.EventImageUrl);
          apiData.vote.push(t.csCount);
          apiData.votePer.push(t.wtsPerc);
          apiData.movieName.push(t.EventTitle);
          return apiData;
        });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="trailers">
      {apiData.map((data) => {
        return (
          <Trailer
            date={data.date}
            image={data.image}
            vote={data.vote}
            votePer={data.votePer}
            movieName={data.movieName}
          />
        );
      })}
    </div>
  );
};
export default Trailers;
