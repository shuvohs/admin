import React from 'react'
import { Box, IconButton, useTheme} from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from "@mui/icons-material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';


const Topbar = () => {
  const theme = useTheme ();
  const colors = tokens (theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return <Box display='flex' justifyContent='space-between' p={2}>
    {/* Search bar */}
    <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'></Box>
    <IconButton></IconButton>
  </Box>
}

export default Topbar