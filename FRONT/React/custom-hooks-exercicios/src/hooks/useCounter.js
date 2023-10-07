import { useEffect, useState } from "react";

export const useCounter = (initialState = 0, min = 0, max = 20) => {
    const [value, setValue] = useState(initialState);

    const increment = (step) => {

        setValue((value) => {
            const attValue = value + step
            return attValue > max ? max : attValue
        })
    }

    const decrement = (step) => {
        setValue((value) => {
            const attValue = value - step
            return attValue < min ? min : attValue
        })
    }

    const reset = () => {
        setValue(0)
    }

    const set = (newValue) => {
        setValue(() => {
            if (newValue < min) {
                return min;
            } else if (newValue > max) {
                return max;
            } else {
                return newValue;
            }
        })
    }


    return { value, increment, decrement, reset, set }
}