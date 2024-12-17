import type { BoxProps } from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';

export function SettingPopOver({ sx, ...other }: BoxProps) {
  return (
    <div>
      <IconButton color='primary'>
        <Iconify color="primary" icon="tabler:settings" />
      </IconButton>
    </div>
  );
}
