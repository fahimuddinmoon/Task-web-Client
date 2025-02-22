import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Navber = () => {
    const { user, logout } = useContext(AuthContext)
   
    return (
        <div className="navbar bg-gray-400 text-black fixed pb-2  z-50 px-10">
            <div className="navbar-start p-0 m-0">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 m-0 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] pt3 w-72 p-2 shadow">
                        <NavLink to='/' className='text-sm font-bold text-black '>Home</NavLink>
                        
                        <NavLink to='/addTask' className='text-sm font-bold text-black '>Add Task</NavLink>
                        <NavLink to="/myAddTask" className='text-sm font-bold text-black '>My Add Task</NavLink>
            
                    </ul>
                </div>
                <Link to='/' className="  text-xl  sm:text-4xl sm:font-extrabold">Task Track Web</Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1 pt3">
                    <NavLink to='/' className='text-sm font-bold mx-2 py-2 px-3 '>Home</NavLink>
                   
                    <NavLink to='/addTask' className='text-sm font-bold  mx-2 py-2 px-3'>Add Task</NavLink>
                    <NavLink to="/myAddTask" className='text-sm font-bold  mx-2 py-2 px-3'>My Add Task</NavLink>
                   
                </ul>
            </div>
            <div className="navbar-end pt3">
               
                {
                    user ?
                        <span className='flex justify-center items-center'>
                            <div className="dropdown dropdown-end justify-center items-center">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 hidden sm:block rounded-full mr-1">
                                        <img

                                            referrerPolicy='noreferrer'
                                            title={user?.displayName}
                                            alt=""
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] pt3 w-52 p-2 shadow">
                                    <li>
                                        {user?.displayName}
                                    </li>
                                </ul>
                            </div>
                            <Link onClick={logout} className="btn  text-sm font-bold text-gray-600">log Out</Link>
                        </span>
                        :
                        <Link to='/login' className="btn  text-sm font-bold text-gray-600">login</Link>
                }




            </div>
        </div>
    );
};

export default Navber;