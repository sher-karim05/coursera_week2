import './App.css';
import Box from './components/Box';
import Btn from './components/Btn';
import GuessNumber from './components/GuessNumber'
function App(props) {
  return (
    <div>
    <p>click button to see shot</p>
    <Btn/>
    <Box/>
    <GuessNumber/>
    </div>
  );
}

export default App;
