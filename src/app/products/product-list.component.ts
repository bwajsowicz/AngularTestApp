import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

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
    products: IProduct[];
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
    constructor(private _productService: ProductService) {
        this.filter = '';
    }
    RemoveRow() : void 
    {
        this.products.pop();
    };
    ngOnInit() : void {
        console.log("OnInit awakens. ~~P O S E~~ ");
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
    PerformFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}