import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-or-update-artist',
  templateUrl: './create-or-update-artist.component.html',
  styleUrls: ['./create-or-update-artist.component.scss'],
})
export class CreateOrUpdateArtistComponent implements OnInit {
  @Input() artist;
  isUpdate: boolean;

  artistForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required ],
    name: ['', Validators.required ],
    image: ['', Validators.required ],
    description: ['', Validators.required ]
  });

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.isUpdate = this.artist ? true : false;
    if (this.isUpdate) {
      this.setFormValues();
    } else {
      this.artistForm.controls.id.setValue(uuid());
    }
  }

  dismiss() {
    if (this.artistForm.valid) {
      this.modalController.dismiss({
        isUpdate: this.isUpdate,
        artist: this.artistForm.value
      });
    } else {
      this.modalController.dismiss();
    }
  }

  private setFormValues() {
    this.artistForm.setValue({
      id: this.artist.id,
      name: this.artist.name,
      description: this.artist.description,
      image: this.artist.image
    });
  }

}
