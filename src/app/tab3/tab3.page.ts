import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  valor:number;
  porcentagem:number;
  valordes:any;
  status:any;
  
  constructor(public modalController: ModalController,public alertController: AlertController)
  {

  }

  ngOnInit() 
  {
  }

  async enviadados()
  {
    console.log(this.valor);
    console.log(this.porcentagem);
    this.valordes=this.valor-(this.valor*(this.porcentagem/100));
    console.log(this.valordes);
    

    const alert = await this.alertController.create({
      header: 'Valor:',
      subHeader: this.valordes,
      buttons: 
      [
        {
          text:'OK',
          handler:()=>
          {
            this.closeModal();
          }
        }

      ]
    });

    await alert.present();
  }

  closeModal() 
  {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
