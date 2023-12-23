// Code your solutions in this file
function writeCards(ArrayofNames){
    let messagesarray=[]
    for (let i =0; i < ArrayofNames.length; i++){
        messagesarray .push(`Thank you, ${ArrayofNames[i]}, for the wonderful surprise gift!`);

    }
    return messagesarray 

}
function countDown(number){
    while (number >= 0) {
        console.log(number--);
      }
}