import "./DevTools.css";
import Tool from "./Tool";

const DevTools = () => {
  return (
    <div id="dev-tools">
      <h3 className="mb-3">Dev Tools</h3>
      <div className="tools">
        <Tool icon={<i className="fab fa-react"></i>} name="React.js" />
        <Tool icon={<i className="fab fa-node-js"></i>} name="Node.js" />
        <Tool icon={<i className="fas fa-database"></i>} name="MongoDB" />
        <Tool icon={<i className="fab fa-bootstrap"></i>} name="Bootstrap" />
        <Tool icon={<i className="fab fa-js-square"></i>} name="JavaScript" />
        <Tool icon={<i className="fab fa-git-alt"></i>} name="Git" />
        <Tool icon={<i className="fab fa-html5"></i>} name="HTML5" />
        <Tool icon={<i className="fab fa-css3"></i>} name="CSS3" />
      </div>
    </div>
  );
};

export default DevTools;
