import React from 'react';

import { Stack ,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { generateRandomCardData } from 'src/_mock';

import { CreditCards } from './credit-cards';

interface CustomDialogProps {
  open: boolean;
  title?: string;
  onClose: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  title,
  onClose,

}) =>
    {
        const cards = Array.from({ length: 5 }, () => generateRandomCardData());
        return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      {/* Dialog Title */}
      {title && <DialogTitle>{title}</DialogTitle>}

      {/* Dialog Content */}
      <DialogContent>
      <Stack spacing={2}>
        {cards.map((e, i) => (
            <CreditCards
                  total={e.balance}
                  color={i % 2 === 0 ? 'secondary' : 'primary'}
                  cardHolder={e.cardHolder}
                cardNumber="3778 **** **** 1234"
                validTill="12/24"
                  icon={<img alt="icon" src={`/assets/icons/${e.icon}`} />}
                 
                />

        ))}
  
</Stack>
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
       
      </DialogActions>
    </Dialog>
  )};

export default CustomDialog;
