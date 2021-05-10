import logo from './logo.svg';
import './App.css';

function App() {
    let message: string = "This website is a work in progress.\nHere are my socials in the meantime:"

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {message}
                </p>
                <ul id="menu">
                    <li><a href="https://github.com/echapman2022" className="fa fa-github"/></li>
                    <li><a href="https://www.instagram.com/ethanmchapman/" className="fa fa-instagram"/></li>
                    <li><a href="https://www.linkedin.com/in/ethan-chapman-9267101b0" className="fa fa-linkedin"/></li>
                    <li><a href="mailto:ethan.chapman0@outlook.com" className="fa fa-envelope"/></li>
                </ul>
            </header>
        </div>
    );
}

export default App;
