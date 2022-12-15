function joinEventHandler(e){
e.preventDefault();
const eventLocation = e.target.dataset.location
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent('Milwaukee, Wisconsin')}&destinations=${encodeURIComponent (eventLocation)}&units=imperial&key=AIzaSyDDMvRzhH0p3eGfFPLj2wPrPf3Tv2IhiVE`
    console.log(url)
  }
// document.getElementsByClassName('joinBtn').


Array.from (document.getElementsByClassName('joinBtn')).forEach(btn=> btn.addEventListener('click', joinEventHandler))
