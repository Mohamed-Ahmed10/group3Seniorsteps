import {Component} from "react";
import Course from "./Course";
class About extends Component {
    render() {
        return (
            <div>
                This is class component
                <br />
                <Course title="Javascript" courseData="Programming language" />
                <Course title="CSS" courseData="Cascading stylesheet" />
                <Course title="React" courseData="SPA" />
            </div>
        );
    }
}
export default About;
