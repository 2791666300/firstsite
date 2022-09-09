import axios from 'axios'
import { showAlert } from './alerts'

export const getAllShopDatas = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:1000/api/v1/shopdata'
        })


        /*
        把数据写成下面这样的格式
        {
            hats: [],
            sneakers: []
        }
        */
        const newdatas = res.data.data.shopdatas.reduce((acc, data) => {
            const { title, items } = data;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});

        return newdatas
    } catch (err) {

        showAlert('error', '请重新尝试')
    }
}
