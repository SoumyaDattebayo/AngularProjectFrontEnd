import { Component } from '@angular/core';

@Component({
  selector: 'app-fitnesstracker',
  standalone: true,
  imports: [],
  templateUrl: './fitnesstracker.component.html',
  styleUrl: './fitnesstracker.component.css'
})
export class FitnesstrackerComponent {
  exercises = [
    'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5',
    'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10',
    'Option 11', 'Option 12', 'Option 13', 'Option 14', 'Option 15',
    'Option 16', 'Option 17', 'Option 18', 'Option 19', 'Option 20'
  ];

  selectedExercise: string = this.exercises[0];
  repetitions: number = 0;
  caloriesBurned: string = '';

  suggestedExercises: string[] = [];
  quote: string = '';

}
