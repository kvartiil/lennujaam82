import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf7',
  templateUrl: './graaf7.component.html',
  styleUrls: [ './graaf7.component.scss' ]
})
export class Graaf7Component implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
                
      title: {
        text: 'Märdi konservatiivne variant',
        left: 'center',
        top: 'center'
      },
      color: ['#d73e3e', '#ffcf00', '#008936'],
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 13,
              name: 'Madal'
            },
            {
              value: 27,
              name: 'Keskmine'
            },
            {
              value: 60,
              name: 'Väga hea'
            }
          ],
          radius: ['40%', '70%']
        }
      ]
        
    };
  }
}