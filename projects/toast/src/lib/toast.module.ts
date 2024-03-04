import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastComponent } from './toast.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ToastComponent],
  exports: [ToastComponent]
})
export class ToastModule {
  public static forRoot(config): ModuleWithProviders<ToastModule> {
    return {
      ngModule: ToastModule,
      providers: [
        ToastService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
