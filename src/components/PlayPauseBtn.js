import { useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export const PlayPauseBtn = (props) => {
  const { onChange } = props;
  const [playing, setPlaying] = useState(false);
  const IconPlayPause = playing ? PauseCircleIcon : PlayCircleIcon;
  const handleIconClicks = (e) => {
    setPlaying(!playing);
    onChange(!playing);
  };

  return (
    <IconPlayPause color="success" fontSize="large" onClick={(e) => handleIconClicks(e)} />
  )
};
