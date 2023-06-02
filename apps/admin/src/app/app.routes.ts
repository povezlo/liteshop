import { Route } from '@angular/router';
import { ShellComponent } from './shared';

export const appRoutes: Route[] = [
    {
    path: '',
    component: ShellComponent,
    pathMatch: 'full',
  },
];
