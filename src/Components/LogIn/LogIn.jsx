import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";



const LogIn = () => {
    const {signIn ,setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword , setShowPassword] = useState(false);

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const password = form.get('password');
        const email = form.get('email');
        // console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            navigate('/');
            e.target.reset();
            toast.success('Successfully created!');
        })
        .catch(error => {
            console.error(error);
            toast.error(error.message);
        });
    };

    const provider = new GoogleAuthProvider();
    const providerg = new GithubAuthProvider();
    const auth = getAuth(app)

    const handelGoogleSignIn = () =>{
        signInWithPopup(auth , provider)
        .then(result =>{
            setUser(result.user);
            navigate('/');
            toast.success('Successfully created!');
        })
        .catch(error =>{
            console.error(error);
            toast.error(error.message);
        })
    }
    const handelGithubSignIn = () =>{
        signInWithPopup(auth ,providerg)
        .then( result =>{
            setUser(result.user);
            navigate('/');
            toast.success('Successfully created!');
        })
        .catch(error =>{
            console.error(error);
            toast.error(error.message);
        })
    }


    return (
        <div>
            <div className="bg-slate-100 rounded-md shadow-lg md:w-3/4 lg:w-2/4 mx-auto md:my-6">
                <form onSubmit={handleLogin} className="card-body  md:w-3/4 lg:w-3/4 mx-auto md:mt-6  ">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <div className="relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                        type={showPassword ? 'text' : 'password'}
                        name="password" 
                        placeholder="password" 
                        className="input input-bordered w-full" 
                        required />
                        <span className="absolute   bottom-4 right-5" onClick={()=> setShowPassword(!showPassword)}><FaEye /></span>
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button  className="btn btn-primary">Login</button>
                    </div>
                    <p>Dont have any account <Link to='/register' className="text-red-700">register now</Link></p>
                </form>
                <div className="flex  justify-center items-center md:mb-2">
                    <p>or</p>
                </div>
                <div className="flex flex-col justify-center items-center md:pb-6">
                    <button onClick={handelGoogleSignIn} className="btn bg-white md:w-7/12 ">{<FcGoogle className="text-3xl"/>} Google</button>
                    <button onClick={handelGithubSignIn} className="btn bg-white mt-2 md:w-7/12">{<FaGithub className="text-3xl"/>} GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;