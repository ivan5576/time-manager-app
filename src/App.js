import './App.css';
import { useState } from 'react';
import { TaskNameSelector } from './components/TaskNameSelector';
import { PlayPauseBtn } from './components/PlayPauseBtn';
import { TimerOfCurrTask } from './components/TimerOfCurrTask';
import { BottomNav } from './components/BottomNav.js';

function App() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="App">
      <div className='wrapper'>
        <TaskNameSelector />
        <PlayPauseBtn onChange={(playing) => setPlaying(playing)} />
        <TimerOfCurrTask playing={playing} />
        <BottomNav />
      </div>
    </div>
  );
};

export default App;
