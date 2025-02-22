import { Link } from "react-router-dom";
import UseAxios from "./UseAxios";
import Swal from "sweetalert2";


const CardDetail = ({ data, refetch }) => {
    const { category, description, email, time, title, _id } = data
    const axiosSecure = UseAxios()
    const handleDelete = async (id) => {
        try {
            await axiosSecure.delete(`/taskDelete/${id}`)
            Swal.fire({
                title: 'Deleted Successfully',
                icon: "success",
                draggable: true
            });
        } catch {

        } finally {
            refetch()
        }
    }
    return (
        <div className="m-3 border-2 border-gray-400 p-3">
            <div className="flex justify-between items-center">
                <h2 className="text-sm font-bold text-gray-700">Email : - {email}</h2>
                <p className={
                    category === 'To-Do' && 'text-sm font-bold  p-2 bg-gray-200 text-orange-600 rounded-2xl' ||
                    category === 'In-Progress' && 'text-sm font-bold  p-2 bg-gray-200 text-blue-600 rounded-2xl' ||
                    category === 'Done' && 'text-sm font-bold  p-2 bg-gray-200 text-green-600 rounded-2xl'
                }>{category}</p>
            </div>
            <p className="text-lg font-bold text-gray-700"> Title : - {title}</p>
            <p title={description} className="text-sm font-bold text-gray-700"> Description : - {description} </p>
            <div className="flex justify-between items-center mt-4 ">
                <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white text-sm font-bold rounded-2xl">Delete</button>
                {
                    category === 'Done' ?
                    <p className="text-sm font-bold text-gray-700">Complete Task</p>:
                        <button className="btn bg-blue-500 text-white text-sm font-bold rounded-2xl"><Link to={`/update/${_id}`}> Update </Link></button>
                        
                }

            </div>
        </div>
    );
};

export default CardDetail;