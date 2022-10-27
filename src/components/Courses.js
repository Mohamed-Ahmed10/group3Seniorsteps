const Courses = ({courseName, courseDesc}) => {



    var logOutput = () => {
        console.log("OK");
    };
    var centerName = "Senior steps";
    return (
        <>
            <h1>{courseName}</h1>
            <p>{courseDesc}</p>
            <div>{centerName}</div>
            <button onClick={logOutput}>Click</button>
            <hr />
        </>
    );
};

export default Courses;
