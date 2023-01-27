import { hello } from ".";

describe('Hello function', () => {
    it('showld return Hello World when args is World', () => {
        // Prepare
        const expectedValue = 'Hello World'; // Definimos el valor esperado
        // execute
        const result = hello('World');
        //validate
        expect(result).toEqual(expectedValue);
    });
    it('showld return Hello when args is empty', () => {
        // Prepare
        const expectedValue = 'Hello '; // Definimos el valor esperado
        // execute
        const result = hello('');
        //validate
        expect(result).toEqual(expectedValue);
    });
    it('showld return message error when args is number 1', () => {
        // Prepare
        const expectedValue = 'Solo acepta valores strings'; // Definimos el valor esperado
        // execute
        const result = hello(1);
        //validate
        expect(result).toEqual(expectedValue);
    });
});