import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge difficulty="Easy" targetTimer="1"/>
        <TimerChallenge difficulty="Medium" targetTimer="5"/>
        <TimerChallenge difficulty="Hard" targetTimer="15"/>
        <TimerChallenge difficulty="Impossible" targetTimer="25"/>
      </div>
    </>
  );
}

export default App;
