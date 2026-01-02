import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls:['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      rating: 5,
      quote:
        'The implementation was remarkably smooth. Within 2 weeks, our entire team was up and running. The ROI was visible within the first month.',
      name: 'Marcus Rodriguez',
      role: 'Supply Chain Director, GreenLeaf Foods',
    },
    {
      rating: 5,
      quote:
        'The platform transformed how we manage inventory. The insights are clear and actionable.',
      name: 'Sarah Johnson',
      role: 'Operations Manager, FreshMart',
    },
    {
      rating: 5,
      quote:
        'Outstanding support and an intuitive interface. Adoption was instant.',
      name: 'Daniel Lee',
      role: 'Head of Logistics, UrbanFoods',
    },
  ];

  activeIndex = 0;
  autoSlideSub!: Subscription;
  readonly SLIDE_INTERVAL = 4000; // 4 seconds (recommended)

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  /** ---------- AUTO SLIDE ---------- */
  startAutoSlide() {
    this.stopAutoSlide(); // prevent duplicate timers

    this.autoSlideSub = interval(this.SLIDE_INTERVAL).subscribe(() => {
      this.next();
    });
  }

  stopAutoSlide() {
    if (this.autoSlideSub) {
      this.autoSlideSub.unsubscribe();
    }
  }

  /** ---------- NAVIGATION ---------- */
  prev() {
    this.resetAutoSlide();
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  next() {
    this.activeIndex =
      (this.activeIndex + 1) % this.testimonials.length;
  }

  goTo(index: number) {
    this.resetAutoSlide();
    this.activeIndex = index;
  }

  /** ---------- RESET TIMER ON USER ACTION ---------- */
  resetAutoSlide() {
    this.startAutoSlide();
  }
}
