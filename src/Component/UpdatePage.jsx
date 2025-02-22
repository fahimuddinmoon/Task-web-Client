import { useParams } from "react-router-dom";
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const UpdatePage = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
  
    const axiosSecure = UseAxios()
    const { data: allData = [], isLoading, refetch } = useQuery({
        queryKey: ['allData', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/taskAdded/single/${id}`)
            return data
        }
    })
    const { category, description, email, time, title, _id } = allData
    const handleUpdate = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const time = new Date()
        const category = e.target.category.value
        const email = user?.email
        if (title.length < 50) {
            return Swal.fire({
                title: 'Title Must Be At Least 200 Character Long!',
                icon: "error",
                draggable: true
            });
        }
        const task = { title, description, time, category, email }
      
        try {
            await axiosSecure.put(`/UpdateTask/${_id}`,task)
            Swal.fire({
                title: "Updated Successfully!",
                icon: "success",
                draggable: true
              });
        } catch {

        } finally {
            refetch()
        }

    }
    return (
        <div className="pt-16">
            <h4 className="text-2xl font-bold text-center my-6">update</h4>
            <div className="w-10/12 mx-auto text-black ">
                <div className="card bg-base-100 w-8/12 mx-auto my-28 shrink-0 ">
                    <form onSubmit={handleUpdate}>
                        <fieldset className="fieldset">
                            <label className=" fieldset-label">Title</label>
                            <input required type="text" defaultValue={title} name="title" className="input w-full"  />
                            <label className=" fieldset-label">Description</label>
                            <input required type="text" defaultValue={description} name="description" className="input w-full"  />
                            
                                
                                    <label className=" fieldset-label">Category</label>
                                    <select required type="text" name="category" className="input w-full" defaultValue={category}>
                                        <option >To-Do</option>
                                        <option >In-Progress</option>
                                        <option >Done</option>

                                    </select>
                                
                            
                            <button className="btn btn-primary mt-4">Update Task</button>
                        </fieldset>
                    </form>

                </div>


            </div>
        </div>
    );
};

export default UpdatePage;