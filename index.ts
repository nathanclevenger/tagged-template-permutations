type Permutation = string[];

function getCombinations<T>(sets: T[][]): T[][] {
  // If any of the sets is empty, replace it with an array containing an empty string
  sets = sets.map(set => (set.length === 0 ? [''] as unknown as T[] : set));

  return sets.reduce<T[][]>(
    (acc, set) => acc.flatMap(x => set.map(y => [...x, y])),
    [[]] as T[][]
  );
}

export const permutations = (strings: TemplateStringsArray, ...values: (string | string[])[]): string[] => {
  // Normalize all values to be arrays of strings
  const valueArrays: string[][] = values.map(value => 
    Array.isArray(value) ? (value.length > 0 ? value : ['']) : [value]
  );

  // Get all combinations of the provided arrays, ensuring each is treated as a string[]
  const allCombinations = getCombinations<string>(valueArrays as string[][]);

  // Build the template literal for each combination
  return allCombinations.map(combination =>
    combination.reduce((acc, value, index) => `${acc}${value}${strings[index + 1] || ''}`, strings[0])
  );
};