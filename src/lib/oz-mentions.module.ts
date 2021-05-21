import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  OzMentionsModuleConfig,
  OzMentionsModuleConfigService,
} from './mentions-config';
import { MentionsListItemComponent } from './mentions-list-item.component';
import { MentionsListComponent } from './mentions-list.component';
import { MentionsDirective } from './mentions.directive';

@NgModule({
  declarations: [
    MentionsDirective,
    MentionsListComponent,
    MentionsListItemComponent,
  ],
  imports: [CommonModule],
  exports: [MentionsDirective, MentionsListItemComponent],
})
export class OzMentionsModule {
  static forRoot(
    config: OzMentionsModuleConfig = {
      mentionsListComponent: MentionsListComponent,
    },
  ): ModuleWithProviders<OzMentionsModule> {
    return {
      ngModule: OzMentionsModule,
      providers: [
        {
          provide: OzMentionsModuleConfigService,
          useValue: config,
        },
      ],
    };
  }
}
