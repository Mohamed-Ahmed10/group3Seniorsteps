import React, {Component} from "react";
import "../sass/components/controlled.scss";
export default class Controlled extends Component {
    state = {
        username: "",
        description: "",
        selectCourse: true,
        education : "2",
        gender : "female"
    };

    handleUsername = (event) => {
        this.setState({username: event.target.value});
    };
    handleDescription = (event) => {
        this.setState({description: event.target.value});
    };
    handleCourse = () => {
        this.setState({selectCourse: !this.state.selectCourse});
    };
    handleEducation = (e) =>
    {
        this.setState({education : e.target.value})
    }
    handleGender = (e) =>
    {
        this.setState({gender : e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.username);
    };
    /* text select checkbox radio */
    render() {
        return (
            <div className="controlled">
                <form action="" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsername}
                    />{" "}
                    <br />
                    <hr />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        onChange={this.handleDescription}
                        value={this.description}
                    ></textarea>{" "}
                    <br />
                    <hr />
                    <input
                        type="checkbox"
                        name=""
                        id="course"
                        checked={this.state.selectCourse}
                        onChange={this.handleCourse}
                    />
                    <label htmlFor="course">Select course</label>
                    <br />
                    <hr />
                    <input type="radio" name="education" id="graduate" value="1" checked={this.state.education === "1"} onChange={this.handleEducation}/>
                    <label htmlFor="graduate">Graduate</label>
                    <br />
                    <input type="radio" name="education" id="under_graduate" value="2"  checked={this.state.education === "2"} onChange={this.handleEducation}/>
                    <label htmlFor="under_graduate">Under graduate</label> <br />
                    <input type="radio" name="education" id="not_educated" value="3"  checked={this.state.education === "3"} onChange={this.handleEducation}/>
                    <label htmlFor="not_educated">Not educated</label>
                    <br />
                    <hr />

                    <select name="" id="" value={this.state.gender} onChange={this.handleGender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <br />
                    <hr />
                    <input type="submit" value="Confirm" />
                </form>
            </div>
        );
    }
}
