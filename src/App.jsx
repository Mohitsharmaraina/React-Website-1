import Home from "./components/Home";
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
