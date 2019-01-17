// Advanced Challenge: Using createElement for Components

// The learning objective of this challenge is to move away from using string templates completely, and use the methods of createElement() and appendChild() to create DOM components.

// createElement()
// JavaScript provides the document.createElement() method which creates a virtual DOM element that doesn't exist in the DOM until you add it.

// appendChild()
// The document.appendChild() method will take a virtual DOM element you created and attach it as a child element of another one.

// Usage:

// // Create an unordered list element
// const list = document.createElement('ul')

// // Create a list item for our list
// const listItem = document.createElement('li')
// listItem.className = "president"
// listItem.textContent = "George Bush"

// // Put the list item on the unordered list
// list.appendChild(listItem)

// console.log(list)

// When you insert the list object to the DOM, it will generate the following HTML.

// <ul>
//     <li class="president">George Bush</li>
// </ul>


// Creating Elements
// Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

const messagesArticle = document.querySelector("#messages");


//Add a new message:
// const message = document.createElement('section');
// message.className = "message";
// message.textContent = "Howdy.";
// messagesArticle.appendChild(message);


//A function to add new messages, to keep it DRY:
const makeMessage = (messageText) => {
    let newMessage = document.createElement('section');
    newMessage.className = "message";
    newMessage.textContent = messageText;
    messagesArticle.appendChild(newMessage);
};

//Can use this function over and over
makeMessage("Hi!!");
makeMessage("How are you?");
makeMessage("Fine, thanks.");
makeMessage("Am I talking to myself?");
makeMessage("YUP.");
