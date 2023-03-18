import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="app font-sans h-screen bg-trueGray-900">
      <Header/>
      <div className="app__body">
        <div className="body"></div>
      </div>
    </div>
  );
}

export default App;
