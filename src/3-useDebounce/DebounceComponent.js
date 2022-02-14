import { useState } from "react"
import useDebounce from "./useDebounce"

export default function DebounceComponent() {
  const [count, setCount] = useState(10)

  // Only runs when the use is done activating the element (incrementing count)
  // Change alert to whatever like an API call
  useDebounce(() => alert(count), 1000, [count])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}