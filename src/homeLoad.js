export default function homeLoad(content){

    let header = document.createElement("h1")
    header.textContent = "Pizza Supreme"

    content.appendChild(header)

    content.innerHTML += "Classic Italian Food"

    let logoImg = new Image()
    logoImg.src = function(){
        content.src = this.src
    }
    logoImg.src = "https://static.wixstatic.com/media/a8f494_8f386661aba0491eadc2886c4091d5cb~mv2.png/v1/fill/w_210,h_210,q_90/a8f494_8f386661aba0491eadc2886c4091d5cb~mv2.png"

    content.appendChild(logoImg)

    const tabs = document.querySelector("#tabs")

    let menu = document.createElement("div")
    menu.innerHTML = "Menu"
    tabs.appendChild(menu)
    menu.classList.add("menu")

    let contact = document.createElement("div")
    contact.innerHTML = "Contact us"
    tabs.appendChild(contact)
    contact.classList.add("contact")

}
