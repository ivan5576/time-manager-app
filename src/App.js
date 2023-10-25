import './App.css';
import { useState } from 'react';
import { Input } from '@mui/material';

const ListTitles = (props) => {
  const handleDeleteActivity = (index) => {
    const newListActivities = [...props.activities.slice(0, index), ...props.activities.slice(index + 1)];
    props.setActivities(newListActivities);
    localStorage.setItem('activityTitles', JSON.stringify(newListActivities));
  };

  return (
    <ul>
      {props.activities.map((title, index) => (
        <li key={index}>
          {title}
          <button onClick={() => handleDeleteActivity(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const InputForm = () => {
  const savedTitles = JSON.parse(localStorage.getItem('activityTitles')) || [];
  const [activities, setActivities] = useState(savedTitles);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObj = new FormData(e.target);
    const newActivity = Object.fromEntries(formDataObj.entries());
    const newListActivities = [...activities, newActivity.title];
    setActivities(newListActivities);
    localStorage.setItem('activityTitles', JSON.stringify(newListActivities));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Type activity: <Input name="title" placeholder="Ex: running" />
        </label>
        <button type='submit'>Ok</button>
      </form>
      <ListTitles activities={activities} setActivities={setActivities}  />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <InputForm />
    </div>
  );
}

export default App;