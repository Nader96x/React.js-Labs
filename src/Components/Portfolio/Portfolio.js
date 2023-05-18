import Card from "../../SharedUI/Card/Card";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="container">
      <div className="pt-3 mt-3">
        <h1 className="text-center">Portfolio</h1>
      </div>
      <div className="row">
        <Card
          content={
            <div className="card bg-dark p-5 text-center text-light">
              <a href="#">HELLO</a>
            </div>
          }
        />
        <Card
          content={
            <div className="card bg-dark p-5 text-center text-light">
              <a href="#">HELLO</a>
            </div>
          }
        />
        <Card
          content={
            <div className="card bg-dark p-5 text-center text-light">
              <a href="#">HELLO</a>
            </div>
          }
        />
        <Card
          content={
            <div className="card bg-dark p-5 text-center text-light">
              <a href="#">HELLO</a>
            </div>
          }
        />
        <Card
          content={
            <div className="card bg-dark p-5 text-center text-light">
              <a href="#">HELLO</a>
            </div>
          }
        />
        <Card
          content={
            <div className="card bg-dark p-5 text-center text-light">
              <a href="#">HELLO</a>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Portfolio;
