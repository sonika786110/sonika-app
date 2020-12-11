import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftingComponent } from './gifting/gifting.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { SaleComponent } from './sale/sale.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
{path:"", redirectTo:"home", pathMatch: "full"},
{path:"home", component:HomeComponent}, //homecomponent
{path:"men", component:MenComponent},
{path:"women", component:WomenComponent},
{path:"sale", component:SaleComponent},
{path:"gifting", component:GiftingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
