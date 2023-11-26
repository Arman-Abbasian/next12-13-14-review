import Link from "next/link";

interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface Geo {
  lat: string;
  lng: string;
}
interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}




const getUsers=async()=>{
try {
  const res= await fetch("https://jsonplaceholder.typicode.com/users",{cache:'no-store'});
   const data=res.json()
    return data
} catch (error) {
  console.log(error)
}
}

async function Users() {
  const users:IUser[]=await getUsers()

  return (
    <div>
      {users.map((item:IUser)=>{
        return <div key={item.id} className="p-1 ring-1 ring-cyan-500 rounded-md flex flex-col gap-2">
          <h1>{item.name}</h1>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.company.name}</p>
          <Link href={`/users/${item.id}`}>user detail</Link>
        </div>
      })}
    </div>
  )
}

export default Users