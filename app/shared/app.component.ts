import {Component} from 'angular2/core';
import {ProductListComponent} from '../products/product-list.component'
@Component({
    selector:'page-title',
    template:`<div><h1>
        <div>Some App</div></h1>
        <pm-products></pm-products>
    </div>`,
    directives:[ProductListComponent]
})
export class AppComponent
{
    pageTitle: string
}