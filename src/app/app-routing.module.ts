import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'characters', loadChildren: () => import('./character/character.module').then(m => m.CharacterModule) },
  { path: 'teachers', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'students', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
