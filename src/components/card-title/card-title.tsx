import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'is-card-title',
  styleUrl: 'is-card-title.css',
  shadow: true,
})
export class CardTitle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
