fetch('http://localhost:3000/monsters')
.then(r=>r.json())
// .then(data => console.log(data))
.then(data => data.slice(0, 50).forEach(showMonsters))

monsterForm()

function showMonsters(data) {

        const container = document.getElementById('monster-container')
        const displayMonster = document.createElement('div')
        container.append(displayMonster)
        const monsterName = document.createElement('h2')
        monsterName.innerText = 'Name: ' + data.name
        displayMonster.append(monsterName)
        const monsterAge = document.createElement('span')
        monsterAge.innerHTML = 'Age: ' + data.age
        displayMonster.append(monsterAge)
        const monsterDescription = document.createElement('p')
        monsterDescription.textContent = 'Description: ' + data.description
        displayMonster.append(monsterDescription)
}

function monsterForm() {

    const getForm = document.querySelector('#create-monster')
    console.log(getForm)
    getForm.addEventListener('submit', e => {
        e.preventDefault()

        const nameInput = document.getElementById('name')
        const ageInput = document.getElementById('age')
        const descriptionInput = document.getElementById('description')

        newMonster = {
            name: nameInput.value,
            age: ageInput.value,
            description: descriptionInput.value
        }
        console.log(newMonster)
        // debugger
        showMonsters(newMonster)
    })
}




// fetch('http://localhost:3000/monsters')
// .then(r=>r.json())
// // .then(data => console.log(data))
// .then(data => data.slice(51, 100).forEach(nextPage))

// function nextPage(data){
    
    
//     const container = document.getElementById('monster-container')
//     const displayMonster = document.createElement('div')
//     container.append(displayMonster)
//     const monsterName = document.createElement('h2')
//     monsterName.innerText = 'Name: ' + data.name
//     displayMonster.append(monsterName)
//     const monsterAge = document.createElement('span')
//     monsterAge.innerHTML = 'Age: ' + data.age
//     displayMonster.append(monsterAge)
//     const monsterDescription = document.createElement('p')
//     monsterDescription.textContent = 'Description: ' + data.description
//     displayMonster.append(monsterDescription)
// }


// console.log(data)


// POST http://localhost:3000/monsters
// headers:
// {
    //   "Content-Type": "application/json",
//   Accept: "application/json"
// }

// body:
// { name: string, age: number, description: string }