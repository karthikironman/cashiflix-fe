import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Sell from "./components/sell/Sell"
import Sellpart2 from "./components/sell/Sellpart2"
import Sellpart3 from "./components/sell/Sellpart3"
import Sellpart4 from "./components/sell/sellpart4"
import Sellpart5 from "./components/sell/Sellpart5"
import Sellpart6 from "./components/sell/Sellpart6"
import Sellpart7 from "./components/sell/Sellpart7"
import Blog from "./components/blog/Blog"
import Career from "./components/career/Career"
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import Navbar from "./components/header/Navbar"
import Footer from "./components/footer/Footer"
import PageScroll from './components/pagescroll/PageScroll';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import Footer2 from "./components/footer2/Footer2"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = () => {
  return (
    <>
     <Router>
     <PageScroll />
     <Navbar />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/sell" component={Sell} />
         <Route exact path="/sellpart2" component={Sellpart2} />
         <Route exact path="/sellpart3" component={Sellpart3} />
         <Route exact path="/sellpart4" component={Sellpart4} />
         <Route exact path="/sellpart5" component={Sellpart5} />
         <Route exact path="/sellpart6" component={Sellpart6} />
         <Route exact path="/sellpart7" component={Sellpart7} />
         <Route exact path="/blog" component={Blog} />
         <Route exact path="/career" component={Career} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/signup" component={Signup} />
       </Switch>
       <Footer />
       {/* <Footer2 /> */}
     </Router>
     <ToastContainer/>
    </>
  )
}
export default App;
