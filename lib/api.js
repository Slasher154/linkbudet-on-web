API = {
	getAllModemsInJson: function(context) {
		var getModems = Modems.find().fetch();
		if (getModems.length > 0) { // Modems found
			API.response(context, 200, getModems);
		} else {
			API.response(context, 404, { error: 404, message: 'No modems found.' });
		}
	},
	response: function(context, statusCode, data) {
		context.response.setHeader( 'Content-Type', 'application/json' );
        context.response.statusCode = statusCode;
        context.response.end( JSON.stringify( data ) );
	}
};