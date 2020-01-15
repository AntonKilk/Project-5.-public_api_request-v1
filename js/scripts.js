/**********************************
 * Treehouse Techdegree:
 * Project 5. Public API Requests
 *********************************/

 'use strict'

 /* 
Gets 12 random users from URL
 */
let random12UsersURL = "https://randomuser.me/api/?results=12"

/*
 Helper to append multiple children
 */
let appendMultiple = (parent, ...children) => {
    children.forEach(child => parent.append(child))
}

/* 
Search bar. NB! Add functionality!
*/ 
let $searchContainer = $('.search-container')
let $search= $('<form>').attr('action', "#").attr('method', "get")
let $searchInput = $('<input>').attr('type', "search").attr('id', "search-input").attr('class', "search-input").attr('placeholder', "Search...")
let $submit = $('<input value="&#x1F50D;">').attr('type', "submit").attr('id', "search-submit").attr('class', "search-submit")

appendMultiple($search, $searchInput, $submit)
$searchContainer.append($search)

/* 
Creates a random user card
*/
let showUserCard = (user) => {

    let $gallery = $('#gallery') 
    let $card = $('<div>').attr('class', "card") 
    let $imgDiv= $('<div>').attr('class', "card-img-container")
    let $img =$('<img>').attr('class', "card-img").attr('src', user.picture.large).attr('alt', "profile picture")
    let $infoDiv = $('<div>').attr('class', "card-info-container")
    let $infoh3 = $('<h3>').attr('id', `${user.name.first}-${user.name.last}`).attr('class', "card-name cap").text(`${user.name.first} ${user.name.last}`) 
    let $infoEmail = $('<p>').attr('class', "card-text").text(user.email)
    let $infoCity = $('<p>').attr('class', "card-text cap").text(`${user.location.city}, ${user.location.state}`) 

    appendMultiple($infoDiv, $infoh3, $infoEmail, $infoCity)
    $imgDiv.append($img)
    appendMultiple($card, $imgDiv, $infoDiv)
    $gallery.append($card)
}

/* 
Creates a modal card
*/

// Creates container for modal
let createContainer = () => {

    let $modalContainer = $('<div>').attr('class', "modal-container").css('display', "none")
    let $modalDiv = $('<div>').attr('class', "modal")
    let $modalCloseBtn = $('<button>').attr('id', "modal-close-btn").attr('class', "modal-close-btn").html("<strong>X</strong>")

    appendMultiple($modalDiv, $modalCloseBtn,)
    $modalContainer.append($modalDiv)
    $('script:first').before($modalContainer)
}

// Creates modal
let createModal = (user) => {

    let $modalInfoDiv = $('<div>').attr('class', "modal-info-container").css('display', "none")
    let $modalImg = $('<img>').attr('class', "modal-img").attr('src', user.picture.large).attr('alt', "profile picture")
    let $modalh3 = $('<h3>').attr('id', `${user.name.first}-${user.name.last}`).attr('class', "modal-name cap").text(`${user.name.first} ${user.name.last}`)
    let $modalEmail = $('<p>').attr('class', "modal-text").text(user.email)
    let $modalCity = $('<p>').attr('class', "modal-text cap").text(user.location.city) 
    let $modalhr = $('<hr>');
    let $modalPhone = $('<p>').attr('class', "modal-text").text(user.phone)
    let $modalAddress = $('<p>').attr('class', "modal-text").text(`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}`)
    let $modalBirthday = $('<p>').attr('class', "modal-text").text("Birthday: " + user.dob.date.substring(0, 10))
    
    appendMultiple($modalInfoDiv, $modalImg, $modalh3,
        $modalEmail, $modalCity, $modalhr, $modalPhone, $modalAddress, $modalBirthday)
    $('.modal').append($modalInfoDiv);
}

/* 
Open modal window on user card click
*/
 let openModalOnClick = () => {    
    $('.card').click((e) => {
        let $currentID = ($(e.currentTarget).children().eq(1).children().eq(0).attr('id'))
        let $modals = ($('.modal-info-container h3'))
        $.each($modals, function(i, modal) {
            if($currentID == $(modal).attr('id')){
                $(this).parent().css('display', "")
                $('.modal-container').css('display', "")
            }
        }) 
        // Close modal window on X click
        $('#modal-close-btn').click(() => {
            $('.modal-container').css('display', "none")
            $('.modal-info-container').css('display', "none")
        }) 
    })  
}

/* 
Gets data from fetch request and inserts to user cards
*/
let generateUserCard = (data) => {
    data.results.forEach(user => showUserCard(user))
    return data
}

/* 
Gets data from fetch request and inserts to modal card
*/
let generateModalCard = (data) => {
    createContainer()
    data.results.forEach(user => createModal(user))
}

/* 
fetch request from randomUSer
*/
fetch(random12UsersURL)
    .then(response =>response.json())
    .then(generateUserCard)
    .then(generateModalCard)
    .then(openModalOnClick)

    

    
    



