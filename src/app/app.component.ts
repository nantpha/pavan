import { Component } from '@angular/core';
import { FormBuilder, Validators,NgForm } from '@angular/forms';
import { Percentage } from './table/Percentage.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  ngOnInit(): void {
  }
}
