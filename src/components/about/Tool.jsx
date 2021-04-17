import Tilt from "react-tilt";
import "./Tool.css";

const Tool = ({ icon, name }) => {
  return (
    <Tilt className="tilt-tool" options={{ max: 30, scale: 1.05 }}>
      <div className="tool-container">
        <div className="tool-content">
          <span>{icon}</span>
          <span>{name}</span>
        </div>
      </div>
    </Tilt>
  );
};

export default Tool;
