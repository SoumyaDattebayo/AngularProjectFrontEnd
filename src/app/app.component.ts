import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { WellnessTrackerComponent } from './wellness-tracker/wellness-tracker.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , Page1Component , WellnessTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'AngularProjFrontEnd';

  showLoginForm: boolean = false;

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;



  }
}
