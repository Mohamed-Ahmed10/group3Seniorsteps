import React, {Component} from "react";

export default class Key extends Component {
    courses = [
        "HTML",
        "CSS",
        "Js",
        "Jquery",
        "pug",
        "Sass",
        "OOP",
        "Ajax",
        "Json",
        "React",
    ];

    state = {
        courses: [
            "HTML",
            "CSS",
            "Js",
            "Jquery",
            "pug",
            "Sass",
            "OOP",
            "Ajax",
            "Json",
            "React",
        ],
    };
    myMap = this.courses.map((course, index) => <li key={index}>{course}</li>);
    render() {
        return (
            <>
                <ol>{this.myMap}</ol>
                <hr />
                <ol>
                    {this.state.courses.map((course, index) => (
                        <li key={index}>{course.toLocaleUpperCase()}</li>
                    ))}
                </ol>
            </>
        );
    }
}
