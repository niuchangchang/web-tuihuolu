import request from '@/utils/request'

export function getData(data) {
  return request({
    url: '1/getFlowList',
    method: 'post',
    data
  })
}
