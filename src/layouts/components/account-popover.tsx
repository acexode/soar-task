import type { IconButtonProps } from '@mui/material/IconButton';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';


export type AccountPopoverProps = IconButtonProps & {
  data?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    info?: React.ReactNode;
  }[];
};

export function AccountPopover({ data = [], sx, ...other }: AccountPopoverProps) {
  const user =  {
    displayName: 'Abubakar',
    photoURL: '/assets/images/avatar/profile.png',
  }
  return (
    <IconButton
      sx={{
        p: '2px',
        width: 40,
        height: 40,
        background: (theme) =>
          `conic-gradient(${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}, ${theme.vars.palette.primary.light})`,
        ...sx,
      }}
      {...other}
    >
      <Avatar src={user.photoURL} alt={user.displayName} sx={{ width: 1, height: 1 }}>
        {user.displayName.charAt(0).toUpperCase()}
      </Avatar>
    </IconButton>
  );
}
