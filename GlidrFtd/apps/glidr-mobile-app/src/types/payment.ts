export interface PaymentMethod{

    id:string;

    type:"card"|"wallet";

    name:string;

    isDefault:boolean;

}