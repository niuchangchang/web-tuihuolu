import request from '@/utils/request'

// 当前炉次的设定工艺参
export function getCurrFurnacePara(data) {
  return request({
    url: `/currFurnacePara/list?furnaceNo=${data}`,
    method: 'get',
  })
}

// 当前炉次的生产数据
export function getCurrFurnaceParaInfo(data) {
  return request({
    url: `/currHeatFurnaceData/getInfo?furnaceNo=${data}`,
    method: 'get',
  })
}

// 历史炉次的工艺数据
export function getHeatParaData(data) {
  return request({
    url: `/heatParaData/list?furnaceId=${data}`,
    method: 'get',
  })
}

// 历史炉次的工艺数据
export function getHeatParaDataInfo(data) {
  return request({
    url: `/heatParaData/getInfo?paraId=${data}`,
    method: 'get',
  })
}

// 历史炉次的某个时间点的断面工艺数据
export function getHeatSectionData(data) {
  return request({
    url: `/heatSectionData/list?paraId=${data}`,
    method: 'get',
  })
}