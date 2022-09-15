/** RESTFULL API CALL SERVICES*/
import axios from "axios";

export  class  ContactService{
    /** Server Contact*/
    static serverURL =`http://localhost:9000`;

    /** Get all Contacts Services*/
    static  getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    /** Get single Contact Record Service*/
    static  getContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL);
    }

    /** Create a Contacts Record Service*/
    static  createContact(contact){ //contact object
        let dataURL = `${this.serverURL}/contacts/`;
        return  axios.post(dataURL, contact);
    }

    /** Update a Contacts Record Service*/
    static  updateContact(contact,contactId){ //contact object
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return  axios.put(dataURL, contact);
    }

    /** Delete a Contact Record Service*/
    static  deleteContact(contactId){ //contact object
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return  axios.delete(dataURL);
    }

    /** View all Groups Service*/
    static  getAllGroups(){ //contact object
        let dataURL = `${this.serverURL}/groups/`;
        return  axios.get(dataURL);
    }

    /** Get single Group Service*/
    static  getGroup(contact){ //contact object
        let groupId = contact .groupId;
        let dataURL = `${this.serverURL}/groups/${groupId}`;
        return  axios.get(dataURL);
    }

}