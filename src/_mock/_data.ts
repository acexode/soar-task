import { faker } from '@faker-js/faker';

interface SampleData {
  title: string;
  subtitle: string;
  amount: number;
  icon: string;
}



interface CardData {
  cardHolder: string;
  validTill: Date;
  balance: number; // USD currency
  color: 'primary' | 'secondary';
  icon: string;
}

// Function to generate a random data object based on the sample structure
export function generateRandomCardData(): CardData {
  return {
    cardHolder: faker.person.fullName(), // Generates a realistic full name
    validTill: faker.date.future({ years: 3 }), // Valid till up to 3 years in the future
    balance: faker.number.float({ min: 800, max: 10000, fractionDigits: 2 }), // USD balance with 2 decimals, // USD balance with 2 decimals
    color: faker.helpers.arrayElement(['primary', 'secondary']), // Randomly 'primary' or 'secondary'
    icon: faker.helpers.arrayElement([
      'white_chip.svg',
      'dark_chip.svg',
    ])
  };
}


// Function to generate a random data object based on the sample structure
export function recentTransactionData(): SampleData {
  return {
    title: faker.helpers.arrayElement([
      'Deposit from my Card',
      'Withdrawal to Bank',
      'Payment Received',
      'Refund Processed',
    ]),
    subtitle: faker.date
      .past()
      .toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
    amount: faker.number.int({ min: 10, max: 1000 }), // Updated method
    icon: faker.helpers.arrayElement([
      'credit-card.png',
      'paypal.png',
      'bitcoin.png',
      'paypal.png',
    ]),
  };
}
