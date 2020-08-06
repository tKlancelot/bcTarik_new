import sha256 from 'crypto-js/sha256';

export class GarageOwner {

    id : number;
    pseudo : string;
    password : string;
    name : string;
    tel : string;
    mail : string;
    siretNumber : string;

    constructor(
        id:number=null,
        pseudo:string=null,
        password:string=null,
        name:string=null,
        tel:string=null,
        mail:string=null,
        siretNumber:string=null
    ){
        this.id = id;
        this.pseudo = pseudo;
        this.password = password;
        this.name = name;
        this.tel = tel;
        this.mail = mail;
        this.siretNumber = siretNumber;
    }
}


