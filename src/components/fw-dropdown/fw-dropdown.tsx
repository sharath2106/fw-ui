import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fw-dropdown',
  styleUrl: 'fw-dropdown.css',
  assetsDir: 'assets',
  shadow: false
})

export class FwDropdown {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() state: string;

  render() {
    return <div class="input">
      <div class="label">{this.label}{this.required ? <span class="required">*</span> : ''} </div>
      <div class="input-wrapper">
        <select class="input-box" >
          <option class="dropdown" value="None">--</option>
          <option class="dropdown" value="At Risk">At risk</option>
          <option class="dropdown" value="Doing Okay">Doing okay</option>
          <option class="dropdown" value="Happy">Happy</option>
        </select>
      </div>
    </div>;
  }
}

