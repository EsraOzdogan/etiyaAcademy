import { ErrorHandlingInterceptor } from './interceptors/error-handling/error-handling.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/ifNot/if-not.directive';
import { ClickDirective } from './directives/click/click.directive';
import { MultipleDirective } from './directives/multiple/multiple.directive';
import { WelcomeDirective } from './directives/welcome/welcome.directive';
import { StorageModule } from './storage/storage.module';


@NgModule({
  declarations: [
    IfNotDirective,
    ClickDirective,
    MultipleDirective,
    WelcomeDirective,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule
  ],
  exports: [             //diger moduller kullansın diye
    IfNotDirective,
    ClickDirective,
    MultipleDirective,
    WelcomeDirective,
  ],
  providers : [
    {provide: HTTP_INTERCEPTORS, useClass : ErrorHandlingInterceptor, multi : true}
  ]
})
export class CoreModule { }
