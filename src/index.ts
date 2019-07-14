import { MatchReader } from './composition/MatchReader';
import { CsvFileReader } from './composition/CsvFileReader';
import { ConsoleReport } from './reportTargets/consoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Arsenal'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
