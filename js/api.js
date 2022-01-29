const key = 'kLkODWGExq5FH9kshF97vLV5Assew77R'; // api para weather
const language = 'pt-PT';  


//informaçao tempo
const getWeather = async (id) => {

    const query = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`;

    const response = await fetch(query);
    const dataWeather = await response.json();
    console.log(dataWeather);
    return (dataWeather[0]);
};

// get informaçao cidade
const getCidade = async (cidade) => {

    const query = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${cidade}&language=${language}`;

    const response = await fetch(query);
    const data = await response.json();
    return (data[0]);
}


