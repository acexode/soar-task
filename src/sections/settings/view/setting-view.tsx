import { useState } from 'react';

import Box from '@mui/material/Box';
import { Tab, Card, Tabs } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomTabPanel } from '../custom-tabpanel';
import UserProfile from '../user-profile';

// ----------------------------------------------------------------------
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function SettingView() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <DashboardContent>
      <Card sx={{ mb: 5, p: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            TabIndicatorProps={{
              style: {
                backgroundColor: "#242424",
                color: '#000'
              }
            }}
            value={value}
            onChange={handleChange}
            aria-label="settings tabs"
          >
            <Tab label="Edit Profile" {...a11yProps(0)} />
            <Tab label="Preferences" {...a11yProps(1)} />
            <Tab label="Security" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <UserProfile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Card>
    </DashboardContent>
  );
}
