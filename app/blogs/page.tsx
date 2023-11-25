import Link from "next/link"

function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>
        <Link href={'/blogs/1'}>blog 1</Link>
        <Link href={'/blogs/2'}>blog 2</Link>
        <Link href={'/blogs/3'} replace >blog 3</Link>
    </div>
  )
}

export default Blogs