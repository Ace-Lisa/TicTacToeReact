import { Link, Route, Routes } from "react-router-dom";

export default function SimpleRouting(){
    return(
        <>
        <div>
            <ul>
                <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/aboutus">About Us</Link>
            </li>
            <li>
                <Link to="/contactus">Contact Us</Link>
            </li>
            </ul>
            <Routes>
                <Route path="/home"element={<HomeComponent/>}></Route>
                <Route path="/aboutus" element = {<AboutUsComponent/>}></Route>
                <Route path="/contactus" element = {<ContactUsComponent/>}></Route>
            </Routes>
        </div>
        </>
    )
}

function HomeComponent(){
    return <div>
        <h1>Home Component rendered!!</h1>
    </div>
}

function AboutUsComponent(){
    return <div>
        <h1>About Us Component rendered!!</h1>
    </div>
}

function ContactUsComponent(){
    return <div>
        <h1>Contact Us Component rendered!!</h1>
    </div>
}