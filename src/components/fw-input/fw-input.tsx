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

  @Prop({ mutable: true }) value: string;

  handleChange(ev: Event) {
    this.value = ev.target ? (ev.target as HTMLInputElement).value : null;
  }

  handleClearClick() {
    this.value = '';
  }

  render() {
    return <div class="input">
      <div class='label'>{this.title}{this.required?<span class="required">*</span>:''} </div>
      <input type="text" class="input-box" placeholder={this.placeholder}></input>
      <div class="stateText">{this.stateText}</div>
    </div>;
  }
}
