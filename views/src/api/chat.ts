import qs from 'qs'
import { api } from './api'
export const openChat = (params: any) => {
  return api({
    url: 'v1/completions',
    method: 'post',
    data: JSON.stringify(params),
  })
}

function ajax(url) {
  return new Promise((resolve, reject) => {
    let oAjax
    if (window.XMLHttpRequest)
      oAjax = new XMLHttpRequest()

    else
      oAjax = new ActiveXObject('Microsoft.XMLHTTP')// IE6浏览器创建ajax对象

    oAjax.open('GET', url, true)// 把要读取的参数的传过来。
    oAjax.send()
    oAjax.onreadystatechange = function () {
      if (oAjax.readyState == 4) {
        if (oAjax.status == 200) {
          console.log(oAjax.responseText)
          resolve(oAjax.responseText)
        }

        else { reject(oAjax.status) }
      }
    }
  })
}

export const chat = (message: any) => {
//   return api({
//     url: '/chat-docs/chatno',
//     method: 'post',
//     data: JSON.stringify(params),
//   })
  return api({
    url: '/api/faas/serverless/gpt-api-gw/v1/chat/completions',
    method: 'post',
    data: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 4000,
      temperature: 1.0,
    }),
  })
}
export const chatOpenChat = (message: any) => {
  // return ajax(`http://127.0.0.1:5000/openai/${message}`)
  return ajax(`/test/openai/${message}`)
  // return api({
  //   url: `http://127.0.0.1:5000/openai/${message}`,
  //   method: 'get',
  // })
}

export const chatfile = (params: any) => {
  return api({
    url: '/chatfile',
    method: 'post',
    data: qs.stringify(params),
  })
}

export const getfilelist = () => {
  return api({
    url: '/chat-docs/list',
    method: 'get',
    params: {
      knowledge_base_id: '123',
    },

  })
}

export const deletefile = (params: any) => {
  return api({
    url: '/chat-docs/delete',
    method: 'post',
    data: JSON.stringify(params),
  })
}
