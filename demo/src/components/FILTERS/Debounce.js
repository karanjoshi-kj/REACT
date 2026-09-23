import { useEffect, useState } from "react";

const debounce = (value , delay = 300) => {
    const [debouncevalue , setdebouncevalue] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setdebouncevalue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    },[value , delay])
    return debouncevalue ;
}