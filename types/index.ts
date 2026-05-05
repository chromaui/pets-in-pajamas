export interface Author {
  id: string;
  username: string;
  displayName: string;
  avatar: number;
  bio: string;
  followerCount: number;
  followingCount: number;
  postCount: number;
}

export interface Comment {
  id: string;
  author: Author;
  body: string;
  postedAt: string;
}

export interface Post {
  id: string;
  image: number;
  caption: string;
  author: Author;
  likeCount: number;
  commentCount: number;
  comments: Comment[];
  postedAt: string;
}
