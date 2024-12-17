import * as React from 'react';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';


;




export function Searchbar() {
  return (
    <div>
     
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, background: '#F5F7FA', borderRadius: '24px' }}
    >
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <Iconify icon="eva:search-fill" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for something"
        inputProps={{ 'aria-label': 'search for something' }}
      />
     
      
    </Paper>
    </div>
  );
}
