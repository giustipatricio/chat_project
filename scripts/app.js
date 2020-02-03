//queris
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm =  document.querySelector('.new-name');
const updateMssg =  document.querySelector('.update-mssg');
const rooms =  document.querySelector('.chat-rooms');


//new chat
newChatForm.addEventListener( 'submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
  .then(()=> newChatForm.reset())
  .catch(err => console.log(err));

});
//cambio de chatroom
rooms.addEventListener( 'click', e => {
  if(e.target.tagName === "BUTTON"){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chat => chatUI.render(chat));
  }
});


//cambio de nombre

newNameForm.addEventListener( 'submit', e => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  newNameForm.reset();
  updateMssg.innerText = `your name was updated to ${newName}`;
  setTimeout(() => updateMssg.innertext = '', 3000 );
});
//check local storage
const username = localStorage.username ? localStorage.username : 'anon';


// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username);

//get the chats and render
chatroom.getChats(data => chatUI.render(data));
