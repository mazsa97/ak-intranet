import { Component, OnInit } from '@angular/core';
import { EXTENSIONS } from "./extensions";
declare var $: any;

@Component({
  selector: 'app-telephone-extensions',
  templateUrl: './telephone-extensions.component.html',
  styleUrls: ['./telephone-extensions.component.css']
})
export class TelephoneExtensionsComponent implements OnInit {
  extensions = EXTENSIONS;
  extensionField: any;

  constructor() { }

  ngOnInit(): void { }

  searchFields() {
    // Declare variables
    let input: any, filter: any, table: any, tr: any, tdName: any, i: any, txtValue: any;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("extension-table");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those which don't match the search query
    for (i = 0; i < tr.length; i++) {
      tdName = tr[i].getElementsByTagName("td")[0];
      if (tdName) {
        txtValue = tdName.textContent || tdName.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    // Show "no results found" message when there is no search results
    if ($('tr:visible').length <= 1) {
      $('.no-results').css("display", "block");
      $('.table-extensions').css("margin-bottom", "5px");
    } else {
      $('.no-results').css("display", "none");
      $('.table-extensions').css("margin-bottom", "75px");
    }
  }
  
  clearField(){
    this.extensionField = '';
    // Delay reseting the table, so the input filed can reset first
    setTimeout(() => {this.searchFields()}, 100);
  }
  
}
