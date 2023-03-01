import image from "../../img/logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={image} alt="logo" />
    </div>
  );
}
