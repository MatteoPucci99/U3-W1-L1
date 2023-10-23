import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ButtonComponent text="Click" />
      <ImageComponent imageSrc="https://placekitten.com/300" />
    </div>
  );
}

export default App;
