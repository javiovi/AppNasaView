const API_KEY= 'yPCCpHsdwV9H6o8vboglZS33BbWS4UGXq8SX6OEs';
const API_URL= 'https://api.nasa.gov/planetary/apod';


export default async function(urlParams){
    try {
         const response = await fetch(`${API_URL}?api_key=${API_KEY}${urlParams?.length > 0 ? urlParams : ''}`,);
         const data = await response.json();
         return Promise.resolve(data);
    
        }catch(error){
return Promise.reject(error);
    }
}