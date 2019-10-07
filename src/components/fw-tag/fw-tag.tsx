import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fw-tag',
  styleUrl: 'fw-tag.css',
  assetsDir: 'assets',
  shadow: false
})
export class FwTag {
  @Prop({ mutable: true }) text: string = '';
  @Prop({ mutable: true }) state: string = 'default';
  @Prop({ mutable: true }) tooltip: string = '';


  render() {

    return <span class='tooltip'>
              <span class={this.state}>
                <label>
                  <span class='tag'> {this.text}  </span>
                  <span class="tooltiptext">Tooltip text</span>
                 </label>
              </span>

            </span>
      ;
  }
}
