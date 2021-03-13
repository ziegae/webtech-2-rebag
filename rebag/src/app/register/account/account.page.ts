import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import {AuthService} from 'src/app/services/auth.service';
import {AlertController, NavController,LoadingController, ToastController} from '@ionic/angular'
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth'
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  validationMessages = {
    username:[
      {type:"required", message:"Bitte gebe einen Namen ein."}
    ],
    email:[
      {type:"required", message:"Bitte gebe deine E-Mail ein."},
      {type:"pattern", message:"Diese E-Mail ist falsch. Bitte nochmal versuchen."}
    ],
    password:[
      {type:"required", message:"Bitte gebe dein Passwort ein."},
      {type:"minlength", message:"Das Passwort muss mindestens 8 Zeichen lang sein."}
    ],
    confirmPassword:[
      {type:"required", message:"Bitte bestätige dein Passwort."}
    ]
  }
  validationFormUser : FormGroup;
  loading : any;
  passwordMatch: boolean;

  constructor(
    private router: Router,
    private navCtrl: NavController, 
    private formbuilder:FormBuilder, 
    private authService: AuthService, 
    public loadingCtrl : LoadingController, 
    private alertCtrl: AlertController, 
    public afAuth: AngularFireAuth,
    public toaster: ToastController){
      this.loading = this.loadingCtrl
  }
  

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      name: new FormControl ('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      confirmPassword: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
    }, {validators: this.password.bind(this)
    })
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  registerUser(value){
    this.showalert();
     try{
    this.authService.userRegistration(value).then( response =>{
      console.log(response);
      if(response.user){
        response.user.updateProfile({
          displayName: value.name,
          email: value.email
        });
        this.loading.dismiss();
        this.router.navigate(['login']);
        this.authService.sendVerificationMail();
        this.toast('Registrierung erfolgreich! Bitte verifiziere deine E-Mail, um dich einzuloggen.','success')
        }
      }, error=>{
        this.loading.dismiss();
        this.errorLoading(error.message);
   
      })
    }catch(error){
      console.log(error)
   }
     }

     async errorLoading(message: any){
      const loading = await this.alertCtrl.create({
        header:"Error Registering",
        message:message,
        buttons:[{
          text:'ok',
          handler: ()=>{
          this.navCtrl.navigateBack(['register'])
        }
        }]
      })
       await loading.present();
    }
  
    async showalert(){
   var load = await this.loadingCtrl.create({
     message:"Bitte warten...",
  
   })
    load.present();
  }

  async toast(message, status){
    const toast = await this.toaster.create({
      message: message,
      position: 'top',
      color: status,
      duration: 6000
    });
    toast.present();
  }


}
