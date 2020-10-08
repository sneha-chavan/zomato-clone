import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://developers.zomato.com/api/v2.1/',
        headers: {
            'user-key': '6dafdf800fc460dc06b7351909e43924'
        }
    }
);