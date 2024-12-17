import type { BoxProps } from '@mui/material/Box';

import { forwardRef } from 'react';

import Box from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';

export type LogoProps = BoxProps & {
  href?: string;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  (
    { width, href = '/', height,  disableLink = false, className, sx, ...other },
    ref
  ) => {
  

    const fullLogo = (
      <Box alt="logo" component="img" src="/assets/logo/Logo.svg" width="100%" height="100%" />
    );

    const baseSize = {
      width: width ?? 120,
      height: height ?? 40,
    };

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="Logo"
        sx={{
          ...baseSize,
          flexShrink: 0,
          display: 'inline-flex',
          verticalAlign: 'middle',
          ...(disableLink && { pointerEvents: 'none' }),
          ...sx,
        }}
        {...other}
      >
        {fullLogo}
      </Box>
    );
  }
);
