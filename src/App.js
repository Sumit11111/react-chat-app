import "./App.css";
import { BrowserRouter, Routes, Route }
	from "react-router-dom";
import SignIn from "./Screens/Signin.js";
import SignUp from "./Screens/Signup";
import ChatHome from "./Screens/ChatHome";

function App() {
return (
	<div className="App">
	<BrowserRouter>
		<Routes>
		<Route exact path="/"
			element={<SignUp />} />
		<Route path="/Signin"
			element={<SignIn />} />
		<Route path="/chat-home/:receiverId"
			element={<ChatHome />} />
		</Routes>
	</BrowserRouter>
	</div>
);
}

export default App;
