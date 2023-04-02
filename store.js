const codeEditor = document.getElementById('code-editor');
const saveButton = document.getElementById('save-button');

// Load saved code from local storage
codeEditor.value = localStorage.getItem('savedCode');

// Save code to local storage when save button is clicked
saveButton.addEventListener('click', function() {
	localStorage.setItem('savedCode', codeEditor.value);
	alert('Code saved!');
});
