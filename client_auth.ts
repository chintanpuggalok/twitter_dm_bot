// // Copyright 2021 Twitter, Inc.
// // SPDX-License-Identifier: Apache-2.0

// import { Client, auth } from "twitter-api-sdk";
// // import { TwitterApi } from 'twitter-api-v2';
// import express from "express";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// // TwitterApi.

// const authClient = new auth.OAuth2User({
//   client_id: process.env.CLIENT_ID as string,
//   client_secret: process.env.CLIENT_SECRET as string,
//   callback: "http://127.0.0.1:3000/callback",
//   scopes: ["tweet.read", "users.read", "offline.access"],
// });

// const client = new Client(authClient);

// const STATE = "my-state";

// app.get("/callback", async function (req, res) {
//   try {
//     const { code, state } = req.query;
//     if (state !== STATE) return res.status(500).send("State isn't matching");
//     await authClient.requestAccessToken(code as string);
//     res.redirect("/tweets");
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get("/login", async function (req, res) {
//   const authUrl = authClient.generateAuthURL({
//     state: STATE,
//     code_challenge_method: "s256",
//   });
//   res.redirect(authUrl);
// });

// app.get("/tweets", async function (req, res) {
//   try {
//     //  await client.tweets.findTweetById("1605815097623969792");
//      const tweets = await client.tweets.tweetsRecentSearch({query:'conversation_id:1607911566095314944',
//      expansions:['author_id']
//       })
//       let users=tweets['includes']?tweets['includes']['users']:[];
//       // console.log(users);
//       // let commentors=new Set();
//       users?.forEach((user)=>{
//         console.log(user);
//         client.


//       })
//       // console.log(users);

//     res.send(tweets);
//   } catch (error) {
//     console.log("tweets error", error);
//   }
// });

// app.get("/revoke", async function (req, res) {
//   try {
//     const response = await authClient.revokeAccessToken();
//     res.send(response);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(3000, () => {
//   console.log(`Go here to login: http://127.0.0.1:3000/login`);
// });