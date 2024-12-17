import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="90%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('home'),
  },
  {
    title: 'Transaction',
    path: '/transaction',
    icon: icon('transfer'),
  },
  {
    title: 'Accounts',
    path: '/accounts',
    icon: icon('user'),
  },
  {
    title: 'Investments',
    path: '/investment',
    icon: icon('investment'),
  },
  {
    title: 'Credit Cards',
    path: '/credit-cards',
    icon: icon('credit-card'),
  },
  {
    title: 'Loans',
    path: '/loans',
    icon: icon('loan'),
  },
  {
    title: 'Services',
    path: '/services',
    icon: icon('service'),
  },
  {
    title: 'My Priviledges',
    path: '/my-priviledges',
    icon: icon('priviledges'),
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: icon('settings'),
  },
];
