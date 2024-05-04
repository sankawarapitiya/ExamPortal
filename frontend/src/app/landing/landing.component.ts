import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  userId : any;
  constructor(private apiService: ApiService) {}
  getUserId() {
    this.apiService.getUserId().subscribe({
      next: (res) => {
        this.userId =res
        console.log(res) } ,
      error: (err) => console.log(err),
    });
  }
}
