import getPosts from './task1'
import createPost from './helpers/createPost'

getPosts().then(posts => {
    posts.forEach(post =>
        createPost(post))
})