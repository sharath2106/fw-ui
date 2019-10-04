import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fw-input',
  styleUrl: 'fw-input.css',
  assetsDir: 'assets',
  shadow: false
})
export class FwInput {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() stateText: string;

  render() {
    return <div class="input">
      <div class='label'>{this.title}{this.required?<span class="required">*</span>:''} </div>
      <input type="text" class="input-box" placeholder={this.placeholder}></input>
      <div class="stateText">{this.stateText}</div>
    </div>;
  }
}
