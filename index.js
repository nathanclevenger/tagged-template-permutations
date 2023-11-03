"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permutations = void 0;
function getCombinations(sets) {
    // If any of the sets is empty, replace it with an array containing an empty string
    sets = sets.map(set => (set.length === 0 ? [''] : set));
    return sets.reduce((acc, set) => acc.flatMap(x => set.map(y => [...x, y])), [[]]);
}
const permutations = (strings, ...values) => {
    // Normalize all values to be arrays of strings
    const valueArrays = values.map(value => Array.isArray(value) ? (value.length > 0 ? value : ['']) : [value]);
    // Get all combinations of the provided arrays, ensuring each is treated as a string[]
    const allCombinations = getCombinations(valueArrays);
    // Build the template literal for each combination
    return allCombinations.map(combination => combination.reduce((acc, value, index) => `${acc}${value}${strings[index + 1] || ''}`, strings[0]));
};
exports.permutations = permutations;
