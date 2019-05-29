/**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/topics/dynamic-websites/index.html#polling
 */

function pollingFn() {
 if(window.location.href.match(/^https:\/\/(staging\.)?generalassemb\.ly\/education\/[a-zA-Z0-9\-]+\/[a-zA-Z\-]+\/\d+/)){
		  var priceEl = document.querySelector('.ticket .price .number');
		  return !!priceEl && priceEl.textContent.toLowerCase() === 'free!';
	  }
}

//url match
^https:\/\/(staging\.)?generalassemb\.ly\/education\/[a-zA-Z0-9\-]+\/[a-zA-Z\-]+\/\d+

/// doesn't match these substrings
'online-enrollment-deposit'
'learn-more'