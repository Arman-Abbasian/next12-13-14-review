'use client'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface ICar {
  _id: string;
  brand: string;
  model: string;
  property: string;
  image: string;
}

async function getCars() {
try {
  const {data}= await axios.get("http://localhost:3000/api/cars")
  return data
} catch (error) {
  console.log(error)
}
}

 function Cars() {
  const { data,isLoading,isError } = useQuery({
    queryKey: ["cars"],
    queryFn:()=> getCars(),
  })
  
  if(isLoading) return <p>loading ...</p>
  if(isError) return <p>some error ocurred ...</p>
    return (
        <div>{(data as ICar[]).map((item:ICar)=>{
          return <div key={item._id} className="w-60 h-60 bg-red-300">
            <div className="h-30">
              <img src={item.image} alt={item.model} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2>{item.brand}</h2>
              <p>{item.model}</p>
              <p>{item.property}</p>
            </div>
          </div>
        })}</div>
    )
  }
  
  export default Cars