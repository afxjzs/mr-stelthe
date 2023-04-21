// resolvers.js
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const resolvers = {
	Query: {
		requestHistories: async () => {
			return await prisma.requestHistory.findMany()
		},
	},
	Mutation: {
		createRequestHistory: async (_, args) => {
			return await prisma.requestHistory.create({ data: args })
		},
	},
}

module.exports = {
	resolvers,
}
