// src/components/ResponseDisplay.js

import React from "react"

const ResponseDisplay = ({ response }) => {
	return (
		<div className="mx-auto max-w-lg rounded-lg border m-4">
			<h3 className="p-4 font-bold text-center">Response</h3>
			<div className="flex flex-col gap-4 p-4 rounded-sm">
				<p className="p-4 bg-gray-50">{response}</p>
			</div>
		</div>
	)
}

export default ResponseDisplay
