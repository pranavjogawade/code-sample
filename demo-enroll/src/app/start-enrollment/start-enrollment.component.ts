import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-enrollment',
  templateUrl: './start-enrollment.component.html',
  styleUrls: ['./start-enrollment.component.scss']
})
export class StartEnrollmentComponent implements OnInit {
  username: string = 'Pranav';
  constructor() { }

  ngOnInit(): void {
  }

}
