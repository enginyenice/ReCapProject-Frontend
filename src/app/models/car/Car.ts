/*
        public int Id { get; set; }
        public int BrandId { get; set; }
        public int ColorId { get; set; }
        public int ModelYear { get; set; }
        public decimal DailyPrice { get; set; }
        public string Description { get; set; }
*/
export interface Car {
    id:number,
    brandId:number,
    colorId:number,
    modelYear:number,
    dailyPrice:number,
    description:string
}