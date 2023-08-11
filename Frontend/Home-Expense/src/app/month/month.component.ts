import { Component, Input, OnInit } from '@angular/core';
import { Month, Table } from '../models/models';
import { MonthToNumberPipe } from '../Pipes/month-to-number.pipe';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit{
  ngOnInit(): void {
   
  }
  @Input() month : Month;

  constructor(){
    this.month = {
      monthYear: '',
      monthNumber : '',
      tables:[],
      calculations: [],
      isSaved:false,
    };

  }

   
 }
