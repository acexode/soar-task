import { lazy, Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { DashboardLayout } from 'src/layouts/dashboard';


export const HomePage = lazy(() => import('src/pages/home'));
export const SettingPage = lazy(() => import('src/pages/settings'));
export const ComingSoon = lazy(() => import('src/pages/comingsoon'));

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: 'settings', element: <SettingPage /> },
      ],
    },
    {
      path: 'coming-soon',
      element: <ComingSoon />,
    },
    {
      path: '*',
      element: <Navigate to="/coming-soon" replace />,
    },
  ]);
}