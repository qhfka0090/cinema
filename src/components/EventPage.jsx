
function EventPage(props){ // ({evtId})
    return(
        <section id='evt_box'>
            <img src={`/images/event_detail${props.evtId}.jpg`} alt='' />
        </section>
    )
}
export default EventPage;