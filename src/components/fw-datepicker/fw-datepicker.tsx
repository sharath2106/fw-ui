import { Component, Prop, h } from '@stencil/core';
import daterange from "daterangepicker";

@Component({
  tag: 'fw-datepicker',
  styleUrl: 'fw-datepicker.css',
  assetsDir: 'assets',
  shadow: false
})
export class FwDatepicker {
  @Prop() label: string;
  @Prop({ mutable: true }) currentDate: string = '01/01/2000';
  @Prop({ mutable: true }) dateFormat: string = 'DD/MM/YYYY';
  @Prop({ mutable: true }) minYear: number = 1947;
  @Prop({ mutable: true }) maxYear: number = 2020;
  @Prop() required: boolean;

  getDatePicker(ev: Event) {
    let xs = ev.target ? (ev.target as HTMLInputElement) : null;
    let df = this.dateFormat;
    new daterange(xs,{
      locale: {
        format: df
      },
      autoUpdateInput: true,
      singleDatePicker: true,
      showDropdowns: true,
      minYear: this.minYear,
      maxYear: this.maxYear
    }); 
  };
  render() {
    return <div class="input">
      <div class="label">{this.label}{this.required ? <span class="required">*</span> : ''} </div>
      <div class="input-wrapper">
      <input class="input-box" value={this.currentDate} onFocus={(event) => this.getDatePicker(event)} />
      </div>
    </div>;
  }
}
