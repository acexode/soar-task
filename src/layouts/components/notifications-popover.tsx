import type { IconButtonProps } from '@mui/material/IconButton';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';

type NotificationItemProps = {
  id: string;
  type: string;
  title: string;
  isUnRead: boolean;
  description: string;
  avatarUrl: string | null;
  postedAt: string | number | null;
};

export type NotificationsPopoverProps = IconButtonProps & {
  data?: NotificationItemProps[];
};

export function NotificationsPopover({ data = [], sx, ...other }: NotificationsPopoverProps) {
  return (
    <IconButton color="primary" sx={sx} {...other}>
      <Badge badgeContent={0} >
        <Iconify width={24} icon="solar:bell-bing-bold-duotone" />
      </Badge>
    </IconButton>
  );
}
