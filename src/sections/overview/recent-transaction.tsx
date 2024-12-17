
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';


// ----------------------------------------------------------------------
type Transactions = {
  title: string;
  subtitle: string;
  amount: number;
  icon: string;
};
type Props = {
  transactions: Transactions[];
};

export function RecentTransaction() {
  const transactions = [
    {
      title: 'Deposit from my Card',
      subtitle: '26 January 2021',
      amount: 850,
      icon: 'credit-card.png',
    },
    {
      title: 'Deposit from my Card',
      subtitle: '26 January 2021',
      amount: 2500,
      icon: 'paypal.png',
    },
    {
      title: 'Deposit from my Card',
      subtitle: '26 January 2021',
      amount: 5400,
      icon: 'bitcoin.png',
    },
  ];
  return (
    <Card sx={{height: '220px'}}>
      <CardContent
        sx={{
          p: 3,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {transactions.map(t => (
            <Box sx={{display: 'flex', width: '100%', gap: '10px', marginBottom: '12px'}}>
        <Box sx={{  flex: 1  }}>
          <Box component="img"  sx={{ width: '40px'}}  src={`/assets/icons/transactions/${t.icon}`} alt="" />
        </Box>
        <Box sx={{ flex: 3 }}>
          <Box sx={{ fontSize: '16px' }}>{t.title}</Box>
          <Box sx={{ fontSize: '12px', color: '#718EBF' }}>{t.subtitle}</Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'end', paddingBottom: '8px'  }}>
          <Box sx={{ fontSize: '14px', color: t.amount < 1000 ? '#FF4B4A': '#41D4A8', lineHeight: '19.36px' }}>${t.amount}</Box>
        </Box>
            </Box>
        ))}
      </CardContent>
    </Card>
  );
}
