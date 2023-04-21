// src/components/InputForm.js

import React, { useState } from "react"
import { sendRequest } from "../utils/api"
import { cleanResponse } from "../utils/responseUtils"
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const InputForm = ({
	setResponse,
	setTokenCount,
	updateModelName,
	setFullResponse,
}) => {
	const [userInput, setUserInput] = useState("")
	const [modelName, setModelName] = useState("text-davinci-003")
	const [loading, setLoading] = useState(false)

	const CREATE_REQUEST_HISTORY = gql`
		mutation CreateRequestHistory(
			$prompt: String!
			$response: String!
			$tokensUsed: Int!
			$modelName: String!
		) {
			createRequestHistory(
				prompt: $prompt
				response: $response
				tokensUsed: $tokensUsed
				modelName: $modelName
			) {
				id
				createdAt
				prompt
				response
				tokensUsed
				modelName
			}
		}
	`

	const [createRequestHistory] = useMutation(CREATE_REQUEST_HISTORY)

	const handleSubmit = async (event) => {
		event.preventDefault()
		setLoading(true)
		setResponse("Asking...")
		const response = await sendRequest(userInput, modelName)

		setLoading(false)
		updateModelName(modelName)
		setFullResponse(response)
		if (response.error) {
			// Handle the error, e.g., display an error message
			setResponse(response.error)
			setTokenCount(0)
		} else {
			const choice = response.choices[0]
			const cleanedResponse = cleanResponse(choice.text)
			setResponse(choice.text)
			setTokenCount(
				response.usage ? response.usage.total_tokens : response.usage_tokens
			)

			// Save request history to the database
			try {
				const { data, errors } = await createRequestHistory({
					variables: {
						prompt: userInput,
						response: cleanedResponse,
						tokensUsed: response.usage
							? response.usage.total_tokens
							: response.usage_tokens,
						modelName,
					},
				})

				if (errors) {
					console.error("Error creating request history:", errors)
				} else {
					console.log("Request history created:", data.createRequestHistory)
				}
			} catch (error) {
				console.error("Error executing createRequestHistory mutation:", error)
			}
		}
	}

	function cleanResponse(response) {
		return response
			.split("\n")
			.map((line) => line.trim())
			.filter((line) => line.length > 0)
			.join("\n")
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
					<option value="text-curie-001">Curie Codex</option>
					<option value="text-babbage-001">Babbage Codex</option>
					<option value="text-ada-001">Ada Codex</option>
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
					disabled={loading}
				>
					{loading ? (
						<img
							src={`${process.env.PUBLIC_URL}/spinner.svg`}
							alt="loading..."
							className="animate-spin inline w-4 h4"
						/>
					) : (
						"Ask Mr. STELTHē"
					)}
				</button>
			</div>
		</form>
	)
}

export default InputForm
