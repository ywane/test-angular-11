import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable({providedIn: 'root'})
// tslint:disable-next-line:class-name
export class ProductsService {
  constructor(private http: HttpClient) {

  }

  // tslint:disable-next-line:typedef
  getAllProducts(): Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products');
  }
  getSelectedProducts(): Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products?selected=true');
  }
  getAvailableProducts(): Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products?available=true');
  }
}
