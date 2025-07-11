import React, { Suspense } from "react";
import Home from "./components/Home";
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LazyUsers = React.lazy(() => import("./components/Users"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" element={<ToDoList />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/timer" element={<Timer />}></Route>
          <Route
            path="/user"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyUsers />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
