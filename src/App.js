import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
// import BootstrapExample from "./components/bootstrapExample";
import {ExampleClass, ExampleFunction} from "./components/life_and_hook";
// import ShowPassword from "./components/showPassword";
// import Controlled from "./components/controlled";
// import Key from "./components/key";
// import CompareClass from "./components/compareClass";
// import Rendering from "./components/rendering";
// import Toggle from "./components/toggle";
// import Courses from "./components/Courses";
// import CoursesClass from "./components/CoursesClass";

function App() {
    const [visible, setVisible] = useState(true);

    let changeVisibility = () => {
        setVisible(!visible);
    };
    return (
        <div className="App">
            {/* <Courses courseName="Javascript" courseDesc="Programming language"/>
            <Courses courseName="React" courseDesc="Js Library"/>
            <hr />
            <hr />
            <CoursesClass courseName="HTML" courseDesc="Hypertext markup language"/>
            <CoursesClass courseName="CSS" courseDesc="Cascading style sheet"/>

            <CompareClass />
            <hr />
            <Toggle />

            

            <Rendering />

            <Key />

            <Controlled />

            
            <BootstrapExample />

            <hr />
            <ShowPassword />

            */}

            <button onClick={changeVisibility}>{visible ? "Hide" : "Show"}</button>
            {visible && (
                <>
                    <ExampleFunction />
                    <hr />
                    <ExampleClass />
                </>
            )}
        </div>
    );
}

export default App;
