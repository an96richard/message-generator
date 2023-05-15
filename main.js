const adjectives = ["amazing", "awesome", "great", "wonderful", "terrific", "terrible", "bad", "horrible"]
const  adverbs = ["today", "tomorrow", "in the future", "soon" ]
const nouns = ["day", "week", "surprise", "fortune", "friend" ]
const startingWords = ["You will have a(n) ",
"There is a(n) ",
"Something " 
]

//Helper Function to generate random choices from lists
function pickRandom(list)
{
    return list[Math.floor(Math.random() * list.length)]
}

//Function takes in 4 lists and randomly picks values from each to form a coherent fortune from a fortune cookie
function messageMaker(adjectiveList, nounList, adverbList, startWordList){
    randAdj = pickRandom(adjectiveList)
    randNoun = pickRandom(nounList)
    randAdv = pickRandom(adverbList)
    randSent = pickRandom(startWordList)
    return randSent + randAdj + " " + randNoun + " " + randAdv
}



console.log(messageMaker(adjectives, nouns, adverbs, startingWords))