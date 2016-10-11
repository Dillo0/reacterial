var AppDispatcher = require('../dispatchers/AppDispatcher'),
    EventEmitter  = require('events').EventEmitter,
    AppConstants  = require('../constants/AppConstants'),
    _ = require('underscore');

var _message = "VUTD Flux Data";

function bindMessage(message) {
    _message = message;
}

// Extend Store with EventEmitter to add eventing capabilities
var MapStore = _.extend({}, EventEmitter.prototype, {

  getMessage: function() {
    return _message;
  },
  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },
  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    // Respond to SEARCH_ADDRESS action
    case AppConstants.BIND_MESSAGE:
      searchAddress(action.message);
      break;

    default:
      return true;
  }

  return true;

});

module.exports = AppStore;
