import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElementChoiceGroundPage } from '../element-choice-ground/element-choice-ground';
import { ChooseChapterCloudPage } from '../choose-chapter-cloud/choose-chapter-cloud';
import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';
import * as io from "socket.io-client";

/*
  Generated class for the ChooseChapterGround page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-choose-chapter-ground',
  templateUrl: 'choose-chapter-ground.html'
})
export class ChooseChapterGroundPage {
  private selectedAnswer:string;
  private socketHost:string;
  private socket:any;
  constructor(public navCtrl: NavController) {
    this.socketHost = "http://oceania.herokuapp.com/";
    this.socket = io(this.socketHost);
  }

  ionViewDidLoad() {
    console.log('Hello ChooseChapterGroundPage Page');
  }

  chapitreSuivant() {
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    containerImage.style.display = "block" ;
    containerImage.classList.remove('precedent');
    containerImage.classList.add('suivant');

    //Change dynamicaly the image
    let zoneImage: any = document.querySelector('.mainDiv__changingGame__image');
    zoneImage.setAttribute('src', '../../assets/images/vague.svg' );

    //Hiding this div
    let zoneChoixElement: any = document.getElementsByClassName('answers-container')[0];
    zoneChoixElement.style.display = 'none';

    //Applying style to div
    let zoneChangeGame: any = document.getElementsByClassName('mainDiv__changingGame')[0];
    zoneChangeGame.style.display = 'block';
    zoneChangeGame.style.textAlign = 'center';

    //Applying style to image
    let imageJeu: any = document.getElementsByClassName('mainDiv__changingGame__image')[0];
    imageJeu.style.display = 'block';
    imageJeu.style.width = '50%';
    imageJeu.style.margin = 'auto';

    //Applying style to cancel image
    let cancelImage: any = document.getElementsByClassName('mainDiv__changingGame__cancel')[0];
    cancelImage.style.height = '10%';

  }

  chapitrePrecedent() {
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    containerImage.style.display = "block";
    containerImage.classList.remove('suivant');
    containerImage.classList.add('precedent');

    let zoneImage: any = document.querySelector('.mainDiv__changingGame__image');
    zoneImage.setAttribute('src', '../../assets/images/maree.svg');

    //Hiding this div
    let zoneChoixElement: any = document.getElementsByClassName('answers-container')[0];
    zoneChoixElement.style.display = 'none';

    //Applying style to div
    let zoneChangeGame: any = document.getElementsByClassName('mainDiv__changingGame')[0];
    zoneChangeGame.style.display = 'block';
    zoneChangeGame.style.textAlign = 'center';

    //Applying style to image
    let imageJeu: any = document.getElementsByClassName('mainDiv__changingGame__image')[0];
    imageJeu.style.display = 'block';
    imageJeu.style.width = '50%';
    imageJeu.style.margin = 'auto';

    //Applying style to cancel image
    let cancelImage: any = document.getElementsByClassName('mainDiv__changingGame__cancel')[0];
    cancelImage.style.height = '10%';
  }


  nextPage() {
    let btn = document.querySelector(".buttonArea");
    console.log(btn);

    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");
    //Laisser le temps à l'animation de se faire
    if (containerTexte.classList.contains('suivant')) {
      this.navCtrl.setRoot(ChooseChapterMoonPage);
    } else if (containerTexte.classList.contains('precedent')) {
      this.navCtrl.setRoot(ChooseChapterCloudPage);
    } else {
      //Valider réponse
    }
  }

  selectAnswer(e) {

    let answer = e.target.classList[1].split('-')[1];

    this.socket.emit('answer-select', answer);

  }

}
