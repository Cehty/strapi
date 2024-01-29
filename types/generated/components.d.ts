import type { Schema, Attribute } from '@strapi/strapi';

export interface AuthorAuthor extends Schema.Component {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'Author';
    icon: 'user';
    description: '';
  };
  attributes: {
    authors: Attribute.Relation<
      'author.author',
      'oneToMany',
      'api::author.author'
    >;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    icon: 'command';
    description: '';
  };
  attributes: {
    header: Attribute.String;
  };
}

export interface ImagesImages extends Schema.Component {
  collectionName: 'components_images_images';
  info: {
    displayName: 'Images';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface ListList extends Schema.Component {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    list: Attribute.Text;
  };
}

export interface NumerateNumerate extends Schema.Component {
  collectionName: 'components_numerate_numerates';
  info: {
    displayName: 'Numerate';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    numerate: Attribute.Text;
  };
}

export interface QuoteQuote extends Schema.Component {
  collectionName: 'components_quote_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    quote: Attribute.Text;
    authors: Attribute.Relation<
      'quote.quote',
      'oneToMany',
      'api::author.author'
    >;
  };
}

export interface SignSign extends Schema.Component {
  collectionName: 'components_sign_signs';
  info: {
    displayName: 'Sign';
    icon: 'underline';
    description: '';
  };
  attributes: {
    sign: Attribute.Text;
  };
}

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'Text';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface VideoVideo extends Schema.Component {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'Video';
    icon: 'slideshow';
  };
  attributes: {
    video: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'author.author': AuthorAuthor;
      'header.header': HeaderHeader;
      'images.images': ImagesImages;
      'list.list': ListList;
      'numerate.numerate': NumerateNumerate;
      'quote.quote': QuoteQuote;
      'sign.sign': SignSign;
      'text.text': TextText;
      'video.video': VideoVideo;
    }
  }
}
