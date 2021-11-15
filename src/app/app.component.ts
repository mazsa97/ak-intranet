import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ak-intranet';
}
// Bootstrap tooltip function
$(function () {
$('[data-bs-toggle="tooltip"]').tooltip();
})

// Hide tooltip after route change
$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').click(function () {
       $('[data-bs-toggle="tooltip"]').tooltip("hide");

    });
});




