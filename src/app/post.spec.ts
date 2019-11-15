import { Post } from './post';
import faker from 'faker';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post(faker.lorem.sentence() , faker.lorem.paragraphs())).toBeTruthy();
  });
});
