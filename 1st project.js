console.log('Hello this is first project');

// If use add some notes in add a note than it will store in lical storage
shownote();


let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

    let addtext = document.getElementById("addtext")
    let notes = localStorage.getItem("notes")
    if (notes == null) {

        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    noteobj.push(addtext.value);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    addtext.value = "";
    console.log(noteobj);
    shownote();

});

// for show written notes in add a notes section

function shownote() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {

        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    let html = "";
    noteobj.forEach(function (element, index) {
        html += `
        <div id="notecard" class=" my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1} </h5>
          <p class="card-text"> ${element}</p>
          <button id = "${index}" onclick="delnote(this.id)"  class="btn btn-primary">Delete Note</button>
        </div> 
        </div> `;
    });
  let noteelem=document.getElementById('notes');
  if( noteobj.length != 0) {
     noteelem.innerHTML=html;
  }
  else{
      noteelem.innerHTML=`There is nothing that you note please use add a note box`;
  }
}


// function for  delete the notes

function delnote(index){
    console.log('I am deleting',index);
    let notes = localStorage.getItem("notes")
    if (notes == null) {

        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    noteobj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    shownote();

}

// for search from note 

// const Search = ()=>{
//     let enterval =search.value.toLowerCase;
//     console.log('Please wait data is retrival',enterval);
//     // Array.from(row).forEach(function(element){
//     //     let notecard=element.getElementsByTagName("p")[0].innerText;
//     //     if(notecard.includes(enterval)){
//     //         element.style.display='block';
//     //     }
//     //     else{
//     //         selement.style.display='none'; 
//     //     }



//     // });
//     let notes = localStorage.getItem("notes")

//     console.log(notes)
   
// }


let search = document.getElementById('searchtxt');
search.addEventListener('input', function (e) {

     let txt = (document.getElementById("searchtxt").value).toLowerCase();
    let notes = localStorage.getItem("notes")
    let noteobj = JSON.parse(notes);


   let result = noteobj.filter( function (value){
    value = value.toLowerCase();
    if(value.match(txt))
        return value
    })
    let html = ""
    result.forEach(function (element, index) {
        html += `
        <div id="notecard" class=" my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1} </h5>
          <p class="card-text"> ${element}</p>
          <button id = "${index}" onclick="delnote(this.id)"  class="btn btn-primary">Delete Note</button>
        </div> 
        </div> `;
    });

    let noteelem=document.getElementById('notes');
  if( result.length != 0) {
     noteelem.innerHTML=html;
  }
  else{
      noteelem.innerHTML=`There is nothing that you note please use add a note box`;
  }

    console.log(result);


},false);
