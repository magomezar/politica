import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  formulario: FormGroup | any;
  showInfo: boolean = true;
  showShare: boolean = true;
  showCat: boolean = true;
  showSsl: boolean = false;


  constructor(private formBuilder: FormBuilder, private clipboardService: ClipboardService) { }


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      url: ['', [Validators.required, Validators.minLength(3)]],
      urlname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      responsible: ['',Validators.required],
      nif: [''],
      address: ['',Validators.required],
      telf: ['',Validators.required],
      fax: [''],
      extra_info: [''],
      social: [''],
      cif: [''],
      reg: [''],
      mercantil: [''],
      time: ['',Validators.required],
    });
    
  }

  copyContent(text: any) {
    var tmpNode: any = document.createElement( "div" );
    tmpNode.appendChild( text.cloneNode( true ) );
    var str = tmpNode.innerHTML;
    tmpNode = text = null; 
    this.clipboardService.copyFromContent(str);
  }

  ChargeData(_showShare: boolean) {
    this.showShare = _showShare;
  }

  ChargeInfo(_showInfo: boolean) {
    this.showInfo = _showInfo;
  }

  ChargeCat(_showCat: boolean) {
    this.showCat = _showCat;
  }

  ChargeSsl() {
    this.showSsl = !this.showSsl;
    }


  fill(blank: any) {
      return JSON.parse(JSON.stringify(blank));  
  }
}


