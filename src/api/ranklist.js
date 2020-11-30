import request from '@/utils/request'

export function getRankList() {
  return request({
    url: '/toplist/detail',
    method: 'get'
  }).then((data) => {
    return data
  })
}