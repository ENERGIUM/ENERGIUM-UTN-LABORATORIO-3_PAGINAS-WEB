
async function ObtenerJson(json){
    try{
        let archivo = await fetch(json)
        let data = await archivo.json();
        return data;
    }
    catch (error){
        console.log("Error: ", error);
    }
}

// function construirHTML(data){
// }