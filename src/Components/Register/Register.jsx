import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser } = useContext(AuthContext);

    const handelRegister = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const picture = form.get('picture');
        const password = form.get('password');
        console.log(name,email,picture,password);
        console.log({name,email,picture,password});

        // create user 
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            Swal.fire("SweetAlert2 is working!");
        })
        .catch(error =>{
            console.error(error);
        })

    };


    return (
        <div>
            <form onSubmit={handelRegister} className="card-body bg-slate-100 md:w-3/4 lg:w-2/4 mx-auto md:my-6 rounded-md shadow-lg ">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Picture</span>
                </label>
                <input type="text" name="picture" placeholder="Picture" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
                <small className="raleway-400">Already have <Link to='/login' className="raleway-600 text-blue-500">Account</Link> </small>
            </form>
        </div>
    );
};

export default Register;