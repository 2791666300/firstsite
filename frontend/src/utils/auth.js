import axios from 'axios'
import { showAlert } from './alerts'


class Auth {
    constructor() {
        this.user = []
  
    }

    login = async ({email, password}) => {
    
        try {
           
            const res = await axios({
                method: 'POST',
                url: 'http://localhost:1000/api/v1/user/login',
                data: {
                    email,
                    password
                }
               
            })
    
            const UserArr = res.data.data.user
            console.log(Object.keys(UserArr))
            Object.keys(UserArr).forEach(el => localStorage.setItem(el, UserArr[el]))

            this.user = UserArr
            
            if(res.data.status === 'success'){
    
                const cookie = 'jwt=' + res.data.token
                window.document.cookie = cookie
                showAlert('success', '登录成功！！')
                // window.setTimeout(() => {
                //     window.location.assign('/')
                // }, 1500)
            }
            return res
        }catch(err){
            showAlert('error', err.response.data.message)
        }
    }
    
  
    async login(email, password) {
        if (email === '2791@.com' && password === '123') {
            console.log('登录成功')
            this.user = [{ name: 'messi', email: '2791@qq.io', photo: 'user-1.jpg', role: 'admin', passwrod: 'adfasdfasfas' }]
            return this
        } else {
            console.log('email或者password错误, 请重新输入')
        }
  
    }
  
    async logout(name, email, photo, password) {
        if (name && email && photo && password) {
  
            this.user = [{ name: [name], email: [email], photo: [photo], role: 'user', passwrod: [password] }]
        } else {
            console.log('请输入数据')
        }
  
    }
  
    async sigout() {
        this.user = []
        console.log('登出成功')
    }
  }
  
  const auth = new Auth()
  
  
  module.exports = auth
  