(() => {

	// Variables
	let element = document.querySelector('fb-uploader')
	element.innerHTML = `
			<div class="uploader" id="uploader">
				<p>Drop your files here</p>
			</div>
			<form id="uploadForm" style="display: none;">
				<input type="file" id="files" name="files" multiple>
				<button id="btnSubmit"></button>
			</form>
		`
	let innerDiv = element.querySelector('#uploader')
	let form = element.querySelector('#uploadForm')
	let input = form.querySelector('#files')
	let btnSubmit = form.querySelector('#btnSubmit')

	// Properties
	let uploadUrl = element.getAttribute('data-upload-url')

	// Event functions
	function onDragOver(e) {
		e.preventDefault()
		innerDiv.classList.add('hover')
	}

	function onDragLeave(e) {
		e.preventDefault()
		innerDiv.classList.remove('hover')
	}

	function onDrop(e) {
		e.preventDefault()
		innerDiv.classList.remove('hover')

		input.files = e.dataTransfer.files
		btnSubmit.click()
	}

	function onSubmit(e) {
		e.preventDefault()

		let req = new XMLHttpRequest()
		req.open('POST', uploadUrl)
		req.send(new FormData(form))
		req.onload = () => {
			console.log('Upload done')
		}
	}

	// Events
	innerDiv.addEventListener('dragover', onDragOver)
	innerDiv.addEventListener('dragleave', onDragLeave)
	innerDiv.addEventListener('drop', onDrop)

	form.addEventListener('submit', onSubmit)
})()