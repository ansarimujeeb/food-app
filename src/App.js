import './App.css';
import Home from './screens/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from './screens/Login';
import Register from './screens/Register';

import {CardProvider} from './components/ContextReducer';


function App() {
    return (
        <CardProvider>
            <Router>
                <div>
                    <Routes>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/login' element={<Login />}></Route>
                        <Route exact path='/register' element={<Register />}></Route>
                    </Routes>
                </div>
            </Router>
        </CardProvider>
    );
}

export default App;
