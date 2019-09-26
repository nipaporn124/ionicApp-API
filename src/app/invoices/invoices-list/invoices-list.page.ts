import { InvoicesService } from './../../services/invoices.service';
import { Component, OnInit } from '@angular/core';
import { invoice } from 'src/app/models/invoices';
import { Router} from '@angular/router';
@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.page.html',
  styleUrls: ['./invoices-list.page.scss'],
})
export class InvoicesListPage implements OnInit {


  invoicesList: invoice[];
  constructor(private invoicesService: InvoicesService,private router :Router) { }

  ngOnInit() {
    this.invoicesService.getinvoices().subscribe(data => {
      this.invoicesList = data;
    });
  }
ClickItem(n) {
    console.log(n);
    this.router.navigate(['/app/invoices/view'], { queryParams: { id: n.id } });
  }
}
