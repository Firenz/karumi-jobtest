import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  login: string;
  logged: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  logged: '/logged',
};