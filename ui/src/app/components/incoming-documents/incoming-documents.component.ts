import { Component, OnInit } from '@angular/core';
import { IncomingDocumentService } from '@/pages/service/incoming-document.service';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { IncomingDocument } from 'src/interfaces/incoming-document';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-incoming-documents',
    templateUrl: './incoming-documents.component.html',
    styleUrls: ['./incoming-documents.component.scss'],
    imports: [CommonModule, TableModule, Button]
})
export class IncomingDocumentsComponent implements OnInit {
    loading = true;    
    docs: any[] = [];
    error?: string;   
    documents: IncomingDocument[] = [];

    constructor(private service: IncomingDocumentService) {}

    ngOnInit(): void {
        this.load();
    }

    load(): void {
        this.service.getAll().subscribe(d => this.documents = d);
    }

    post(doc: IncomingDocument) {
        if (!doc.id) return;
        this.service.post(doc.id).subscribe(() => doc.posted = true);
    }

    unpost(doc: IncomingDocument) {
        if (!doc.id) return;
        this.service.unpost(doc.id).subscribe(() => doc.posted = false);
    }
}