// src/App.js

import React, { useState } from "react"
// import './App.css';
import InputForm from "./components/InputForm"
import ResponseDisplay from "./components/ResponseDisplay"
import DebuggingInfo from "./components/DebuggingInfo"

import { ApolloProvider } from "@apollo/client"
import { client } from "./utils/api"

function App() {
	const [response, setResponse] = useState("")
	const [tokenCount, setTokenCount] = useState(0)
	const [modelName, setModelName] = useState("dunno")
	const [fullResponse, setFullResponse] = useState({})

	return (
		<ApolloProvider client={client}>
			<div className="App bg-white py-6 sm:py-8 lg:py-12">
				<div className="mx-auto max-w-lg">
					<div className="flex items-end">
						<div className="shrink-0 w-64">
							<h1 className="font-bold text-center py-5 text-5xl">
								Mr. STELTHē
							</h1>
						</div>
						<div className="flex-1">
							<img
								src={`${process.env.PUBLIC_URL}/mr-stelthe.webp`}
								alt="mr stelthe"
								className=""
							/>
						</div>
					</div>

					<InputForm
						setResponse={setResponse}
						setTokenCount={setTokenCount}
						updateModelName={setModelName}
						setFullResponse={setFullResponse}
					/>
					<ResponseDisplay response={response} />
					<DebuggingInfo
						tokenCount={tokenCount}
						modelName={modelName}
						fullResponse={fullResponse}
					/>
				</div>
				<div className="text-center text-xs mt-10">
					Copyright &copy; 2023 STELTHē, LLC
				</div>
			</div>
		</ApolloProvider>
	)
}

export default App
