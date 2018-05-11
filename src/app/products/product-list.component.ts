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
    _filter: string;
    get filter() : string {
        return this._filter;
    }
    set filter(value: string) {
        this._filter = value;
        this.filteredProducts = this.filter ? this.PerformFilter(this.filter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [
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
        }
    ];
    AddRow() : void{
        this.products.push(
            {
                "id": 3,
                "name": "Naleśniki",
                "price": 15,
                "availability": 2            
            }
        )
    };
    constructor() {
        this.filteredProducts = this.products;
        this.filter = '';
    }
    RemoveRow() : void 
    {
        this.products.pop();
    };
    ngOnInit() : void {
        console.log("OnInit awakens. ~~P O S E~~ ")
    }
    PerformFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}