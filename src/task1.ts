import {IPost} from './types/types'

const getPosts = async (): Promise<IPost[]> => {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json() as IPost[]
}

export default getPosts