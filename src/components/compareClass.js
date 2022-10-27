import React, {Component} from "react";

export default class CompareClass extends Component {
    // Bind function

    /*constructor(props) {
        super(props);

        this.state = {
            name: "Senior",
            description: "Courses center",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        // this.state.name = "Js"; Wrong
        this.setState({name: "Js", description: "Programming language"});
        console.log(this);
    }*/
    state = {
        name: "Senior",
        description: "Courses center",
    };

    handleChange = () => {
        // this.state.name = "Js"; Wrong
        this.setState({name: "Js", description: "Programming language"});
        console.log(this.state.name);
    };
    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.description}</div>
                <button onClick={this.handleChange}>Change state</button>
            </div>
        );
    }
}
