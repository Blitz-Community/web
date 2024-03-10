
function selectPane( id ) {
    const list = document.getElementsByClassName( "pane" )
    //console.log( id+"=visible")   
    for (var element of list) {
        //console.log( element.id )
        if( element.id == id ) {
            element.classList.add("visible")
        } else {
            element.classList.remove("visible")
        }
    }
}
