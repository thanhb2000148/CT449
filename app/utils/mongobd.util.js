const {MongoCLient}= require("mongodb");

class mongoDB {
    static connect = async (uni)=> {
        if(this.client) return this.client;
        this.client = await MongoCLient.connect(uri);
        returnthis.client;
    }
}