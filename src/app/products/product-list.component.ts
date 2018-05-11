import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Page Title";
    price: number = 1000;
    sampleArray: IProduct[] = [
        {
            "id": 1,
            "name": "Mięso",
            "price": 15
        },
        {
            "id": 2,
            "name": "Jajka",
            "price": 9
        },
        {
            "id": 3,
            "name": "Naleśniki",
            "price": 15
        }
    ];
    AddRow() : void{
        this.sampleArray.push(
            {
                "id": 3,
                "name": "Naleśniki",
                "price": 15
            }
        )
    };
    RemoveRow() : void 
    {
        this.sampleArray.pop();
    };
    ngOnInit() : void {
        console.log("OnInit awakens. ~~P O S E~~ ")
    }
}