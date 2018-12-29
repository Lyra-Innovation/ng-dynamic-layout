import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-input',
  templateUrl: './example-input.component.html',
  styleUrls: ['./example-input.component.css']
})
export class ExampleInputComponent implements OnInit {
  @Output()
  valueChanges = new EventEmitter<number>();
  number = 0;

  constructor() {}

  ngOnInit() {}

  sendNumber() {
    this.number++;
    this.valueChanges.emit(this.number);
  }
}
