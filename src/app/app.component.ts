import {Component} from '@angular/core';
import {delay} from 'rxjs/operators';
import {of} from 'rxjs';
import {ComboboxCommandInfo} from '../../projects/angular-material-combobox/src/lib/combobox-command-info';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  private fruits = [
    {id: 1, title: 'Apple'},
    {id: 2, title: 'Orange'},
    {id: 3, title: 'Melon'},
    {id: 4, title: 'Peach'},
    {id: 5, title: 'Cucumber'},
    {id: 6, title: 'Tangerine'},
    {id: 7, title: 'Mango'}
  ];

  combo1 = {
    localData: this.fruits,
    selectedItem: null,
    selectedKey: null,
    text: '',
    commands: [<ComboboxCommandInfo>{
      name: 'setToMelon',
      title: 'Set to Melon',
      callback: (x) => of({keyToBeSelected: 3}),
      iconName: 'save',
      tooltip: 'Set to Melon'
    }, <ComboboxCommandInfo>{
      name: 'setToPeach',
      title: 'Set to Peach',
      callback: (x) => of({itemToBeSelected: this.fruits[3]}),
      tooltip: 'Set to Peach'
    }]
  };

  combo2 = {
    getAutoCompleteItems: (name: string) =>
      of(this.fruits.filter(f => !name || f.title.toLowerCase().startsWith(name.toLowerCase())))
        .pipe(delay(500)),
    getById: (id) => of(this.fruits.find(f => f.id == id)).pipe(delay(500)),
    selectedItem: null,
    selectedKey: null,
    text: ''
  };

}
