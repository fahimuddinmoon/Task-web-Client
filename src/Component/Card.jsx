import Swal from "sweetalert2";
import UseAxios from "./UseAxios";


const Card = ({ data, refetch }) => {
    const { category, description, email, time, title, _id } = data
    const axiosSecure = UseAxios()
    const handleProgress =async (id) => {
        try {
           await axiosSecure.patch(`/category/update/${id}`)
           Swal.fire({
            title: 'Task In-progress successfully!',
            icon: "success",
            draggable: true
        });
        } catch {

        } finally {
            refetch()
        }
    }
    const handleDone =async (id) => {
        try {
            await axiosSecure.patch(`/allcomplete/category/update/${id}`)
            Swal.fire({
                title: 'Task Done successfully!',
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
            <p title={description} className="text-sm font-bold text-gray-700"> Description : - {description.slice(0, 100)} .....</p>
            <div className="flex justify-evenly items-center my-2">
                {
                    category === 'To-Do' &&
                    <button onClick={() => handleProgress(_id)} className="btn bg-blue-500 text-white text-sm font-extrabold rounded-2xl">In-Progress</button>
                }
                {
                    category === 'In-Progress' &&
                    <button onClick={() => handleDone(_id)} className="btn bg-blue-500 text-white text-sm font-extrabold rounded-2xl">Done</button>
                }
                {
                    category === 'Done' &&
                    <p className="text-sm font-bold text-gray-700">Complete Task</p>
                }


            </div>
        </div>
    );
};

export default Card;