import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [{ path: '', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
                        { path: 'exercises', component: ExerciseComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
