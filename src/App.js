import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App max-w-[1920px] mx-auto">
      <Navbar></Navbar>
      <Login></Login>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
