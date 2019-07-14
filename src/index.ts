import { MatchReader as MrInheritance } from "./inheritance/MatchReader";
import { MatchResult } from "./MatchResult";
import { MatchReader as Mr } from './composition/MatchReader'
import { CsvFileReader } from "./composition/CsvFileReader";

const iReader = new MrInheritance('football.csv');
iReader.read();

// Man Utd example inheritance
let manUnitedWins = 0;
for (let match of iReader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} times`);

// Newcastle Utd example composition
const csvFileReader = new CsvFileReader('football.csv');
const reader = new Mr(csvFileReader);
reader.load();

let newcastleUnitedWins = 0;
for (let match of reader.matches) {
  if (match[1] === 'Newcastle' && match[5] === MatchResult.HomeWin) {
    newcastleUnitedWins++;
  } else if (match[2] === 'Newcastle' && match[5] === MatchResult.AwayWin) {
    newcastleUnitedWins++;
  }
}
console.log(`Newcastle United won ${newcastleUnitedWins} times`)
