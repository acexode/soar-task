import { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import CustomDialog from '../card-dialog';
import { CreditCards } from '../credit-cards';
import { QuickTransfer } from '../quick-transfer';
import { BalanceHistory } from '../balance-history';
import { WeeklyActivity } from '../weekly-activity';
import { RecentTransaction } from '../recent-transaction';
import { ExpenseStatistics } from '../expense-statistics';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);


  return (
    <DashboardContent maxWidth="xl">
     

      <Grid container spacing={3} alignItems="stretch" mb={2}>
        <Grid xs={12} sm={6} md={4}>
        <Typography sx={{ mb: 1, fontSize: '22px', color: '#343C6A', fontWeight: 600 }}>
        My Cards
      </Typography>
          <CreditCards
            total={714000}
            cardHolder='Eddy Cusuna'
            cardNumber="3778 **** **** 1234"
            validTill="12/24"
            color="secondary"
            icon={<img alt="icon" src="/assets/icons/white_chip.svg" />}

          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
        <Typography component="a" onClick={handleOpen} sx={{ mb: 1, fontSize: '16px', color: '#343C6A', textAlign: 'right', display: 'flex', justifySelf: 'flex-end', fontWeight: 600, cursor: 'pointer' }}>
        See all
      </Typography>
          <CreditCards
            total={1352831}
            color="primary"
            cardHolder='Eddy Cusuna'
            cardNumber="3778 **** **** 1234"
            validTill="12/24"
            icon={<img width={34} height={34} alt="icon" src="/assets/icons/dark_chip.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
        <Typography sx={{ mb: 1, fontSize: '22px', color: '#343C6A', fontWeight: 600 }}>
          Recent Transaction
        </Typography>
          <RecentTransaction />
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="stretch" mb={2}>
        <Grid xs={12} md={6} lg={8}>
        <Typography sx={{ mb: 1, fontSize: '22px', color: '#343C6A', fontWeight: 600 }}>
          Weekly Activity
        </Typography>
          <WeeklyActivity
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Deposit', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Widthraw', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
        <Typography sx={{ mb: 1, fontSize: '22px', color: '#343C6A', fontWeight: 600 }}>
          Expense Statistics
        </Typography>
          <ExpenseStatistics
            chart={{
              series: [
                { label: 'Entertainment', value: 3500 },
                { label: 'Investment', value: 2000 },
                { label: 'Others', value: 4000 },
                { label: 'Bill Expense', value: 1500 },
              ],
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="stretch" mb={2}>
        <Grid xs={12} md={6} lg={4}>
      <Typography sx={{ mb: 1, fontSize: '22px', color: '#343C6A', fontWeight: 600 }}>
          Quick Transfer
        </Typography>
          <QuickTransfer
          />
        </Grid>
        <Grid xs={12} md={6} lg={8}>
        <Typography sx={{ mb: 1, fontSize: '22px', color: '#343C6A', fontWeight: 600 }}>
          Balance History
        </Typography>
          <BalanceHistory
            chart={{
              categories: ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
              series: [
                { name: '2024', data: [350, 500, 450, 800, 500, 600, 750] },
              ],
            }}
          />
        </Grid>
      </Grid>
      <CustomDialog
        open={dialogOpen}
        title="My Cards"
        onClose={handleClose}
      />
    </DashboardContent>
  );
}
