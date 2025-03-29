import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: '#1f2937',
  '&:hover': {
    backgroundColor: '#374151',
  },
  marginLeft: 0,
  width: '50%'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#ffffff',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '12px',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: '20px'
  },
}));

export default function AppBar() {
  return (
    <Toolbar sx={{ justifyContent: 'space-between'}}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for songs, artists, ..."
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>

      <Stack direction="row" spacing={1}>
        <Button 
          variant="text" 
          sx={{
            padding: '12px', 
            color: 'white', 
            fontSize: '14px', 
            fontWeight: '600'
          }}
        >
          Đăng ký
        </Button>
        <Button   
          variant="contained"
          sx={{
            padding: '12px', 
            color: 'white', 
            fontSize: '14px', 
            fontWeight: '600',
            borderRadius: '20px'
          }}
        >
          Đăng nhập
        </Button>
      </Stack>
    </Toolbar>
  );
}