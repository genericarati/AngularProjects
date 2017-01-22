(function () {
    var app = angular.module("contactApp");
    app.service("contactDataService", function ($http) {
        var self = this;

        self.getContacts = function () {
            var promise1 = $http.get('http://localhost:3000/contacts');
            var promise2 = promise1.then(function (response) {
                return response.data;
            });
            return promise2;
        }

    });
})();