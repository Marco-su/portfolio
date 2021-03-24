import "./Tool.css";

const Tool = ({ icon, name }) => {
  return (
    <div className="dev-tool-container">
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default Tool;
