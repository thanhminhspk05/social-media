import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';

export const route = [
  {
    path: '#home',
    label: 'Homepage',
    icon: <HomeIcon />,
  },
  {
    path: '#page',
    label: 'Pages',
    icon: <ArticleIcon />,
  },
  {
    path: '#group',
    label: 'Groups',
    icon: <GroupIcon />,
  },
  {
    path: '#market',
    label: 'Marketplace',
    icon: <StorefrontIcon />,
  },
  {
    path: '#friend',
    label: 'Friends',
    icon: <PersonIcon />,
  },
  {
    path: '#setting',
    label: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    path: '#profile',
    label: 'Profile',
    icon: <AccountBoxIcon />,
  },
];
