import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { B2BPage } from './pages/solutions/b2b/b2b.component';
import { OnlinePage } from './pages/solutions/online/online.component';
import { CRMPage } from './pages/solutions/crm/crm.component';
import { WarehousePage } from './pages/solutions/warehouse/warehouse.component';
import { ManufacturingPage } from './pages/solutions/manufacturing/manufacturing.component';
import { GettingStartedPage } from './pages/support/gettingStarted/gettingStarted.component';
import { PartnersPage } from './pages/support/partners/partners.component';
import { ProfessionalPage } from './pages/support/professional/professional.component';
import { BlogPage } from './pages/support/blog/blog.component';
import { eventsPage } from './pages/support/events/events.component';
import { pricingPage } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solutions/b2b-order-management', component: B2BPage },
  { path: 'solutions/online-&-retail-order-management', component: OnlinePage },
  { path: 'solutions/manufacturing-system', component: ManufacturingPage },
  { path: 'solutions/warehouse-management-system', component: WarehousePage },
  { path: 'solutions/crm', component: CRMPage },
  { path: 'support/getting-started-guide', component: GettingStartedPage },
  { path: 'support/partners', component: PartnersPage },
  { path: 'support/professional-services', component: ProfessionalPage },
  { path: 'support/blogs', component: BlogPage },
  { path: 'support/events', component: eventsPage },
  { path: 'pricing', component: pricingPage },
  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: '' }, // fallback
];
