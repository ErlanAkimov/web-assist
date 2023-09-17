export interface IPost {
    id: number,
    title: string,
    description: string,
    likes: number,
    dislikes: number,
    full_text: string,
}

export interface IPostData {
    posts: IPost[]
}

export interface IPostDataSingle {
    post: IPost
}


