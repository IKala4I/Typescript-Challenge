import { postSection } from '../consts/DOM_Nodes.js';
const createPost = (post) => {
    const { title, body } = post;
    const htmlPost = `
        <div class="post">
            <h2>${title}</h2>
            <p>${body}</p>
        </div>`;
    postSection.innerHTML += htmlPost;
};
export default createPost;
