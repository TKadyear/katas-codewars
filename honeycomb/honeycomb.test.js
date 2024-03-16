const honeycombStructure = require("./honeycomb");

describe("HoneyComb", () => {
  test("Number 5", () => {
    expect(honeycombStructure(5)).toBe([1,3,1]);
  });
  test("Number 7", () => {

    expect(honeycombStructure(7)).toBe([2,3,2]);
  });
  test("Number 14", () => {
/* 
aa
aaa
aaaa
aaa
aa
*/

expect(honeycombStructure(14)).toBe([2,3,4,3,2]);
});
  test("Number 19", () => {
    expect(honeycombStructure(19)).toBe([3, 4, 5, 4, 3]);
  });
})

    /* 
5 
[1,1,1,1,1]
[1,3,1]
    */
    /* 
7
[1,1,1,1,1,1,1]
[1,3,1]
    */