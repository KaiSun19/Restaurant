import homeLoad from './homeLoad';
import menuLoad from './menuLoad';
import loadContact from './contact';


const content = document.getElementById("content")

homeLoad(content)

const menu = document.querySelector(".menu")

menu.addEventListener("click",menuLoad)

const contact = document.querySelector(".contact")

contact.addEventListener("click",loadContact)

