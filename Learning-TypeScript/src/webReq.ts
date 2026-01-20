import axios from "axios"
import type { AxiosResponse } from "axios";



interface Todo {
    userId : number;
    id: number;
    title:string;
    completed:boolean
}



const fetchData = async () => {
    try {
        const response : AxiosResponse<Todo> = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
    } catch (error) {
        
    }
}
// try {
//     axios.get('http://example.com/data')
// .then(response=>{
//     console.log(response.data);
// })
// } catch (error) {
//     console.log("error: not able to fetch data",error)
// }



// defining API
// {
//   "success": true,
//   "data": {
//     "id": 1,
//     "name": "Shlok",
//     "email": "test@gmail.com"
//   },
//   "message": "User fetched"
// }



// declaring interfaces.
interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

// Using Types with Axios

async function getUser(): Promise<ApiResponse<User>> {
  const response = await axios.get<ApiResponse<User>>("/api/user");
  return response.data;
}


//accessing data safely

const userResponse = await getUser();

console.log(userResponse.data.name); // fully typed

