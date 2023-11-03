import { describe, it, expect } from 'vitest';
import { permutations } from './index';
describe('permutations', () => {
    it('should generate correct permutations for a single array', () => {
        const input = ['a', 'b'];
        const result = permutations `${input}`;
        const expected = ['a', 'b'];
        expect(result).toEqual(expected);
    });
    it('should generate all combinations for two arrays', () => {
        const roles = ['Founder', 'Builder'];
        const types = ['Startup', 'Nonprofit'];
        const result = permutations `${roles} of a ${types}`;
        const expected = [
            'Founder of a Startup',
            'Founder of a Nonprofit',
            'Builder of a Startup',
            'Builder of a Nonprofit',
        ];
        expect(result).toEqual(expected);
    });
    it('should handle empty arrays and static template strings', () => {
        const roles = ['Founder'];
        const types = []; // Empty array
        const result = permutations `Role: ${roles}, Type: ${types}`;
        const expected = [
            'Role: Founder, Type: ',
        ];
        expect(result).toEqual(expected);
    });
    it('should generate correct permutations for a single array', () => {
        const input = ['a', 'b'];
        const result = permutations `${input}`;
        const expected = ['a', 'b']; // No duplicates 'b', 'a'
        expect(result).toEqual(expected);
    });
});
