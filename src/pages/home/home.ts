import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   answer ;

  constructor(public navCtrl: NavController, public http: Http) {

}



ask(question) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Bearer 211958ce069e42e6aa6e0284cc62750a')
    let options = new RequestOptions({ headers: headers });
 
    let postParams = {
     "lang": "en",
    "query": question ,
    "sessionId": "12345",
    "timezone": "America/New_York"
    }
    
    this.http.post("https://api.dialogflow.com/v1/query?v=20150910", postParams, options)
      .subscribe(data => {
      	let obj = JSON.parse(data['_body']);
        this.answer = obj.result.fulfillment.speech;
        console.log(data['_body']);
        console.log(this.answer);
       }, error => {
        console.log(error);// Error getting the data
      });
  }



}

