import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ComboboxCommandInfo } from './combobox-command-info';
import { MatFormFieldAppearance } from "@angular/material/form-field"
import { MatAutocompleteTrigger } from "@angular/material/autocomplete"
import { MatOptionSelectionChange } from "@angular/material/core"
import { Observable, of } from 'rxjs';
import { map, mergeMap, share, startWith } from 'rxjs/operators';

@Component({
	selector: 'mat-combobox',
	templateUrl: `./angular-material-combobox.component.html`,
	styleUrls: ['./angular-material-combobox.component.scss']
})
export class AngularMaterialComboboxComponent implements OnInit {

	private _selectedItem: any;
	private _text: string;

	@Input()
	appearance: MatFormFieldAppearance;

	@Input()
	commands: ComboboxCommandInfo[];

	@Output()
	selectedKeyChange = new EventEmitter<any>();

	@Output()
	selectedItemChange = new EventEmitter<any>();

	@Input()
	get text() {
		return this._text;
	}

	set text(value: string) {
		this._text = value;
		this.textChange.emit(value);
	}

	@Output()
	textChange = new EventEmitter<string>();

	@Input()
	title: string;

	@Input()
	get selectedKey() {
		return this.getKey(this._selectedItem);
	}

	set selectedKey(value: any) {
		if (value === this.getKey(this.selectedItem)) {
			return;
		}
		if (this.items) {
			this.selectedItem = this.items.find(x => this.getKey(x) == value);
		}
		if (this.getItemByKey) {
			this.loading = true;
			this.getItemByKey(value)
				.subscribe(x => {
					this.loading = false;
					this.selectedItem = x;
				});
		}
	}

	runCommand(command: ComboboxCommandInfo) {
		command.callback({ selectedItem: this.selectedItem, text: this.text })
			.subscribe(x => {
				if (x.canceled) {
					return;
				}
				if (x.keyToBeSelected) {
					this.selectedKey = x.keyToBeSelected;
					this.trigger.closePanel();
					this.trigger.autocompleteDisabled = true;
				} else if (x.itemToBeSelected) {
					this.selectedItem = x.itemToBeSelected;
					this.trigger.closePanel();
					this.trigger.autocompleteDisabled = true;
				}
			});
	}

	@Input()
	get selectedItem(): any {
		return this._selectedItem;
	}

	set selectedItem(item: any) {
		if (this.selectedItem === item) {
			return;
		}
		this.setSelectedItem(item, true);
	}

	setSelectedItem(item: any, changeText: boolean) {
		this._selectedItem = item;
		this.selectedItemChange.emit(item);
		this.selectedKeyChange.emit(this.getKey(item));
		if (changeText) {
			this.inputCtrl.setValue(item);
			this.text = this.getDisplayText(item);
		}
	}

	@Input()
	keyProperty: string | ((any) => any);

	@Input()
	displayProperty: string | ((any) => string);

	@Input()
	items: any[];

	@Input()
	getAutocompleteItems: (string) => Observable<any[]>;

	@Input()
	getItemByKey: (any) => Observable<any>;

	private getKey(item: any): any {
		if (!item) {
			return null;
		}
		if (typeof this.keyProperty === 'string') {
			return item[this.keyProperty];
		}
		return (this.keyProperty as ((any) => any))(item);
	}

	public getDisplayText(item: any): string {
		if (!item) {
			return null;
		}
		if (typeof this.displayProperty === 'string') {
			return item[this.displayProperty];
		}
		return (this.displayProperty as ((any) => string))(item);
	}

	private getItems(text: string): Observable<any[]> {
		if (this.items) {
			if (!text) {
				text = '';
			}
			const regExp = new RegExp(text, 'i');
			const filtered = this.items.filter(x => {
				const display = this.getDisplayText(x);
				if (!display) {
					return !text;
				}
				return display.search(regExp) >= 0;
			});
			return of(filtered);
		}
		this.loading = true;
		return this.getAutocompleteItems(text)
			.pipe(map(x => {
				this.loading = false;
				return x;
			}));
	}

	@Input() color: string;
	@Input() overridePropertyName: string;

	inputCtrl = new FormControl();
	filteredOptions: Observable<any[]>;
	loading = false;
	isAutoCompleteOpen: boolean;

	@ViewChild(MatAutocompleteTrigger)
	trigger: MatAutocompleteTrigger;

	ngOnInit() {
		this.filteredOptions = this.inputCtrl.valueChanges
			.pipe(
				startWith({ name: null })
				, map(x => {
					if (typeof x === 'string') {
						this.text = x;
					}
					if (typeof x === 'string' && this.selectedItem && this.getDisplayText(this.selectedItem) != x) {
						this.setSelectedItem(null, false);
					}
					return x && typeof x === 'string' ? x : this.getDisplayText(x);
				})
				, mergeMap(name => this.filter(name))
				, share());
	}

	filter(name: string): Observable<any[]> {
		if (name) {
			this.trigger.autocompleteDisabled = false;
		}
		return this.getItems(name);
	}

	displayFn(): string {
		return this.getDisplayText(this._selectedItem);
	}

	clean() {
		this.selectedItem = null;
		this.inputCtrl.setValue('');
		this.trigger.autocompleteDisabled = true;
	}

	toggleDropDown() {
		if (this.trigger.autocomplete.isOpen) {
			this.trigger.closePanel();
			this.trigger.autocompleteDisabled = true;
		} else {
			this.trigger.autocompleteDisabled = false;
			this.trigger.openPanel();
		}
	}

	onOptionSelectionChanged(event: MatOptionSelectionChange, item: any) {
		if (event && event.source && event.source.selected) {
			this.selectedItem = item;
		}
	}
}
