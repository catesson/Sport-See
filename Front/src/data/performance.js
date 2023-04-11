/**
 * represent a performance 
 * @class
 */
class performance{
    /**
     * @constructor
     * @param {object[]} performance performance data of api exemple {"value":80,"kind":1}
     * @param {string[]} kind all kind
     */
    constructor(performance, kind){
         this.performance  = this.getKindName(performance, kind )
       
    }
    /**
     * convert the kind number to the kind name. It's only use on the constructor
     * @function
     * @param {object[]} data performance data of api exemple {"value":80,"kind":1}
     * @param {string[]} theKind the name of all kind
     * @returns {object[]} content the value of performance and the name of the kind
     * */
    getKindName(data, theKind){
        
       const allperformance = data.map((perf) => {
            const value = perf.value;
            const kind = theKind[perf.kind];
            return {value, kind}
        });
        return allperformance;
    }
}

export default performance