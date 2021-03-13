import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BusinessComponent } from "../components/business/business.component";
import { HomeComponent } from "../components/home/home.component";
import { MaterialModule } from "../material/material";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent }  from './layout.component'
import { NavbarComponent } from "./navbar/navbar.component";

const components = [
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    BusinessComponent
]

@NgModule({
    declarations: [
      ...components
    ],
    imports: [
        NgbModule,
        CommonModule,
        LayoutRoutingModule,
        FormsModule,
        MaterialModule
    ],
    providers: []
  })

export class LayoutModule {

}