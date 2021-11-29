import * as axios from "axios";

/*const $url = "http://localhost:5000/"*/
const $url = "https://style-cat.na4u.ru/"
export {$url};

const $instance = axios.create({
    withCredentials: true,
    crossDomain: true,
    baseURL: $url + 'api/',
    credentials: 'include'
});

const $authInstance = axios.create({
    crossDomain: true,
    withCredentials: true,
    baseURL: $url + 'api/',
    credentials: 'include'
});

const authInterceptorReq = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

const authInterceptorRes = config => {
    return config;
}
const authInterceptorResErr = async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
       try {
           const response = await userAPI.checkUser()
           localStorage.setItem('token', response.data.accessToken);
           return $authInstance.request(originalRequest)
       } catch (e) {
           console.log('Не авторизован')
       }
    }
    throw error;
}

$authInstance.interceptors.request.use(authInterceptorReq)
$authInstance.interceptors.response.use(authInterceptorRes, authInterceptorResErr)

export const carouselAPI = {
    getCarouselItems() {
        return $instance.get(`carousel`)
    }
}

export const userAPI = {
    registration(data) {
        return $instance.post(`user/registration`, data) //email, password, phone, name, address
    },
    login(data) {
        return $instance.post(`user/login`, data) //email, password
    },
    checkUser() {
        return $instance.get(`user/refresh`)
    },
    logout() {
        return $instance.post(`user/logout`);
    },
    getInfo() {
        return $authInstance.get(`user/info`)
    },
    changeInfo(phone, address) {
        return $authInstance.put(`user/change/info`, {phone, address})
    },
    changePassword(password, newPassword) {
        return $authInstance.put(`user/change/password`, {password, newPassword})
    }
}

export const productAPI = {
    getProduct(productId) {
        return $instance.get(`product/` + productId)
    },
}

export const navigationAPI = {
    getSectors() {
        return $instance.get(`sector`)
    },
    getCategories(sectorId) {
        return $instance.get(`categories/` + sectorId)
    },
    getProducts(query) {
        return $instance.get(`product/` + query)
    },
    getBrands(query) {
        return $instance.get(`product/brands` + query)
    },
}

export const adminAPI = {
    changeSectors(data) {
        return $authInstance.put(`sector`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    changeCategory(data) {
        return $authInstance.put(`categories`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    createCategory(data) {
        return $authInstance.post(`categories`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    deleteCategory(id) {
        return $authInstance.delete(`categories`, {data: {id}})
    },
    createProduct(data) {
        return $authInstance.post(`product`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    changeProductMain(data) {
        return $authInstance.put(`product`, data)
    },
    deleteImage(name) {
        return $authInstance.delete(`product/image`, {data: {name}})
    },
    deleteProduct(id) {
        return $authInstance.delete(`product`, {data: {id}})
    },
    createImage(data) {
        return $authInstance.post(`product/image`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    createCarousel(data) {
        return $authInstance.post(`carousel`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    deleteCarousel(id) {
        return $authInstance.delete(`carousel`, {data: {id}});
    },
    changeCarousel(data) {
        return $authInstance.put(`carousel`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    createAdmin(data) {
        return $authInstance.post(`user/registration-admin`, data);
    },
    getStatistic(query) {
        return $authInstance.get(`order/statistic` + query);
    },
    getTable(query) {
        return $authInstance.get(`order/table` + query);
    }
}

export const basketAPI = {
    setToBasket(productId, sectorId, name, price, image, maxCount, size, amount) {
        return $authInstance.post(`basket`, {productId, sectorId, name, price, image, maxCount, size, amount})
    },
    getBasket() {
        return $authInstance.get(`basket`)
    },
    setAmount(productId, amount) {
        return $authInstance.put(`basket`, {productId, amount})
    },
    deleteProduct(productId) {
        return $authInstance.delete(`basket`, {data: {productId}})
    },
}

export const OrderAPI = {
    setNewOrder(address, name, phone, products, sum, count) {
        products = JSON.stringify(products)
        return $authInstance.post(`order`, {address, name, phone, products, sum, count})
    },
    getActive() {
        return $authInstance.get(`order/active`)
    },
    getHistory() {
        return $authInstance.get(`order/history`)
    },
    getActiveAdmin() {
        return $authInstance.get(`order/active_admin`)
    },
    getHistoryAdmin(query) {
        return $authInstance.get(`order/history_admin${query}` )
    },
    setAmount(id, amount) {
        return $authInstance.put(`order/amount`, {id, amount})
    },
    setConfirm(id, products) {
        products = JSON.stringify(products)
        return $authInstance.put(`order`, {id, products})
    },
    deleteProduct(productId, orderId) {
        return $authInstance.delete(`order/product`, {data: {productId, orderId}})
    },
    deleteOrder(orderId) {
        return $authInstance.delete(`order`, {data: {orderId}})
    },
}

export const reviewAPI = {
    setReview(text, productId) {
        return $authInstance.post(`review`, {text, productId})
    },
    checkReview(productId) {
        return $authInstance.post(`review/check`, {productId})
    },
    changeReview(text, productId) {
        return $authInstance.put(`review`, {text,productId})
    },
}



