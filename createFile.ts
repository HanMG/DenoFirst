const encoder = new TextEncoder()
const helloText = encoder.encode('Hello, DENO')

await Deno.writeFile("DenoFile.txt", helloText);