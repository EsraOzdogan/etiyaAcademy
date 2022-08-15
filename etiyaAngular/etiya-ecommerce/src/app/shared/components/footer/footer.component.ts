import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  //degisim algılayıcısı yöntemi
})
export class FooterComponent implements OnInit {
  //state ile componenti nasıl haberdar edebilirim? 3 yolu var

 //* onPush Note: 1. Yol @Input'un parent'da yeniden set edilmesi.         //set etme islemi sadece Input()'larda calısıyor  //Statleri sadece parent componentten degil, onPush fonksiyona sahip child componentten de olabilir
  //* sadece bellek adreslerine. bellek adreslerinde verilerin değişikliğine bakmıyor.
  //child.component.ts:   @Input() items!: MegaMenuItem[];
  //parent.component.html: <app-footer [items]="items"></app-footer>
  //parent.component.ts:  items = [{}, {}]

  //* onPush Note: 2. Yol html içerisinde bir event çağrılması.
  //child.component.html:  <button (click)="configureItems()">Child'da Event'de değeri değiştir</button>

  //* onPush Note: 3. Yol Manuel olarak değişikliğin duyurulması.
  //child.component.ts: this.changeDetectorRef.markForCheck();

  constructor() { }

  ngOnInit(): void {
  }

}
