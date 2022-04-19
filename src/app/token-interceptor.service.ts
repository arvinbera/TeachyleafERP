import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import UserDataService from './DataService/UserDataService';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');
    let authservice = this.injector.get(UserDataService);
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authservice.GetToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
