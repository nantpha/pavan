import { Component, OnInit } from '@angular/core';
import { Percentage } from './Percentage.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  saveForm: FormGroup;
 percentage=new Percentage();
 submitType: string = 'Save';
 saveType: string = 'Enter JSON inforamtion';
  constructor( private formBuilder: FormBuilder ) { }
  ngOnInit(): void {

    this.saveForm = this.formBuilder.group({
      OptionSet: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      montly: ['', Validators.required]
    });
  }

  onSubmit()
  {
  console.log("sdf"+this.saveForm.controls.to.value);
  }

  
}
