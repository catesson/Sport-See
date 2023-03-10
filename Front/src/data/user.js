import getUserData from "../api/callAPI";


class User{
    constructor(id, old, firstName, lastName, ){
        this.id = id;
        this.old = old;
        this.firstName = firstName;
        this.lastName = lastName
    }
    getUser(){
        return this.User
    }
    getid() {
        return this.id;
    }
    getFirstName() {
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getOld(){
        return this.old;
    }
}

async function createUser(id){
    try{
    const data = await getUserData(id);
 
    const userInfos = data.userInfos;
    const user = new User(data.id, userInfos.age,userInfos.firstName, userInfos.lastName )
    return user
    }
    catch{
        console.log("error")
    }
}
   
export default createUser;