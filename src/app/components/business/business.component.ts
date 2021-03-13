import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  leftContentArray:Array<any>  = []
  rightContentArray:Array<any>  = []
  constructor() {
   
   }

  ngOnInit(): void {
    this.setCardContent();
  }


  setCardContent() {
     console.log("working ")
    this.leftContentArray.push(
      {
        "image":"./assets/imgs/Get Paid Instantly.png",
        "heading":"Quick cash disbursement",
        "content":"Get terms loans that your business needs within 72 hrs"
      },
      {
        "image":"./assets/imgs/Low interest rate.png",
        "heading":"Low-interest rate",
        "content":"Achieve your financial goals with an amazing interest rate starting at 13% per annum"
      },
      {
        "image":"./assets/imgs/Secure Payments.png",
        "heading":"Zero Paperwork",
        "content":"Get started instantly by submitting only your basic details & bank statements"
      }
    )
  this.rightContentArray.push(
      {
        "image":"./assets/imgs/freelancer_feature_icon_6@1.5x.png",
        "heading":"Ace your business finances",
        "content":"Manage banking, accounting & everything in between, on one platform"
      },
      {
        "image":"./assets/imgs/Covid.png",
        "heading":"Loans to fight COVID-19",
        "content":"Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh"
      }
    )
  }

}
