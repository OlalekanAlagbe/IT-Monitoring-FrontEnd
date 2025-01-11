import { generateHistoricalData } from '../utils/dataGenerator.js';
import { writeFileSync } from 'fs';
import { join } from 'path';

const data = generateHistoricalData();
const outputPath = join(process.cwd(), 'src', 'data', 'historicalData.json');

writeFileSync(outputPath, JSON.stringify(data, null, 2));
console.log('Historical data generated successfully!');