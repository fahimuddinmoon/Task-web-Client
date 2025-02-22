import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import CardDetail from "./CardDetail";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const MyAddTask = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const { data: information = [], isLoading, refetch } = useQuery({
        queryKey: ['information', user],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/taskAdded/${user?.email}`)
            return data
        }
    })
    return (
        <div className={information.length < 6 ? 'h-screen pt-16 px-8':'pt-16 px-8'}>
            <h3 className="text-2xl font-bold text-center my-6">My Add Task </h3>
            <div className="lg:grid lg:grid-cols-3">
                {
                    information.map(data => <CardDetail key={data._id} data={data} refetch={refetch}></CardDetail>)
                }
            </div>
        </div>
    );
};

export default MyAddTask;