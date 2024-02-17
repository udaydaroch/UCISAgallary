import React from 'react'
import "../Styles/Main.css"
import Events from '../Pages/Events';
import Execs from '../Pages/Execs';
import Home from '../Pages/Home';
import UCISA from '../Pages/UCISA';
function Main({ currentPage }) {
  let content;
  switch (currentPage) {
    case "Home":
      content = <Home/>;
      break;
    case "UCISA":
      content = <UCISA/>;
      break;
    case "Execs":
      content = <Execs/>;
      break;
    case "Events":
      content = <Events/>;
      break;
    default:
      content = <Home/>;
  }

  return <main>{content}</main>;
}

export default Main;
