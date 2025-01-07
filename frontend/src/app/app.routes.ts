import { Routes } from '@angular/router';
import { tableComponent } from './business/table/table.component';
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component')
            },
            {
                path: 'orders',
                loadComponent: () => import('./business/orders/orders.component')
            },
            {
                path: 'table',
                component: tableComponent,
                children: [
                    {
                        path: 'products',
                        loadComponent: () => import('./business/table/products/products.component')
                    },
                    {
                        path: 'customers',
                        loadComponent: () => import('./business/table/customers/customers.component')
                    },
                    {
                        path: 'brands',
                        loadComponent: () => import('./business/table/brands/brands.component')
                    },
                    {
                        path: 'categories',
                        loadComponent: () => import('./business/table/categories/categories.component')
                    },
                    {
                        path: 'order-details',
                        loadComponent: () => import('./business/table/order-details/order-details.component')
                    },
                    {
                        path: 'orders',
                        loadComponent: () => import('./business/table/orders/orders.component')
                    },
                    {
                        path: 'sizes',
                        loadComponent: () => import('./business/table/sizes/sizes.component')
                    },
                ]
            },
            {
                path: 'add',
                loadComponent: () =>
                    import('./business/add-edit-products/add-edit-product.component').then((m) => m.AddEditProductComponent)
            },
            {
                path: 'edit/:id',
                loadComponent: () =>
                    import('./business/add-edit-products/add-edit-product.component').then((m) => m.AddEditProductComponent)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
