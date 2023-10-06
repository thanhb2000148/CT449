const {objectId} =require('mongodb');
class contactService {
    constructor(client){
        this.contact = client.db().collection("contacts");
    }
    // dinh nghia cac phuong thuc truy xuat csdl su dung mongobd api
    extractConactData(payload) {
        const contact = {
            name: payload.name,
            email: payload.email,
            address: payload.address,
            phone: payload.phone,
            favorite: payload.favorite,
        };
        // remove undefined fields
        objects.keys(contact).forEach(
            (key) => contact[key] === undefined && delete contact[key]
        );
        return contact;
    }
    async create(payload){
        const contact = this. extractConactData(payload);
        const result = await this. contact.findOneAndUpdate(
            contact,
            {$set: { favorite: contact.favorite === true}},
            {returnDocument: "after", upsert: true}
        );
        return result.value;
    }
}
module.exports =contactService;