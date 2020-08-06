export class Advert {
    id : number;
    ref : string;
    year : Date;
    price : number;
    brand : string;
    model : string;
    description : string;
    mileage : number;
    title : string;
    publicationDate : Date;
    picture : string;
    garageRef : string;

    constructor(
        id:number = null,
        ref:string = null,
        year:Date = null,
        brand:string=null, 
        model:string=null, 
        price:number = null, 
        description:string=null,
        mileage:number=null,
        title:string=null,
        publicationDate:Date=null,
        picture:string=null,
        garageRef:string=null
        )
        {

        this.id = id;
        this.ref = ref;
        this.year = year;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.description = description;
        this.mileage = mileage;
        this.title = title;
        this.publicationDate = publicationDate;
        this.picture = picture;
        this.garageRef = garageRef;
    }
}