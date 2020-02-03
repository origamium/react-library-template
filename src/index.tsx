import React, { useEffect, useState } from "react";

const useHelloWorld = () => {
    const [str, setStr] = useState("work in progress...");
    useEffect(() => {
        setTimeout(() => {
            setStr("hello world!");
        }, 4000);
    });

    return str;
};

const App: React.FC = () => {
    const str = useHelloWorld();
    return <div>{str}</div>;
};

export default App;
