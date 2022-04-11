import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet,Color, Label,monkeyPatchChartJsLegend,monkeyPatchChartJsTooltip } from 'ng2-charts';
import SetupDataService from '../DataService/SetupDataService';
import StudentDataService from '../DataService/StudentDataService';
import { SetupsModel } from '../Models/SetupsModel';
import { sessionlistviewmodel } from '../ViewModel/sessionlistviewmodel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Model:sessionlistviewmodel=new sessionlistviewmodel();
  public lineChartData: ChartDataSets[] = [
    { data: [61, 59, 80, 65, 45, 55, 40, 56, 76, 65, 77, 60], label: 'Apple' },
    { data: [57, 50, 75, 87, 43, 46, 37, 48, 67, 56, 70, 50], label: 'Mi' },
  ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  public lineChartOptions = {
    responsive: true,
  };
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartLegend = true;
  public lineChartType :any= 'line';
  public lineChartPlugins = [];
  public pieChartLabels: Label[] = ['PHP', '.Net', 'Java'];
  public pieChartData: SingleDataSet = [50, 30, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    // { data: [65, 67, 70, 75, 80, 90], label: 'PHP' },
    // { data: [50, 48, 47, 49, 44, 40], label: '.Net' },
    // { data: [40, 30, 28, 25, 22, 20], label: 'Java' },
    // { data: [40, 30, 28, 25, 22, 20], label: 'JS' },

   
    
  ];


  constructor(private http:SetupDataService,private ChartService:StudentDataService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  bind()
  {
    
    this.ChartService.ChartDataStudent().subscribe(res=>{

      let data=res.Data as any;

     this.barChartLabels=data.sessions;
     this.barChartData=data.chartdata[0];

    })
  }
  bind2()
  {
    this.ChartService.PieChartStudent().subscribe(res=>{
      let data=res.Data as any;
      this.pieChartLabels=data.sessions;
      this.pieChartData=data.pie_data;
    })
  }
  ngOnInit(): void {
    this.bind();
    this.bind2();
  }

}
