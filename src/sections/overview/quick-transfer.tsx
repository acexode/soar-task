
import { useState } from 'react';

import Card from '@mui/material/Card';
import { Tab, Box, Tabs, Paper, Typography } from '@mui/material';

import axiosInstance from 'src/utils/axios';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------


export function QuickTransfer() {
  const [value, setValue] = useState(1);
  const card = [
    { name: 'Livia Bator', role: 'CEO', img: 'ceo.png' },
    { name: 'Randy Press', role: 'Director', img: 'director.png' },
    { name: 'Workman', role: 'Designer', img: 'designer.png' },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(1);
  };

  return (
    <Card sx={{ p: 3, position: 'relative', height: '360px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
        <Paper
          elevation={2}
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            position: 'absolute',
            right: '5px',
            top: '30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Iconify icon="material-symbols-light:keyboard-arrow-right" />
        </Paper>
        {card.map((e) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{ width: '70px', height: '70px', borderRadius: '50%' }}
              src={`/assets/images/avatar/${e.img}`}
              alt=""
            />
            <Typography>{e.name}</Typography>
            <Typography sx={{ fontSize: '12px', color: '#718EBF' }}>{e.role}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '24px', marginTop: '50px' }}>
        <Box pt={1.3}>
        <Typography sx={{color: '#718EBF', fontSize: '14px', lineHeight: '24px'}}>Write Amount</Typography>
        </Box>
        <Tabs
      sx={{
        borderRadius: '24px',
        background: '#f4f6f8',
      }}
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons={false}
      aria-label="scrollable prevent tabs example"
      TabIndicatorProps={{
        style: {
          backgroundColor: "transparent",
          color: '#fff'
        }
      }}
    >
      <Tab
        label="525.50"
        sx={{
          background: value === 0 ? '#232323' : 'transparent',
          borderRadius: '24px',
          color: value === 0 ? '#fff' : '#000',
          borderBottom: 'none',
          display: {
            xs: 'none',
            md: 'flex',
          }
        }}
      />
      <Tab
        label={
          <Box sx={{display: 'flex', gap: '12px'}}>
          <Typography color="white">Send</Typography>
        <Iconify icon="fa:send" />
          </Box>
      }
        disabled
        sx={{
          borderRadius: '24px',
          background: value === 1 ? '#232323' : 'transparent',
          color: value === 1 ? '#fff' : '#000',
          pt: {
            sx: 5
          }
        }}
      />
    </Tabs>
      </Box>
    </Card>
  );
}
