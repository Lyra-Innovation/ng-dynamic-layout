import { Component, ComponentFactoryResolver } from '@angular/core';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-dynamic-layout';

  constructor() {}
}
