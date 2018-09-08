import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { AllComponent } from './components/all/all.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

/** 
 * navigatiopn routing for different components 
*/
const routes: Routes = [
    /**
     * User course enrollment page 
     */
    {
        path: 'home',
        component: HomeComponent
    },
    /**
     * Admin page to acces all the user regitered courses
     * have all other privilages like adding coures button
     * deleting particular user enrollment
     */
    {
        path: 'admin/all',
        component: AllComponent
    },
    /**
     * to view course relating to particular user id
     * paramter passed is user id
     */
    {
        path: 'admin/view/:id',
        component: ViewComponent

    },
    /**
     * home page main component 
     */
    {
        path: '',
        component: AdminComponent
    },
    /**
     * form page to add course to the list of available courses by admin
     */
    {
        path: 'admin/add',
        component: AddComponent
    },
    /**
     * page to edit the courses by admin privilage
     */
    {
        path: 'admin/edit',
        component: EditComponent
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }