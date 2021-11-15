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

  constructor() { }

  ngOnInit(): void {
  }
  
  searchFields() {
  // Declare variables
  let input:any, filter: any, table:any, tr: any, td: any, i: any, txtValue:any;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("extension-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
  
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }  
    }
  }
}

}
