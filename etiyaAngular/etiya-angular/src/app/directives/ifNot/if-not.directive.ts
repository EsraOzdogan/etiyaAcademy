import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfNot]'    //appIfNot idi önceden
})
export class IfNotDirective {
  @Input('ngIfNotElse') elseTemplateRef !:TemplateRef<any>;

  //Ekleme işlemini bir kere yapması için yain ürün sayısı 30dan 29a düştüğünde tekrardan render etmiyor

  private hasView: boolean = false;

  constructor(private viewContainerRef : ViewContainerRef,  //directive uyguladığımız parent element
    private templateRef : TemplateRef<any> //directive uyguladığımız parent elementin içindeki her şey yani productlist.legth===0 tagının içindeki taglar     //directive'i uyguladığımız elementin içindeki child elementler
    ) { }

  @Input() set ngIfNot(condition : boolean){
    if(condition === false && !this.hasView){             //productList.lentgh===0 değeri false ise -ngIfNot olan tagın altındaki tagları gösteriyor ya da true ise else durumunda göstermiyor
      this.viewContainerRef.createEmbeddedView(this.templateRef)
      this.hasView = true;
    } else if (condition === true && this.hasView) {                 // ya da true ise else durumunda göstermiyor
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.elseTemplateRef)     //elseTemplateRef -->  <ng-template #notFound>Ürün yok</ng-template>
      this.hasView = false;
    }
  }

}
