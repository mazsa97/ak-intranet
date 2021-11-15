import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LINKS } from "./website_links";
declare var $ :any;

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
  
  links = LINKS;
  thumbnailPath = 'assets/images/thumbnails/';

  constructor(public router: Router) {
    // router.events.subscribe((val) =>
    //   this.checkFilter()
    // );
  }

  ngOnInit(): void { 
    // $(window).resize(function(){
    // 
    //     if($(window).width() <= 767){
    //       $('.blue').removeClass('blue');
    //     }  else {
    //           $('#.link-list div').removeClass('col');
    //       }
    // 
    //   });
  }
  
  // Hide "All" filter button when no filter is selected
  // checkFilter() {
  //   if (this.router.url == "/websites") {
  //     $('.all-filter').hide();
  //   } else {
  //     $('.all-filter').show();
  //   }
  // }
  
  // checkWidth() {
  //   if ($(window).width() > 768) {
  //       $('.link-list div').addClass('col');
  //   } else {
  //       $('#.link-list div').removeClass('col');
  //   }
}



