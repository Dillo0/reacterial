/*
* Require Dispatcher and Constants
*/
var AppDispatcher = require('../dispatchers/AppDispatcher'),
	AppConstants  = require('../constants/AppConstants')

// Define actions object.
var AppActions = {
	bindMessage: function(msg) {
		AppDispatcher.handleAction({
			actionType: AppConstants.BIND_MESSAGE,
			message: msg
		});
	}
}

module.exports = AppActions;
