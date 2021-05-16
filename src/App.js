import './scss/App.scss';
import Navbar from './components/Navbar';
import Home from './views/Home';

function App() {
    return (
        <div className="App">
            <Navbar />

            <main className="Main__content">
                <Home />
            </main>
        </div>
    );
}

export default App;
