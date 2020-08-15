import { Component, OnInit } from '@angular/core';
import { Percentage } from './Percentage.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  saveForm: FormGroup;
  id:any;
 percentage=new Percentage();
 submitType: string = 'Save';
 saveType: string = 'Enter JSON inforamtion';
  constructor( private formBuilder: FormBuilder ,private service:SharedService) { }
  ngOnInit(): void {

    this.service.getid().subscribe((data) => {
      this.id = data;
    })

    this.saveForm = this.formBuilder.group({
      OptionSet: [this.id, Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      montly: ['', Validators.required]
    });
  }

  onSubmit()
  {
    this.percentage.OptionSet=this.saveForm.controls.OptionSet.value
    this.percentage.from=this.saveForm.controls.from.value
    this.percentage.to=this.saveForm.controls.to.value
    this.percentage.montly=this.saveForm.controls.montly.value
    this.service.save(this.percentage);
    
  }

  
}
