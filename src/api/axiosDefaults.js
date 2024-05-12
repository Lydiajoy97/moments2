import axios from "axios";

axios.defaults.baseURL  = "https://app-moments-499187305603.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'mulitpart/form-data'
axios.defaults.withCredentials = true 
