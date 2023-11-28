'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { useState } from "react"

interface IProviderProps{
    children:React.ReactNode
}
function Provider({children}:IProviderProps) {
    const [queryClient]=useState(()=>new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
      {children}
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export { Provider }