export interface IPost {
    post_id: number,
    title: string,
    description: string,
    seo_description: string,
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


