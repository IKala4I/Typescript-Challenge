import {IPost} from '../types/types'
import {postSection} from '../consts/DOM_Nodes'

const createPost = (post: IPost) => {
    const {title, body} = post

    const htmlPost = `
        <div class="post">
            <h2>${title}</h2>
            <p>${body}</p>
        </div>`

    postSection.innerHTML += htmlPost
}

export default createPost