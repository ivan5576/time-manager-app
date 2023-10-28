import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const TaskNameSelector = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={activities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={activities[0].label} />}
    />
  );
}

const activities = [
  { label: 'Work', id: 1 },
  { label: 'Running', id: 2 },
  { label: 'Learn', id: 3 },
  { label: 'Household', id: 4 },
  { label: 'Rest', id: 5 },
];
