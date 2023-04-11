/**
 * * @constructor
 * Represents a session.
 * @class
 */
class session{
    /**
     * 
     * @param {number} day 
     * @param {number} sessionLenght number of minute for the session lenght
     */
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