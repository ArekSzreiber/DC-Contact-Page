import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ],
  styles: [``],
  template: `
    <fieldset>
      <ng-content select="label"></ng-content>
      <textarea
        cols="30"
        rows="10"
        [(ngModel)]="value"
        (input)="onInput($any($event).target.value)"
      ></textarea>
    </fieldset>
  `,
})
export class TextareaComponent implements ControlValueAccessor {
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
