
import { Routes, Route } from 'react-router';
import UserList from './components/UserList';
import Home from './components/Home';
import Projects from './components/projects/Projects';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </>
    );
}

export default App;