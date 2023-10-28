import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ChecklistIcon from '@mui/icons-material/Checklist';
import BarChartIcon from '@mui/icons-material/BarChart';
import TuneIcon from '@mui/icons-material/Tune';

export const BottomNav = () => {
  return (
    <BottomNavigation
    // showLabels
    // value={value}
    // onChange={(event, newValue) => {
    //   setValue(newValue);
    // }}
    >
      <HomeIcon />
      <ChecklistIcon />
      <BarChartIcon />
      <TuneIcon />
    </BottomNavigation>
  )
}
