import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { IncomingDocumentsComponent } from './app/components/incoming-documents/incoming-documents.component';
import { IncomingDocumentFormComponent } from './app/pages/incoming-document-form/incoming-document-form.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'documentation', component: Documentation },
            { path: 'incoming', component: IncomingDocumentsComponent },
            { path: 'incoming/new', component: IncomingDocumentFormComponent },
            { path: 'incoming/:id', component: IncomingDocumentFormComponent },

            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
