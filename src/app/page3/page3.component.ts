import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']  
})
export class Page3Component {
  
  constructor(private router: Router) {}

  navigateToFitnessTracker() {
    this.router.navigate(['/fitness-tracker']);
  }

  navigateToBMICalculator() {
    this.router.navigate(['/bmi-calculator']);
  }

  navigateToDietTracker() {
    this.router.navigate(['/diet-tracker']);
  }

  navigateToMentalHealthTracker() {
    this.router.navigate(['/mental-health-tracker']);
  }

  generateReport() {
    console.log('Generating health report...');
  }


 
}
