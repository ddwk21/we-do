

var btns = Array.from(document.querySelectorAll('.joinBtn'))

function joinEvent(e) {
    console.log(e.target)
    console.log(e.target.dataset.eventid)
    let eventid = e.target.dataset.eventid
   
    const eventLocation = e.target.dataset.location
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent('53215')}&destinations=${encodeURIComponent(eventLocation)}&units=imperial&key=AIzaSyDDMvRzhH0p3eGfFPLj2wPrPf3Tv2IhiVE`
    console.log(url)

    fetch(`/api/events/join/${eventid}`,
        {
            method: 'PUT',
            body: JSON.stringify({geocodeUrl: url}),
            headers: {
                'content-type': 'application/json'
            }
        }
    )
    .then((res)=>{
        return res.json()
  
  
      })
      .then(distanceData=>{
        console.log(distanceData)

        const elements = distanceData.rows[0].elements[0]
        alert(`Event joined! You are ${elements.distance.text} miles away. It will take ${elements.duration.text} to get there.`)
        location.reload()
      })
    .catch((err)=>console.log(err))
}

btns.forEach((btn)=>btn.addEventListener('click', joinEvent))