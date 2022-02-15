export type Channel = { id: number; name: string }

type ChannelAction = {
  type: 'chanel/getChannelList'
  payload: Channel[]
}
export type UpdateActive = {
  type: 'active/updateActive'
  payload: number
}
export type Article = {
  art_id: string
  title: string
  aut_id: string
  comm_count: number
  pubdate: string
  aut_name: string
  is_top: number
  cover: {
    type: number
    images: string[]
  }
}
export type getArticleAction = {
  type: 'article/getArticle'
  payload: Article[]
}

export type ChannelActionType = ChannelAction | UpdateActive | getArticleAction
