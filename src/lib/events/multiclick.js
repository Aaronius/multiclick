'use strict';

module.exports = function(settings, trigger) {
  window.addEventListener('click', function(event) {
    if (event.detail === settings.count) {
      trigger();
    }
  }, true);
};
