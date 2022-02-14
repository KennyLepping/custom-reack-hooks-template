import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
   const callbackRef = useRef(callback) 
   const timeoutRef = useRef()

   useEffect(() => {
       // Make sure we clear timeout of current callback
       callbackRef.current = callback
   }, [callback])

   const set = useCallback(() => {
       timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
   }, [delay])

   const clear = useCallback(() => {
       timeoutRef.current && clearTimeout(timeoutRef.current)
   }, [])

   useEffect(() => {
       set()
       return clear
   }, [delay, set, clear])

   const reset = useCallback(() => {
       clear()
       set()
   }, [clear, set])

  return { reset, clear };
}
