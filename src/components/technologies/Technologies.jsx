import "./Technologies.css";
import DevTools from "./DevTools";

const Technologies = () => {
  return (
    <div id="technologies">
      <div className="text-box">
        <h2>Using cutting edge technology</h2>
        <p>
          For best results, your site can be built and maintained with the best
          technologies on the market.
        </p>
      </div>
      <DevTools />
    </div>
  );
};

export default Technologies;
