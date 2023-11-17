import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    return (
      <div style={{ marginLeft: "100px" }}>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="http://localhost:4000/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
        </div>
        <EncodingParametersInURLs />
        <WorkingWithObjects />
        <WorkingWithArrays />

        <br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
  export default Assignment5;