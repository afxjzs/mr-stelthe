// src/components/DebuggingInfo.js

import React, { useState } from "react"

const DebuggingInfo = ({ tokenCount, modelName, fullResponse }) => {
	const [showDebuggingInfo, setShowDebuggingInfo] = useState(false)

	const toggleDebuggingInfo = () => {
		setShowDebuggingInfo(!showDebuggingInfo)
	}

	return (
		<div className="mx-auto max-w-lg rounded-lg border m-4">
			<div className="flex items-center p-4">
				<h3 className="flex-auto font-bold">Debugging</h3>
				<button
					onClick={toggleDebuggingInfo}
					className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-0 h-10 text-xs"
				>
					{showDebuggingInfo ? "Hide" : "Show"}
				</button>
			</div>
			{showDebuggingInfo && (
				<div className="flex flex-col gap-4 p-4 md:p-8">
					<table>
						<tbody>
							<tr>
								<td className="text-right font-bold">Tokens:</td>
								<td className="font-mono">{tokenCount}</td>
							</tr>
							<tr>
								<td className="text-right font-bold">Model:</td>
								<td className="font-mono">{modelName}</td>
							</tr>
						</tbody>
					</table>

					<pre className="bg-gray-50 p-4 overflow-scroll">
						{JSON.stringify(fullResponse, null, 2)}
					</pre>
				</div>
			)}
		</div>
	)
}

export default DebuggingInfo
