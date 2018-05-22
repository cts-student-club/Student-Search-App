var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
// declare var ApiAIPlugin: any;
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, ngZone) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.ngZone = ngZone;
        this.answers = [];
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        this.http.post('/api', urlSearchParams).subscribe(function (data) {
            alert('ok');
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
        function sendData($scope) {
            $http({
                url: 'request-url',
                method: "POST",
                data: { 'message': message }
            })
                .then(function (response) {
                // success
            }, function (response) {
                // failed
            });
        }
        try {
            //   	platform.ready().then(() => {
            //       ApiAIPlugin.init({
            //         clientAccessToken: "211958ce069e42e6aa6e0284cc62750a",
            //       })
            //       .then((result) =>  console.log(result))
            // });
        }
        catch (e) {
            console.log(e);
        }
    }
    HomePage.prototype.ask = function (question) {
        try {
            // ApiAIPlugin.requestText({
            //   query: question
            // })
            // .then(({result: {fulfillment: {speech}}}) => {
            //    this.ngZone.run(()=> {
            //      this.answers.push(speech);
            //    });
            // })
        }
        catch (e) {
            console.log(e);
        }
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            Platform,
            NgZone])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map