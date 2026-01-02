import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Brand {
  letter: string;
  name: string;
  category: string;
}

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss'],
})
export class IntegrationsComponent {
  brands: Brand[] = [
    { letter: 'W', name: 'WooCommerce', category: 'E-Commerce' },
    { letter: 'S', name: 'Shopify', category: 'E-Commerce' },
    { letter: 'M', name: 'Magento', category: 'E-Commerce' },
    { letter: 'A', name: 'Amazon', category: 'Marketplace' },
    { letter: 'E', name: 'eBay', category: 'Marketplace' },
    { letter: 'B', name: 'BigCommerce', category: 'E-Commerce' },
  ];

  // duplicate for seamless infinite scroll
  get duplicatedBrands() {
    return [...this.brands, ...this.brands];
  }
}
