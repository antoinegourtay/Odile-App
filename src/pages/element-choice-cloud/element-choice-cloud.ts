import {Component, Output, EventEmitter, Directive} from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChooseChapterGroundPage } from '../choose-chapter-ground/choose-chapter-ground';
import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';
/*
  Generated class for the ElementChoiceCloud page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-element-choice-cloud',
  templateUrl: 'element-choice-cloud.html'
})

export class ElementChoiceCloudPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello ElementChoiceCloudPage Page');
  }

  chapitreSuivant(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    containerImage.style.display = "block" ;
    containerImage.classList.remove('precedent');
    containerImage.classList.add('suivant');

  }

  chapitrePrecedent(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    containerImage.style.display = "block";
    containerImage.classList.remove('suivant');
    containerImage.classList.add('precedent');
  }

  nextPage(){
    let btn = document.querySelector(".buttonArea");
    console.log(btn);

    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");

    if (containerTexte.classList.contains('suivant')){
      this.navCtrl.setRoot(ChooseChapterGroundPage);
    } else if (containerTexte.classList.contains('precedent')){
      this.navCtrl.setRoot(ChooseChapterMoonPage);
    } else {
      //Do nothing
    }
    //Laisser le temps à l'animation de se faire
  }
}
