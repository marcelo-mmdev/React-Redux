import React from "react";

import Aleatorio from "./components/aleatorio/index";
import Home from "./components/home/index";

export default function App() {
    return (
        <>
            <Home />
            <Aleatorio min={1} max={60} />
        </>
    )
}