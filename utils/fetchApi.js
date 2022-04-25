import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '570fab6934msha3f9c3ea1fbb821p199804jsn004ab9221478'
          }
    });
    return data;
}
