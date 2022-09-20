import './App.css';
import Main from "./components/Main";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path='/' element={< Main/>}></Route>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Projects' element={<Projects/>}/>

                </Routes>
            </Router>
        </div>
  );
}

export default App;
