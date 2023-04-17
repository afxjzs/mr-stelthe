// src/utils/api.js

import axios from "axios"

export const sendRequest = async (userInput, modelName) => {
	const apiKey = process.env.REACT_APP_CHATGPT_API_KEY
	try {
		const response = await axios.post(
			"https://api.openai.com/v1/completions",
			{
				prompt: userInput,
				model: modelName,
				max_tokens: 100,
				n: 1,
				stop: null,
				temperature: 1,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${apiKey}`,
				},
			}
		)

		return response.data
	} catch (error) {
		console.error("Error:", error)
		return { error: "Error fetching data from API." }
	}
}
