import { Author, Comment, Post } from '@/types';

export const mockAuthors: Author[] = [
  {
    id: 'author-1',
    username: 'fluffmaster',
    displayName: 'Fluffy McFlufferson',
    avatar: require('@/assets/images/placeholders/dog.jpg'),
    bio: 'Golden retriever living my best life. Pajamas optional.',
    followerCount: 4821,
    followingCount: 312,
    postCount: 47,
  },
  {
    id: 'author-2',
    username: 'corgicrew',
    displayName: 'Biscuit & Friends',
    avatar: require('@/assets/images/placeholders/frenchie.jpg'),
    bio: 'Two corgis, one camera. We post at midnight.',
    followerCount: 12043,
    followingCount: 501,
    postCount: 134,
  },
  {
    id: 'author-3',
    username: 'pajamacat',
    displayName: 'Sir Whiskers III',
    avatar: require('@/assets/images/placeholders/cat.jpg'),
    bio: 'Sleep is my cardio.',
    followerCount: 923,
    followingCount: 88,
    postCount: 12,
  },
  {
    id: 'author-4',
    username: 'sleepypup',
    displayName: 'Noodle the Dog',
    avatar: require('@/assets/images/placeholders/bunny.jpg'),
    bio: 'Nap enthusiast. Professional couch warmer.',
    followerCount: 7210,
    followingCount: 220,
    postCount: 61,
  },
];

const makeComments = (postId: string, count: number): Comment[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${postId}-comment-${i + 1}`,
    author: mockAuthors[i % mockAuthors.length],
    body: [
      'This is the cutest thing I have seen all week 😍',
      'Those pajamas are everything!!',
      'I need these for my dog immediately',
      'Living for this content',
      'Please never stop posting',
      'The way they are just vibing 😭',
      'I showed this to my cat and she was unimpressed',
      'Sending this to everyone I know',
    ][i % 8],
    postedAt: new Date(Date.now() - (i + 1) * 3600000).toISOString(),
  }));

export const mockPosts: Post[] = [
  {
    id: 'post-1',
    image: require('@/assets/images/placeholders/bird.jpg'),
    caption: 'Monday mood achieved. Do not disturb. 🐾',
    author: mockAuthors[0],
    likeCount: 842,
    commentCount: 23,
    comments: makeComments('post-1', 3),
    postedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
  {
    id: 'post-2',
    image: require('@/assets/images/placeholders/frenchie2.jpg'),
    caption: 'We found the pajama drawer and we are not leaving.',
    author: mockAuthors[1],
    likeCount: 3104,
    commentCount: 87,
    comments: makeComments('post-2', 8),
    postedAt: new Date(Date.now() - 5 * 3600000).toISOString(),
  },
  {
    id: 'post-3',
    image: require('@/assets/images/placeholders/cat2.jpg'),
    caption: 'Sunday is for naps and nothing else.',
    author: mockAuthors[2],
    likeCount: 214,
    commentCount: 9,
    comments: makeComments('post-3', 2),
    postedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
  },
  {
    id: 'post-4',
    image: require('@/assets/images/placeholders/cat3.jpg'),
    caption: 'New pajamas just dropped. This is fine. 😴',
    author: mockAuthors[3],
    likeCount: 1567,
    commentCount: 44,
    comments: makeComments('post-4', 5),
    postedAt: new Date(Date.now() - 24 * 3600000).toISOString(),
  },
  {
    id: 'post-5',
    image: require('@/assets/images/placeholders/goat.jpg'),
    caption: 'Caught in 4K being adorable.',
    author: mockAuthors[0],
    likeCount: 998,
    commentCount: 31,
    comments: makeComments('post-5', 4),
    postedAt: new Date(Date.now() - 36 * 3600000).toISOString(),
  },
  {
    id: 'post-6',
    image: require('@/assets/images/placeholders/turtle.jpg'),
    caption: 'Hot girl walk but make it 11pm and in pajamas.',
    author: mockAuthors[1],
    likeCount: 4201,
    commentCount: 112,
    comments: makeComments('post-6', 6),
    postedAt: new Date(Date.now() - 48 * 3600000).toISOString(),
  },
];

export function getPostById(id: string): Post | undefined {
  return mockPosts.find((p) => p.id === id);
}
