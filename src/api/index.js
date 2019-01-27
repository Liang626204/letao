import axios from 'axios'
// axios.baseURL = 'http://127.0.0.1:3000'
axios.defaults.baseURL = 'http://127.0.0.1:3000'

// axios默认是不传递cookie的 设置axios传递cookie数据
axios.defaults.withCredentials = true

/* 商品页主题 */
export const category = () => axios.get('/category/queryTopCategory')

/* 商品页详细 */
export const secondCategory = id => axios.get('/category/querySecondCategory', {params: {id}})

/* 搜索详细 */
export const searchData = obj => axios.get('/product/queryProduct', {params: obj})

/* 商品详情 */
export const productinfo = id => axios.get('/product/queryProductDetail', {params: {id: id}})

/* 加入购物车 */
export const toCar = obj => axios.post('/cart/addCart', obj)

/* 请求登录 */
export const login = obj => axios.post('/user/login', obj)
