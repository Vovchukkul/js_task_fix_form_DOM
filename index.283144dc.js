document.querySelectorAll(".field-text").forEach(function(e){var t=e.getAttribute("name").replace(/([a-z])([A-Z])/g,"$1 $2"),l=e.getAttribute("id"),a=document.createElement("label");a.className="field-label",a.textContent=t,a.setAttribute("for",l),e.after(a),e.placeholder=t.slice(0,1).toUpperCase()+t.slice(1)});
//# sourceMappingURL=index.283144dc.js.map
