import { writeFileSync, mkdirSync } from "node:fs";

const entry = `Subject: Your 6am starts and the paperwork after

Hi,

You are up before six in the morning, out on call-outs all day, and the invoices still wait for you at night. I run a small bookkeeping service for tradespeople, and I take that night pile off your desk.

For $40 a month I chase the unpaid invoices, log the receipts, and send you one clean page each Friday showing what came in, what went out, and what is owed. No software to learn, no hourly billing, and you can cancel any month.

If that sounds useful, reply with a good time for a quick ten-minute call next week and I will show you the Friday page.

Best,
Sarah
Clear Books`;

// Self-check: the bounty asks for about 120 words, subject line included,
// and the gate requires 1-800 characters of UTF-8 text.
const words = entry.trim().split(/\s+/).length;
if (words !== 120) {
  throw new Error(`word count ${words} is not exactly 120`);
}
if (entry.length < 1 || entry.length > 800) {
  throw new Error(`char count ${entry.length} is outside the 1-800 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(`wrote /output/entry.txt (${entry.length} chars, ${words} words)`);
