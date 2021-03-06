import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url)
        if (req.url.startsWith('/login/url')) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    // 'Access-Control-Allow-Origin': `*`,
                },
            });
        } else {
            const token = localStorage.getItem('accessToken');
            if (req.url.startsWith('/api/url')) {
                console.log('intercepted put request');

                req = req.clone({
                    setHeaders: {
                        Authorization: `${token}`,
                        'Access-Control-Allow-Origin': `*`,
                    },
                });
            }
        }
        return next.handle(req);
    }
}
