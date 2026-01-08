import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { IntegrationsComponent } from '../../components/integrations/integrations.component';
import { EventsComponent } from '../../components/events/events.component';
import { BusinessComponent } from '../../components/business/business.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FeaturesComponent,
    IntegrationsComponent,
    EventsComponent,
    BusinessComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
