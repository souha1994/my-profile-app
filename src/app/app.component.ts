import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-profile-app';
  couleurDebut: string = '#FFFFFF';
  couleurFin: string = '#FFFFFF';

  changerCouleur() {
    this.couleurDebut = '#4492CC'; // nouvelle couleur de début
    this.couleurFin = '#3EBDF6'; // nouvelle couleur de fin
  }
  getGradient() {
  return `linear-gradient(to right, ${this.couleurDebut}, ${this.couleurFin})`;
  }
}
