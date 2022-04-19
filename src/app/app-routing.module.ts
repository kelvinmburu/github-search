import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRepoComponent } from './user-repo/user-repo.component';
import { UsersComponent } from './users/users.component';

// remember to add navigation path to routes

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'user-repo', component: UserRepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, UserRepoComponent]
