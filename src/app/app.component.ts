import { Component } from '@angular/core';
import { Appservice } from './app-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  occupations = [
    { name: 'Cleaner', rating: 'Light Manual' },
    { name: 'Doctor', rating: 'Professional' },
    { name: 'Author', rating: 'White Collar' },
    { name: 'Farmer', rating: 'Heavy Manual' },
    { name: 'Mechanic', rating: 'Heavy Manual' },
    { name: 'Florist', rating: 'Light Manual' },
    { name: 'Other', rating: 'Heavy Manual' }
  ];
  premium: number | null = null;

  formData = {
    name: "",
    age: 0,
    dateOfBirth: "",
    occupation: "",
    deathSumInsured: 0
  };
  constructor(private appService: Appservice) {}
}
