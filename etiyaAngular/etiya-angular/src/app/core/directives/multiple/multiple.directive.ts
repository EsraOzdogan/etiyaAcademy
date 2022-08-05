import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngMultiple]'
})
export class MultipleDirective {
  //@Input("ngMultipleLet")  letTemplateRef !: TemplateRef<any>;
 //@Input("ngMultipleOf") ofTemplateRef  !: TemplateRef<any>;

  constructor(private viewContainerRef : ViewContainerRef,  private templateRef : TemplateRef<any>) { }


  // @Input() set ngMultipleLet(value : number  ){
  //   for(let i =0; i<= value; i++){
  //     this.viewContainerRef.createEmbeddedView(this.templateRef)
  //   }
  // }

  //  @Input() set ngMultiple(value : number ){
  //    console.log(value)
  //   for(let i =0; i<= value; i++){
  //     this.viewContainerRef.createEmbeddedView(this.templateRef)
  //   }
  // }


  @Input() set ngMultiple(value : number ){
     console.log(value)
    for(let i =0; i< value; i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
  }

}
