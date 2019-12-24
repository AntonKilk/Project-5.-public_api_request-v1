/**
 * Treehouse Techdegree:
 * Project 5. Public API Requests
 */

 'use strict'

// Helper to append multiple children

let appendMultiple = (parent, ...children) => {
    children.forEach(child => parent.append(child))
}

// Search bar

let $searchContainer = $('.search-container')
let $search= $('<form>').attr('action', "#").attr('method', "get")
let $searchInput = $('<input>').attr('type', "search").attr('id', "search-input").attr('class', "search-input").attr('placeholder', "Search...")
let $submit = $('<input>').attr('type', "submit").attr('value', "&#x1F50D;").attr('id', "search-submit").attr('class', "search-submit")

appendMultiple($search, $searchInput, $submit)
$searchContainer.append($search)

//Gallery markup

let $gallery = $('#gallery') 
let $card = $('<div>').attr('class', "card") 
let $imgDiv= $('<div>').attr('class', "card-img-container")
let $img =$('<img>').attr('class', "card-img").attr('src', "https://placehold.it/90x90").attr('alt', "profile picture")

let $infoDiv = $('<div>').attr('class', "card-info-container")
let $infoh3 = $('<h3>').attr('id', "name").attr('class', "card-name cap").text("first last") 
let $infoEmail = $('<p>').attr('class', "card-text").text("email")
let $infoCity = $('<p>').attr('class', "card-text cap").text("city, state") 

appendMultiple($infoDiv, $infoh3, $infoEmail, $infoCity)
$imgDiv.append($img)
appendMultiple($card, $imgDiv, $infoDiv)
$gallery.append($card)

//Modal markup

let $modalContainer = $('<div>').attr('class', "modal-container")
let $modalDiv = $('<div>').attr('class', "modal")
let $modalCloseBtn = $('<button>').attr('id', "modal-close-btn").attr('class', "modal-close-btn").html("<strong>X</strong>")
let $modalInfoDiv = $('<div>').attr('class', "modal-info-container")
let $modalImg = $('<img>').attr('class', "modal-img").attr('src', "https://placehold.it/125x125").attr('alt', "profile picture")
let $modalh3 = $('<h3>').attr('id', "name").attr('class', "modal-name cap").text("name")
let $modalEmail = $('<p>').attr('class', "modal-text").text("email")
let $modalCity = $('<p>').attr('class', "modal-text cap").text("city") 
let $modalhr = $('<hr>');
let $modalPhone = $('<p>').attr('class', "modal-text").text("(555) 555-5555")
let $modalAddress = $('<p>').attr('class', "modal-text").text("123 Portland Ave., Portland, OR 97204")
let $modalBirthday = $('<p>').attr('class', "modal-text").text("Birthday: 10/21/201")

appendMultiple($modalInfoDiv, $modalImg, $modalh3,
    $modalEmail, $modalCity, $modalhr, $modalPhone, $modalAddress, $modalBirthday)
appendMultiple($modalDiv, $modalCloseBtn, $modalInfoDiv)
$modalContainer.append($modalDiv)
$('script:first').before($modalContainer)
$modalContainer.css('display', "none")

// Open/Close modal window
$card.click(() => $modalContainer.css('display', ""))
$modalCloseBtn.click(() => $modalContainer.css('display', "none"))




