import Illustration from "./components/Illustration";
import Nav from "./components/Nav";
import Difference from "./components/Difference";
import Feedback from "./components/Feedback";
import "./styles/App.css";
import Conclusion from "./components/Conclusion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Illustration />
      <Difference />
      <Feedback />
      <Conclusion />
      <Footer />
    </div>
  );
}

export default App;
