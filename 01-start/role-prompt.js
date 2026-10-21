import { generateText } from "ai";
import 'dotenv/config'
import { deepSeek } from "@ai-sdk/deepseek";

const query = " not so much text just red backgroudn and sher text just create an html page in my code base folder and ther have the answer of this prompt just add and create file in my current folder";

const message = `
you are a senior software tester that do testings in the codebase 
now you need to give some question asnwer to you your intern about 
testing how he test his products

and you just help all hte mmebr as a senior person in  the team

user query :${query}
`
const {text} = await generateText({
    model: deepSeek("deepseek-v4-flash"),
    prompt:message
})

console.log(text);
