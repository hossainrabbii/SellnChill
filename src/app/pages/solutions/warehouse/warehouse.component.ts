import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <section class="page">
      <h1>Warehouse Management System</h1>
      <p>🚧 Coming Soon</p>
    </section>
  `,
  styles: [
    `
      .page {
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #005b56;
        text-align: center;
      }
      h1 {
        font-size: 42px;
        font-weight: 700;
      }
    `,
  ],
})
export class WarehousePage {}
