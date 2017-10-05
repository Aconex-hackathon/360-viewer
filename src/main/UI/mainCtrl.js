angular.module('smartManual', [])
   .controller('mainCtrl', function($scope, $document, $window, $http) {

    $http.get("http://localhost:9191/api/floors").success(function(result) {
        $scope.floors = result;
     })

    $http.get("http://localhost:9191/api/areas").success(function(result) {
        $scope.floorAreas = result;
     })

    $scope.showDropDown = false;

    $scope.viewerData = {
        "default": {
            "firstScene": "Main Entrance",
            "autoLoad": true,
            "sceneFadeDuration": 1000
        },

        "scenes": {
            "Main Entrance": {
                "title": "Main Entrance",
                "hfov": 400,
                "pitch": -3,
                "yaw": 117,
                "type": "equirectangular",
                "panorama": "/images/Main Entrance.jpg",
                "hotSpots": [
                    {
                        "pitch": -8.1,
                        "yaw": 180,
                        "type": "scene",
                        "text": "Another Meeting Room",
                        "sceneId": "Hampi"
                    },
                    {
                        "clickHandlerFunc": infoFunc,
                        "pitch": 14.1,
                        "yaw": 1.5,
                        "type": "info",
                        "text": "Baltimore Museum of Art",
                    },
                ]
            },

            "Hampi": {
                "title": "Hampi",
                "hfov": 110,
                "yaw": 5,
                "type": "equirectangular",
                "panorama": "/images/hampi.jpg",
                "hotSpots": [
                    {
                        "pitch": -0.6,
                        "yaw": 876.1,
                        "type": "scene",
                        "text": "Meeting Room",
                        "sceneId": "Main Entrance",
                        "targetYaw": -23,
                        "targetPitch": 2
                    }
                ]
            },

            "Jogfalls": {
                "title": "Jog Falls",
                "hfov": 110,
                "yaw": 5,
                "type": "equirectangular",
                "panorama": "/images/Jog Falls.jpg",
                "hotSpots": [
                    {
                        "pitch": -0.6,
                        "yaw": 876.1,
                        "type": "scene",
                        "text": "Meeting Room",
                        "sceneId": "Main Entrance",
                        "targetYaw": -23,
                        "targetPitch": 2
                    }
                ]
            }
        }
    };

    $scope.openLeftNav = function () {
        document.getElementById("myLeftSidenav").style.width = "250px";
    }

    $scope.closeLeftNav = function () {
        document.getElementById("myLeftSidenav").style.width = "0";
    }

    $scope.openRightNav = function () {
        document.getElementById("myRightSidenav").style.width = "250px";
    }

    $scope.closeRightNav = function () {
        document.getElementById("myRightSidenav").style.width = "0";
    }

    var infoFunc = function () {
        $scope.showDetails = true;
        $scope.openRightNav();
    };

    $scope.showGroundRooms = function (floor) {
        if (floor.floorName == "Ground Floor" && $scope.showDropDown) {
            return true;
        } else {
            return false;
        }
    };

    $scope.floorDropDown = function() {
        $scope.showDropDown = !($scope.showDropDown);
    }

    $scope.changeRoom = function (roomId) {
        viewer.loadScene(roomId);
        $scope.closeLeftNav();
    };

    var viewer = pannellum.viewer('panorama', $scope.viewerData);
});