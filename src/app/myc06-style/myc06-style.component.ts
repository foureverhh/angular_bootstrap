import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06-style',
  templateUrl: './myc06-style.component.html',
  styleUrls: ['./myc06-style.component.scss']
})
export class Myc06StyleComponent implements OnInit {

  myStyleObj = {
    color : 'red',
    backgroundColor: 'green',
    'border-color' : '#252'
  };

  constructor() { }

  ngOnInit(): void {
  }

  loadMore() {
    this.myStyleObj['border-color'] = '#522';
    this.myStyleObj.backgroundColor = '#833'
  }
}
