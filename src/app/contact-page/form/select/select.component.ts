import {Component, forwardRef, Input} from '@angular/core';
import {FormsModule, NG_VALUE_ACCESSOR, SelectControlValueAccessor} from '@angular/forms';


export interface Option {
  label: string;
  value: any;
}
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  styles: [``],
  template: `
    <fieldset>
      <ng-content select="label"></ng-content>

      <select [(ngModel)]="value">
        @for (option of options; track option) {
          <option [value]="option">{{ option }}</option>
        }
      </select>
    </fieldset>
  `,
})
export class SelectComponent extends SelectControlValueAccessor {
  @Input() options: string[] = [];
}
