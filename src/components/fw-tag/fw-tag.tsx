import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fw-tag',
  styleUrl: 'fw-tag.css',
  assetsDir: 'assets',
  shadow: false
})
export class FwTag {
  @Prop() label: string;
  @Prop({ mutable: true }) text: string = '';
  @Prop({ mutable: true }) state: string = 'default';
  @Prop({ mutable: true }) tooltip: string = '';
  @Prop() required: boolean;


  render() {

    return <div >
      <span class={this.state}>
        <label class='tag'>
          {this.text}
        </label>
       </span></div>;
  }
}
