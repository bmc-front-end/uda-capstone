import { handleSubmit } from "../src/client/js/handleSubmit";

describe('Expects handleSubmit() to be defined', () => {
    test('It should be defined', async() => {
        expect(handleSubmit).toBeDefined();
    });
});

