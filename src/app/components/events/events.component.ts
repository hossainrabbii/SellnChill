import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface EventItem {
  type: 'Webinar' | 'Live Event' | 'Workshop';
  title: string;
  description: string;
  date: string;
  time: string;
}
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  events: EventItem[] = [
    {
      type: 'Webinar',
      title: 'Scaling Your SaaS in 2025',
      description: 'Learn proven strategies to scale your SaaS business sustainably.',
      date: 'Jan 15, 2026',
      time: '6:00 PM GMT',
    },
    {
      type: 'Live Event',
      title: 'Startup Founders Meetup',
      description: 'Join live discussions with startup founders and investors.',
      date: 'Jan 22, 2026',
      time: '8:00 PM GMT',
    },
    {
      type: 'Workshop',
      title: 'UX Design for Growth',
      description: 'Hands-on workshop to design conversion-focused user experiences.',
      date: 'Feb 02, 2026',
      time: '5:00 PM GMT',
    },
  ];
}
