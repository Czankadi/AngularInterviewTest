import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './pages/user-list/user-list.component';
import { UserFormComponent } from './pages/user-form/user-form.component';


const routes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserFormComponent },
    { path: '**', redirectTo: 'users' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
