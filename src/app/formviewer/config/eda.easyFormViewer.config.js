import {
  richTextTemplate,
  blankTemplate,
  subTitleTemplate,
  radioTemplate,
  basicSelectTemplate,
  groupedSelectTemplate,
  datepickerTemplate,
  validationTemplate
}                       from './eda.easyFormViewer.formly.template';


function formlyConfig(formlyConfigProvider) {
  var initInjector = angular.injector(['ng']);
  var $window = initInjector.get('$window');

  formlyConfigProvider.setType(
    {
      name    : 'richEditor',
      template: richTextTemplate,
      wrapper : ['bootstrapLabel', 'bootstrapHasError']
    }
  );

  formlyConfigProvider.setType(
    {
      name    : 'blank',
      template: blankTemplate
    }
  );

  formlyConfigProvider.setType(
    {
      name    : 'subTitle',
      template: subTitleTemplate
    }
  );

  formlyConfigProvider.setType(
    {
      name      : 'radio',
      overwriteOk: true,
      template  : radioTemplate,
      wrapper   : ['bootstrapLabel', 'bootstrapHasError']
    }
  );

  formlyConfigProvider.setType(
    {
      name      : 'basicSelect',
      template  : basicSelectTemplate,
      wrapper   : ['bootstrapLabel', 'bootstrapHasError'],
      controller: ['$scope', ($scope) => {
        $scope.isDisabled = function(model, value, options) {
          if (typeof model == "object") {
            let optionSelected = true;

            for (let i in model) {
              if (model[i].uniqueValue === value) {
                optionSelected = false;
              }
            }
            let optionsMultiple = options.templateOptions.allowMultiple > 1;
            let optionsLength = model.length >= options.templateOptions.allowMultiple
            return optionSelected && optionsMultiple && optionsLength;
          }

          return false;
        }
      }]
    }
  );

  formlyConfigProvider.setType(
    {
      name      : 'groupedSelect',
      template  : groupedSelectTemplate,
      wrapper   : ['bootstrapLabel', 'bootstrapHasError'],
      controller: ['$scope', ($scope) => {
        $scope.isDisabled = function(model, value, options) {
          if (typeof model == "object") {
            let optionSelected = true;

            for (let i in model) {
              if (model[i].uniqueValue === value) {
                optionSelected = false;
              }
            }
            let optionsMultiple = options.templateOptions.allowMultiple > 1;
            let optionsLength = model.length >= options.templateOptions.allowMultiple
            return optionSelected && optionsMultiple && optionsLength;
          }

          return false;
        }
      }]
    }
  );

  // impplement from : http://jsbin.com/koredu/edit?js,output
  formlyConfigProvider.setType({
    name: 'upload',
    extends: 'input',
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    link: function(scope, el, attrs) {
      el.on("change", function(changeEvent) {
        var file = changeEvent.target.files[0];
        if (file) {
          var fd = new FormData();
          // use key on backEnd
          fd.append('uploadFile', file);
          scope.$emit('fileToUpload', fd, scope.options.key, scope.name);
          var fileProp = {};
          for (var properties in file) {
            if (!angular.isFunction(file[properties])) {
              fileProp[properties] = file[properties];
            }
          }
          scope.fc.$setViewValue(fileProp);
        } else {
          scope.fc.$setViewValue(undefined);
        }
      });
      el.on("focusout", (focusoutEvent) => {
        // dont run validation , user still opening pop up file dialog
        if ($window.document.activeElement.id === scope.id) {
          // so we set it untouched
          scope.$apply(function(scope) {
            scope.fc.$setUntouched();
          });
        } else {
          // element losing focus so we trigger validation
          scope.fc.$validate();
        }
      });
    },
    defaultOptions: {
      templateOptions: {
        type: 'file'
      }
    }
  });

  ////////////////////////////
  // angular UI date picker
  ////////////////////////////
  // thx Kent C. Dodds

  const attributes = [
     'date-disabled',
     'custom-class',
     'show-weeks',
     'starting-day',
     'init-date',
     'min-mode',
     'max-mode',
     'format-day',
     'format-month',
     'format-year',
     'format-day-header',
     'format-day-title',
     'format-month-title',
     'year-range',
     'shortcut-propagation',
     'datepicker-popup',
     'show-button-bar',
     'current-text',
     'clear-text',
     'close-text',
     'close-on-date-selection',
     'datepicker-append-to-body'
   ];

  const bindings = [
    'datepicker-mode',
    'min-date',
    'max-date'
  ];

  let ngModelAttrs = {};

  angular.forEach(attributes, (attr) => {
    ngModelAttrs[camelize(attr)] = {attribute: attr};
  });

  angular.forEach(bindings, (binding) => {
    ngModelAttrs[camelize(binding)] = {bound: binding};
  });

  formlyConfigProvider.setType({
    name 			: 'datepicker',
    template 	: datepickerTemplate,
    defaultOptions: {
      ngModelAttrs 		: ngModelAttrs,
      templateOptions: {
          datepickerOptions: {
              format: 'dd/MM/yyyy',
              initDate: new Date(),
              showWeeks: false
          }
      }
    },
    wrapper 	: ['bootstrapLabel', 'bootstrapHasError'],
    controller: ['$scope', ($scope) => {
      // console.info('ui calendar init');
      $scope.datepicker         = {};

      // make sure the initial value is of type DATE!
      var currentModelVal = $scope.model[$scope.options.key];
      if (typeof (currentModelVal) == 'string'){
        $scope.model[$scope.options.key] = new Date(currentModelVal);
      }

      $scope.datepicker.opened  = false;
      $scope.datepicker.open    = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        // console.info('ui calendar open event');
        $scope.datepicker.opened = !$scope.datepicker.opened;
      };
    }]

  });





  /**
    * wrappers to show validation errors
    * without having to rewrite formly types
    */
  formlyConfigProvider.setWrapper([
      {
        template: validationTemplate
      }
    ]);

  function camelize(string) {
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.replace(/^([A-Z])/, function(match, chr) {
      return chr ? chr.toLowerCase() : '';
    });
  }


}

formlyConfig.$inject = ['formlyConfigProvider'];

export default formlyConfig;
