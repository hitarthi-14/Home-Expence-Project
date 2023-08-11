import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../models/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() table: Table;

  constructor()
  {
    this.table = 
    {
      tableName : '',
      columns : [],
      rows : [],
      isSaved: false,

    };


  }
  ngOnInit(): void {
   this.table.rows.push({
    date: '22',
    name: 'recharge',
    amount:'2000',
    isSaved:false,



   });
  }

}
