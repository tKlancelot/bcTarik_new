export class Garage {
    id : number;
    garageName : string;
    adress1 : number;
    adress2 : string;
    postalCode : number;
    garageRef : string;
    dateFoundation : Date;

    constructor(
        id:number = null,
        garageName:string = null,
        adress1:number = null,
        adress2:string = null,
        postalCode:number = null,
        garageRef:string = null,
        dateFoundation:Date = null
        ){
        
        this.id = id;
        this.garageName = garageName;
        this.adress1 = adress1;
        this.adress2 = adress2;
        this.postalCode = postalCode;
        this.garageRef = garageRef;
        this.dateFoundation = dateFoundation;
    }
}
