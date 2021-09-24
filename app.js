//https://randomuser.me/api

//reload page
const refresh = document.querySelector(".refresh");
refresh.addEventListener("click",function(){
    location.reload();
})
const title_details = document.querySelector(".title_details");
const info_icons = document.querySelector(".info_icons");
const user_img = document.querySelector(".user_img");
//fetching api data


fetch('https://randomuser.me/api')
.then(response => response.json())
.then(async function(data){
    let userData =await data.results[0];
    let imgSrc = `<img src="${userData.picture.large}">`;
    let name_ = `${userData.name.first} ${userData.name.last}`;
    let content_ = `<div class="icon user_ active" data-title="the user is" data-value="${userData.login.username}"></div>
    <div class="icon name_lastname_ active" data-title="my first and last name is" data-value="${userData.name.first} ${userData.name.last}"></div>
    <div class="icon email_ active" data-title="my email address is" data-value="${userData.email}"></div>
    <div class="icon city_ active" data-title="the city i live in is" data-value="${userData.location.city}"></div>
    <div class="icon country_ active" data-title="my country is" data-value="${userData.location.country}"></div>

    <div class="icon password_ active" data-title="my secret password is :)" data-value="${userData.login.password}"></div>`
    
    
    
info_icons.innerHTML = content_;
user_img.innerHTML = imgSrc;
title_details.innerHTML = name_;


const icon = document.querySelectorAll(".icon");
const title_info = document.querySelector(".title_info");


icon.forEach(function (item) {

item.addEventListener("mouseover", function () {
        let titleData = item.getAttribute("data-title");
        let dataValue = item.getAttribute("data-value");

        title_info.innerHTML = titleData;
        title_details.innerHTML = dataValue;

        let activeClass = document.querySelectorAll(".active");

        activeClass.forEach(function (active_) {
            active_.className = active_.className.replace(" active", "");
        })
        item.className += " active";

    });
})

})





