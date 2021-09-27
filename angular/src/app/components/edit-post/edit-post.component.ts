import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: any = "";

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postService.getPost(params['id']).subscribe((post) => this.post = post);
    });
  }

  onSubmit(f: NgForm){
    const updatedPost = {
      id: f.value.id,
      title: f.value.title,
      content: f.value.content
    }

    this.postService.updatePost(updatedPost).subscribe(() => this.router.navigate(['/blog']));
  }


}
