import {
    dayOfYear,
    currentDayOfYear,
  } from "https://deno.land/std/datetime/mod.ts";

// Standard library 

// datetime
console.log(dayOfYear(new Date("2020-04-13")));
console.log(currentDayOfYear());