'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react";

function DateIndex() {
  const router=useRouter();
    router.push("/blogs/2/date/5")
  return (
    <div>DateIndex</div>
  )
}

export default DateIndex