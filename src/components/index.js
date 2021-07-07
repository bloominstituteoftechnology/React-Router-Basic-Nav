import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App'

ReactDom.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)

export { Home, About, Contact, Navigation };
