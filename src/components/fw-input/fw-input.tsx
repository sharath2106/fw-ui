import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fw-input',
  styleUrl: 'fw-input.css',
  shadow: true
})
export class FwInput {
  @Prop() title: string;
  @Prop() suggestiontext: string;
  @Prop() required: boolean;

  render() {
    return <div class="input">
      <div class='label'>{this.title}{this.required?<span class="required">*</span>:''} </div>
      <input type="text" class="input-box"></input>
      <div class="suggestionTextArea">{this.suggestiontext}</div>
    </div>;
  }
}
