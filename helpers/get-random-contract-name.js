import fs from 'fs';

/**
 * getRandomContractName helper function (mainly used in tests)
 * Get the name of a random contact from it's JSON file
 * @param {string} path - The relative path the Truffle JSON dir
 * @returns {string} The name of a contact
 */
export default function getRandomContractName(path) {

  // Read the JSON files fomr the path and filter out
  // any non-JSON files (including .swp files etc.)
  const jsonFiles = fs.readdirSync(path)
    .filter(f => f.includes('.json') && !f.includes('.json.'));

  const fileCount = jsonFiles.length;

  if (fileCount <= 0) {
    throw new Error(
      'No valid (JSON) contract files found in provided directory'
    );
  }

  // Generate a random number between 0 and the fileCount
  const randomIndex = Math.floor(fileCount - (Math.random() * fileCount));
  const fileName = jsonFiles[randomIndex];

  // Read the ABI file
  const ABI = JSON.parse(fs.readFileSync(`${path}/${fileName}`, 'utf8'));

  // Test to see if the selected contract has been
  // deployed and has a reachable network address.
  // If it hasn't, the selected contact isn't any good
  // to us and we should try again!
  if (Object.keys(ABI.networks).length === 0) {
    return getRandomContractName(path);
  }

  // Return only the _name_ of the contact
  return fileName.split('.json')[0];
}
