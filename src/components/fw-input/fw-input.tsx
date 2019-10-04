import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fw-input',
  styleUrl: 'fw-input.css',
  shadow: false
})
export class FwInput {
  @Prop() title: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() stateText: string;
  @Prop() state: string;

  render() {
    return <div class="input">
      <div class='label'>{this.title}{this.required?<span class="required">*</span>:''} </div>
      <input type="text" class={getCssClassName("input-box", this.state)} placeholder={this.placeholder}></input>
      <div class={getCssClassName("stateText", this.state)}>{this.stateText}</div>
    </div>;
  }
}

const getCssClassName = (baseClass:string, state:string) => {
  switch (state) {
    case 'warning':
      return `${baseClass} warning-input`;
    case 'error':
      return `${baseClass} error-input`;
    default:
      return baseClass;
  }
}
