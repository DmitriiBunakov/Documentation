/*
*Модули
*Создается модуль myApp. И в него уже дальше можно создавать контроллеры и т.д., для этого нужно обратиться к переменной, которая ссылается на модуль и вызвать метод контроллер и другие.
var myApp=angular.module('myApp', []);
myApp.controller('phoneController', function($scope) {
  $scope.phone = {
      name: 'Nokia Lumia 630',
      year: 2014,
      price: 200,
      company: {
         name: 'Nokia',
         country: 'Финляндия'
      }
   }
});



*Контроллеры, создается след. образом, подлкючается через ng-controller.
*В самом контролле $scope переменная определяет, что к этому свойству будет доступ в шаблоне через скоуп.
*Можно несколько раз применять контроллеры в шаблоне, и для каждого будет создаваться свой обьект.
var myApp=angular.module('myApp', []);
myApp.controller('phoneController', function($scope) {
  $scope.phone = {
      name: 'Nokia Lumia 630',
      year: 2014,
      price: 200,
      company: {
         name: 'Nokia',
         country: 'Финляндия'
      }
   }
});

<!doctype html>
<html ng-app="myApp">
<head>
<meta charset="utf-8">
</head>
<body>
   <div ng-controller="phoneController">
      <p>Название: {{phone.name}}</p>
      <p>Цена: {{phone.price}} $</p>
      <p>Производитель: {{phone.company.name}}</p>
   </div>
   <div ng-controller="phoneController">
      {{phone.company.name}}
   </div>
</body>
</html>



*К контроллеру можно также обращаться напрямую, т.к. это тоже js обьект, для этого нужно в ng-controller переопределить имя контроллера на удобную нам переменную. myController as myCtrl
var myApp = angular.module('myApp', []);
myApp.controller('myController', function() {
   this.message="myController";
   this.text="Контроллер без $scope";
});

<!doctype html>
<html ng-app="myApp">
<head>
<meta charset="utf-8">
</head>
<body>
   <div ng-controller="myController as myCtrl">
      <h3>{{myCtrl.message}}</h3>
      <p>{{myCtrl.text}}</p>
   </div>
</body>
</html>


*$Scope
*В самом главном модуле доступен $RootScoop, это все переменные доступные в приложении.
*Дочерний scope переопределит глобальный, если название переменных пересекутся.
angular.module('myApp', [])
   .run(function($rootScope) {
   $rootScope.moduleName = "myApp";
   $rootScope.message = "Hello AngularJS";
});
myApp.controller('myController', function($scope) {
   $scope.message = "Контроллер myController";
});

<!doctype html>
<html ng-app="myApp">
<head>
<meta charset="utf-8">
</head>
<body>
   <p>Модуль: {{ moduleName }}</p>
   <p>Сообщение: {{ message }}</p>
   <div ng-controller="myController">
      {{message}}
   </div>
</body>
</html>


* ng-repeat перебирает массив и создает шаблон
*Встроенные переменные
? $index: возвращает индекс элемента в массиве
? $first: возвращает true, если элемент является первым в массиве
? $last: возвращает true, если элемент является последним в массиве
? $middle: возвращает true, если элемент не является ни первым, ни последним в массиве
? $even: возвращает true, если элемент является четным
? $odd: возвращает true, если элемент является нечетным

var myApp=angular.module('myApp');
myApp.controller('phoneController', function($scope) {
  $scope.phones = [{
      name: 'Nokia Lumia 630',
      year: 2014,
      price: 200,
      company: {
         name: 'Nokia',
         country: 'Финляндия'
      }
   },{
      name: 'Samsung Galaxy S 4',
      year: 2014,
      price: 400,
      company: {
         name: 'Samsung',
         country: 'Республика Корея'
      }}
   }]
});
<div ng-controller="phoneController">
   <ul>
      <li ng-repeat="phone in phones">
         <b>{{phone.name}}</b>
         <p>Цена: {{phone.price}} $</p>
         <p>Производитель: {{phone.company.name}}</p>
      </li>
   </ul>
</div>




var myApp=angular.module('myApp', []);
myApp.controller('phoneController', function($scope) {
  $scope.phones = [{
      name: 'Nokia Lumia 630',
      year: 2014,
      price: 200,
      company: {
         name: 'Nokia',
         country: 'Финляндия'
      }
   }]
});
*ng-bind односторонняя привязка, если поменяется в скрипте, то и в шаблоне изменится
<div ng-controller="phoneController">
   <div ng-bind="phones.length"></div>
</div>

*ng-model двухсторонняя, если поменяется где то, то отобразится и в другом месте
<div ng-controller="phoneController">
   <input type="text" ng-model="phones[0].name" / >
   <p ng-bind="phones[0].name"></p>
</div>

*ng-non-bindable, в первом выведется значение 3, во втором 1 + 2
<p>{{1 + 2}}</p>
<p ng-non-bindable>{{1 + 2}}</p>


*ng-include подключает шаблон какой то
<div ng-include="./AngularJS.html"></div>




* Pipe(Filter фильтры)
questApp.filter('formatText', function(){
   return function(text){
      if(text.indexOf("фигасе")!==-1){
         return "***";
      }
      else{
         return text;
      }
   }
})




*создание директивы
questApp.directive("answerList", function () {
   return function (scope, element, attrs) {}
});
?созданная директива будет доступна через
<div answer-list="переменная доступаная из скоупа"></div>
scope - объект $scope, установленный в контроллере
element - элемент, к которому применяется директива
attrs - коллекция атрибутов в виде пары ключ-значение, где ключом является название атрибута




*Одноразовая привязка ::   привязывается только один раз значение
<div>{{::somevalue}}</div>
*/