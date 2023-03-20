class bodyData{
    constructor(calorie, protein, carbohydrate, lipid){
        this.calorie = calorie;
        this.protein = protein;
        this.carbohydrate = carbohydrate;
        this.lipid = lipid;
    }
    getCalorie(){
        return this.calorie
    }
    getProtein(){
        return this.protein
    }
    getCarbohydrate(){
        return this.carbohydrate
    }
    getLipid(){
        return this.lipid
    }
}
export default bodyData