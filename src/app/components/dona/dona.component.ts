import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public numeros_random(){

    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)] },
        { data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)] },
        { data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)] },
      ],
    };

  }
}
