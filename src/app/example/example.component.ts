import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @Input()
  exampleInput: string;

  @Output()
  exampleOutput = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
