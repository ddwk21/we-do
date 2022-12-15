// Get the modal
var modal = document.getElementById("addModal");

// Get the button that opens the modal
var btn = document.getElementById("addEvent");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var submit = document.getElementById("submitBtn")

var form = document.getElementById('modalForm')



// When the user clicks on the button, open the modal
if(btn)
{
  btn.onclick = function() 
  {
  modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function handleSubmit(e){

  e.preventDefault();

  const {nameInput, descInput, locInput, timeInput, maxPartInput, tagInput} = e.target.elements

  let eventData = {
    name: nameInput.value,
    max_participants: maxPartInput.value,
    description: descInput.value,
    location: locInput.value,
    time_and_date: timeInput.value,
    user_id:3, //figure this one out
    tags: tagInput.value
  }

  fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
  .then((res)=>{
    if(res.ok) location.reload()
  })
  .catch((err)=>console.log(err))

  console.log(nameInput.value)

}



form.addEventListener('submit', handleSubmit)

