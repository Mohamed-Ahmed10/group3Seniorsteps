function Navbar()
{
    var items = ["home","about","contact"];
    return(
        <ul>
            {
                items.map((item , index) =>
                    <li key={index}>{item.toUpperCase()}</li>
                )
            }
        </ul>
    )
}

export default Navbar