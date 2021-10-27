export default function menuLoad(){
    const contact = document.querySelector(".contactInfo")
    if(contact){
        contact.remove()
    }
    const menu = document.querySelector(".menuInfo")
    if(!menu){
        const menuInfo = document.createElement("div")
        menuInfo.classList.add("menuInfo")
        menuInfo.appendChild(addItem("Margherita","A cheese and tomato pizza"))
        menuInfo.appendChild(addItem("Pasta","A cheese and tomato Pasta"))
        menuInfo.appendChild(addItem("Calzone", " A folded Pizza"))
        menuInfo.appendChild(addItem("Garlic Bread", " Ciabatta with Garlic and Herb Butter"))
        menuInfo.appendChild(addItem("Roast Chicken", "Roast Chicken with Gravy"))
        const body = document.body
        body.appendChild(menuInfo)
    }

    
}

function addItem(name, description){
    let menuItem = document.createElement("div")
    let itemName = document.createElement("h2")
    let itemDesc = document.createElement("p")
    itemName.textContent = name
    itemDesc.textContent = description
    itemDesc.style.fontStyle = "italic";
    menuItem.appendChild(itemName)
    menuItem.appendChild(itemDesc)
    return menuItem
}