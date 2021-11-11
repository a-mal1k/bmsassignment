const Navbar = () => {
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
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
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
