class performance{
    constructor(performance, kind){
         this.performance  = this.getKindName(performance, kind )
       
    }
    
    getKindName(data, nbKind){
       const allperformance = data.map((perf) => {
            const value = perf.value;
            const kind = nbKind[perf.kind];
            return {value, kind}
        });
        return allperformance;
    }
}

export default performance