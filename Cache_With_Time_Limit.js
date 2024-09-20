class CacheTimeLimited{
    constructor(){
        this.cache = new Map();
    }
    set(key, values, duration){
        const alreadyExist = this.cache.get(key);
        if(alreadyExist){
            clearTimeout(alreadyExist.timeOut);
        }
        const timeOut = setTimeout(()=>{
            this.cache.delete(key);
        },duration);

        this.cache.set(key,{values,timeOut});
        return Boolean(alreadyExist);
    }
    get(key){
        if(this.cache.has(key)){
            return this.cache.get(key).values;
        }
        return -1;
    }
    count(){
        return this.cache.size;
    }
}