import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { v4 as uuid } from 'uuid';
import { APIService } from '../../../API.service';


@Component({
  selector: 'app-create-or-update-performance',
  templateUrl: './create-or-update-performance.component.html',
  styleUrls: ['./create-or-update-performance.component.scss'],
})
export class CreateOrUpdatePerformanceComponent implements OnInit {
  @Input() performance;
  isUpdate: boolean;
  isLoaded: boolean;
  venues = { items: [] };
  artists = { items: [] };

  performanceForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required ],
    performanceArtistId: ['', Validators.required ],
    performanceVenueId: ['', Validators.required ],
    when: ['', Validators.required ]
  });

  constructor(
    private api: APIService,
    private formBuilder: FormBuilder,
    private modalController: ModalController) { }

  async ngOnInit() {
    this.venues = await this.api.ListVenues();
    this.artists = await this.api.ListArtists();
    this.isLoaded = true;
    this.isUpdate = this.performance ? true : false;
    if (this.isUpdate) {
      this.setFormValues();
    } else {
      this.performanceForm.controls.id.setValue(uuid());
    }
  }

  dismiss() {
    if (this.performanceForm.valid) {
      this.modalController.dismiss({
        isUpdate: this.isUpdate,
        performance: this.performanceForm.value
      });
    } else {
      this.modalController.dismiss();
    }
  }

  compareVenue = (o1, o2) => {
    return o1 && o2 ? o1 === o2 : o1 === o2;
  }

  compareArtist = (o1, o2) => {
    return o1 && o2 ? o1 === o2 : o1 === o2;
  }


  private setFormValues() {
    this.performanceForm.setValue({
      id: this.performance.id,
      performanceArtistId: this.performance.artist.id,
      performanceVenueId: this.performance.venue.id,
      when: this.performance.when
    });
  }

}
