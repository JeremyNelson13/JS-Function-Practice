// Your Code Here
//let answer = window.prompt ('Do You Head Left, or Right?')

// let firstAnswer = window.prompt('Do You Head left, or right?')
// //console.log(firstAnswer)
// if (firstAnswer === 'left') {
//     let secondAnswer = window.prompt('You encounter a well-fed black cat. It regards you curiously before scampering into a small hole just large enough to admit a person. Do you follow it, or Do you continue on your path?')
// } else if(answer === 'right') { 
//     let secondAnswer = window.prompt('You head right into a large open area. A cracked chest spills what looks like precious stones onto the floor, the jewels scattered among long dried humanoid bones. Further on you see a door which would allow you to head further right.')
// }
//this is the start function.
function start() {
    let answer = window.prompt('A powerful sorcerer, you arrive at the entrance to dark cave, which quickly forks into two passages headed in opposite directions. Do you head left, or right?')
    if (answer === 'left') {
        goLeft()
    } else if (answer === 'right') {
        goRight()
    }
}
//this function returns to start but is only really used once. can probably be removed in favor of using start() function.
function leftOrRight() {
    start()
}
//below functions govern path left or path right through storyline.
function goLeft() {
    let answer = window.prompt('You come across a well fed black cat. It regards you cooly before scampering away through a gap in the wall. The space would probably admit a person if you tried. Do you follow or do you continue left?')
    if (answer === 'back') {
        leftOrRight()
    } else if (answer === 'follow') {
        follow()
    } else if (answer === 'continue left') {
        continueLeft()
    }
}

function follow () {
    let answer = window.prompt('You follow the cat down a twisting path which opens into a den. Snuggling amongst its kittens is the well-fed cat. It nudges out a fist-sized diamond and rolls it along the floor towards you. The great feline sniffs loudly, as if to say "Take this gift" and tucks its head into its paws, asleep.')
    if (answer === 'back') {
        goLeft()
    } else if (answer === 'take gem' ) {
        window.alert('You rush to the nearest town to have the gem appraised. Though it turns out to be worthless monetarily, it does possess a powerful enchanting effect over non-humans, especially cats. This newfound charm will come in handy on future quests.')
        start()
    }
}

function continueLeft() {
    let answer = window.prompt('You decide to ignore the feline, instead choosing to continue left down the passageway. It seems ludicrous, but you can swear you hear the faint sounds of revelry coming from the far end of the passageway.')
    if (answer === 'back') {
        leftOrRight()
    } else if (answer === 'investigate sound') {
        window.alert('You come upon an impossible scene, a full banquet staffed and attended by goblin-kind. This improbable display seems to have no issue with your abrupt arrival, and a flagon of strong, murky liquid is soon forced into your hand. You spend several hours drinking and carousing with the goblinkin, and leave feeling strangely empowered.')
        start()
    }
}

function goRight() {
    let answer = window.prompt('You come across a sleeping Troll. Beside it is a sturdy warchest, some torn sacks, and scattered gems and coins. Of the jewels and coins you can see, you estimate that there is more than a pittance remaining inside. Further on you see that the path continues, and would bring you nowhere close to the beast. Do you attempt to steal the treasure, or sneak past?')
    if (answer === 'back') {
        leftOrRight()
    } else if (answer === 'steal') {
        steal()
    } else if (answer === 'sneak') {
        sneakRight()
    }
}

function steal() {
    let answer = window.prompt('You cautiously approach the troll. Its belly rises and falls with slow regularity. It is as asleep as asleep could be. Do you gather what is scattered on the floor, or do you attempt to pick the lock?')
    if (answer === 'gather') {
        window.alert('Thinking better of multiclass activities, you set to gathering the scattered gems and coins around the sleeping troll. Though you feel the hair on your neck rising with every second spent at the task, the troll does not stir. Returning to town, you assess your spoils at a local merchant.')
        start()
    } else if (answer === 'pick lock') {
        window.alert('Though you are not a thief by any stretch, you decide to attempt to pick the lock.')
        lockpick()
    } else if (answer === 'back') {
        goRight()
    }
}

function lockpick() {
    let answer = window.prompt('Do you attempt to bash the lock, use a pick, or use magic?')
    if (answer === 'bash lock') {
        window.alert('You push your full weight onto the lock, with an almost comically loud crack, the wood of the chest gives way, tumbling you forward and onto the trolls lap. It is a small comfort that the first bite took your head off.')
        start()
    } else if (answer === 'use pick') {
        window.alert('You produce a small kit of thieving tools, and set to work on the lock. While you are not comfortable with stealing, the chances of the treasure being contested by anyone are slim. After a few moments of work, the lock pops open quietly, revealing several magnificent tomes, and a small opal dagger. Returning to town, you meet a scribe, who conveys you and the tomes to an immediate audience with the castle Lord.')
        start()
    } else if (answer === 'use magic') {
        window.alert('You quickly utter the incantation for unlocking, and the chest almost gleefully opens. Within you find a single dusty and worn book, and a large amount of coinage. Pockets laden with gold, you return to town and begin examining the book. Though it is almost illegibly old, it claims to be the diary of the troll sleeping by the chest, and details its adventures among humankind. A twinge of guilt stirs in you, and you quickly return the book and most of the coins to the chest.')
        start()
    } else if (answer === 'back') {
        steal()
    }
}

function sneakRight() {
    let answer = window.prompt('You decide to let sleeping trolls lie and continue down the path. After some time walking, you come to a natural domed room, with a skylight admitting a single ray of strong light. At the bottom of the beam you can see a small spray of red and blue flowers. Do you pick the flowers?')
    if (answer === 'back') {
        goRight()
    } else if (answer === 'pick flowers') {
        window.alert('You pick several of the flowers, and return to town. A local apothecary identifies them as a rare breed of moonflower, thought to have been extinct since the last Imperial age. They advise that you bring them to the castle Lord at once, as their magical properties are in great need among the populace.')
        start()
    } else if (answer === 'leave') {
        window.alert('You turn to leave, and run fully into the belly and chest of the previously sleeping troll. It seems that you are a capable mage, but a terrible footpad. The troll smiles through tusks, and rears its hand back to strike! Do you dodge, or attempt to cast a spell?')
        trollAttacking()
    }
}

function trollAttacking() {
    let answer = window.prompt('Do you dodge, or cast a spell?')
    if (answer === 'back') {
        sneakRight()
    } else if (answer === 'dodge') {
        window.alert('You dodge under the strike, which carried enough force to upend the troll and send it sprawling forward. You break into a flat sprint back to town, forgetting about both the wildflowers and the chest. Later that evening at the tavern, you contemplate switching careers to the research of magic instead of its practice.')
        start()
    } else if (answer === 'cast spell') {
        window.alert('You quickly ready and cast the first spell that comes to mind...')
        trollFight()
    }
}

function trollFight() {
    let answer = window.prompt('What spell did you cast? Fire, Frost, or Shock?')
    if (answer === 'back') {
        trollAttacking()
    } else if (answer === 'fire') {
        window.alert ('With practiced quickness, you throw a gout of fire from your hands. It catches the troll full in the gullet, and burns clean through with terrifying quickness. The momentum of the beast carries it a few steps further, and it crumples into a smoldering heap-- the mystical fire consuming it to a skeleton in seconds. On your way out of the cavern, you pick a handful of the flowers, and stop at the chest to obtain a large tome and several hundred coins. The townsfolk are most impressed, and refer you to the castle Lord as one who will be capable of defending them in times of need.')
        start()
    } else if (answer === 'frost') {
        window.alert('You quickly send a spray of magic frost towards your adversary. Though the spell is powerful, it seems to have little to no effect on the troll beyond annoyance. It quickly recovers and mauls you terribly. The last thought you have is the voice of your master, reminding you that frost magic empowers trollkin...')
        start()
    } else if (answer === 'shock') {
        window.alert('You embue your palm with scintillating lightning, and place it onto the sternum of the beast. It jerks, and is thrown backwards into a heap. As it struggles to fend off the paralyzing effects of the spell, you grab a wild handful of flowers and beat a hasty exit, making note to return in a few days to investigate the location further. Returning to town, an apothecary notes that though damaged, the sample of moonflower is critically important to the plans of the castle Lord. At the audience, you explain the location, and are granted a pair of mercenaries to further explore...')
        start()
    }
}

start()