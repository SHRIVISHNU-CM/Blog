import { Link } from "react-router-dom"

function NavBar(){
    return (
        <>
            <nav className="navbar bg-base-200">
                <div className="navbar-start md:block lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost btn-circle " role="button">
                            <p>View</p>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[3] p-3 shadow bg-base-100 rounded-box w-60">
                            <li>
                                <Link to={'/add'}>Create</Link>
                            </li>
                            <li>
                                <Link to={'/profile'}>Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center lg:navbar-start">
                    <h1 className="text-2xl">Blog</h1>
                </div>
                <div className= "hidden md:hidden lg:navbar-end lg:block lg:gap-2  ">
                    <Link className="btn btn-primary " to={'/add'}>Create</Link>
                    <Link className="btn btn-accent" to={'/profile'}>Profile</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar