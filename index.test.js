const func = require("./func");

test("adds 2 to 4 to equal 6", () => {
	expect(func.eatShit(2, 4)).toBe(6);
});

test("multiplies 2 and 4 to equal 8", () => {
	expect(func.drinkWater(2, 4)).toBe(8);
});

test("divides 4 by 2 to equal 2", () => {
	expect(func.killBears(4, 2)).toBe(2);
});

test("subtracts 2 from 4 to equal 2", () => {
	expect(func.peelBanana(4, 2)).toBe(2);
});