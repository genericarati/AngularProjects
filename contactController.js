(function () {
    var app = angular.module("contactApp");
    app.controller("contactCtrl", contactCtrl);

    function contactCtrl(contactDataService) {
        var self = this;
        contactDataService.getContacts().then(function (data) {
            self.contacts = data;

            self.selectContact = function (index) {
                self.selectedContact = data[index];
                self.successMessage = undefined;
            }
        });

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        }

        this.saveUser = function () {
            this.toggleEditMode();
            contactDataService.saveUser(self.selectedContact).then(function () {
                self.successMessage = "Data is successfully updated.";
            });
        }


    }
})();