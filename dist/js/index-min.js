(()=>{let e=document.querySelector("fb-uploader");e.innerHTML='\n\t\t\t<div class="uploader" id="uploader">\n\t\t\t\t<p>Drop your files here</p>\n\t\t\t</div>\n\t\t\t<form id="uploadForm" style="display: none;">\n\t\t\t\t<input type="file" id="files" name="files" multiple>\n\t\t\t\t<button id="btnSubmit"></button>\n\t\t\t</form>\n\t\t';let t=e.querySelector("#uploader"),n=e.querySelector("#uploadForm"),r=n.querySelector("#files"),s=n.querySelector("#btnSubmit"),l=e.getAttribute("data-upload-url");t.addEventListener("dragover",function(e){e.preventDefault(),t.classList.add("hover")}),t.addEventListener("dragleave",function(e){e.preventDefault(),t.classList.remove("hover")}),t.addEventListener("drop",function(e){e.preventDefault(),t.classList.remove("hover"),r.files=e.dataTransfer.files,s.click()}),n.addEventListener("submit",function(t){t.preventDefault();let r=new XMLHttpRequest;r.open("POST",l),r.send(new FormData(n)),r.onload=(()=>{const t=new CustomEvent("uploaded",{detail:{success:200==r.status,message:200==r.status?"Upload successful":"Upload failed",response:JSON.parse(r.response)}});e.dispatchEvent(t)})})})();