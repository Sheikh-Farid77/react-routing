import { Link, NavLink, Outlet } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="container mx-auto">
     <header className="flex justify-between items-center bg-gray-200 py-5">
     <div className="text-3xl font-bold">
        <Link to='/'>MY App</Link>
      </div>
      <div>
      <nav>
        <ul className="flex justify-center items-center gap-10">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/signin'>SignIn</NavLink></li>
            <li><NavLink to='/product'>Product</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
           
        </ul>
      </nav>
      </div>
     </header>
      <div className="mt-10">
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Navbar
