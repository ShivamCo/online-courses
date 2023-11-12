import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Courses from "./pages/courses";
import Product from "./pages/product";



function App() {
  return (
    <>
    <div className=" h-screen bg-slate-50 " >
      
   
      <Router>
      
      <Navbar />
      
        <Routes>

          {/* <Route index element={<Home />} /> */}
          <Route path="course-details/:course_name" element={<Product />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<Courses />} />

        </Routes>
      </Router>
      
    </div>
    </>
  );
}

export default App;
