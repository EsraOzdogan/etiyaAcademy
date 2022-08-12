import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-skeleton',
  templateUrl: './table-skeleton.component.html',
  styleUrls: ['./table-skeleton.component.css']
})
export class TableSkeletonComponent implements OnInit {
  services:number[] = [1,2];
  constructor() { }

  ngOnInit(): void {
  }

}
