import Chef from "../assets/ChefClaude.svg";

function Header(){
    return(
        <nav className="flex justify-center items-center gap-5 p-5 shaddow-bottom-2 shadow-sm shadow-gray-400">
            <a hreg="#"><img src={Chef} alt="" />
            <h1>Chef Claude</h1></a>
        </nav>
    )
}
export default Header;