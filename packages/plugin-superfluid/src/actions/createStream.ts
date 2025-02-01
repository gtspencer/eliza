// import {
//     composeContext,
//     type Content,
//     elizaLogger,
//     generateObjectDeprecated,
//     type HandlerCallback,
//     type IAgentRuntime,
//     type Memory,
//     ModelClass,
//     type State,
//     type Action,
// } from "@elizaos/core";
// import axios from "axios";

// const getLatestNFTTemplate = `Given the message, extract information about the NFT collection request.

// Format the response as a JSON object with these fields:
// - collectionAddr: the collection address or name
// - limit: number of NFTs to fetch (default to 1 for latest)

// Example response:
// For "Show me the latest NFT from ammelia":
// \`\`\`json
// {
//     "collectionAddr": "ammelia",
//     "limit": 1
// }
// \`\`\`

// For "Show me the latest NFT from Badkids":
// \`\`\`json
// {
//     "collectionAddr": "badkids",
//     "limit": 1
// }
// \`\`\`

// {{recentMessages}}

// Extract the collection information from the above messages and respond with the appropriate JSON.`;


// const GRAPHQL_QUERY = `
// query MarketplaceTokens($collectionAddr: String!, $limit: Int) {
//     tokens(
//         collectionAddr: $collectionAddr
//         limit: $limit
//         sortBy: MINTED_DESC
//     ) {
//         tokens {
//             id
//             tokenId
//             name
//             media {
//                 url
//             }
//             listPrice {
//                 amount
//                 symbol
//             }
//         }
//         pageInfo {
//             total
//             offset
//             limit
//         }
//     }
// }`;

// export default {
//     name: "CREATE_SUPERFLUID_STREAM",
//     similes: ["CREATE_STREAM", "SUPERFLUID_STREAM"],
//     validate: async (runtime: IAgentRuntime, _message: Memory) => {
//         // elizaLogger.log("🔄 Validating Stargaze configuration...");
//         // try {
//         //     const config = await validateStargazeConfig(runtime);
//         //     debugLog.validation(config);
//         //     return true;
//         // } catch (error) {
//         //     debugLog.error(error);
//         //     return false;
//         // }
//     },
//     description: "Create a Superfluid stream",
//     handler: async (
//         runtime: IAgentRuntime,
//         message: Memory,
//         state: State,
//         _options: { [key: string]: unknown },
//         callback?: HandlerCallback
//     ): Promise<boolean> => {
//         elizaLogger.log("Creating Superfluid Stream...");

//         if (!state) {
//             elizaLogger.log("Creating new state...");
//             state = (await runtime.composeState(message)) as State;
//         } else {
//             elizaLogger.log("Updating existing state...");
//             state = await runtime.updateRecentMessageState(state);
//         }

//         try {
            
//         } catch (error) {

//         }
//     },

//     examples: [
//         [
//             {
//                 user: "{{user1}}",
//                 content: {
//                     text: "Show me the latest NFT from ammelia collection",
//                 },
//             },

//             {
//                 user: "{{user1}}",
//                 content: {
//                     text: "whats the latest mint for badkids in stargaze?",
//                 },
//             },
//             {
//                 user: "{{agent}}",
//                 content: {
//                     text: "I'll fetch the latest NFT from the ammelia collection.",
//                     action: "GET_LATEST_NFT",
//                 },
//             },
//             {
//                 user: "{{agent}}",
//                 content: {
//                     text: "Here's the latest NFT: {{dynamic}}",
//                 },
//             },
//         ],
//     ],
// } as Action;