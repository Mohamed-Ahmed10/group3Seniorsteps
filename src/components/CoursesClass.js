import React, {Component} from "react";

export default class CoursesClass extends Component {
    logOutput = () => {
        console.log("OK class");
    };

    centerName = "Senior steps class";
    render() {
        return (
            <div>
                <h2>{this.props.courseName}</h2>
                <p>{this.props.courseDesc}</p>
                <div>{this.centerName}</div>
                <button onClick={this.logOutput}>Click class</button>
            </div>
        );
    }
}
