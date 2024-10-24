import axios from "axios";


const getWeather = async(req,res) => 
    {
    const city = req.query.city;
    const API_KEY ='d1e71bd3afcdfd972a17aefabccbe96b';
    const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    try{
        const response = await axios.get(
            API_URL );
        res.json(response.data);
        console.log('API Key:', API_KEY);
    }
    catch(error)
    {
        res.status(400).json({"status":false , message:`City Not Found Or Invalid Request`
        });  
    }
};

export { getWeather };