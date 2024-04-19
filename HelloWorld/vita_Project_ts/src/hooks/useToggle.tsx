
/**
 * useToggle is a custom React hook that allows a component to toggle a value between true and false. 
 * It uses the useState hook to manage its state. First, the hook accepts a defaultValue argument 
 * to initialize the value state.  It sets the value to the parameter If the parameter is boolean. Otherwise, 
 * it toggles the current value.
 */
import { useState } from "react"

/**
 * useToggle, can be used to toggle true/false value
 * @param defaultValue set te default value
 * @returns  it returns an array with two elements: the current value 
 * and a function called toggleValue that toggles the value between true and false. The function 
 * accepts one parameter.
 */
export const useToggle = (defaultValue: boolean = false) => {
    const [value, setValue] = useState(defaultValue)
  
    const toggleValue = (value: any) => {
      setValue(currentValue => typeof value === "boolean" ? value : !currentValue)
    }
    return [value, toggleValue] as const
}