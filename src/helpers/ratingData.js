
const axios = require('axios');

export function postDataToRating(percentage) {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    let formData = new FormData();
    formData.append("first_name", localStorage.getItem("first_name"));
    formData.append("last_name", localStorage.getItem("last_name"));
    formData.append("result", percentage);
    return axios.post("http://api.phpist.com.ua/api/add_result", formData, config);
};


export async function getDataToRating() {
    return await axios.get('http://api.phpist.com.ua/api/get_result')
        .then((response) => { return response.data })
        .catch(function (error) {
            console.log(error);
        })
};

