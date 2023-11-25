import  {useSearchParams}  from "next/navigation"

function Blog() {
  const router=useSearchParams();
  console.log(router.get("blog"))
    return (
      <div>Blog</div>
    )
  }
  
  export default Blog