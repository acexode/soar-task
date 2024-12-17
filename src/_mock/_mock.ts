
import { generateRandomCardData } from './_data';
import axiosMockAdapter from './axios-mock';




axiosMockAdapter.onGet('/api/transactions/all').reply(() => {
  const cards = [
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

  return [200, { cards }];
});
axiosMockAdapter.onGet('/api/card/all').reply(() => {
  const cards = Array.from({ length: 5 }, () => generateRandomCardData());

  return [200, { cards }];
});
axiosMockAdapter.onGet('/api/expense-stats').reply(() => {
  const cards = [
    { label: 'Entertainment', value: 3500 },
    { label: 'Investment', value: 2000 },
    { label: 'Others', value: 4000 },
    { label: 'Bill Expense', value: 1500 },
  ]

  return [200, { cards }];
});
axiosMockAdapter.onGet('/api/balance-history').reply(() => {
  const data = {
    categories: ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    series: [
      { name: '2024', data: [350, 500, 450, 800, 500, 600, 750] },
    ],
  }

  return [200, { data }];
});
axiosMockAdapter.onGet('/api/quick-transfer').reply((config) => {
  console.log(config.baseURL);
  const contacts =  [
    { name: 'Livia Bator', role: 'CEO', img: 'ceo.png' },
    { name: 'Randy Press', role: 'Director', img: 'director.png' },
    { name: 'Workman', role: 'Designer', img: 'designer.png' },
  ]

  return [200, { contacts }];
});
