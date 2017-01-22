(function () {
    var app = angular.module("contactApp");
    app.value("AppNameSvc", "Arati's First angular js application"); //app.value taking primitive as value
})(); //this is called IIFE. an anonymous function is executed immediately so as to restrict scope of app variable within the function.