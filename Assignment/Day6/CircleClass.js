class Circle {
    constructor(radius,color){
        this.radius=radius
        this.color=color;
    }
    setRadius(radius){
        this.radius=radius
    }
    getRadius(){
        return this.radius
    }
    setColor(color){
        this.color=color
    }
    getColor(){
        return this.color
    }
    getArea (){
        return Math.PI * this.radius*this.radius
    }

    getCircumference(){
        return 2* Math.PI * this.radius;
    }
}

const newCircle= new Circle(4.0,'red')
console.log(newCircle.getArea());
console.log(newCircle.getCircumference());
newCircle.setRadius(10.0)
console.log(newCircle.getArea());
console.log(newCircle.getCircumference());
console.log(newCircle.getColor());
