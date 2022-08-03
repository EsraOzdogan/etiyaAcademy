import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appWelcome]'
})
export class WelcomeDirective {
  @Input("appWelcomeThen") thenTemplateRef  !: TemplateRef<any>;

  constructor(private viewContainerRef : ViewContainerRef,  private templateRef : TemplateRef<any>) { }

  @Input() set appWelcome(msValue : number ){

    console.log(msValue)

    if(msValue){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
      setTimeout(()=>{
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.thenTemplateRef)
    }, msValue);
    }




 }

}
