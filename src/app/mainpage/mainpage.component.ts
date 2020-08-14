import { Component, OnInit } from '@angular/core';
import { Percentage } from '../table/Percentage.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

 
  percentage =new Percentage();
  dynamicArray= [];  

  isSubmitted = false;

  // City Names
  option: any = ['00001', '00002', '00003', '00004']

  constructor(public fb: FormBuilder) { }

  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]]
  })

  ngOnInit(): void {  
    
}  

addRow() {    
      this.percentage = new Percentage();
      this.dynamicArray.push(this.percentage);  
      console.log(this.dynamicArray);  
    return true;  
  }  

  remove(index)
  {
    console.log("prashanth"+index)
    this.dynamicArray.splice(index,1);
  }

  // Choose city using select dropdown
  changeCity(e) {
    if(e.target.value==="1: 00001"){
    this.dynamicArray=[];
    this.percentage =new Percentage();
    this.percentage.OptionSet="0001";
    this.percentage.from="0001";
    this.dynamicArray.push(this.percentage); 
  }
  if(e.target.value==="2: 00002"){
    this.dynamicArray=[];
    this.percentage =new Percentage();
    this.percentage.OptionSet="00002";
    this.percentage.from="000002";
    this.dynamicArray.push(this.percentage); 
  }
  }
onsubmit()
{

}
  // Getter method to access formcontrols
  get cityName() {
    return this.registrationForm.get('cityName');
  }

  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.percentage =new Percentage();
    this.percentage.OptionSet="0001";
    this.percentage.from="0001";
    this.dynamicArray.push(this.percentage); 

  }
}
