module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/tests/setup-jest.ts'],
    rootDir: './',
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/app/shared/components/$1',
    },
};
