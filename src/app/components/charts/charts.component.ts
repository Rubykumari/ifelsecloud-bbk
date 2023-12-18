import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  constructor() {
    Chart.register(...registerables);
}
   ngOnInit(): void {

    const data = {
      labels:  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Income',
          data:  [12000, 19000, 3000, 5000, 2000, 3000, 10000, 3000, 9000, 12000, 16000, 4000],
          backgroundColor:'#060650'
        },
        {
          label: 'Investment',
          data:  [12000/4  , 19000/4, 3000/4, 5000/4, 2000/4, 3000/4, 10000/4, 3000/4, 9000/4, 12000/4, 16000/4, 4000/4],
          backgroundColor:'#373763'

        },
        {
          label: 'Expense',
          data:  [12000/2, 19000/2, 3000/2, 5000/2, 2000/2, 3000/2, 10000/2, 3000/2, 9000/2, 12000/2, 16000/2, 4000/2],
          backgroundColor:'#707078'
        }
      ]
    };

    new Chart("myChart", {
      type: 'bar',
      data: data,


      options: {
        plugins: {
          legend: {
            position: 'bottom',
          }
        },
        scales: {
          
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value, index, ticks) {
                  return '$' + value;
              }
            }
          }
        }
      }
    });
   }
}
