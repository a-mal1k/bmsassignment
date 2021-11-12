import Navbar from "./components/Navbar";
import Play from "./components/Play";
import Trailers from "./components/Trailers";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Play />
      <Trailers />
    </div>
  );
}
