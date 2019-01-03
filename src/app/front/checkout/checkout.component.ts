import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { Data, AppService } from '../../front/app.service';
import { CommandeProduit } from 'app/models/msmagasindomains/panier/commande-produit.model';
import { CommandePanierService } from 'app/service/commande.panier.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('horizontalStepper') horizontalStepper: MatStepper;
  @ViewChild('verticalStepper') verticalStepper: MatStepper;
  billingForm: FormGroup;
  deliveryForm: FormGroup;
  paymentForm: FormGroup;
  countries = [];
  months = [];
  years = [];
  deliveryMethods = [];
  grandTotal = 0;
  commandeProduit = {} as CommandeProduit;
  commandeProduitRef$ : AngularFireList<CommandeProduit>;

  constructor(public appService:AppService, public formBuilder: FormBuilder,private commandeproduitService : CommandePanierService) { }

  ngOnInit() {    
    this.appService.Data.cartList.forEach(product=>{
      this.grandTotal += product.newPrice;
    });
    this.countries = this.appService.getCountries();
    this.months = this.appService.getMonths();
    this.years = this.appService.getYears();
    this.deliveryMethods = this.appService.getDeliveryMethods();
    this.billingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: '',
      company: '',
      email: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      state: '',
      zip: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.deliveryForm = this.formBuilder.group({
      deliveryMethod: [this.deliveryMethods[0], Validators.required]
    });
    this.paymentForm = this.formBuilder.group({
      cardHolderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiredMonth: ['', Validators.required],
      expiredYear: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  public placeOrder(){
    this.createNewPanier();
	this.horizontalStepper._steps.forEach(step => step.editable = false);
    this.verticalStepper._steps.forEach(step => step.editable = false);
    this.appService.Data.cartList.length = 0;
  }
  createNewPanier(){
    console.log(this.commandeProduit);
	this.appService.Data.cartList.forEach(product=>
		{
			this.commandeproduitService.createCommandeProduit(
			{
			 code: product.id,
			 designation: product.name,
			 prixUnitaire: ""||product.newPrice,
			 descriptionProduit: product.description,
			 zoneGeographiqueId: 0,
			 isValid:false,
			 image:"",
			 fidBoutique: "12",
			 fidProprietaire : "fourniss",
			 fidAcheteur : "currentBuyer",
			 quantite : "2",
			 commandId : "1234"
			}
			);
			this.commandeProduit = {} as CommandeProduit;
		}
	);
   }

}
