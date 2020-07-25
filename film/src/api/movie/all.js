import request from '../request'


// 精选预告  

function selectPreview(url, data) {
    return request({
        url: '/api/douban/movie/' + url,
        method: 'get',
        data
    })
}

// 演员明细

function playerInfo(url, data) {
    return request({
        url: '/api/douban/movie/' + url,
        method: 'get',
        data
    })
}

// 电影明细

function subject(url, data) {
    return request({
        url: '/api/douban/movie/' + url,
        method: 'get',
        data
    })
}

// 电影-即将上映 

function coming_soon(url, data) {
    return request({
        url: '/api/douban/movie/' + url,
        method: 'get',
        data
    })
}

// 电影-正在热映 

function in_theaters(url, data) {
    return request({
        url: '/api/douban/movie/' + url,
        method: 'get',
        data
    })
}

// 电影-top250 

function top250(url, data) {
    return request({
        url: '/api/douban/movie/' + url,
        method: 'get',
        data
    })
}

export {
    selectPreview,
    playerInfo,
    subject,
    coming_soon,
    in_theaters,
    top250,
}



