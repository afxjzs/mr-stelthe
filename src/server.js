// server.js
const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")
const { typeDefs } = require("./schema")
const { resolvers } = require("./resolvers")

;(async () => {
	const server = new ApolloServer({ typeDefs, resolvers })
	const { url } = await startStandaloneServer(server, {
		context: async ({ req }) => ({ token: req.headers.token }),
		listen: { port: 4000 },
	})
	console.log(`🚀  Server ready at ${url}`)
})()
