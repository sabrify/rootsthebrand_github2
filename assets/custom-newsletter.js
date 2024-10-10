document.addEventListener("DOMContentLoaded", function() {
    const subscribeButton = document.getElementById("SubscribeButton");
    if (subscribeButton) {
      subscribeButton.addEventListener("click", function(event) {
        event.preventDefault();
        const iconArrowButton = document.getElementById("Subscribe");
        if (iconArrowButton) {
          iconArrowButton.click(); // Triggers the hidden button's click
        }
      });
    } else {
      console.error('SubscribeButton not found');
    }
  });
  