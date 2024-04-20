import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function NavBar() {
    const [theme, SetTheme] = useState(localStorage.getItem('theme'));

    const HandleToggle = (e) => {
        if (e.target.checked) {
            SetTheme('dracula')
        } else {
            SetTheme('winter')
        }
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    return (
        <>
            <nav className="navbar bg-base-200 w-full">
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
                            <li>
                                <Link to={'/myblogs'}>My Blogs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center lg:navbar-start">
                    <Link className="text-2xl text-orange-500 hover:cursor-pointer hover:text-orange-300" to={'/home'}>Blogs</Link>
                </div>


                <div className="hidden lg:flex lg:navbar-end gap-x-3">
                    <Link to={'/myblogs'} className="text-orange-500 hover:text-orange-300" >My Blogs</Link>
                    <Link className="text-orange-500 hover:text-orange-300" to={'/add'}>Create Blog</Link>
                    <Link to={'/profile'} className="text-orange-500 hover:text-orange-300">Profile</Link>

                </div>
                <div className='navbar-end'>
                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={HandleToggle} checked={theme === "winter" ? false : true} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </nav>
        </>
    )
}

export default NavBar