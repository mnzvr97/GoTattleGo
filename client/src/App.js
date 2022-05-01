import React, {Suspense} from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";

const LogIn = React.lazy(() => import("./pages/LogIn/LogIn"))
const SignUp = React.lazy(() => import("./pages/SignUp/Signup"))
const SinglePage = React.lazy(() => import("./pages/SinglePage/SinglePage"))
const Write = React.lazy(() => import("./pages/Write/Write"))
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"))


function App() {

  return (
   <Suspense>
    <Switch>

  <Route path="/" exact>
    <Redirect to="/home" />
   </Route>

   <Route path="/signin" exact>
    <LogIn />
   </Route>

   <Route path="/signup" exact>
    <SignUp />
   </Route>

   <Route path="/home" exact>
    <Home />
   </Route>

   <Route path="/aboutus" exact>
    <AboutUs />
   </Route>

   <Route path="/home/post/:postId">
   <SinglePage />
   </Route>
     
   <Route path="/Write">
   <Write />
   </Route>
  
   </Switch>
   </Suspense>
  );
}

export default App;
