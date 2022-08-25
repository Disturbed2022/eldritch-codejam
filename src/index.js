import './index.html';
import './index.scss';
import ancients from "./data/ancients";
import difficulties from "./data/difficulties";
import {brownCards, greenCards, blueCards} from "./data/mythicCards";
import ancientsData from "./data/ancients";


const ancientBlock = document.querySelector('.ancient')
const difficultyBlock = document.querySelector('.difficulty')
const shuffle = document.querySelector('.deck-shuffle')
const deckState = document.querySelector('.deck-state')
const deckCover = document.querySelector('.deck-cover')
const deckColumnState = document.querySelector('.deck-column-state')
let gameState = []
let stageOneStack = []
let stageTwoStack = []
let stageThreeStack = []
let finalStack = []


const resetStack=()=> {
	 stageOneStack = []
	 stageTwoStack = []
	 stageThreeStack = []
	 finalStack = []
	deckCard.classList.add('invisible')
}

const createAncient = (info) => {
	const ancientItem = document.createElement('div')
	ancientItem.classList.add('ancient-item')
	ancientItem.id = info.id
	const ancientImage = document.createElement('img')
	ancientImage.src = info.cardFace
	ancientImage.alt = info.name
	
	ancientItem.insertAdjacentElement('beforeend', ancientImage)
	ancientBlock.insertAdjacentElement('beforeend', ancientItem)
}
ancients.map(item => createAncient(item))

const createDifficulty = (level) => {
	const btn = document.createElement('button')
	btn.classList.add('difficulty-btn')
	btn.id = level.id
	btn.textContent = `${level.name}`
	difficultyBlock.insertAdjacentElement('beforeend', btn)
}

difficulties.map(item => {
	createDifficulty(item)
})


const difficultyBtn = document.querySelectorAll('.difficulty-btn')
const changeDifficulty = () => {
	
	difficultyBtn.forEach((item, i) => {
		item.addEventListener('click', () => {
			gameState.length = 1
			difficultyBtn.forEach(item => {
				item.classList.remove('active')
				deckColumnState.textContent = ''
				deckCard.classList.add('invisible')
				shuffle.classList.remove('hidden')
				deckState.classList.add('hidden')
				deckCover.classList.add('hidden')
				
			})
			item.classList.add('active')
			gameState.push(difficulties[i])
			
		})
	})
}

const ancientItem = document.querySelectorAll('.ancient-item')

ancientItem.forEach((item, i) => {
	item.addEventListener('click', () => {
		ancientItem.forEach(item => {
			gameState = []
			resetStack()
			deckColumnState.textContent = ''
			item.classList.remove('active')
			deckState.classList.add('hidden')
			deckCover.classList.add('hidden')
			
		})
		item.classList.add('active')
		gameState.push(ancients[i])
		
		difficultyBlock.classList.add('active')
		
		difficultyBtn.forEach(item => {
			item.classList.remove('active')
		})
		changeDifficulty()
	})
	
})


const createState = (state, title) => {
	
	const stageContainer = document.createElement('div')
	stageContainer.classList.add('stage-container')
	const stageTitle = document.createElement('div')
	stageTitle.classList.add('stage-text')
	stageTitle.textContent = title
	const dotContainer = document.createElement('div')
	dotContainer.classList.add('dots-container')
	
	const dotGreen = document.createElement('div')
	dotGreen.classList.add('dot')
	dotGreen.classList.add('green')
	dotGreen.textContent = state.greenCards
	
	
	const dotBrown = document.createElement('div')
	dotBrown.classList.add('dot')
	dotBrown.classList.add('brown')
	dotBrown.textContent = state.brownCards
	
	const dotBlue = document.createElement('div')
	dotBlue.classList.add('dot')
	dotBlue.classList.add('blue')
	dotBlue.textContent = state.blueCards
	
	dotContainer.insertAdjacentElement('beforeend', dotGreen)
	dotContainer.insertAdjacentElement('beforeend', dotBrown)
	dotContainer.insertAdjacentElement('beforeend', dotBlue)
	
	stageContainer.insertAdjacentElement('beforeend', stageTitle)
	stageContainer.insertAdjacentElement('beforeend', dotContainer)
	
	deckColumnState.insertAdjacentElement('beforeend', stageContainer)
	
}


shuffle.addEventListener('click', () => {
	shuffle.classList.add('hidden')
	
	
	createState(gameState[0].firstStage, 'Stage 1')
	for (let i = 0; i < gameState[0].firstStage.greenCards; i++) {
		stageOneStack.push(greenCards[Math.floor(Math.random() * greenCards.length)])
	}
	for (let i = 0; i < gameState[0].firstStage.brownCards; i++) {
		stageOneStack.push(brownCards[Math.floor(Math.random() * brownCards.length)])
	}
	for (let i = 0; i < gameState[0].firstStage.blueCards; i++) {
		stageOneStack.push(blueCards[Math.floor(Math.random() * blueCards.length)])
	}
	
	
	createState(gameState[0].secondStage, 'Stage 2')
	
	for (let i = 0; i < gameState[0].secondStage.greenCards; i++) {
		stageTwoStack.push(greenCards[Math.floor(Math.random() * greenCards.length)])
	}
	for (let i = 0; i < gameState[0].secondStage.brownCards; i++) {
		stageTwoStack.push(brownCards[Math.floor(Math.random() * brownCards.length)])
	}
	for (let i = 0; i < gameState[0].secondStage.blueCards; i++) {
		stageTwoStack.push(blueCards[Math.floor(Math.random() * blueCards.length)])
	}
	
	
	createState(gameState[0].thirdStage, 'Stage 3')
	for (let i = 0; i < gameState[0].thirdStage.greenCards; i++) {
		stageThreeStack.push(greenCards[Math.floor(Math.random() * greenCards.length)])
	}
	for (let i = 0; i < gameState[0].thirdStage.brownCards; i++) {
		stageThreeStack.push(brownCards[Math.floor(Math.random() * brownCards.length)])
	}
	for (let i = 0; i < gameState[0].thirdStage.blueCards; i++) {
		stageThreeStack.push(blueCards[Math.floor(Math.random() * blueCards.length)])
	}
	
	finalStack = stageOneStack.concat(stageTwoStack).concat(stageThreeStack)
	
	deckState.classList.remove('hidden')
	deckCover.classList.remove('hidden')
	
	
	// console.log(finalStack)
	// console.log(stageOneStack)
	// console.log(stageTwoStack)
	// console.log(stageThreeStack)
	
	
})
const imgCover = document.querySelector('.deck-cart-cover')
const deckCard = document.querySelector('.deck-card')


let i = 0

deckCover.addEventListener('click', () => {
	
	
	if (deckCard.classList.contains('invisible')){
		deckCard.classList.remove('invisible')
	}

	imgCover.src = finalStack[i].cardFace
	i++
	if (i === finalStack.length){
		deckCover.classList.add('hidden')
	}
})










