import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  styles: [``],
  template: `
    <button type="button">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {

}
