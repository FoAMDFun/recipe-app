import logo from './logo.svg';
import './App.css';

const App = () => {
    const APP_ID = "36e99d23";
    const APP_KEY = "ffc284a6d29c44e2ccb0d7fceff62722";

    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar"type="text"/>
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default App;
