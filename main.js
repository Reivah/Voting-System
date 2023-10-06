const inputUser = document.querySelector('.user-name')
const inputId = document.querySelector('.user-id')
const votingForm = document.querySelector('.voting-form')
const selectOptions = document.querySelector('.select')
const voteBtn = document.querySelector('.vote-btn')
const resultSection = document.querySelector('.result-box')

const users = new Map([
	['jakub', '12'],
	['john', '123'],
	['lily', '1234'],
	['jason', '12345'],
	['mark', '123456'],
	['vanessa', '1234567']
])

const voteValues = new Map()
voteValues.set('Cleaning', 0)
voteValues.set('Gaming', 0)
voteValues.set('Sleeping', 0)

const vote = (e) => {
	e.preventDefault()
	const user = inputUser.value
	const userId = inputId.value
	const voteOption = selectOptions.value
		if(user !== ''){
			if(users.get(user) === userId){
				if(alreadyVoted.has(user)){
					alert(`${user} already voted`)
				}else {
					alreadyVoted.add(user)
					voteValues.set(voteOption, voteValues.get(voteOption) + 1)
				}
			}else {
				alert `Wrong name or ID`
			}
		}else {
			alert('Please write correct name and ID')
		}
		voteResults()
}

const alreadyVoted = new Set()


const voteResults = () => {
	let text = ''
	voteValues.forEach((value, key) => {
		text += `${key} votes ${value}  <br>`
		resultSection.innerHTML = text
		
	})
	resultSection.style.fontSize = 18 + 'px'
	
}

voteBtn.addEventListener('click', vote)






































// const inputName = document.querySelector('.user-name')
// const inputId = document.querySelector('.user-id')
// const voteOptions = document.querySelector('.select')
// const voteBtn = document.querySelector('.vote-btn')
// const resultBox = document.querySelector('.result-box')

// const usersData = new Map([
// 	['jakub', '111111'],
// 	['john', '222222'],
// 	['lily', '333333'],
// 	['jason', '444444'],
// 	['mark', '555555'],
// 	['vanessa', '666666'],
// ])

// const voteTask = new Map()
// voteTask.set('Cleaning', 0)
// voteTask.set('Gaming', 0)
// voteTask.set('Sleeping', 0)

// const votedUsers = new Set()

// const vote = e => {
// 	const user = inputName.value
// 	const userId = inputId.value
// 	const voteOption = voteOptions.value
// 	e.preventDefault()
// 	if (user !== '') {
// 		if (usersData.has(user)) {
// 			if (votedUsers.has(user)) console.log('person already voted')
// 			else {
// 				votedUsers.add(user)
//                 voteTask.set(voteOption, voteTask.get(voteOption) + 1)
// 			}
// 		} else {
//             console.log('nie ma takiej osoby');
// 		}
// 	} else {
// 		alert('blad w pisowni')
// 	}
//     voteText()
// }

// const voteText = () => {
//     let empty = ''
//     voteTask.forEach((value, key) => {
//         resultBox.innerHTML = empty += `${key} votes ${value}`
//     })

// }

// voteBtn.addEventListener('click', vote)
