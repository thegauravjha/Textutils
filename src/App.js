import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
    return (
        <>
            <Navbar title="Text Modifier" />
            <TextForm heading="Enter the text to Analize" />
        </>
    );
}

export default App;
