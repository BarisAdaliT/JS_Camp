class Customer {
    constructor(id,customerNumber) {
        // this dışarıdaki tanımlayacagım objenin ulaşması için yanı bir bakımdan
        // customer.id gibi
        this.id = id
        this.customerNumber = customerNumber

    }
}

let customer = new Customer(1,12345);
// class içinde prototyping yapılmadıgı için clas içindeki ''id'' ve ''customerNumber'' degerlerine ulaşılamıyor
//  console.log(customer)

// prototyping nasıl yapılır

// objeye özelik atama
customer.name ="Bariş Adalı TÜRKMEN"
console.log(customer.name)
console.log("-----------------------------")
//class'a özelik atama
Customer.birsey="Birşey"
console.log(Customer.birsey)
console.log("-----------------------------")

console.log(customer)
console.log("-----------------------------")

// extends = interface
class IndividualCustomer extends Customer {
    constructor(firstName,id,customerName) {
        // interface yapılan değerlere ulaşmak için super kulanılır
        super(id,customerName);
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer {
    constructor(companyName,id,customerName) {
        super(id,customerName);
        this.companyName = companyName
    }
    
}
