import { useEffect, useRef } from "react"

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
        // If first render don't run code (callback)
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}