import axios from 'axios'
// axios.baseURL = 'http://127.0.0.1:3000'
axios.defaults.baseURL = 'http://127.0.0.1:3000'

/* 商品页主题 */
export const category = () => axios.get('/category/queryTopCategory')

/* 商品页详细 */
export const secondCategory = id => axios.get('/category/querySecondCategory', {params: {id}})

/* 搜索详细 */
export const searchData = obj => axios.get('/product/queryProduct', {params: obj})
