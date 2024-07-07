import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Signup from "./Signup";
import Video from "./Video";
import Booking from "./Booking";

const MyRouter = () => {

  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element= {<App />} />
                <Route path="/Video" element= {<Video />} />
                <Route path="/Login" element= {<Login />} />
                <Route path="/Signup" element= {<Signup />} />
                <Route path="/Booking" element= {<Booking />} />
            </Routes>
        </div>
    </Router>
  );
};

export default MyRouter;