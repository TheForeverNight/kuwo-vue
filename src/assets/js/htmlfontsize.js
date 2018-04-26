var scale = 1;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale +
  ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
