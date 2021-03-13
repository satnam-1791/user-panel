import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  income: number = 0;
  expense: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  updateIncome(event: { value: any; }) {
    this.income = event.value
  }

  updateExpense(event: { value: any; }) {
    this.expense = event.value
  }

}
