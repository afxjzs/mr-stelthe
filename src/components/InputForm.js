// src/components/InputForm.js

import React, { useState } from "react"
import { sendRequest } from "../utils/api"

const InputForm = ({
	setResponse,
	setTokenCount,
	updateModelName,
	setFullResponse,
}) => {
	const [userInput, setUserInput] = useState("")
	const [modelName, setModelName] = useState("text-davinci-003")

	const handleSubmit = async (event) => {
		event.preventDefault()
		const response = await sendRequest(userInput, modelName)
		updateModelName(modelName)
		setFullResponse(response)
		if (response.error) {
			// Handle the error, e.g., display an error message
			setResponse(response.error)
			setTokenCount(0)
		} else {
			const choice = response.choices[0]
			setResponse(choice.text)
			setTokenCount(
				response.usage ? response.usage.total_tokens : response.usage_tokens
			)
		}
	}

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault()
			handleSubmit(event)
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto max-w-lg rounded-lg border"
		>
			<div className="flex flex-col gap-4 p-4 md:p-8">
				<select
					value={modelName}
					onChange={(event) => setModelName(event.target.value)}
					className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
				>
					<option value="text-davinci-003">Davinci Codex</option>
					<option value="curie-codex">Curie Codex</option>
					<option value="babbage-codex">Babbage Codex</option>
					<option value="ada-codex">Ada Codex</option>
				</select>

				<textarea
					value={userInput}
					onChange={(event) => setUserInput(event.target.value)}
					onKeyUp={handleKeyPress}
					className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
				/>

				<button
					type="submit"
					className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
				>
					Ask ChatGPT
				</button>
			</div>
		</form>
	)
}

export default InputForm
