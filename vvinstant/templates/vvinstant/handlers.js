if ( event_class == 'default' ) {
    console.log(message);
    app.numMsgs++;
    app.msgs.push([event_class, message]);
    return false
}