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
{path:"men", loadChildren: ()=> import('./men/men.module').then(m => m.MenModule)}, // here we are telling to load children and download the module
{path:"sale", loadChildren: ()=> import('./sale/sale.module').then(m => m.SaleModule)},
{path:"Women", component:WomenComponent},
{path:"gifting", component:GiftingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
