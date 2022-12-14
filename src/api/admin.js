import ajax from "@/api/req.js"
/**
 * 上传图片
 */
export const addimg = (jpg) => {
  return ajax({
    headers: {
      "Content-type": "multipart/form-data"
    },
    method: 'post',
    url: "/admin/addimg",
    data: jpg
  })
}

/**
 * 删除数据库单个的图片（真实删除）
 */
export const deleteimg = (delarr) => {
  return ajax({
    method: 'post',
    url: "/admin/deleteimg",
    data: {
      delarr
    }
  })
}
/**
 * 删除数据库所有的图片（虚假删除）
 */
export const deleteallimgapi = (flag) => {
  return ajax({
    method: 'post',
    url: "/admin/deleteallimg",
    data: {
      ISdel: flag
    }
  })
}

/**
 * 获取图片
 */
export const getimglistapi = () => {
  return ajax({
    method: 'get',
    url: "/admin/getimg",
  })
}

/**
 * 登录
 * 
 * 
 * 
 */
export const login = (userinfo) => {
  return ajax({
    method: 'post',
    url: "/api/login",
    data: {
      ...userinfo
    }
  })
}