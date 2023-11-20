import getPosts from './task1.js';
import createPost from './helpers/createPost.js';
getPosts().then(posts => {
    posts.forEach(post => createPost(post));
});
