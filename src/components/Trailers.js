import { useEffect, useState } from "react";
import Trailer from "./Trailer";
const Trailers = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    let arr = [];
    await fetch("https://peaceful-forest-62260.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        Object.values(data.moviesData).map((t) => arr.push(t));
      });
    setData(arr);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="trailers">
      {data.map((data) => (
        <Trailer
          key={data.EventGroup}
          date={data.ShowDate.split(",")[0]}
          image={data.EventImageUrl}
          vote={data.csCount}
          votePer={data.wtsPerc}
          movieName={data.EventTitle}
          trailerLink={data.TrailerURL}
          trailerName={data.EventURL}
        />
      ))}
    </div>
  );
};
export default Trailers;
