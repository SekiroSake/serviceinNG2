import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   private post: Post;
  

   constructor(private _postService: PostsService) {
    this._postService.createPost({userId:1, body:"b",title:"a"});
    
  }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(posts => {
        // console.log(JSON.stringify(posts[1].body));
        // this.post.title = posts[0].title;
        // this.post.body = posts[1].body;      
         this.post = {
           userId: posts[0].id,
           body: posts[0].body,
           title: posts[0].title
         };
         console.log('title: ' + this.post.title);
      });
  }

}
