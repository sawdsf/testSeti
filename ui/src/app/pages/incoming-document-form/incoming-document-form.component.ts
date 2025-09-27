import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { IncomingDocumentService } from '@/pages/service/incoming-document.service';
import { LookupService } from '@/pages/service/lookup.service';
import { IncomingDocument } from 'src/interfaces/incoming-document';
import { IncomingDocumentRow } from 'src/interfaces/incoming-document-row';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-incoming-document-form',
    templateUrl: './incoming-document-form.component.html',
    styleUrls: ['./incoming-document-form.component.scss'],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, Button, InputText, DragDropModule, TableModule]
})
export class IncomingDocumentFormComponent implements OnInit {
    
    loading = true;    
    docs: any[] = [];
    error?: string;   
    form: FormGroup;
    doc: IncomingDocument = { 
        documentDate: new Date().toISOString().slice(0,10), 
        documentNumber: '', 
        posted: false,           // <-- добавлено
        rows: [] 
    };
    contragents: any[] = [];
    warehouses: any[] = [];
    tmcs: any[] = [];
    contracts: any[] = [];

    constructor(
        private fb: FormBuilder,
        private svc: IncomingDocumentService,
        private lookup: LookupService
    ) {
        this.form = fb.group({
            documentNumber: ['', Validators.required],
            documentDate: ['', Validators.required],
            contragent: [null, Validators.required],
            contract: [null, Validators.required],
            warehouse: [null, Validators.required]
        });
    }

    ngOnInit(): void {
        this.lookup.getContragents().subscribe(d => this.contragents = d);
        this.lookup.getWarehouses().subscribe(d => this.warehouses = d);
        this.lookup.getTmcs().subscribe(d => this.tmcs = d);
        this.lookup.getContracts().subscribe(d => this.contracts = d);
    }

    addRow() {
        this.doc.rows.push({ tmc: { id:0, name:'' }, quantity: 1, price:0, total:0 } as IncomingDocumentRow);
    }

    removeRow(i:number) {
        this.doc.rows.splice(i,1);
    }

    updateRow(r:IncomingDocumentRow) {
        r.total = (r.quantity||0) * (r.price||0);
    }

    save() {
        this.doc.rows.forEach(r => r.total = (r.quantity||0) * (r.price||0));
        this.svc.create(this.doc).subscribe(() => alert('Документ сохранен'));
    }

    handleCsvUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        if (!input.files || input.files.length === 0) return;

        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target?.result as string;
            this.parseCsv(text);
        };

        reader.readAsText(file);
    }

    private parseCsv(csv: string) {
        const lines = csv.split('\n').map(l => l.trim()).filter(l => l);
        for (const line of lines) {
            const [tmcName, quantity, price] = line.split(',');
            this.doc.rows.push({
                tmc: { id: 0, name: tmcName },
                quantity: Number(quantity),
                price: Number(price),
                total: Number(quantity) * Number(price)
            } as IncomingDocumentRow);
        }
    }

    onTmcChange(row: IncomingDocumentRow, tmcId: number) {
        const tmc = this.tmcs.find(t => t.id === tmcId);
        if (tmc) row.tmc = tmc;
    }
}