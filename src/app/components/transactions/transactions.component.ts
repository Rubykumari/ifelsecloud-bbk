import { Component } from '@angular/core';
import { ChartServiceService } from 'src/app/service/chart.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactions: any;
  dateWithTime: any = [];
  onlyDate: any = [];
  constructor(private chartService: ChartServiceService) {
    this.getData();
    console.log(this.dateWithTime, "Date with Time");
    this.dateFormate();
  }
  getData() {
    return this.chartService.fetchData().subscribe((data: any) => {
      this.transactions = data.transactions;
      this.transactions.map((transaction: any) => {
        var currentDate = new Date(transaction.date);
        this.dateWithTime.push(currentDate.toTimeString().substring(0,8));
      });
    }
    );
  }
  dateFormate() {
    console.log(this.dateWithTime,"format data");
    this.onlyDate = this.dateWithTime.map((d: String) => {
      console.log(d);
      this.onlyDate.push(d);
    })
    console.log(this.onlyDate,"only Date");
  }
}
