import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import News from "./components/News";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/news" component={News} />
        <Route path="/login" component={LogIn} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
