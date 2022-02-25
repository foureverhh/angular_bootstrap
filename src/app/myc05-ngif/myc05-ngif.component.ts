import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05-ngif',
  templateUrl: './myc05-ngif.component.html',
  styleUrls: ['./myc05-ngif.component.scss']
})
export class Myc05NgifComponent implements OnInit {

  hasMore = true;

  constructor () {}

  ngOnInit(): void {
  }

  loadMore(){
    this.hasMore = !this.hasMore;
  }
}
