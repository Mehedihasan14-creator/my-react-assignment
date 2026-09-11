import Logo from "../assets/logo-text.png";
const Navbar=()=>{
    return (
        <div className="border-b border-gray-300"> 
         <nav className="flex justify-between gap-4 container mx-auto py-4">
            <img src={Logo} className="w-[120px] h-[30px]" alt="" />
            <ul className="flex gap-4 items-center">
                <li><a href="/">Home </a></li>
                <li><a href="/">Technogies </a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div>
                <button>Sign In</button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-black">Sign Up</button>
            </div>
           </nav>
         </div>   

    );
}
export default Navbar 