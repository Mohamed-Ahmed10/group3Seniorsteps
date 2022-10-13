const Course = ({title , courseData}) => {
    return (
        <div>            
            <h2>{title}</h2>
            <h3>{courseData}</h3>
            <hr />
        </div>
    );
}

export default Course;