import { Routes } from '@angular/router';
import { WellnessTrackerComponent } from './wellness-tracker/wellness-tracker.component';
import { Page3Component } from './page3/page3.component';

export const routes: Routes = [

    { path: '', component: WellnessTrackerComponent },
  { path: 'dashboard', component: Page3Component },
  { path: '**', redirectTo: '' }

];
