import axios from 'axios'
import { showAlert } from './alerts'

export const SignUp = async (objects) => {
    
    try {
        console.log(objects)
       
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:1000/api/v1/user/signup',
            data: objects
        })

        
        // console.log(res)
        if(res.data.status === 'success'){
            showAlert('success', '注册成功！！')
            window.setTimeout(() => {
                window.location.assign('/')
            }, 1500)
        }
        return res
    }catch(err){
        showAlert('error', err.response.data.message)
    }
}


