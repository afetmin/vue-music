import request from '@/utils/request'

export function getSinger(initial = 'b', limit = 30) {
  // initial: 拼音开头为 b 为顺序排列, 热门传-1,#传0
  return request({
    url: `/artist/list?type=1&area=7&initial=${initial}&limit=${limit}`,
    method: 'get'
  }).then((data) => {
    return data
  })
}
