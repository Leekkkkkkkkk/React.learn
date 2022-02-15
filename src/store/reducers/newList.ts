import { Article, ChannelActionType } from '../types'

const initState: {
  ArticleList: Article[]
} = {
  ArticleList: [],
}
export const newList = (state = initState, action: ChannelActionType) => {
  switch (action.type) {
    case 'article/getArticle':
      return { ...state, ArticleList: action.payload }
    default:
      return state
  }
}
