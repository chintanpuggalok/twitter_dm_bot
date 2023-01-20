// // Copyright 2021 Twitter, Inc.
// // SPDX-License-Identifier: Apache-2.0

// import { Client } from "twitter-api-sdk";
import * as dotenv from "dotenv";
import express from "express";
import { TwitterApi } from 'twitter-api-v2';
import url_unshort from 'url-unshort';
// const {uu}=url_unshort;
import crypto from 'crypto';

// Instantiate with desired auth type (here's Bearer v2 auth)
// let req;

const CALLBACK_URL='http://localhost:3000/callback';

dotenv.config();
const app = express();
const port = 3000
// console.log(process.env.CLIENT_ID)
const twitterClient = new TwitterApi({ clientId: process.env.CLIENT_ID , clientSecret: process.env.CLIENT_SECRET });
const { url, codeVerifier, state } = twitterClient.generateOAuth2AuthLink(CALLBACK_URL, { scope: ['tweet.read', 'users.read', 'offline.access','dm.read','dm.write'] });
// const authLink = await twitterClient.generateAuthLink('http://localhost:3000/callback');
console.log(url);

app.get('/auth',async (req,res)=>{
    

// const authLink = await client.generateAuthLink(CALLBACK_URL);

// By default, oauth/authenticate are used for auth links, you can change with linkMode
// property in second parameter to 'authorize' to use oauth/authorize
res.send(authLink)

})



app.get('/callback', async (req, res) => {
    // Extract tokens from query string
    
    // console.log(req)
    // console.log(req["query"])
    // return res.send(req)
    const { state, code } = req.query;
    // Get the saved oauth_token_secret from session
    
  
    // Obtain access token
    
    
    // let twitterBearer=new TwitterApi(process.env.BEARER_TOKEN)
    try {
      
      const client = new TwitterApi({ clientId: process.env.CLIENT_ID, clientSecret: process.env.CLIENT_SECRET });
      const { client: loggedClient, accessToken, refreshToken, expiresIn } = await client.loginWithOAuth2({ code, codeVerifier, redirectUri: CALLBACK_URL })
      const eventTimeline = await loggedClient.v2.listDmEvents()
      // console.log(eventTimeline.events[0].text)
      const uu=url_unshort();
      const url=await uu.expand(eventTimeline.events[1].text)
      // console.log(url.findIndex('/status/'))
      let index=url.lastIndexOf('/')+1
      let id=url.slice(index)
      console.log(id)
      loggedClient.v2.tweet
      // if (url) console.log('Original url is: ${url}')
      // else console.log('This url can\'t be expanded')
      // let response=https.get(eventTimeline.events[0].text);
      // https.get(eventTimeline.events[0].text,(response)=>{
      //   console.log(response.url)
      //   res.send(response.url)

      // });
      // uu.


      //   const tweets = await loggedClient.v2.search('conversation_id:1612850822202941440',{expansions:['author_id']
      // })

      // let users=tweets['includes']?tweets['includes']['users']:[];
      // // console.log(users);
      // // let commentors=new Set();
      // users?.forEach(async (user)=>{
      //   console.log(user);
      //   try {
      //     const { dm_conversation_id, dm_event_id } = await loggedClient.v2.sendDmToParticipant( user.id,{
      //       text:'sent by the bot'
      //     }
      //     )
      //     console.log(dm_conversation_id)
          
      //   } catch (error) {
      //     console.log(error)
      //   }
        
      //   // loggedClient.v2.  


      // })
      res.send({'message':"ended normal"})
        
    } catch (error) {
      console.log(error)
        res.status(403).send('Invalid verifier or access tokens!');
    }
   
      
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})