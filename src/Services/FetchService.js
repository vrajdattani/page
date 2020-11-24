import Axios from "axios"
//get Request for post with the help of id
export const FetchService = (id) => {
    return Axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${id}`)
}