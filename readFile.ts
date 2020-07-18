let file = await Deno.open('DenoFile.txt')

await Deno.copy(file, Deno.stdout)

file.close;