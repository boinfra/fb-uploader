# fb-uploader
VanillaJS file uploader by drag n'drop

## Installation
```
npm i @boinfra/fb-uploader
```

## Usage
```html
<head>
	...
	<link rel="stylesheet" href="/path/to/fb-uploader/styles/scss/style.css">
</head>
<body>
	...
	<div>
		<fb-uploader data-upload-url="url"></fb-uploader>
	</div>
	...
	<script type="text/javascript" src="/path/to/fb-uploader/js/index.js"></script>
		<script type="text/javascript">
		const uploader = document.querySelector('fb-uploader')
		uploader.addEventListener('uploaded', (e) => {
			console.log(e.detail)
		})
	</script>
</body>
```

```uploaded``` event's details have the following structure:
```
{
	success: boolean,
	message: string,
	response: object
}
```