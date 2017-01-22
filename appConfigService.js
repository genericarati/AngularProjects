(function () {
    var app = angular.module("contactApp");
    app.service("AppDataServiceSvc", function (AppNameSvc) { //constructor function in javascript. declaration of object name and returning it is inbuilt when constructor function is called.
        //var this ={};
        this.name = AppNameSvc;
        this.children = "2";
        this.firstChildName = "Aashi";
        this.secondChildName = "Kaeya";
        //return this;
    }); //service type of service calls the AppConfig function in constructor mode. for calling constructor function syntax used is "new AppConfig()"
})();
