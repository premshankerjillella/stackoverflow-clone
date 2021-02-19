import React from 'react';
import axios from 'axios';

const proxy = "https://cors-anywhere.herokuapp.com/";
// const proxy = "http://0.0.0.0:8080/"
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

export const getUserDetails = (id) =>{
    const url = ("https://api.stackexchange.com/2.2/users/"+id+"?order=desc&sort=reputation&site=stackoverflow");
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

export const getUserQuestions = (id) =>{
    const url = ("https://api.stackexchange.com/2.2/users/"+id+"/questions?order=desc&sort=activity&site=stackoverflow");
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

export const getUserTags = (id) =>{
    const url = ("https://api.stackexchange.com/2.2/users/"+id+"/top-tags?site=stackoverflow");
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