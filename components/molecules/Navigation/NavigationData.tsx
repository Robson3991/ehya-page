import { NavigationT } from 'types.d';

const data: NavigationT = [
  {
    url: '#',
    name: 'Home',
    haveChildren: false,
  },
  {
    url: '#',
    name: 'Landings',
    haveChildren: true,
    navChildren: [
      {
        url: '#',
        name: 'Lorem ipsum',
      },
      {
        url: '#',
        name: 'Dolor sit',
      },
    ],
  },
  {
    url: '#',
    name: 'Pages',
    haveChildren: true,
    navChildren: [
      {
        url: '#',
        name: 'Lorem ipsum',
      },
      {
        url: '#',
        name: 'Dolor sit',
      },
    ],
  },
  {
    url: '#',
    name: 'Docs',
    haveChildren: false,
  },
  {
    url: '#',
    name: 'Help',
    haveChildren: false,
  },
];

export default data;
