import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() post: Post;
  /*@Input() content: string;

  loveIts: number;
  createdAt: Date;

  constructor() {
    this.loveIts = 0;
    this.createdAt = new Date();
  }*/

  ngOnInit() {
  }

  /*likeIt() {
    this.loveIts++;
  }

  unlikeIt() {
    this.loveIts--;
  }*/
}
