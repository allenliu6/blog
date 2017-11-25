export interface Articles {
    content: string
    date: string
    title: string
    summary: string
    id: number
    tab: string
    pv: number
    tags?: string[]
    lastModify: string
    comments: Comment[]
}

export interface Comment {
    name: string
    avatar: string
    content: string
    date: string
    replyInput?: string
    isShow?: boolean
    reply: {
        name: string
        avatar: string
        content: string
        date: string
    }[]
}

export interface Item {
    isShow: boolean,
    replyInput: string
}