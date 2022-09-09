import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { BackupComponent } from './backup/backup.component';
import { ErrorComponent } from './error/error.component';
import { SpazioComponent } from './spazio/spazio.component';

const routes: Routes = [
  //  { path: 'aree', component: AreeComponent, canActivate: [AuthGuard]},
  { path: 'spazio', component: SpazioComponent},
  { path: 'backup', component: BackupComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'accessdenied', component: AccessDeniedComponent},
  { path: '**', redirectTo: 'spazio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
