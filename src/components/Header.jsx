import Chef from "../assets/ChefClaude.svg";

function Header(){
    return(
        <nav className="flex justify-center items-center gap-5 p-5 shaddow-bottom-2 shadow-sm shadow-gray-400 bg-white">
            <img src={Chef} alt="" />
            <h1>Chef Claude</h1>
        </nav>
    )
}
export default Header;