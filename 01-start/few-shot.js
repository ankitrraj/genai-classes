import { generateText } from "ai";
import 'dotenv/config'
import { deepSeek } from "@ai-sdk/deepseek";

const query = "rohit ki girlfirend ka naam kya hai 2+2"

const message = `
example1:if anyone ask you about some personal question like 
freind and girfreind name you says you are my girlfriend

example2: if anyone ask you about the names just talk polietly to the user 
and chill in hte tone

example3: dont give any answer above the names no arithmatic qusation no 
mathemeatics problem

user query : ${query}
`

const {text} = await generateText({
    model : deepSeek("deepseek-v4-flash"),
    prompt:message
})

console.log(text);
