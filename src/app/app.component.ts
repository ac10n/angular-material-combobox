import {Component} from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  localData = [
    {id: 1, title: 'Apple'},
    {id: 2, title: 'Orange'}
  ];
  selectedItem: any;
  selectedKey: any;
  text: string;
  title = 'demo-app';
}
