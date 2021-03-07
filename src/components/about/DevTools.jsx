import "./DevTools.css";

const DevTools = () => {
  return (
    <div id="dev-tools">
      <h3 className="mb-3">Dev Tools</h3>
      <div id="tools">
        <div className="dev-tool-container">
          <i className="fab fa-react"></i>
          <span>React.js</span>
        </div>
        <div className="dev-tool-container">
          <i className="fab fa-node-js"></i>
          <span>Node.js</span>
        </div>
        <div className="dev-tool-container">
          <i className="fas fa-database"></i>
          <span>MongoDB</span>
        </div>
        <div className="dev-tool-container">
          <i className="fab fa-bootstrap"></i>
          <span>Bootstrap</span>
        </div>
        <div className="dev-tool-container">
          <i className="fab fa-js-square"></i>
          <span>JavaScript</span>
        </div>
        <div className="dev-tool-container">
          <i className="fab fa-git-alt"></i>
          <span>Git</span>
        </div>
        <div className="dev-tool-container">
          <i className="fab fa-html5"></i>
          <span>HTML5</span>
        </div>
        <div className="dev-tool-container">
          <i className="fab fa-css3"></i>
          <span>CSS3</span>
        </div>
      </div>
    </div>
  );
};

export default DevTools;
