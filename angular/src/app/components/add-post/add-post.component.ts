import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  title?: string;
  content?: string;
  
  constructor(private postService: PostService, private router: Router) {
   }
  
  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title || !this.content){
      alert("Please type the Title & Content before submitting");
    }

    const newPost = {
      title: this.title,
      content: this.content
    }

    this.postService.createPost(newPost).subscribe(() => this.router.navigate(['/blog']));
  }

}
