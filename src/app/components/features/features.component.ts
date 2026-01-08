import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeatureBlock {
  badgeIcon: string;
  badgeText: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
}

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  features = [
    {
      badge: 'Real-Time Visibility',
      title: 'Manage every online and retail order in one place',
      description:
        'Sync orders from e-commerce, POS, and marketplaces in real time — from checkout to fulfilment',
      points: [
        'Centralized order mangement across all online and retail channels',
        'Real-time order status updates from checkout to fulfillment',
        'Automatic inventory syncing across platforms and stores',
        'Returns and exchanges tracking',
      ],
      image: 'order.png',
    },
    {
      badge: 'Smart Forecasting',
      title: 'Simplify complex B2B orders at scale',
      description:
        'Handle bulk orders from EMAIL and WhatsApp, custom pricing, credit terms, repeat orders via b2b app portal, and approvals — without spreadsheets',
      points: [
        'Bulk and recurring order management via b2b APP portal',
        'Customer-specific price lists and volume discounts',
        'ACredit limits, payment terms, and approval workflows',
        'Full visibility into order lifecycle and fulfillment status',
      ],
      image: 'b2b.png',
    },
    {
      badge: 'Automation',
      title: 'Plan, track, and control production in real time',
      description: 'From raw materials to finished goods — stay in control of every stage',
      points: [
        'Bill of Materials (BOM) and production planning',
        'Work order creation and tracking',
        'Raw material consumption and finished goods output',
        'Real-time production status visibility',
        'Inventory synchronization between manufacturing and warehouses',
      ],
      image: 'manu.png',
    },
    {
      badge: 'Automation',
      title: 'Run faster, smarter warehouses',
      description: 'Optimize picking, packing, stock levels, and locations with real-time accuracy',
      points: [
        'Multi-warehouse and multi-location inventory tracking',
        'Bin and zone management',
        'Picking, packing, and shipping workflows',
        'Barcode scanning and stock verification',
        'Stock movement and transfer tracking',
      ],
      image: 'warehouse.png',
    },
    {
      badge: 'Automation',
      title: 'Turn customer data into lasting relationships',
      description: 'Track customers, custom pricing, orders, and insights — all in one view',
      points: [
        'Unified customer profiles with full order history',
        'Customer segmentation and insights',
        'Custom pricing tracking and price tiers ',
        'CRM data connected directly to orders and inventory',
      ],
      image: 'customer.png',
    },
  ];

  cards = [
    {
      icon: 'protect.svg',
      title: 'Enterprise Security',
      text: 'SOC 2 compliant with end-to-end encryption. Your data is protected at every level.',
    },
    {
      icon: 'protect.svg',
      title: 'High Availability',
      text: 'Reliable infrastructure ensures your system is always available.',
    },
    {
      icon: 'protect.svg',
      title: 'Scalable Architecture',
      text: 'Built to scale as your business grows.',
    },
  ];
}
