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
      title: 'See your entire inventory, everywhere, instantly',
      description:
        'Track stock levels across warehouses, stores, and channels in real-time. No more spreadsheets, no more guesswork.',
      points: ['Multi-location tracking', 'Live stock updates', 'Low stock alerts'],
      image: 'feature1.svg',
    },
    {
      badge: 'Smart Forecasting',
      title: 'Predict demand before it happens',
      description:
        'Use historical data and trends to forecast demand accurately and avoid overstocking or stockouts.',
      points: ['AI-powered forecasts', 'Seasonal trend analysis', 'Accurate planning'],
      image: 'feature1.svg',
    },
    {
      badge: 'Automation',
      title: 'Automate inventory workflows',
      description: 'Save time by automating reorders, stock transfers, and inventory adjustments.',
      points: ['Auto reordering', 'Workflow automation', 'Reduced manual errors'],
      image: 'feature1.svg',
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
