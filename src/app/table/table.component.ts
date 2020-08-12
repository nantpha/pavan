import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  row = [
    {
      id : '',
      form: '',
      to: ''
    },
    
  ];
  
  addTable() {
    const obj = {
      id: '',
      form: '',
      to: ''
    }
    this.row.push(obj)
  }
  
  deleteRow(x){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }   
  } 
          
 
}
