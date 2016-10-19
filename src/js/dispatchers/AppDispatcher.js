var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance.
var AppDispatcher = new Dispatcher();

// Handle Actions:
AppDispatcher.handleAction = function(action) {
	this.dispatch({
		source: 'BIND_MESSAGE',
		action: action
	});
}

module.exports = AppDispatcher;
