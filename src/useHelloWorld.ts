import { useEffect, useState } from "react";

export const useHelloWorld = () => {
    const [str, setStr] = useState("work in progress...");
    useEffect(() => {
        const id = setTimeout(() => {
            setStr("hello world!");
        }, 4000);

        return () => {
            clearTimeout(id);
        };
    }, []);

    return str;
};
