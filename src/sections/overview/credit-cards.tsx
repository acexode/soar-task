import type { CardProps } from '@mui/material/Card';
import type { ColorType } from 'src/theme/core/palette';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Typography, CardActions, CardContent } from '@mui/material';
import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type Props = CardProps & {
  total: number;
  cardHolder: string;
  cardNumber: string;
  validTill: string;
  color?: ColorType;
  icon: React.ReactNode;
};

export function CreditCards({
  icon,
  total,
  cardHolder,
  cardNumber,
  validTill,
  color = 'primary',
  sx,
  ...other
}: Props) {
 

  const renderTrending = (
    <Box
      sx={{
        top: 16,
        gap: 0.5,
        right: 16,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
      }}
    >
      {icon}
        
      
    </Box>
  );

  return (
    <Card
      sx={{
        height: '220px',
        position: 'relative',
        color: color === 'secondary' ?  '#fff' : '',
         background: color === 'secondary' ? 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)' : '#fff',
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ width: 63, height: 48, mb: 3, display: 'flex', flexDirection: 'column', p: 3, }}>
        <Typography>Balance</Typography>
        <Typography>{fCurrency(total)}</Typography>
      </Box>

      {renderTrending}

      <CardContent
        sx={{
          p: 3,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          borderBottom: color === 'secondary' ? 'none' : '1px solid #DFEAF2'
        }}
      >
        <Box sx={{ flexGrow: 1, minWidth: 112 }}>
          <Box sx={{  fontSize: '12px' }}>Card Holder</Box>
          <Box sx={{ fontSize: '15px' }}>Eddy Cusuma</Box>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: 112 }}>
          <Box sx={{fontSize: '12px' }}>Valid Till</Box>
          <Box sx={{ fontSize: '15px' }}>12/22</Box>
        </Box>

      
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between', px:3, background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);'}}>
        <Typography>3778 **** **** 1234</Typography>
        <img src="/assets/icons/master-card.svg" alt='master card icon'  />
      </CardActions>

      
    </Card>
  );
}
