(() => {
	// Event functions
	function onDragEnter(e) {
		e.preventDefault()
		document.getElementById('uploader').classList.add('hover')
	}

	function onDragLeave(e) {
		e.preventDefault()
		document.getElementById('uploader').classList.remove('hover')
	}

	function onDrop(e) {
		e.preventDefault()
		document.getElementById('uploader').classList.remove('hover')
	}

	// Variables
	let element = document.querySelector('fb-uploader')
	element.innerHTML = `
			<div class="uploader" id="uploader">
				<p>Drop your files here</p>
			</div>
		`

	// Properties
	this.uploadUrl = element.getAttribute('data-upload-url')

	// Events
	element.addEventListener('dragenter', onDragEnter)
	element.addEventListener('dragleave', onDragLeave)
	element.addEventListener('drop', onDrop)
})()