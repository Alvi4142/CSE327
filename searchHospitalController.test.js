//const { name } = require('ejs');
const{getHospitalData} = require('./model/searchHospitalModel');

// test('should output doctor name and adress', () => {
//     const text = searchDoctor('arni')
//     expect(text).toBe('1 Dr. Arni Mirpur');


// }
// );
test('should output Hospital name and adress', async () => {
    const data = await getHospitalData("Labaid");
    expect(data).toEqual([{"address": "House- -1 and, 6 Road No 4, Dhaka 1205", 
    "hospital_id": 2, "name": "LABAID Specialized Hospital"}]);
  });
