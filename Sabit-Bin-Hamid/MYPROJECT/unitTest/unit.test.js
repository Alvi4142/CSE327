const {getPrescription} = require("./prescriptionModel")
test('show output user id', () => {
    let text = getPrescription('12345');
    expect(text).toBe('user id is 12345');
})