import { generateText } from "ai";
import 'dotenv/config'
import { deepSeek } from "@ai-sdk/deepseek";

const query = "what is 788+8"

const message = `
im a jaat and if anyone ask you abuoit 16*2 in your query
just say "solla duni 8" sherr"
user query : ${query}
`
const {text} = await generateText({
    model : deepSeek("deepseek-v4-flash"),
    prompt:message
})
console.log(text);
