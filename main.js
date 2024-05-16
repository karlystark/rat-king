const text1Element = document.getElementById('text1');
const text2Element = document.getElementById('text2');
const imageElement = document.getElementById('image');
const choice1Element = document.getElementById('choice1');
const choice2Element = document.getElementById('choice2');

// STORYLINE
const storySegments = [
  {
    text: ["Welcome to Rat King", "please select a choice to get started"],
    image: ["images/intro_image.png", "a rat peeks out of a hole"],
    choices: [
      { text: "I yearn for the mines", nextSegment: 1 },
      { text: "I yearn for the taco bell", nextSegment: 2 }
    ]
  },
  {
    text: ["You are in a dark cave.", "It is very dark."],
    image: ["images/cave.png", "a dark cave"],
    choices: [
      { text: "Climb up", nextSegment: 3 },
      { text: "Rappel down", nextSegment: 4 }
    ]
  },
  {
    text: ["Who's there! You hear shuffling", "The scamper of tiny feet"],
    image: ["images/garbage.png", "a garbage heap"],
    choices: [
      { text: "Investigate", nextSegment: 5 },
      { text: "Not today, satan", nextSegment: 13 }
    ]
  },
  {
    text: ["Your flashlight lands on - oh crap, is it dead?", "Oh no, no no no"],
    image: ["images/hand.png", "a zombie hand lays on the ground"],
    choices: [
      { text: "Touch it", nextSegment: 7 },
      { text: "Get out of there", nextSegment: 13 }
    ]
  },
  {
    text: ["On a small landing, it whispers softly", "'I yearn for taco bell'"],
    image: ["images/dead_rat2.png", "a rat lays on the ground"],
    choices: [
      { text: "potato taco?", nextSegment: 9 },
      { text: "bean burrito?", nextSegment: 10 }
    ]
  },
  {
    text: ["Oh, hello small prince", "The rat looks at you expectantly"],
    image: ["images/rat1.png", "a rat looks up"],
    choices: [
      { text: "ask the rat their name", nextSegment: 11 },
      { text: "tell the rat a story", nextSegment: 12 }
    ]
  },
  {
    text: ["Ouch!", "A potato hits you in the back of the head"],
    image: ["images/potato.png", "a potato"],
    choices: [
      { text: "turn around", nextSegment: 10 },
      { text: "keep running", nextSegment: 13 }
    ]
  },
  {
    text: ["You feel a warmth radiate up your arm", "The hand tells you to hold on"],
    image: ["images/hand2.png", "a zombie hand"],
    choices: [
      { text: "obey the hand", nextSegment: 14 },
      { text: "not today, satan", nextSegment: 13 }
    ]
  },
  {
    text: ["A squeak ricochets off the walls of the cave", "'Who are you?'"],
    image: ["images/rat2.png", "a rat looks up"],
    choices: [
      { text: "'literally nobody'", nextSegment: 15 },
      { text: "'who are you?'", nextSegment: 11 }
    ]
  },
  {
    text: ["'Ah the value menu'", "'Do you think that little of me?'"],
    image: ["images/dead_rat2.png", "a rat lays on the ground"],
    choices: [
      { text: "'I didn't mean to offend you'", nextSegment: 16 },
      { text: "'It's all I can afford'", nextSegment: 17 }
    ]
  },
  {
    text: ["'A snack worthy of a king'", "'Do you want to live forever?'"],
    image: ["images/ratking2.png", "close up of rat face"],
    choices: [
      { text: "'Oh, 100%'", nextSegment: 18 },
      { text: "'No thanks, buddy'", nextSegment: 13 }
    ]
  },
  {
    text: ["'I have no name, for I am eternal'", "'But many call me the Rat King'"],
    image: ["images/ratking2.png", "close up of rat face"],
    choices: [
      { text: "Bow to the Rat King", nextSegment: 18 },
      { text: "Get out of there", nextSegment: 13 }
    ]
  }, //11
  {
    text: ["'Please, do not bore me'", "'I have much to do'"],
    image: ["images/rat3.png", "a rat hunches over"],
    choices: [
      { text: "Let them on their way", nextSegment: 13 },
      { text: "'Wait! Who are you?'", nextSegment: 11 }
    ]
  }, //12
  {
    text: ["Whew, okay", "nothing gained, nothing lost, eh?"],
    image: ["images/dead_rat1.png", "a rat lays on the ground"],
    choices: [
      { text: "start over", nextSegment: 0 },
      { text: "", nextSegment: 0 }
    ]
  }, //13
  {
    text: ["Agh! The hand dissolves", "And in it's place"],
    image: ["images/dead_rat2.png", "a rat lays on the ground"],
    choices: [
      { text: "Who are you?", nextSegment: 11 },
      { text: "I've had enough", nextSegment: 13 }
    ]
  }, //14
  {
    text: ["'Do you wish to be somebody?'", "'Somebody powerful, who lives forever?'"],
    image: ["images/ratface.png", "close up of a rat face"],
    choices: [
      { text: "Oh, 100%", nextSegment: 18},
      { text: "Nah, man", nextSegment: 13}
     ]
  }, //15
  {
    text: ["'And yet, offend you did.'", "'Do you have any idea who I am?'"],
    image: ["images/ratface.png", "close up of a rat face"],
    choices: [
      { text: "I don't, who are you?", nextSegment: 11},
      { text: "No, and I don't want to find out", nextSegment: 13}
     ]
  }, //16
  {
    text: ["'Sad, pitiful'", "'Do you want to live a better life, an eternal life?'"],
    image: ["images/rat3.png", "a rat hunches over"],
    choices: [
      { text: "I mean, yeah", nextSegment: 18},
      { text: "Nah, I'm good", nextSegment: 13}
     ]
  }, //17
  {
    text: ["The earth rumbles around you", "Rat King grows large and hovers above the earth"],
    image: ["images/ratface.png", "close up of a rat face"],
    choices: [
      { text: "Reach out and touch them", nextSegment: 19},
      { text: "Bow on the ground", nextSegment: 20}
     ]
  },//18
  {
    text: ["Sparks! -- the Rat King falls", "'How dare you interrupt this holy ritual!!'"],
    image: ["images/dead_rat2.png", "a rat lays on the ground"],
    choices: [
      { text: "I'm sorry, please forgive me!", nextSegment: 21},
      { text: "Oh shit, I'm getting out of here", nextSegment: 13}
     ]
  },//19
  {
    text: ["'Yes, you serve me well'", "'I yearn for taco bell'"],
    image: ["images/rat2.png", "a rat holds food in its mouth"],
    choices: [
      { text: "Only bean burritos for my king", nextSegment: 22},
      { text: "", nextSegment: 0}
     ]
  }, //20
  {
    text: ["'I will only forgive under one condition...'", "'I yearn for taco bell'"],
    image: ["images/rat2.png", "a rat holds food in its mouth"],
    choices: [
      { text: "Only bean burritos for my king", nextSegment: 22},
      { text: "", nextSegment: 0}
     ]
  }, //21
  {
    text: ["You feel the rush of time course through your veins", "You feel a power you never imagined"],
    image: ["images/burrito.png", "a burrito with stars around it"],
    choices: [
      { text: "live your eternal life in splendor", nextSegment: 0},
      { text: "", nextSegment: 0}
     ]
  },

];

let currentSegmentIndex = 0;

// updateStory: sets inner text of story block elements
function updateStory() {
  // grabs the story segment at the current segment index
  const segment = storySegments[currentSegmentIndex];
  // displays the second button in case it is currently hidden
  choice2Element.style.display = 'block';
  // set the story inner text
  text1Element.innerText = segment.text[0];
  text2Element.innerText = segment.text[1];
  // set the image
  imageElement.src = segment.image[0];
  imageElement.alt = segment.image[1];
  // set the choice/button text for the segment
  choice1Element.innerText = segment.choices[0].text;
  // if there isn't a second choice/button, hide it
  if (segment.choices[1].text) {
    choice2Element.innerText = segment.choices[1].text;
  } else {
    choice2Element.style.display = 'none';
  }
}

/* goToNextSegment: accepts a choice index and reassigns the current
segment index to whatever the next segment of the chosen storyline is */
function goToNextSegment(choiceIndex) {
  const nextSegmentIndex = storySegments[currentSegmentIndex].choices[choiceIndex].nextSegment;
  currentSegmentIndex = nextSegmentIndex;
  updateStory();
}

// Handles when the user clicks the first button
choice1Element.addEventListener('click', () => {
  goToNextSegment(0);
});

// Handles when the user clicks the second button
choice2Element.addEventListener('click', () => {
  goToNextSegment(1);
});

// Story update on render
updateStory();
