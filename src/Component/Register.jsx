import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "./AuthProvider";
import { imageUpload } from "./imageUpload";


const Register = () => {
    const { googleLogin, createUser, profileUpdate, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        const image = e.target.image.files[0]
        const photoUrl = await imageUpload(image)
        console.log(name)
        try {
            await createUser(email, password)
            await profileUpdate({ displayName: name, photoURL: photoUrl });
            Swal.fire({
                title: "Account Created SuccessFully!",
                icon: "success",
                draggable: true
            });
            logout()
            navigate('/login')

        } catch (error) {

        }
    }
    return (

        <div className="w-10/12 mx-auto pt-16 lg:pt-24 text-black mb-7">

            <div className="card bg-base-100 w-8/12 mx-auto my-28 shrink-0 ">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <label className=" fieldset-label">User Name</label>
                        <input required type="text" placeholder="User Name" name="name" className="input w-full" />
                        <label className=" fieldset-label">Email</label>
                        <input required type="email" name="email" className="input w-full" placeholder="Email" />
                        <label className=" fieldset-label">Password</label>
                        <input required type="password" name="password" className="input w-full" placeholder="Password" />
                        <label className=" fieldset-label">Image</label>
                        <input required type="file" placeholder="Photo" name="image" accept="image/*" />

                        <button  className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                </form>
                <div className="items-center">
                    <button onClick={googleLogin} className="justify-center items-center flex gap-3 mx-auto bg-slate-200 rounded-full mt-4 text-lg font-bold px-3 py-2 text-black"> Sign Up With Google <span className="text-2xl"><FcGoogle /></span></button>

                </div>
            </div>


        </div>




    );
};

export default Register;