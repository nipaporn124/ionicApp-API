import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './../../services/invoices.service';
import { invoice, invoiceItem } from 'src/app/models/invoices';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-invoices-view',
  templateUrl: './invoices-view.page.html',
  styleUrls: ['./invoices-view.page.scss'],
})
export class InvoicesViewPage implements OnInit {

  invoicesList: invoice[];
  InvoicesDetail: invoiceItem[];
  ID :number;
  constructor(private InvoicesService: InvoicesService,private activeRoute :ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(d => {
      this.InvoicesService.getinvoices().subscribe(res => {
        this.ID = d['id'];
        console.log('id', this.ID);
        this.invoicesList = res.filter(f => f.id == this.ID);
        if (this.invoicesList.length > 0) {
          this.InvoicesDetail = this.invoicesList[0].invoiceItems;
        }
        console.log('data23', this.invoicesList);
        });
    });
    }
}
