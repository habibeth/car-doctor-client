import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        createUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(err=> console.log(err))
    }
    return (
        <div className="hero min-h-screen mb-32">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-16">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 shadow-2xl border">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Sign In</button>
                        </div>
                    </form>
                    <div className="pb-12">
                        <p className='text-center mb-6'>Or Sign In with</p>
                        <div className="flex justify-center mb-10">
                            <div className="flex">
                                <button className='p-4 bg-base-200 text-blue-700 rounded-full mr-3'>
                                    <FaFacebookF />
                                </button>
                                <button className='p-4 bg-base-200 text-sky-700 rounded-full mr-3'>
                                    <FaLinkedinIn />
                                </button>
                                <button className='p-4 bg-base-200 text-pink-700 rounded-full'>
                                    <FaGoogle />
                                </button>
                            </div>
                        </div>
                        <h2 className='text-center'>Have an account? Please <Link to="/login" className='text-orange-600 font-bold'>Sign In</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;