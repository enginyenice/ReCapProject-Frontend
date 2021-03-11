/*
     "rentalId": 1014,
      "rentDate": "2021-03-11T00:00:00",
      "returnDate": null,
      "companyName": "Aile Sirketi",
      "firstName": "Engin",
      "lastName": "Yenice",
      "brandName": "BMW",
      "colorName": "Siyah",
      "carDesctiption": "Deneme araç",
      "modelYear": 2020,
      "dailyPrice": 50.25
*/
export interface Rental{
    rentalId:Number,
    rentDate:Date,
    returnDate:Date,
    companyName:String,
    firstName:String,
    lastName:String,
    brandName:String,
    colorName:String,
    carDescription:String,
    modelYear:Number,
    dailyPrice:Number
}