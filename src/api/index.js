const HOST = 'http://localhost:6066';
export function get(url){
    return fetch(HOST+url,{
        method:'GET',
        credentials:"include",
        headers:{
            "Accept":"application/json",
        }
    }).then(res=>res.json())
}
export function post(url,data) {
    return fetch(HOST+url,{
        method:'POST',
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
}