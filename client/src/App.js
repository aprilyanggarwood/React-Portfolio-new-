import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Nav";

import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleSetToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Router>
      <Navbar isOpen={toggle} toggle={handleSetToggle} />
      <Sidebar isOpen={toggle} toggle={handleSetToggle} />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     messageData();
//   });

//   async function messageData() {
//     const res = await axios("/api");
//     setData(data);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// export default App;







// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav/Navbar";
// import About from "./components/pages/About";
// import Portfolio from "./components/pages/Portfolio";
// import Contact from "./components/pages/Contact";

// import "./App.css";
// function App() {
//   const [sidebar, setSidebar] = useState(false);
//   return (
//     <>
//       <Router>
//         <Nav sidebar={sidebar} setSidebar={setSidebar} />
//         <Switch>
//           <main className={sidebar ? "open" : ""}>
//             <Route path="/" exact component={About} />
//             <Route path="/portfolio" component={Portfolio} />
//             {/* <Route path="/contact" component={Contact} /> */}
//           </main>
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;
