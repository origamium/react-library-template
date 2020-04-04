import React from "react";
import { useHelloWorld } from "./useHelloWorld";

export const App: React.FC = () => {
    const str = useHelloWorld();
    return <div data-testid="main">{str}</div>;
};
