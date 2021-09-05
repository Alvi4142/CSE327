import prescriptionModel from "./model/prescriptionModel";
it("show prescription", () => {
    let result = getPrescription(1);
    except(result).tobe("adasdads","1",'1-1-2021',"details");
})

const {getPrescription} = require("./prescriptionModel")
test('show output user id', () => {
    let text = getPrescription('12345');
    expect(text).toBe('user id is 12345');
})