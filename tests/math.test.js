const add = (a, b) => a+b;

test('adds 2 + 3 to equal 5', () => {
    const result = add(2,3);
    expect(result).toBe(5);
})