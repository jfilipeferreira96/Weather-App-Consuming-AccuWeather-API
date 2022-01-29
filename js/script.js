const formCidade = document.querySelector('form');
const card = document.querySelector('.weather-card');
const cityName = document.querySelector('.city');
const temperature = document.querySelector('#temperature');
const information = document.querySelector('#information');


//update imagens
const time = document.querySelector('img.time');


const updateUI = (data) => {
    //console.log(data);
    const { detalhesCidades, tempo } = data;

    temperature.innerHTML = `${tempo.Temperature.Metric.Value}`; 
    cityName.innerHTML = `${detalhesCidades.LocalizedName}, ${detalhesCidades.Country.LocalizedName}`;
    information.innerHTML = `${tempo.WeatherText}`;

    //verificação se está de dia ou noite e atribuição da imagem
    let timeSrc = "";
    if (tempo.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);

    //remover a imagem com classe d none
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }

}

const updatecidade = async (cidade) => {
    const detalhesCidades = await getCidade(cidade);
    const tempo = await getWeather(detalhesCidades.Key);

    return { detalhesCidades, tempo };
}

formCidade.addEventListener('submit', e => {
    e.preventDefault();

    const cidade = formCidade.cidade.value.trim();
    formCidade.reset();
    //atualizar o visual da pagina com a nova cidade
    updatecidade(cidade)
        .then(data => updateUI(data))
        .catch(erro => console.log(erro));

})