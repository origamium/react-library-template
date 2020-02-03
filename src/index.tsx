import React, { useEffect, useState } from "react";

const useHelloWorld = () => {
    const [str, setStr] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setStr("hello world!");
        });
    });

    return str;
};

const App: React.FC = () => {
    const str = useHelloWorld();
    return <div>{str}</div>;
};

export default App;
