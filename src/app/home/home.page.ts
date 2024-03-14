import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string=''
  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  verificarRadio(){

    this.exibirToast();
    this.exibirAlerta();
  }

  async exibirToast(){
    const toast = await this.toastController.create({
      message: this.radioSelecionada,
      duration: 2000,
    });
    toast.present();
  }
  async exibirAlerta(){
    const alert = await this.alertController.create({
      header: 'Esta é uma mensagem de exemplos.',
      message: this.radioSelecionada,
      buttons: ['OK']
    });
    alert.present()
  }

}
