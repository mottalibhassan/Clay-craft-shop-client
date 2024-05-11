import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const NavBer = () => {
    const {user,logOut} = useContext(AuthContext);
    const handelSignOut = () =>{
        logOut()
        .then()
        .catch()
    }
    console.log(user);



    const Nav = <>
        <li><NavLink to='/' className='raleway-600'>Home</NavLink> </li>
        <li ><NavLink to='/' className='raleway-600'>Villas</NavLink></li>
        <li ><NavLink to='/addProduct' className='raleway-600'>Add Products</NavLink></li>
        <li ><NavLink to='/myAddProducts' className='raleway-600'>My Add Product</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-slate-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            Nav
                        }
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-sm raleway-600 md:text-xl">Clay Craft Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {
                        Nav
                    }
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user ? <button className='btn btn-primary  raleway-500' onClick={handelSignOut}>Log Out</button> : <NavLink to='/logIn' className="btn raleway-500">Log in</NavLink>
                }
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        {
                                user ? <img alt="Tailwind CSS Navbar component" title={user.displayName} src={user.photoURL} /> : <img alt="User Photo" />
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBer;