import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
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
  constructor(private appService: AppServiceService) {}
  onOccupationChange() {
    this.calculate();
  }
  calculate() {
    if (!this.formData.name ||
        !this.formData.age ||
        !this.formData.occupation ||
        !this.formData.deathSumInsured) 
        {
      return;
    }
    this.appService.calculatePremium(this.formData)
      .subscribe(res => {
        this.premium = res.monthlyPremium;
      });
}
}
