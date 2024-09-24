import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  generateReport() {
    console.log('Generating health report...');
    // Implement report generation logic here
  }

}
