export function getDataByQueryParams(data, queryParams) {
    const {continent, country , is_open_to_public} = queryParams;
    if(continent){
        data =data.filter((destination)=>
            destination.continent.toLowerCase().replace(/\s+/g, "") === continent.toLowerCase().replace(/\s+/g, "")
        )
    }
    if(country){
        data = data.filter((destination)=>
            destination.country.toLowerCase().replace(/\s+g/,"") === country.toLowerCase().replace(/\s+/g, "")
        )
    }
    if(is_open_to_public){
        data = data.filter((destination)=> destination.is_open_to_public === JSON.parse(is_open_to_public)
        )
    }
    return data;
}