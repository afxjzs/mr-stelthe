// src/utils/responseUtils.js

export function cleanResponse(response) {
	return response
		.replace(/(\r\n|\n|\r)/gm, "\n") // Normalize line endings
		.replace(/^\n+|\n+$/g, "") // Remove leading and trailing newline characters
		.replace(/\n{2,}/g, "\n") // Replace consecutive newline characters with a single one
}

export function convertNewlinesToBreaks(text) {
	return text.replace(/\n/g, "<br />")
}
