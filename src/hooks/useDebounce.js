import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const idTimeOutCallback = setTimeout(() => setDebounceValue(value), delay)
        
        // clear setTime trước khi gọi callback kế tiếp -> ko gọi setDebounceValue của callback trước
        return () => clearTimeout(idTimeOutCallback);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    
    return debounceValue;
}

export default useDebounce;