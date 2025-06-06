import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import path from 'path';
import { Component } from '@angular/core';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch:'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path: 'products',
                component: ProductsComponent
            }
            
        ]
    }
];
