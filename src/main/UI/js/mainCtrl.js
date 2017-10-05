angular.module('birdEye', [])
   .controller('mainCtrl', function($scope, $document, $window) {
   	$scope.showPDF = false;

   	$document.ready(function() {
   		$scope.getAreaStructure();
		window.PhotoSphereViewer({
			container: 'sphere',
			panorama: 'http://localhost:4567/room', // from ruby server
			markers: [
				{
					id: 'white-board-marker',
			    x: 3311,
			    y: 2270,
					image: './assets/doc-blue.png',
					width: 32,
					height: 32,
					anchor: 'bottom center',
					tooltip: '<b>White Board</b>',
					content: showWhiteBoard()
				},
				{
					id: 'tv-marker',
			    x: 4334,
			    y: 2129,
					image: './assets/doc-blue.png',
					width: 32,
					height: 32,
					anchor: 'bottom center',
					tooltip: '<b>TV</b>',
					content: showDocumentList()
				},
				{
					id: 'chair-marker',
			    x: 1112,
			    y: 3142,
					image: './assets/i=doc-blue.png',
					width: 32,
					height: 32,
					anchor: 'bottom center',
					tooltip: '<b>Chair</b>',
					content: showDocumentList()
				},
				{
					id: 'telephone-marker',
			    x: 3664,
			    y: 3103,
					image: './assets/doc-blue.png',
					width: 32,
					height: 32,
					anchor: 'bottom center',
					tooltip: '<b>Telephone</b>',
					content: showDocumentList()
				},
			]
		});
	});

	var showDocumentList = function () {
		return "blah";
	};

	var showWhiteBoard = function () {
        $scope.docList = document.getElementById('white-board-content').innerHTML;
        return $scope.docList;
    };

	$scope.showDoc = function () {
		$scope.showPDF = true;
	};

	$scope.openNav = function() {
		document.getElementById("side-nav-menu").style.width = "250px";
		document.getElementsByClassName("toggle")[0].style.display = "none";
	}

	$scope.closeNav = function() {
		document.getElementById("side-nav-menu").style.width = "0";
		document.getElementsByClassName("toggle")[0].style.display = "block";
	}

	$scope.getAreaStructure = function() {
		var areaObj = {
			listOfFloors: [{
				name: "Floor1",
				listOfRooms: ["Area1", "Area2"]
			},
			{
				name: "Floor2",
				listOfRooms: ["Area1", "Area2"]
			}]
		};

		var homeMenuEl = document.getElementById("home");
		var numberOfFloors = areaObj.listOfFloors.length;

		areaObj.listOfFloors.forEach(function(floor) {
			var childEl = $scope.createMenu(floor);
			homeMenuEl.appendChild(childEl);
		});
	}

	$scope.createMenu = function(floor) {
		var roomsCount = floor.listOfRooms.length;

		var floorListUl = document.createElement('ul');
		floorListUl.style.display = "none";
		floorListUl.id = 'floor-list';

		var floorListLi = document.createElement('li');
		var floorEl = document.createElement('a');

		var floorChildUl = document.createElement('ul');
		floorChildUl.style.display = "none";
		floorChildUl.id = 'area-list';

		floorEl.text = floor.name;
		// floorEl.onclick = showSubAreas('area-list');

		floorListLi.appendChild(floorEl);
		floorListLi.appendChild(floorChildUl);
		floorListUl.appendChild(floorListLi);


		for(var i = 0; i < roomsCount; i++) {
			var roomLi = document.createElement('li');
			var roomEl = document.createElement('a');

			roomEl.text = floor.listOfRooms[i];
			roomLi.appendChild(roomEl);
			floorChildUl.appendChild(roomLi);
		}

		return floorListUl;
	}

	$scope.showSubAreas = function(listName) {
		var listEl = document.getElementById(listName);
		// for(var i = 0; i < listEl.length; i++) {
			if(listEl.style.display == "none") {
				listEl.style.display = "block";
			} else {
				listEl.style.display = "none";
			}
		// }
	}

});

