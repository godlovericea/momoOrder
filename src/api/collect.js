// 设备管理
import request from '@/utils/request'
import qs from 'qs'

// 登录
export function listLog(data) {
  return request({
    url: '/log/listLog',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 注册
export function register(data) {
  return request({
    url: '/user/regist',
    method: 'post',
    data
  })
}
// 重置密码
export function reset(data) {
    return request({
        url: '/user/reset',
        method: 'post',
        data:qs.stringify(data)
    })
}
// 修改密码
export function updatePwd(data) {
  return request({
      url: '/user/updatePwd',
      method: 'post',
      data:qs.stringify(data)
  })
}
// 增加公司信息
export function addBaseInfo(data) {
  return request({
    url: '/companyBaseInfo/addBaseInfo',
    method: 'post',
    data
  })
}
// 获取公司信息
export function getBaseInfo(data) {
  return request({
    url: '/companyBaseInfo/getBaseInfo',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 修改公司基本信息
export function updateBaseInfo(data) {
  return request({
    url: '/companyBaseInfo/updateBaseInfo',
    method: 'post',
    data
  })
}

// 获取公司列表
export function listCompany(data) {
  return request({
    url: '/companyBaseInfo/listCompany',
    method: 'post',
    data
  })
}

// 修改公司是否为管理员身份
export function updateCompanyAdmin(data) {
  return request({
    url: '/companyBaseInfo/updateCompanyAdmin',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 审核公司基本信息
export function checkCompanyBaseInfo(data) {
  return request({
    url: '/companyBaseInfo/checkCompanyBaseInfo',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 删除公司
export function deleteCompany(data) {
  return request({
    url: '/companyBaseInfo/deleteCompany',
    method: 'post',
    data: qs.stringify(data)
  })
}

//增加公司产品
export function addProduct(data) {
  return request({
    url: '/companyProduct/addProduct',
    method: 'post',
    data
  })
}

//删除产品
export function deleteProduct(data) {
  return request({
    url: '/companyProduct/deleteProduct',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取产品详情
export function getProduct(data) {
  return request({
    url: '/companyProduct/getProduct',
    method: 'post',
    data: qs.stringify(data)
  })
}

//修改公司产品
export function updateProduct(data) {
  return request({
    url: '/companyProduct/updateProduct',
    method: 'post',
    data
  })
}

//审核公司产品信息
export function checkCompanyProduct(data) {
  return request({
    url: '/companyProduct/checkCompanyProduct',
    method: 'post',
    data:qs.stringify(data)
  })
}

//获取公司产品列表
export function listProduct(data) {
  return request({
    url: '/companyProduct/listProduct',
    method: 'post',
    data
  })
}
// 增加公司项目
export function addProject(data) {
  return request({
    url: '/companyProject/addProject',
    method: 'post',
    data
  })
}

// 修改公司项目
export function updateProject(data) {
  return request({
    url: '/companyProject/updateProject',
    method: 'post',
    data
  })
}

//删除公司项目
export function deleteProject(data) {
  return request({
    url: '/companyProject/deleteProject',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取公司项目详情
export function getCompanyProject(data) {
  return request({
    url: '/companyProject/getCompanyProject',
    method: 'post',
    data:qs.stringify(data)
  })
}
// 获取公司项目列表
export function listCompanyProject(data) {
  return request({
    url: '/companyProject/listCompanyProject',
    method: 'post',
    data
  })
}

// 审核公司项目信息
export function checkCompanyProject(data) {
  return request({
    url: '/companyProject/checkCompanyProject',
    method: 'post',
    data
  })
}

// 增加公司项目
export function addDemand(data) {
  return request({
    url: '/companyDemand/addDemand',
    method: 'post',
    data
  })
}

//删除公司项目
export function deleteDemand(data) {
  return request({
    url: '/companyDemand/deleteDemand',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取公司项目详情
export function getCompanyDemand(data) {
  return request({
    url: '/companyDemand/getCompanyDemand',
    method: 'post',
    data:qs.stringify(data)
  })
}
// 获取公司项目列表
export function listCompanyDemand(data) {
  return request({
    url: '/companyDemand/listCompanyDemand',
    method: 'post',
    data
  })
}
