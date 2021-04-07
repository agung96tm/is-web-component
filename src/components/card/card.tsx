import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'is-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {

  /**
   * when set as `true`, than card cannot be interacted.
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host class={{
        'is-disabled': this.disabled,
      }}>
        <div class={{
          'is-card': true,
        }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
