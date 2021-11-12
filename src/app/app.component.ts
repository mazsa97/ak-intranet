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

$(function () {
$('[data-bs-toggle="tooltip"]').tooltip();
})

$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').click(function () {
       $('[data-bs-toggle="tooltip"]').tooltip("hide");

    });
});


