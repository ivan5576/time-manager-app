import './App.css';
import { TaskNameSelector } from './components/TaskNameSelector';
import { PlayPauseBtn } from './components/PlayPauseBtn';
import { TimerOfCurrTask } from './components/TimerOfCurrTask';
import { BottomNav } from './components/BottomNav.js';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <TaskNameSelector />
        <PlayPauseBtn />
        <TimerOfCurrTask />
        <BottomNav />
      </div>
    </div>
  );
};

export default App;
