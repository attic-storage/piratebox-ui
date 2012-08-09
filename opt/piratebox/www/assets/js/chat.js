function refresh() {
 frame = document.getElementsByName( 'psoread' )[0];
  frame.contentWindow.location.reload()
  }
  interval = window.setInterval( 'refresh()', 8000 );
