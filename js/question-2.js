const base_url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";

const api_key = "29ab61d4f2ae4a8184077b0a5b48936f";

const userAction = async () => {

    const response = await fetch(base_url + api_key);

    const myJson = await response.json(); //extract JSON from the http response

    // do something with myJson 

    if (Array.isArray(myJson["results"]) && myJson["results"].length)
    {

    let counter = 0;
    for (let value of myJson["results"])
    {
        document.write(value.name + "<br />");
        document.write(value.rating + "<br />");
        document.write(value.tags.length+ "<br />");
        document.write("<br />");
        counter += 1;
        if (counter ==8) {
            break;
        }
    }    
    }
}
userAction();
    