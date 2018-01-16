window.onload = getPars();
    
    function getPars() {
      var currentUrl = window.location.href;
      var n = currentUrl.includes('?');
      
      if ( n === true ) {
        params = currentUrl.replace('~USE YOUR SITE URL TO REPLACE~', '').split('&').map(function(i){
	   return i.replace('utm_', '').replace('%20', ' ').split('=');
        });
      } else {
        params = 'no parameters';
      }
      
      var sourceVal = document.querySelector("#book_form input[name='source']");
      var mediumVal = document.querySelector("#book_form input[name='medium']");
      var campaignVal = document.querySelector("#book_form input[name='campaign']");
      var contentVal = document.querySelector("#book_form input[name='content']");
      
      sourceVal.setAttribute("value", params[0][1]);
      mediumVal.setAttribute("value", params[1][1]);
      campaignVal.setAttribute("value", params[2][1]);
      contentVal.setAttribute("value", params[3][1]);
      
    }
