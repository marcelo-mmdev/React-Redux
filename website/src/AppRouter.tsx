import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import HeadBar from './components/atoms/head/index.jsx'

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                {/* <Route path="/head" element={<HeadBar />} /> */}
            </Routes>
        </Router>
    )
}