class Person{
    constructor(name,age,mobile,email,address){
        this.name=name;
        this.age=age;
        this.mobile=mobile;
        this.email=email;
        this.address=address;
    }
    setName(name){
        this.name=name
    }
    getName(){
        return this.name
    }
    setAddress(address){
        this.address=address
    }
    getAddress(){
        return this.address
    }
}

const newPerson=new Person('Mukesh','35','123456789','email@gmail.com','bangalore karnatka')
console.log(newPerson);
newPerson.setAddress('Chikkangamanala Banalore Karnataka')
console.log(newPerson.getAddress());