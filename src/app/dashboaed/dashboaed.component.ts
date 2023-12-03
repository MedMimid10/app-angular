import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-dashboaed',
  templateUrl: './dashboaed.component.html',
  styleUrl: './dashboaed.component.css'
})
export class DashboaedComponent {

  //Bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };

  public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [10, 38, 50, 23, 59, 70, 40], label: 'Series C' }
  ];

  //Radar chart
  public radarChartData: any[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Group X' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Group Y' }
  ];
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  // Pie chart
  public pieChartLabels: string[] = ['Red', 'Blue', 'Yellow'];
  public pieChartData: ChartData<'pie', number[], string> = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4
      }
    ]
  };
}
