import axios from 'axios'
const http=axios.create({
    baseURL:'http://127.0.0.1:4523/m1/3151188-0-default',
    timeout:1000
})

export{
    http
}

