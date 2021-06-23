const { getPackagePath } = require('./utils');

describe("test 'getPackagePath()'", () => {
    it('should be a defined function', () => {
        expect(getPackagePath).not.toBeUndefined();
        expect(getPackagePath).toBeType('function');
    });
});
