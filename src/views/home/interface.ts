export interface Topic {
    date: string
    title: string
    summary: string
    id: number
    tab: string
    pv: number
    commentCount: number
    tags?: string[]
}

export interface Response {
    data: {
        topics: Topic[]
    }
}