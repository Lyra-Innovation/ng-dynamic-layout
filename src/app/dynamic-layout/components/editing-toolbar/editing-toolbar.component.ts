import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dl-editing-toolbar',
  templateUrl: './editing-toolbar.component.html',
  styleUrls: ['./editing-toolbar.component.css']
})
export class EditingToolbarComponent implements OnInit {
  @Input()
  editingMode: boolean;

  @Output()
  turnOnEditing = new EventEmitter<void>();

  @Output()
  saveLayoutChanges = new EventEmitter<void>();

  @Output()
  discardLayoutChanges = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {
  }

}
