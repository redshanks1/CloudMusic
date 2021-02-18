import {request} from './request'

// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
// 6: 动态
export function getComment(t, type, id, content, cookie, commentId){
    return request({
        url: '/comment',
        params: {
            t, 
            type, 
            id, 
            content,
            cookie,
            commentId
        }
    })
}

// 发送动态请求
export function getDComment(t, type, threadId, content, cookie){
    return request({
        url: '/comment',
        params: {
            t, 
            type, 
            threadId, 
            content,
            cookie
        }
    })
}