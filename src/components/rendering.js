const Rendering = () => {
    const person = {
        name: "Omar",
        age: 88,
    };
    return (
        <>
            {person.age > 18 ? (
                <>
                    <Over18 />
                    <div>Your name is : {person.name}</div>
                    <div>Your age is : {person.age}</div>
                </>
            ) : (
                <>
                    <Under18 />
                    <div>You are a child</div>
                </>
            )}

            {/* {person.age > 18 && (
                <>
                    <div>Your name is : {person.name}</div>
                    <div>Your age is : {person.age}</div>
                </>
            )} */}
        </>
    );
};

const Over18 = () => {
    return <h2>You are over 18</h2>;
};
const Under18 = () => {
    return <h2>You are under 18</h2>;
};
export default Rendering;
