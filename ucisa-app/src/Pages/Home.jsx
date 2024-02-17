import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css"
function Home() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100" style={{ backgroundImage: `url('IndianFlag.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-center">
        <h1>Welcome to the official Page of</h1>
        <h1>University of Canterbury Indian Student Association</h1>
      </div>
    </div>
  );
}

export default Home;
