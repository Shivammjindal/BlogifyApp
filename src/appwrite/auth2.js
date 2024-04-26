import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const UserAccount = await this.account.create(ID.unique(),email,password,name);

            if(UserAccount){
                return this.login({email,password})
            }
            else{
                return UserAccount;
            }
        }
        catch(error){
            throw error;
        }
    }
    // we sending email and password like this becoz we send data in obj so here we use destructuring og objects...
    async login({email,password}){
        try {
            console.log("Login Running ")
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            throw(error)
        }
    }
}

const authService = new AuthService();

export default authService