// Function that returns an array of events based on relevance and distance

// Weight order - Search Parameter > Interests > Distance

async function feed(Parameters, events) {
    let feedEvents = [];
    //Parameters will be an object holding search param values
    //Events is a list of all events

    //split into a relevant and less relevant pile
    feedEvents = await relevenceOrder(Parameters, events)

    let resultOrder = await distanceSort(feedEvents)

}

function relevenceOrder(parameters, events) {
    let bucketed
    if(!!parameters.search) bucketed = relevenceBuckets(events)
}