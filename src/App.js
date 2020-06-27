import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import ExerciseList from "./components/ExerciseList"
import EditExercise from "./components/EditExercise"
import CreateExercise from "./components/CreateExercise"
import CreateUser from "./components/CreateUser"
import ErrorPage from "./components/ErrorPage"

// Navbar
import Navbar from "./components/Navbar/index"

function App() {
  return (
    <Router>
        <Navbar/>
          <div className="container">
            <Switch>
              <Route path="/" exact component={ExerciseList}/>
              <Route path="/edit-exercise/:id" component={EditExercise}/>
              <Route path="/create-exercise" component={CreateExercise}/>
              <Route path="/create-user" component={CreateUser}/>
              <Route component={ErrorPage}/>
            </Switch>
          </div>
    </Router>
  );
}

export default App;
