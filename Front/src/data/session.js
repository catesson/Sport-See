class session{
    constructor(day,sessionLenght ){
        this.day = day;
        this.sessionLenght = sessionLenght;
    }
    getDay(){
        return this.day;
    }
    getSessionLenght(){
        return this.sessionLenght;
    }
}
export default session