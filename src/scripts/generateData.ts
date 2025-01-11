import { generateHistoricalData } from '../utils/dataGenerator';
import { writeFileSync } from 'fs';
import { join } from 'path';

try {
  const data = generateHistoricalData();
  const outputPath = join(process.cwd(), 'src', 'data', 'historicalData.json');

  writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log('Historical data generated successfully!');
} catch (error) {
  console.error('Error generating historical data:', error);
  process.exit(1);
}