import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BusinessSection {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent {
  businessSections: BusinessSection[] = [
    {
      title: 'Food & Beverage',
      description: 'Solutions for restaurants, cafes, and food production businesses.',
      icon: '🍔',
      features: ['Inventory management', 'Menu optimization', 'Order tracking'],
    },
    {
      title: 'Manufacturing',
      description: 'Optimize production, supply chain, and industrial operations.',
      icon: '🏭',
      features: ['Production scheduling', 'Quality control', 'Supply chain visibility'],
    },
    {
      title: 'Retail & Ecommerce',
      description: 'Boost your sales with advanced retail and online store solutions.',
      icon: '🛒',
      features: ['Online storefront integration', 'Customer analytics', 'Promotions management'],
    },
    {
      title: 'Wholesaler & Distribution',
      description: 'Efficient distribution and inventory management for wholesalers.',
      icon: '🚚',
      features: ['Bulk order tracking', 'Warehouse management', 'Logistics optimization'],
    },
  ];
}
