// schema.js
const gql = require("graphql-tag")

const typeDefs = gql`
	type RequestHistory {
		id: Int!
		createdAt: String!
		prompt: String!
		response: String!
		tokensUsed: Int!
		modelName: String!
	}

	type Query {
		requestHistories: [RequestHistory!]!
	}

	type Mutation {
		createRequestHistory(
			prompt: String!
			response: String!
			tokensUsed: Int!
			modelName: String!
		): RequestHistory!
	}
`

module.exports = {
	typeDefs,
}
