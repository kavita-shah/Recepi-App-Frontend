import Signin from "./sign-in/signin"
import Signup from "../sign-up/sign-up"
import Logout from "../logout/logout";
import { BrowserRouter } from "react-router-dom";

const App =()=>{
    return (
        <div className ="App">
            <BrowserRouter>
            <Routes>
                <Route path="/"element={<Signin/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/logout" element ={<Logout/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
