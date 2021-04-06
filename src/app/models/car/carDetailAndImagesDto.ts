import { CarImage } from "../carImage/carImage";
import { CarDto } from "./carDto";

export interface CarDetailAndImagesDto{
        car:CarDto,
        carImages:CarImage[]
        
}