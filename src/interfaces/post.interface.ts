export interface IPost {
    post_id: string,
    title: string,
    short: string,
    seo: string,
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

export interface IUser {
    FirstName: string,
    LastName: string,
    avatar: string,
    liked_id: [],
    user_id: number,
}


