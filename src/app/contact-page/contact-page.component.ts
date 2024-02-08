import { Component } from '@angular/core';
import {FormComponent} from './form/form.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    FormComponent,
    NgOptimizedImage
  ],
  styles: [`
  #logo {
    display: block;
  }

  #heading{
    font-size: 64px;
  }
  #heading2{
    font-size: 32px;
  }

  #card {

  }

  `],
  template: `
    <img id="logo" ngSrc="../../assets/contact-form-icon.svg" width="100" height="30" alt="Becv-logo">
    <header>
      <h1 id="heading">Interested in our business pricing?</h1>
      <p id="heading2">Fill out the form to view details and we’ll contact you as soon as possible.</p>
    </header>
    <main id="card">
      <app-form></app-form>
    </main>
  `,
})
export class ContactPageComponent {

}
