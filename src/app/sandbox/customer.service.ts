import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICustomer } from "./customer";
import { Observable, throwError } from "rxjs"
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class CustomerService {
    private _customerUrl = "http://zakleptoapi.azurewebsites.net/api/customers"

    constructor(private _http: HttpClient) {}

    getCustomers(): Observable<ICustomer[]>  {
        return this._http.get<ICustomer[]>(this._customerUrl);
    }

    private handleError(err: HttpErrorResponse)
    {
    }
}