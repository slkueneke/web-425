/*** src/app/order-summary/order-summary.component.ts ***/

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../order/order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Order Summary</h1>

    @if (order.tacos.length === 0) {
      <p>No tacos added to the order yet.</p>
    } @else {
      @if (!richMode) {
        <!-- LEGACY CONTRACT VIEW (kept intact) -->
        <ul>
          @for (taco of order.tacos; track taco) {
            <li>
              <strong>{{ taco.quantity }}x {{ taco.name }}</strong>
              <br />
              Price per taco:
              {{ taco.price | currency: 'USD' : 'symbol' : '1.2-2' }}
              <br />
              @if (taco.noOnions) {
                No onions
                <br />
              }
              @if (taco.noCilantro) {
                No cilantro
                <br />
              }
            </li>
          }
        </ul>
        <p>
          <strong>Total:</strong>
          {{ getTotal() | currency: 'USD' : 'symbol' : '1.2-2' }}
        </p>
      } @else {
        <!-- RICH, REUSABLE VIEW -->
        <ul>
          @for (taco of order.tacos; track taco; let i = $index) {
            <li>
              <strong>Item {{ i + 1 }}: {{ taco.name }}</strong>
              <br />
              Quantity: {{ taco.quantity ?? 1 }}
              <br />
              Unit price:
              {{ taco.price | currency: 'USD' : 'symbol' : '1.2-2' }}
              <br />
              Line subtotal:
              {{
                taco.price * (taco.quantity ?? 1)
                  | currency: 'USD' : 'symbol' : '1.2-2'
              }}
              <br />
              @if (taco.noOnions || taco.noCilantro) {
                Customizations:
                @if (taco.noOnions) {
                  No onions
                }
                @if (taco.noCilantro) {
                  @if (taco.noOnions) {
                    ,
                  }
                  No cilantro
                }
                <br />
              }
              <button type="button" (click)="onRemoveTaco(taco.id)">
                Remove Taco
              </button>
            </li>
          }
        </ul>
        <p>
          <strong>Total:</strong>
          {{ getTotal() | currency: 'USD' : 'symbol' : '1.2-2' }}
        </p>
      }
    }
  `,
  styles: `
    li {
      margin-bottom: 10px;
      padding: 5px;
    }
  `,
})
export class OrderSummaryComponent {
  @Input() order!: Order;

  // New: toggle between legacy and rich summary
  @Input() richMode = false;

  // New: notify parent when a taco should be removed
  @Output() removeTaco = new EventEmitter<number>();

  getTotal() {
    return this.order.tacos.reduce(
      (acc, taco) => acc + taco.price * (taco.quantity ?? 1),
      0,
    );
  }

  onRemoveTaco(tacoId: number) {
    this.removeTaco.emit(tacoId);
  }
}
