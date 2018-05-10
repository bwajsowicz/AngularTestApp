import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    pageTitle: string = "Page Title";
    sampleArray: any[] = [
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
    price: number = 1000;
}