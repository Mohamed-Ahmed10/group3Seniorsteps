import React, {Component, useEffect} from "react";
import {useState} from "react";
const ExampleFunction = () => {
    var [courseName, setCourseName] = useState("");

    const handleCourse = (e) => {
        setCourseName(e.target.value);
    };

    useEffect(() => {
        console.log("Function component rendered");
    }, []);

    useEffect(() => {
        if(courseName === "") return;
        console.log("Function component changed");
    }, [courseName]);

    useEffect(()=>
    {
        return ()=>
        {
            console.log("Function component removed")
        }
    }, [])
    
    return (
        <div>
            <h2>This is Function</h2>
            <input type="text" onChange={handleCourse} placeholder="course" />
            <div>Course name in Function : {courseName}</div>
        </div>
    );
};

class ExampleClass extends Component {
    state = {
        name: "React course",
    };
    handleCourse = (e) => {
        this.setState({name: e.target.value});
    };

    componentDidMount() {
        console.log("Class component rendered");
    }
    componentDidUpdate() {
        console.log("Class component changed");
    }
    componentWillUnmount() {
        console.log("Class component removed");
    }
    render() {
        return (
            <div>
                <h2>This is class</h2>
                <input type="text" onChange={this.handleCourse} />
                <div>Course name in Class :{this.state.name}</div>
            </div>
        );
    }
}

export {ExampleFunction, ExampleClass};
