import { Component } from '@angular/core';
import faker from 'faker';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercice';

  posts = [
    new Post(faker.lorem.sentence() , faker.lorem.paragraphs()),
    new Post(faker.lorem.sentence() , faker.lorem.paragraphs()),
    new Post(faker.lorem.sentence() , faker.lorem.paragraphs()),
    new Post(faker.lorem.sentence() , faker.lorem.paragraphs()),
    new Post(faker.lorem.sentence() , faker.lorem.paragraphs()),
  ];

}
