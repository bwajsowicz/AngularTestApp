import { IProduct } from "./product";
import { Injectable } from "@angular/core";

@Injectable() // is optional 
export class ProductService {
    getProducts() : IProduct[] {
        return [
            {
                "id": 1,
                "name": "Mięso",
                "price": 15,
                "availability": 1
            },
            {
                "id": 2,
                "name": "Jajka",
                "price": 9,
                "availability": 3
                
            },
            {
                "id": 3,
                "name": "Naleśniki",
                "price": 15,
                "availability": 2           
            },
            {
                "id": 4,
                "name": "Piwo",
                "price": 15,
                "availability": 1
            },
            {
                "id": 5,
                "name": "Ser",
                "price": 9,
                "availability": 3
                
            },
            {
                "id": 6,
                "name": "Bułki",
                "price": 15,
                "availability": 0        
            },
            
        ]
    }
}