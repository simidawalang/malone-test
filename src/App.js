import Form from "./components/Form";
import clipImage from "./img/clip-message.png";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="left-col">
        <h1 className="heading">Digital</h1>
        <h3 className="sub-heading">
          Artificial Intelligence Driving Results For The Travel Industry
        </h3>
        <Form />
      </div>
      <div className="right-col">
        <div className="clip-image">
          <img src={clipImage} alt="clip image" />
        </div>
      </div>
    </div>
  );
}

export default App;
