import request from '../request'

// type = in_theaters
//  top250
// hot
function getMovieList(type,data){
    return getMovieListByType(type,data)
}

function getMovieListByType(type,data){
    return request ({
        url: '/api/douban/movie/'+type,
        method:'get',
        data
      })
}
// 除此之外的api应该遵循以下规范 
// get提交统一采用地址栏参数 abc?id=xx&name=xx
// post提交统一采用formData形式
// 针对RESTful风格api 特别处理
// function saveProject(data){
//     return request ({
//       url: '/api/admin/project/save',
//       method:'post',
//       data
//     })
// }

// function updateProject(data){
//     return request ({
//       url: '/api/admin/project/update',
//       method:'post',
//       data
//     })
// }

export default {
    getMovieList
}



