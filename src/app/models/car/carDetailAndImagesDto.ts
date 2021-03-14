import { CarImage } from "../carImage/carImage";
import { Car } from "./car";

export interface CarDetailAndImagesDto{
        car:Car,
        carImages:CarImage[]
        
}