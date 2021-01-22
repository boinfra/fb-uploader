class Uploader {

	// Properties
	private uploadUrl: string
	private childDiv: Element

	// Constructor
	constructor(private element: Element) {
		if (element === null || element === undefined) {
			element = document.querySelector('fb-uploader')
		}

		// Content
		element.innerHTML = `
			<div class="uploader" id="uploader">
				<p>Drop your files here</p>
			</div>
		`

		// this.childDiv = document.getElementById('uploader')

		// Properties
		this.uploadUrl = element.getAttribute('data-upload-url')

		// Events
		element.addEventListener('dragenter', this.onDragEnter)
		element.addEventListener('dragleave', this.onDragLeave)
		element.addEventListener('drop', this.onDrop)
	}

	// Events
	private onDragEnter(e: Event) {
		e.preventDefault()
		document.getElementById('uploader').classList.add('hover')
	}

	private onDragLeave(e: Event) {
		e.preventDefault()
		document.getElementById('uploader').classList.remove('hover')
	}

	private onDrop(e: Event) {
		e.preventDefault()
		document.getElementById('uploader').classList.remove('hover')
	}
}

(() => {
	// Variables
	let uploaderElement: Uploader = new Uploader(document.querySelector('fb-uploader'))
})()