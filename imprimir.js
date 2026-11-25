/* Imprimir robusto: si el navegador no abre el dialogo, avisa que hacer. */
function imprimirSeguro(w){
  w = w || window;
  var abierto = false;
  function marca(){ abierto = true; }
  window.addEventListener('beforeprint', marca, {once:true});
  try { if (w !== window) w.addEventListener('beforeprint', marca, {once:true}); } catch(e) {}
  try { w.focus(); w.print(); } catch(e) {}
  setTimeout(function(){
    if (abierto) return;
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:99999;background:#FFC533;color:#1F1B2E;border:3px solid #1F1B2E;border-radius:14px;padding:12px 14px;font:700 15px Nunito,sans-serif;box-shadow:4px 4px 0 #1F1B2E;text-align:center';
    d.innerHTML = 'Este navegador no abrió la impresión. Probá con <b>Ctrl+P</b> (en Mac <b>Cmd+P</b>) o abrí la página en <b>Chrome / Edge</b> y volvé a tocar el botón. <button onclick="this.parentNode.remove()" style="margin-left:8px;font:inherit;border:2px solid #1F1B2E;border-radius:8px;background:#fff;padding:2px 10px;cursor:pointer">OK</button>';
    document.body.appendChild(d);
    setTimeout(function(){ if (d.parentNode) d.remove(); }, 15000);
  }, 800);
}
