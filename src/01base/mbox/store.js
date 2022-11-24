//
import {observable,action,configure  } from "mobx";
configure({enforceAction:'always'})
class Store{
    @observable num=0;
    @action add=()=>{
        console.log('add----')
        this.num=90}
}
export default new Store()

