var myApp = angular.module("myList", []);

myApp.controller("myListController", function($scope) {
    // Load from localStorage
    $scope.items = JSON.parse(localStorage.getItem("todoList")) || [];
    $scope.newItem = "";

    // Save to localStorage
    function saveList() {
        localStorage.setItem("todoList", JSON.stringify($scope.items));
    }

    // Add item
    $scope.pushItem = function() {
        if ($scope.newItem.trim() !== "") {
            $scope.items.push({ text: $scope.newItem, done: false });
            $scope.newItem = "";
            saveList();
        }
    };

    // Delete item
    $scope.deleteItem = function(index) {
        $scope.items.splice(index, 1);
        saveList();
    };

    // Toggle done status
    $scope.toggleDone = function(item) {
        item.done = !item.done;
        saveList();
    };

    // Add item when pressing Enter
    $scope.checkEnter = function(event) {
        if (event.which === 13) {
            $scope.pushItem();
        }
    };
});
