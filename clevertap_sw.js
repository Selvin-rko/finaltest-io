importScripts('https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js');

   if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('~clevertap_sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      //registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }else {
    console.log('No service-worker on this browser');
  }
