(function(){
  document.designMode='on';
  const s=document.createElement('style');
  s.innerHTML=`body::before{content:'✏️ Edit Mode (ESC to end)';z-index:64;padding:1em;background:white;color:black;display:block;margin:1em;font-size:30px;border:5px solid green;}`;
  document.body.appendChild(s);
  window.scrollTo(0,0);
  document.addEventListener('keyup',e => {
    if(e.key==='Escape'){
      document.designMode='off';
      s.remove();
      document.removeEventListener('keyup',e);
    }
  });
})();
