import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { CoberturaComponent } from './cobertura/cobertura.component';

import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

  { path: 'inicio', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: 'cobertura', component: CoberturaComponent},
  { path: 'footer', component: FooterComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
