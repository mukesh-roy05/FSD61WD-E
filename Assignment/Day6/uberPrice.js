// Calculate Uber Price
// Passenger Name
// Fixed Price upto 2 km = 200
// per KM increased by 120 
// total distance
// calculate total price

class Uber{
    
    constructor(baseFare,costPerKM,costPerMin,bookingFee=0,surgePricingFactor){
        this.baseFare=baseFare;
        this.costPerKM=costPerKM;
        this.costPerMin=costPerMin;
        this.bookingFee=bookingFee
        this.surgePricingFactor=surgePricingFactor
    }

    calculateFare(distanceKM,durationMins){
        this.distanceKM=distanceKM
        this.durationMins=durationMins
        
        //  Calculate distance cost
        const distanceCost=this.distanceKM * this.costPerKM;
        // calculate time cost
        const timeCost=this.durationMins * this.costPerMin   

        // calculate total fare before surge
        const totalFareBeforeSurge =  this.baseFare+distanceCost+timeCost + this.bookingFee

        // apply surge pricing if applicable
        const totalFare=totalFareBeforeSurge * this.surgePricingFactor ;
        
        return totalFare;
    }
}

const baseFare= 50
const costPerKM=9
const costPerMin=1.5
const bookingFee = 20
const surgePricingFactor = 1.5
const calculator = new Uber(baseFare,costPerKM,costPerMin,bookingFee,surgePricingFactor)
console.log(calculator);

const distanceKM=10
const durationMins=30

// calculate Fare
const fare = calculator.calculateFare(distanceKM,durationMins)


console.log(`Estimated Uber Fare in Rupees: ${fare.toFixed(2) }`);
