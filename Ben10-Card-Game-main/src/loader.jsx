import loader from "./assets/loader.png";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <img src={loader} 
      className="loader" />
    </div>
  );
}
