import { Component } from '@angular/core';
import { ChartServiceService } from 'src/app/service/chart.service';

@Component({
  selector: 'app-charts-data',
  templateUrl: './charts-data.component.html',
  styleUrls: ['./charts-data.component.scss']
})
export class ChartsDataComponent {
   totalBal: any;
   tExpense : any;
   tInvestment : any;
   monthlyPaymentLimit:any;
   totalIncome:any;
   trendVal : any;
   expenseTrend: any;
   investmenTrend : any;
  investColor: any;
  expenseColor: any;
  trendColor: any;
   constructor(private chartService: ChartServiceService){
        this.getData();
   }
   getData(){
    return this.chartService.fetchData().subscribe((data:any) => {
      // debugger;
      this.totalBal= data.balance.total_balance;
      this.monthlyPaymentLimit = data.balance.monthly_payment_limit;
      this.totalIncome = data.money_statistics.total_income.value;
      this.trendVal = data.money_statistics.total_income.trend;
      this.trendColor = data.money_statistics.total_income.trend_color;
      this.expenseColor = data.money_statistics.total_expense.trend_color;
      this.investColor = data.money_statistics.total_investment.trend_color;
      this.tExpense = data.money_statistics.total_expense.value;
      this.expenseTrend = data.money_statistics.total_expense.trend;
      this.tInvestment = data.money_statistics.total_investment.value;
      this.investmenTrend = data.money_statistics.total_investment.trend;
    });
  }
}
