// configuration structure, backwards compatible with earlier versions

import { EventEmitter, InjectionToken, Type } from '@angular/core';
import { Observable } from 'rxjs';

export interface OzMentionsModuleConfig {
  mentionsListComponent: Type<MentionsList<unknown>>;
}

export const OzMentionsModuleConfigService = new InjectionToken<OzMentionsModuleConfig>(
  'OzMention config',
);

export interface MentionsConfig {
  // nested config
  mentions?: Mentions<unknown>[];
  listComponent?: Type<unknown>;
}

export interface Mentions<T> {
  triggerChars?: string[];

  // Show list only on n char to skip space
  showSearchListAtChar?: number;

  // whether to allow space while mentioning or not
  allowSpace?: boolean;

  // option to include the trigger char in the searchTerm event
  returnTrigger?: boolean;

  // item list component
  itemComponent?: Type<MentionsListItem<T>>;

  searchListProps?: Record<string, unknown>;

  getItems: (filter: string) => Observable<T[]>;

  // optional function to format the selected item before inserting the text
  mentionSelect?: (item: T, triggerChars?: string[]) => string;
}

export interface MentionsList<T> {
  items: T[];
  activeItem: T;
  itemComponent: Type<MentionsListItem<T>>;
  itemClick: EventEmitter<T>;

  position(
    nativeParentElement: HTMLInputElement,
    iframe?: HTMLIFrameElement,
  ): void;

  up(): void;
  down(): void;
}

export interface MentionsListItem<T> {
  item: T;
  active: boolean;
}
