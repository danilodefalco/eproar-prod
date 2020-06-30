import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { AreaResolveService } from './services/area.resolve.services';
import { DeleteComponent } from './pages/delete/delete.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    {
        path: 'edit/:id', component: EditComponent, resolve: {
            area: AreaResolveService
        }
    },
    {
        path: 'delete/:id', component: DeleteComponent, resolve: {
            area: AreaResolveService
        }
    }
];