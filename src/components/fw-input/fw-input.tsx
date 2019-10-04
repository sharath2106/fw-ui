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
  @Prop() state: string;

  @Prop({ mutable: true }) value: string;

  handleChange(ev: Event) {
    this.value = ev.target ? (ev.target as HTMLInputElement).value : null;
  }

  handleClearClick() {
    this.value = '';
  }

  getCssClassName(baseClass: string, state: string) {
    switch (state) {
      case 'warning':
        return `warning-input ${baseClass}`;
      case 'error':
        return `error-input ${baseClass}`;
      default:
        return baseClass;
    }
  }

  render() {
    return <div class="input">
      <div class="label">{this.label}{this.required ? <span class="required">*</span> : ''} </div>
      <div class="input-wrapper">
        <input type="text" class={this.getCssClassName("input-box", this.state)} placeholder={this.placeholder} value={this.value} onInput={(event) => this.handleChange(event)} />
        {this.value ?
          <div class="actions">
            <img class="clear-button" src="assets/close.svg" height="8" onClick={() => this.handleClearClick()} />
          </div>
          : ''}
      </div>
      <div class={this.getCssClassName("stateText", this.state)}>{this.stateText}</div>
    </div>;
  }
}

