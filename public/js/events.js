function joinEventHandler(e){
  e.preventDefault();
  const eventLocation = e.target.dataset.location
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent('53215')}&destinations=${encodeURIComponent(eventLocation)}&units=imperial&key=AIzaSyDDMvRzhH0p3eGfFPLj2wPrPf3Tv2IhiVE`
    let geocodedEvents = {
      name: nameInput.value,
      max_participants: maxPartInput.value,
      description: descInput.value,
      location: locInput.value,
      time_and_date: timeInput.value,
      user_id:[],
      tags: tagInput.value
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://maps.googleapis.com/maps/api/distancematrix/json?',
        'mode': 'no-cors'
      },
      body: JSON.stringify(geocodedEvents)
    })
    .then((res)=>{
      location.href = '/'
    })
    .catch((err)=>alert('location not found'))


    
  }




Array.from (document.getElementsByClassName('joinBtn')).forEach(btn=> btn.addEventListener('click', joinEventHandler))
