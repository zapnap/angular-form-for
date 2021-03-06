/**
 * @ngdoc Directives
 * @name submit-button
 *
 * @description
 * Displays a submit &lt;button&gt; component that is automatically disabled when a form is invalid or in the process of submitting.
 *
 * @param {String} class Optional CSS class names to apply to button component.
 * @param {Boolean} disable Disable button.
 * (Note the name is disable and not disabled to avoid collisions with the HTML5 disabled attribute).
 * @param {String} icon Optional CSS class to display as a button icon.
 * @param {String} label Button label.
 * HTML is allowed for this attribute.
 *
 * @example
 * // Here is a simple submit button with an icon:
 * <submit-button label="Sign Up" icon="fa fa-user"></submit-button>
 *
 * // You can use your own <button> components within a formFor as well.
 * // If you choose to, it is recommended that you bind your buttons disabled attribute to a disabledByForm scope property (managed by formFor) as follows:
 * <form form-for="formData">
 *   <button ng-disabled="disabledByForm">Submit</button>
 * </form>
 */
angular.module('formFor').directive('submitButton',
  function($log, $sce) {
    return {
      require: '^formFor',
      restrict: 'EA',
      templateUrl: 'form-for/templates/submit-button.html',
      scope: {
        disable: '@',
        icon: '@',
        label: '@'
      },
      link: function($scope, $element, $attributes, formForController) {
        $scope['class'] = $attributes['class'];

        $scope.$watch('label', function(value) {
          $scope.bindableLabel = $sce.trustAsHtml(value);
        });

        formForController.registerSubmitButton($scope);
      }
    };
  });
