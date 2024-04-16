/**
 * useTimeout is a custom React hook that allows a component to set and clear a timeout. 
 * It uses the useCallback, useEffect, and useRef hooks from the React library. 
 * The hook takes in two arguments: a callback that will be called after 
 * the specified delay, and a delay is the time in milliseconds 
 * that should pass before the callback is invoked.
 */
import { useCallback, useEffect, useRef } from "react"
/**
 * useTimeout can be used to set and clear timeout
 * @param callback client callback function which will be called after time intervel
 * @param delay intervel at which callback will be called
 * @returns The hook returns an object with two properties: reset and clear, 
 * functions that can be used to reset or clear the timeout.
 */
const useTimeout = (callback:any, delay:any) => {
    const callbackRef = useRef(callback)
    const timeoutRef = useRef()
  
    useEffect(() => {
      callbackRef.current = callback
    }, [callback])
  
    const set = useCallback(() => {
      (timeoutRef.current as any) = setTimeout(() => callbackRef.current(), delay)
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
  
    return { reset, clear } as const
}
export default useTimeout;