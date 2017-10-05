angular.module('smartManual', [])
   .controller('mainCtrl', function($scope, $document, $window) {
        $scope.showDetails = false;

        var infoFunc = function () {
            $scope.showDetails = true;
        };

        $scope.openNav = function () {
            document.getElementById("mySidenav").style.width = "250px";
        }

        $scope.closeNav = function () {
            document.getElementById("mySidenav").style.width = "0";
        }

        pannellum.viewer('panorama', {
            "default": {
                "firstScene": "circle",
                "sceneFadeDuration": 1000
            },

            "scenes": {
                "circle": {
                    "title": "Meeting Room",
                    "hfov": 400,
                    "pitch": -3,
                    "yaw": 117,
                    "type": "equirectangular",
                    "panorama": "/images/hall.jpg",
                    "hotSpots": [
                        {
                            "pitch": -8.1,
                            "yaw": 180,
                            "type": "scene",
                            "text": "Another Meeting Room",
                            "sceneId": "house"
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

                "house": {
                    "title": "Another Meeting Room",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/images/room.jpg",
                    "hotSpots": [
                        {
                            "pitch": -0.6,
                            "yaw": 876.1,
                            "type": "scene",
                            "text": "Meeting Room",
                            "sceneId": "circle",
                            "targetYaw": -23,
                            "targetPitch": 2
                        }
                    ]
                }
            }
        });
    });