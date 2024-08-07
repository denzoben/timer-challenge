import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge difficulty="Easy" targetTime="1"/>
        <TimerChallenge difficulty="Medium" targetTime="5"/>
        <TimerChallenge difficulty="Hard" targetTime="15"/>
        <TimerChallenge difficulty="Impossible" targetTime="25"/>
      </div>
    </>
  );
}

export default App;
