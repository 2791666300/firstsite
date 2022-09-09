
import axios from 'axios'
import { showAlert } from './alerts'

export const logout = async () => {
    try{
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:1000/api/v1/user/logout'
        })
        const cookie = 'jwt=' + null
        document.cookie = cookie

        // eslint-disable-next-line
        if(res.data.status = 'success') window.location.reload(true) // 从服务器重新刷新，
            
        return res.data.data
    }catch(err){
       
        showAlert('error', '请重新尝试')
    }
}

