
function getcityName() {
    let latitude = document.getElementById("latitude").value;
    let longitude = document.getElementById("longitude").value;
    // let btn= document.getElementById("btn");
    let Temperature = document.getElementById("temperature");
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json.current_weather.temperature);
            console.log(json.current_weather.time);
            console.log(json.current_weather.windspeed);
            console.log(json.current_weather.winddirection);
            Temperature.innerHTML = "Temperature: " + json.current_weather.temperature +
                "<br> Time: " + json.current_weather.time + 
                "<br> Windspeed: " +json.current_weather.windspeed+ 
                "<br> Winddirection: " + json.current_weather.winddirection;
            // console.log("hello world");
        });
}
// btn.addEventListener('click',getcityName);
getcityName();