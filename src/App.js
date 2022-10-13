import myImage from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

function App() {

    var myName = "Mohamed";

    return (
        <div className="App">
            Hello React
            <Navbar />
            <span>This is span</span>
            <input type="text" /><br />
            <img src={myImage} width="200" height="200" alt="" /><br />
            <a href="http://gooogle.com/">Click</a><br />
            {myName.toUpperCase()}
            <Header />
            <hr />
            <About />
        </div>
    );
}

export default App;
