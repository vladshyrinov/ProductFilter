import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as data from '../../assets/data.json';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

@Injectable()
export class ProductsInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const products: any = data;

        return Observable.of({}).mergeMap(() => {

            if (request.url.endsWith('/api/products') && request.method === 'GET') {
                return Observable.of(new HttpResponse({status: 200, body: products}));
            }

            return next.handle(request);
        }).materialize().delay(500).dematerialize();
    }
}

export let productsInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: ProductsInterceptor,
    multi: true
};
