import { IUser } from "../page"

const getUser=async(id)=>{
    try {
      const res= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{cache:'no-store'});
       const data=res.json()
        return data
    } catch (error) {
      console.log(error)
    }
    }

async function Users({params}) {
   const id:string=params.user;
    const user:IUser=await getUser(params.user)
  
    return (
      <div>
          <div key={user.id} className="p-1 ring-1 ring-cyan-500 rounded-md flex flex-col gap-2">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
          </div>
      </div>
    )
  }
  
  export default Users