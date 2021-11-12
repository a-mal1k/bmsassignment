import { useEffect, useState } from "react";

const Navbar = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-forest-62260.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => {
        let arr = [];
        for (let i = 0; i < data.languageList.length; i++) {
          arr.push(data.languageList[i]);
        }
        setArr(arr);
      });
  }, []);

  return (
    <nav className="navbar">
      <div className="left-nav">
        <h1>Movie Trailers</h1>
        <ul className="list">
          <li className="list-item">Coming Soon</li>
          <li className="list-item">Now Playing</li>
        </ul>
      </div>
      <div className="right-nav">
        <select className="select" name="category" id="category">
          <option value="popular">Popular</option>
          <option value="newest">Newest</option>
        </select>
        <select className="select" name="language" id="language">
          {arr.map((t, index) => (
            <option value={`${t}`} key={index}>
              {t}
            </option>
          ))}
        </select>
        <select className="select" name="genre" id="genre">
          <option value="allgenre">All Genres</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </nav>
  );
};
export default Navbar;
