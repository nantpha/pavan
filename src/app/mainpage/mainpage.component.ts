import { Component, OnInit } from '@angular/core';
import { Percentage } from '../table/Percentage.model';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {


  percentage = new Percentage();
  dynamicArray = [];

  isSubmitted = false;

  // City Names
  option: any = [];
  status: boolean;

  constructor(public fb: FormBuilder, private service: SharedService) { }

  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]]
  })

  ngOnInit(): void {
    this.status = false;
    this.service.getOptionValues().subscribe((data) => {
      this.option = data;
    })

  }

  addRow() {
    this.percentage = new Percentage();
    this.dynamicArray.push(this.percentage);
    console.log(this.dynamicArray);
    return true;
  }

  remove(index) {
    console.log("prashanth" + index)
    this.dynamicArray.splice(index, 1);
  }
  // Choose city using select dropdown
  changeCity(e) {
    this.service.getOptiondata(e.target.value).subscribe((data) => {
      this.status = true;
      this.dynamicArray = data;
    })

  }
  onsubmit() {

  }
  // Getter method to access formcontrols
  get cityName() {
    return this.registrationForm.get('cityName');
  }

  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.percentage = new Percentage();
    this.percentage.OptionSet = "0001";
    this.percentage.from = "0001";
    this.dynamicArray.push(this.percentage);

  }
}
