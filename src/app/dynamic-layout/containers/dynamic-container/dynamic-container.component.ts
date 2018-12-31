import { Component, OnInit, Input } from '@angular/core';
import { ComponentConfig } from '../../state/page-layout.model';

@Component({
  selector: 'dl-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent implements OnInit {

  @Input()
  pageId: string;

  @Input()
  componentConfig: ComponentConfig;

  @Input()
  editingMode: boolean;

  constructor() { }

  ngOnInit() {
  }

}
