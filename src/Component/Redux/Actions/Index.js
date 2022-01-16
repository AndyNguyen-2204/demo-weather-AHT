
export const actFetchApi=(data)=>{
    return{
        type:'FETCH_API',
        data,
    }
}

//lay lon va lat tu call api menu left day len va call api đẩy vào actFetchApi
export const actFetchApiRequest=(data)=>{
  const lat=data?.coord?.lat
  const lon=data?.coord?.lon
    return(dispatch)=>{
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=bd3426733e1b494a2e1457c05aba643e&units=metric`)
        .then(res=>res.json())
        .then(data=>{
            dispatch(actFetchApi(data))
        })
        .catch(
            err=>console.log(err)
            )
    }
}


export const actClickData=(data)=>{
    return{
        type:'CLICK_DATA',
        data
    }
}