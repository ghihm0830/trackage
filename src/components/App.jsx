import React from "react";
import {Route, Routes} from 'react-router-dom'; //routes is a warpper, route is individual path
import Landing from "./landing/Landing";

function App() {
    return <Routes>
        <Route path="/" element={<Landing />} />
    </Routes>
}

export default App;
