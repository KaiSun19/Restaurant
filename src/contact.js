export default function loadContact(){
    const menu = document.querySelector(".menuInfo")
    if(menu){
        menu.remove()
    }
    const contactInfo = document.querySelector(".contactInfo")
    if(!contactInfo){
        const contact = document.createElement("div")
        contact.classList.add("contactInfo")
        const phoneNumber =  document.createElement("h2")
        phoneNumber.textContent = "Phone Number : 0123456789"
        const email =  document.createElement("h2")
        email.textContent = "Email : pizza@gmail.com"
        contact.appendChild(phoneNumber)
        contact.appendChild(email)
        const locationImg = document.createElement("img")
        locationImg.src = "images/restaurantLocation.png"
        contact.appendChild(locationImg)
        const body = document.body
        body.appendChild(contact)
    }

}