import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  first: 'Jogging diary';
  second: 'Add record';
  third: 'My results';
  constructor() { }

  ngOnInit(): void {
  }

}
