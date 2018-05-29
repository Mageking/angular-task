import { Component, OnInit } from '@angular/core';
import { CoinDeskService } from '../services/coin-desk/coin-desk.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-bit-coin-history',
  templateUrl: './bit-coin-history.component.html',
  styleUrls: ['./bit-coin-history.component.css']
})
export class BitCoinHistoryComponent implements OnInit {

  chart: Chart;
  loading: boolean;

  constructor(private coinDesk: CoinDeskService) { }

  ngOnInit() {
    this.loading = true;
    // using a timeout to throttle request
    setTimeout(() => {
      this.coinDesk.getHistory()
        .subscribe((res: any) => {
          const data: any = Object.keys(res.bpi)
            .map((key) => {
              return [new Date(key), res.bpi[key]];
            });

          this.chart = new Chart({
            chart: {
              type: 'line'
            },
            title: {
              text: 'Bitcoin Index'
            },
            xAxis: {
              type: 'datetime'
            },
            credits: {
              enabled: false
            },
            series: [{
              name: 'Line 1',
              data: data
            }]
          });

          this.loading = false;
        });
    }, 2000);
  }

}
