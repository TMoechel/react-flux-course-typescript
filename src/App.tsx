import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";

import Header from "./common/Header";
import PageNotFound from "./components/PageNotFound";
import ManageCoursePage from "./components/ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        {/* first put more specific routes like /course/:slug above /course */}
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
