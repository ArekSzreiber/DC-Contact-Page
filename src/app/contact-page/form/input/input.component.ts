import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  styles: [``],
  template: `
    <fieldset>
      <ng-content select="label"></ng-content>
      <input
        type="text"
        [(ngModel)]="value"
        [placeholder]="placeholder"
        (input)="onInput($any($event).target.value)"
      >
    </fieldset>
  `,
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder?: string;
  disabled = false;

  value: string = '';

  onChange = (value: string) => {
  };

  onTouched = () => {
  };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }

}
