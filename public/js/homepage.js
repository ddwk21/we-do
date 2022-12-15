

var btns = Array.from(document.querySelectorAll('.joinBtn'))

function joinEvent(e) {
    console.log(e.target)
    console.log(e.target.dataset.eventid)
    let eventid = e.target.dataset.eventid

    fetch(`/api/events/join/${eventid}`,
        {
            method: 'PUT',
        }
    )
    .then((res) => {if(res.ok) location.reload()} )
    .catch((err)=>console.log(err))
}

btns.forEach((btn)=>btn.addEventListener('click', joinEvent))