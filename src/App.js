import { useState } from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    // <Router>
    //   <Routes>
    //     <Route element={<Navbar alert={alert} showAlert={showAlert} />}>
    //       <Route
    //         exact
    //         path="/"
    //         element={
    //           <>
    //             {" "}
    //             <Textarea showAlert={showAlert} />{" "}
    //           </>
    //         }
    //       />
    //       <Route exact path="/about" element={<About />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <>
      <Navbar alert={alert} showAlert={showAlert} />
      <Textarea showAlert={showAlert} />
    </>
  );
}
