import { writeFileSync } from 'fs';
import { mockData } from '../rawData/mockData';

// Format the data with proper indentation for readability
const jsonData = JSON.stringify(mockData, null, 2);

// Write to a JSON file in the project root
writeFileSync('access_logs.json', jsonData);

console.log('✅ Data successfully exported to access_logs.json');