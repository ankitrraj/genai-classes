import {generateText} from "ai" //vercel sdk install
import 'dotenv/config'  // deepseek api import karne ke liye
import { deepSeek } from '@ai-sdk/deepseek'; //deepseek provider install karne ke liye

const {text} = await generateText({
    model : deepSeek("deepseek-v4-flash"),
    prompt: "16*2 "
})

console.log(text);
