
import Card from "./Card";
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";


const Category = () => {
   
    const axiosSecure = UseAxios()
    const { data: info = [], isLoading,refetch } = useQuery({
        queryKey: ['info'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/taskAdded`)
            return data
        }
    })
    return (
        <div className="my-8">
            <h3 className="text-2xl font-bold text-center">All Category</h3>

            <div className="lg:grid lg:grid-cols-3 my-7 gap-5">
                <div className="p-4 border-2 mt-4 border-gray-500">
                    <h3 className="text-xl font-bold text-center  ">To - Do</h3>
                     {
                      info.filter(infos => infos.category === 'To-Do').map(data=> <Card key={data._id} data={data} refetch={refetch}></Card> )
                     }
                </div>
                <div className="p-4 border-2 mt-4 border-gray-500">
                    <h3 className="text-xl font-bold text-center  ">In Progress</h3>
                    {
                      info.filter(infos => infos.category === 'In-Progress').map(data=> <Card key={data._id} data={data} refetch={refetch}></Card> )
                     }
                </div>
                <div className="p-4 border-2 mt-4 border-gray-500">
                    <h3 className="text-xl font-bold text-center  ">Done</h3>
                    {
                      info.filter(infos => infos.category === 'Done').map(data=> <Card key={data._id} data={data} refetch={refetch}></Card> )
                     }
                </div>
            </div>

        </div>
    );
};

export default Category;
