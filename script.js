//pop up the form and close the form


const popup = document.querySelector(".popup");
const new_book_btn = document.querySelector(".addbutton");
new_book_btn.addEventListener('click', openform);
function openform(){
  popup.style.display = 'block';
}
const close_btn = document.querySelector(".close1");
close_btn.addEventListener('click' , closeform);
function closeform(){
	popup.style.display = 'none';
}


// Functionalities after clicking add button

let library = [];
let newBook;
function Book(title , author , status){
	this.title = title;
	this.author= author;
	this.status = status;
}

document.querySelector("#submit").addEventListener("click", addBookToLibrary);

function addBookToLibrary(e){
	e.preventDefault();
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let status = document.getElementById("status").value;

    let newBook = new Book(title , author , status)

    if(newBook.title== '' || newBook.author == ''){
    	alert("Please fill all the required details");
    }
    else{
    	library.push(newBook);
    	showCard(newBook);
    	resetform();
    	
    }
}

function showCard(newBook){
    let newCard = document.createElement("div");
    newCard.classList.add('card' , 'slide-in-right');
    document.body.appendChild(newCard);           


    let titlecon = document.createElement('h4');
    titlecon.textContent = newBook.title;
    titlecon.style.color = "white";
    titlecon.style.fontSize = "x-large";
    titlecon.style.fontFamily = " Gabriola" ; 


    let authorcon = document.createElement('p');
    authorcon.textContent = `by ${newBook.author}`;
    authorcon.style.color = "white";
    authorcon.fontFamily = "papyrus";

    let statuscon = document.createElement('p');
    statuscon.textContent = newBook.status;
    if(statuscon.textContent == "Currently Reading"){
      statuscon.textContent = "Currently Reading..."
    }

    if(statuscon.textContent == "Completed"){
      statuscon.textContent = "Completed!"
    }
    statuscon.style.color = "white";
    statuscon.style.padding = "20px 0";
    statuscon.style.cursor = "pointer";
    statuscon.style.borderBottom = "2px solid white";
    statuscon.style.fontStyle = "italic";
    statuscon.style.borderRadius = "50px";


    statuscon.addEventListener('click' , changetext);
    function changetext(){
      

      let msg1 = "Currently Reading..."; 
      let msg2 = "Completed!" ; 
      if(statuscon.textContent == msg1) {
        statuscon.textContent = msg2;
        
      }
      else{
        statuscon.textContent = msg1;
        
      }
    
     } 

  let buttonRemove = document.createElement('button');
  buttonRemove.classList.add("buttonremove");
  buttonRemove.classList.add("red-bg");
  buttonRemove.textContent = "Remove";
  
  const deletebtn = document.getElementsByClassName("red-bg")
  let len = deletebtn.length;
  for(let i = 0 ; i< len ; i++){
      deletebtn[i].addEventListener('click', toggleDelete(i));
  }

  //appending the details in the card
  newCard.append(titlecon, authorcon, statuscon ,buttonRemove);
    
}    


function toggleDelete(index) {
  temp=[];
  for(let i = 0 ; i<library.length ; i++){
    if(i!=index){
      temp.push(library[i]);
    }
  }
  library= temp;
}

//reset the form
function resetform() {
	popup.style.display = "none";
  let newform= document.querySelector(".newform");
	newform.reset();
}
















     




