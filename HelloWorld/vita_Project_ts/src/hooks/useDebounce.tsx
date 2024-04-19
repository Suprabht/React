/**
 * useDebounce is a custom React hook that allows a component to delay the execution 
 * of a callback function for a specified amount of time. It uses the built-in useEffect 
 * hook from the React library and the useTimeout(2nd custom hook) custom hook.
 */
import { useEffect } from "react"
import {useTimeout} from "./useTimeout"

/**
 * The hook uses the useTimeout hook to create a timeout that will invoke the callback 
 * function after the specified delay. The useEffect hook is used to set the timeout 
 * on mount and clear it on unmount. The first useEffect will call the reset function when 
 * any dependencies change, and the second useEffect call the clear function when the 
 * component unmounts.
 * @param callback  is the function that should be debounced
 * @param delay is the time in milliseconds that should pass before the callback is invoked.
 * @param dependencies is an array of values that the hook should listen to for changes and 
 * re-run the callback if any of the changes.
 */
export const useDebounce = (callback:any, delay:number, dependencies:any) => {
    const { reset, clear } = useTimeout(callback, delay)
    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}