import {
  JsonDatabaseService,
  LocalDataBaseService,
  PostProvider,
} from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    /* VIOLACION PRINCIPIO OPEN CLOSE */
    /*     const jsonDB = new LocalDataBaseService(); */

    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
