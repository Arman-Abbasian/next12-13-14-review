import Link from "next/link"
import axios from 'axios';
import { IBlog } from "../page";


async function getBlogs(id){
  try {
    const {data}= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
async function Blogs({params}) {
 
const id=params.blog;
const blog:IBlog|undefined=await getBlogs(id)
  return (
    <div>
      <h1>Blog</h1>
        {blog && 
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
        }
    </div>
  )
}

export default Blogs


export async function generateStaticParams() {
  try {
    const {data}= await axios.get("https://jsonplaceholder.typicode.com/posts")
   return data.map((item:IBlog)=>{
       {id:String(item.id)}
    })
  } catch (error) {
    console.log(error)
  }
} 