import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './features/features.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FeatureComponent,
    IntegrationsComponent,
    EventsComponent,
    ContactComponent,
    TestimonialComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
