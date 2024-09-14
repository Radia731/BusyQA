import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSetting = {
    databaseURL:"https://playground-16e59-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSetting) // initailizing our firebase DB
const database = getDatabase(app) // fethching the DB
const shoppingListInDB = ref(database, "shoppingList") // creating a refrence in our new DB

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl= document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    // if(inputValue !== "")
       push(shoppingListInDB, inputValue)
       clearInputFieldEl() //clear out the input box after we an item is added
})

onValue(shoppingListInDB, function(snapshot){

    shoppingListEl.innerHTML = "";
    if (snapshot.exists()){  
        let itemsArray = Object.entries(snapshot.val())
        
        for(let i = 0; i < itemsArray.length; i++ ){ // looping to extract the IDs and Values

        let currentItem = itemsArray[i]
        
        let currentItemID = currentItem[0] //id extracted
      
        let  currentItemValues = currentItem[1] //value extracted

         appendItemToShoppingListEl(currentItem) }
    } else {
        shoppingListEl.innerHTML = "Your Cart Is...Empty"
    
     }

})


function clearInputFieldEl(){
    inputFieldEl.value = "";
}

function appendItemToShoppingListEl(item) {
    // shoppingListEl.innerHTML += `<li>${itemValue}</li>`

    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")

newEl.addEventListener("click", function(){
       let exactLocationOfItemInDB = ref(database,`shoppingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })

    newEl.textContent = itemValue
    shoppingListEl.append(newEl)
}
