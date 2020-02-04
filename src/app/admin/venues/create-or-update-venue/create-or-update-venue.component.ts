import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-or-update-venue',
  templateUrl: './create-or-update-venue.component.html',
  styleUrls: ['./create-or-update-venue.component.scss'],
})
export class CreateOrUpdateVenueComponent implements OnInit {
  @Input() venue;
  isUpdate: boolean;

  venueForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    address: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController) { }

  ngOnInit() {
    this.isUpdate = this.venue ? true : false;
    if (this.isUpdate) {
      this.setFormValues();
    } else {
      this.venueForm.controls.id.setValue(uuid());
    }
  }

  dismiss() {
    if (this.venueForm.valid) {
      this.modalController.dismiss({
        isUpdate: this.isUpdate,
        venue: this.venueForm.value
      });
    } else {
      this.modalController.dismiss();
    }
  }

  private setFormValues() {
    this.venueForm.setValue({
      id: this.venue.id,
      name: this.venue.name,
      address: this.venue.address
    });
  }

}
