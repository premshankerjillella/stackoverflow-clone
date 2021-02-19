import React from 'react';
// const proxy = "https://cors-anywhere.herokuapp.com/";
const proxy = "http://0.0.0.0:8080/"
export const getQuestions = () =>{
    const url = "https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow";
    return fetch(proxy + url,{
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type':'application/json',
            Accept : "application/json",
        },
    })
    .then((response) => response.json())
    .catch(err => console.log(err));
}