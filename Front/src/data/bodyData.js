/**
 * represent a data of the body 
 * @class
 */
class bodyData{
    /**
     * @constructor
     * @param {number} calorie 
     * @param {number} protein 
     * @param {number} carbohydrate 
     * @param {number} lipid 
     */
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