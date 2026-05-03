import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="colLeft"></section>
    <section class="colRight"></section>
  `,
  styles: [``],
})
export class HomeComponent {}
