import React from "react";
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    // handleClick = () => {
    //     this.setState({isToggleOn: !this.state.isToggleOn});
    // };

    handleClick = () => {
        this.setState((previous) => ({
            isToggleOn: !previous.isToggleOn,
        }));
    };
    render() {
        return (
            <>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "ON" : "OFF"}
                </button>
                <button onClick={(e) => {e.preventDefault() ; console.log("Inline")}}>console</button>
            </>
        );
    }
}

export default Toggle;
