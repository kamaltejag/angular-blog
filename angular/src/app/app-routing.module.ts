import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { HomeComponent } from './components/home/home.component';
import { ShowPostComponent } from './components/show-post/show-post.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"blog",
    component: BlogComponent,
  },
  {
    path:"blog/create",
    component: AddPostComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"editPost/:id",
    component: EditPostComponent
  },
  {
    path:"showPost/:id",
    component: ShowPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
