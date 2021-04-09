import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'is-card-image',
  styleUrl: 'card-image.scss',
  shadow: true,
})
export class CardImage {
  @Prop({ reflect: true }) src: string;
  @Prop({ reflect: true }) alt?: string;

  render() {
    const { src, alt } = this;

    return (
      <Host>
        <img src={src} alt={alt}/>
      </Host>
    );
  }
}
