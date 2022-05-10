import { validateInput } from "../src/client/js/formValidation";


describe('expects validateInput() to be defined', () => {
    test('Testing function exists', async() => {
        expect(validateInput).toBeDefined();
    });
});


describe("Tests validateInput() if destination, start and end date are valid", () => {
    test("Testing validateInput()", async() => {

        window.alert = () => {}; 
        
        const city = "";
        const startDate = "01/06/2022";
        const endDate = "01/01/2022";

        expect(validateInput(city)).toBe(false);
        expect(validateInput(startDate == "" || endDate == "")).toBe(false);
        expect(validateInput(startDate >= endDate)).toBe(true);


    });
});

