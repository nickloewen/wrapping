function $( x ) { return document.getElementById( x ); }

function generate() {
	var wrappingText = $( "wrappingText" ).value;
	wrappingText = wrappingText.toUpperCase().replace( / /g, "" ).split( "" );

	var charsToGen = parseInt( $( "charsToGen" ).value );
	if ( isNaN( charsToGen ) ) charsToGen = 3060;

	var generatedText = "";
	var addSpaces = $( "addSpaces" ).checked;

	var timesToRun = Math.floor( charsToGen / wrappingText.length );
	if ( addSpaces ) timesToRun = timesToRun / 2;

	for ( var i = 0; i < timesToRun; i++ ) {
		var newArr = shuffle( wrappingText );

		if ( addSpaces ) {
			var newText = newArr.join().replace( /,/g, " " );
			newText = newText.replace( /\b/g, " " );
			// deal w/ non-alphabetic chars (eg +, &)
			newText = newText.replace( /([^a-zA-Z\d\s:])/g, " $1 " );
		} else {
			var newText = newArr.join().replace( /,/g, "" );
		}
		generatedText = generatedText + newText;
		/*
		generatedText = generatedText.replace( /</g, "&lt;" );
		generatedText = generatedText.replace( />/g, "&gt;" );
		*/
		console.log( generatedText );
	}

	$( "generatedText" ).innerHTML = generatedText;
	return false;
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
// via http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffle(o){ //v1.0
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};
