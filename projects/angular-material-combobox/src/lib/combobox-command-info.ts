import {Observable} from 'rxjs';

export interface ComboboxCommandInfo {
  name: string;
  title: string;
  iconName: string;
  tooltip: string;
  callback: (input: ComboboxCommandInput) => Observable<ComboboxCommandOutput>;
}

export class ComboboxCommandInput {
  selectedItem: any;
  text: string;
}

export class ComboboxCommandOutput {
  canceled: boolean;
  itemToBeSelected: any;
  keyToBeSelected: any;
}

