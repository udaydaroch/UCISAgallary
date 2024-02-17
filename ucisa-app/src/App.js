// App.js
import React,{useState} from "react";
import Navbar from "./BasicPageStructure/Navbar";
import Footer from "./BasicPageStructure/Footer";
import Main from "./BasicPageStructure/Main";
import "./App.css";

function App() {

  const [currentPage,setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  return (
    <div>
      <Navbar onPageChange={handlePageChange} />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
