import React, {Component} from "react";

export default class ShowPassword extends Component {
    state = {
        type: "password",
    };
    handleChange = () => {
        this.setState({
            type: this.state.type === "password" ? "text" : "password",
        });
    };
    render() {
        return (
            <div>
                <input type={this.state.type} />
                <button onClick={this.handleChange}>
                    {this.state.type === "password" ? "Show" : "Hide"}
                </button>
            </div>
        );
    }
}
