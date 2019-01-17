// Advanced Challenge: DOM Fragments

// createDocumentFragment()
// What you did in the previous challenge was actually an expensive way of adding those elements to the DOM. Now, it didn't cost you any extra money, but it was expensive in terms of memory and processing power. When the DOM is written to, layout is 'invalidated', and at some point needs to be reflowed.

// We can use a document fragment to reduce the processing and layout cost of constant, rapid-fire DOM updates. You can add as many components to it as you like, and then add the fragment to the DOM as a one-time operation.


// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create an emperor component element
const julius = document.createElement('div')
julius.textContent = "Julius Caesar"
fragment.appendChild(julius)

// Create an emperor component element
const augustus = document.createElement('div')
augustus.textContent = "Augustus Caesar"
fragment.appendChild(augustus)

// Create an emperor component element
const aurelius = document.createElement('div')
aurelius.textContent = "Marcus Aurelius"
fragment.appendChild(aurelius)

/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/
document.querySelector("#emperorList").appendChild(fragment)


// Practice Document Fragment
// Update your code from the previous challenge (in creatingElements.js) to add the chat messages to the messages elements via a document fragment.


const messagesFragment = document.createDocumentFragment();

const makeMessage = (messageText) => {
    let newMessage = document.createElement('section');
    newMessage.className = "message";
    newMessage.textContent = messageText;
    messagesFragment.appendChild(newMessage);
};

makeMessage("Hi!!");
makeMessage("How are you?");
makeMessage("Fine, thanks.");
makeMessage("Am I talking to myself?");
makeMessage("YUP.");

document.querySelector("#messages").appendChild(messagesFragment);