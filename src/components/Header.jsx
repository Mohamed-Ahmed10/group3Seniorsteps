const Header = () => {
    var counter = 0 ;

    function showName()
    {
        counter++;
        console.log(counter);
    }
    return (
        <>
            <div className="header" style={{backgroundColor : "#00F"}}>This is header</div>
            <div>outer</div>
            {counter}
            <button onClick={showName}>showName</button>
        </>
    );
};

export default Header;
