import Link from "next/link"
import axios from 'axios';

export interface IBlog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getBlogs(){
  try {
    const {data}= await axios.get("https://jsonplaceholder.typicode.com/posts")
    return data
  } catch (error) {
    console.log(error)
  }
}
async function Blogs() {
  console.log(await getBlogs())
 const blogList:IBlog[]= await getBlogs()

  return (
    <div>
      <h1>Blogs</h1>
        {
        blogList.map((item:IBlog)=>{
      return <p key={item.id}>
        <Link href={`/blogs/${String(item.id)}`}>{item.title}</Link>
        </p>
}
        )}
    </div>
  )
}

export default Blogs