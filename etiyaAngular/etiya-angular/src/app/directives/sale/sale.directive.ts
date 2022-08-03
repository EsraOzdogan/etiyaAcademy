import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective implements OnInit{
     // Attribute Directive
   @Input() onSaleColor:string = "yellow";  //default deger
   @Input() onSaleText: string = 'On Sale!';
   @Input() isOnSale: boolean = true;


  constructor(private elementRef: ElementRef, private renderer : Renderer2) { //p etiketi buraya geliyor
    //elementRef.nativeElement.style.backgroundColor = 'green'                //p etiketinin arkaplan rengi değiştirdi
    //this.changeBackgroundColor('green' )
    // this.changeBackgroundColor(this.onSaleColor )                            //bir kere newlendiği için güncdeli takip edemiyor o nednele onInit implemente ettik
    // this.elementRef.nativeElement.innerHtml += this.onSaleText;
  }

  ngOnInit(): void {
    if (!this.isOnSale) return;
    this.changeBackgroundColor('green');
    this.addSaleText();

    //this.changeBackgroundColor(this.onSaleColor )
    //this.elementRef.nativeElement.innerHtml += this.onSaleText;
 }


  //çeşitli eventları da dinleyebiliyoruz
  @HostListener('mouseenter') onMouseEnter(){   //backgroundu mouse gidince sarı yapıyor
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow' //private elementRef denildiği için this kullandık
    //this.changeBackgroundColor('red' )
    if (!this.isOnSale) return;
    this.changeBackgroundColor(this.onSaleColor);
  }

  @HostListener('mouseleave') onMouseLeave(){    //backgroundu mouse ayrılınca yeşil yapıyor
    //this.elementRef.nativeElement.style.backgroundColor = 'green' //private elementRef denildiği için this kullandık
    //this.changeBackgroundColor('green' )
    if (!this.isOnSale) return;
    this.changeBackgroundColor('green');
  }


  //dinamikleştirdik kod tekrarı için
  changeBackgroundColor(color: string){
    this.elementRef.nativeElement.style.backgroundColor = color
  }

  addSaleText() {
    const saleTextElement: HTMLElement = this.renderer.createElement('span');  //htmlde span olarak yeni etiket oluşturuyor
    saleTextElement.innerText = this.onSaleText;         //içine saleText'i yazıyor
    // saleTextElement = <span>İndirim!!!</span>;
    this.renderer.appendChild(this.elementRef.nativeElement, saleTextElement);
  }
}

//yani angular css yazmadan directive kullanabilirsin demiş
