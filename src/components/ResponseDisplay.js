import React from "react"
import { cleanResponse, convertNewlinesToBreaks } from "../utils/responseUtils"

const ResponseDisplay = ({ response }) => {
	const cleanedResponse = cleanResponse(response)
	const formattedResponse = convertNewlinesToBreaks(cleanedResponse)

	return (
		<div className="mx-auto max-w-lg rounded-lg border m-4">
			<h3 className="p-4 font-bold">Response</h3>
			<div className="flex flex-col gap-4 p-4 rounded-sm">
				<p
					className="p-4 bg-gray-50"
					dangerouslySetInnerHTML={{ __html: formattedResponse }}
				></p>
			</div>
		</div>
	)
}

export default ResponseDisplay
