/* global angular */
import {
  blankTemplate,
  subTitleTemplate,
  inputTemplate,
  datepickerTemplate,
  textareaTemplate,
  richTextTemplate,
  radioTemplate,
  basicSelectTemplate,
  basicMultiSelectTemplate,
  groupedSelectTemplate,
  groupedMultiSelectTemplate,
  uploadTemplate,
  uploadTemplateListFiles,
  validationTemplate,
  validationTemplateMultiple,
  descriptionTemplate
} from './edaStepWayEasyFormGen.conf.formly.templates';


function formlyConfig(formlyConfigProvider){
  var initInjector = angular.injector(['ng']);
  var $window = initInjector.get('$window');

  formlyConfigProvider.setType({
    name    : 'blank',
    template: blankTemplate
  });

  formlyConfigProvider.setType({
    name    : 'subTitle',
    template: subTitleTemplate
  });

  formlyConfigProvider.setType({
    name: 'input',
    overwriteOk: true,
    template: inputTemplate,
    wrapper: ['validationTemplateMultiple', 'descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
    defaultOptions: {
      noFormControl: true
    },
    controller: ['$scope', ($scope) => {
      applyFormControl($scope);
    }]
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
    name      : 'datepicker',
    template  : datepickerTemplate,
    defaultOptions: {
      noFormControl: true,
      ngModelAttrs    : ngModelAttrs,
      templateOptions: {
          datepickerOptions: {
              format: 'dd/MM/yyyy',
              initDate: new Date(),
              showWeeks: true
          }
      }
    },
    wrapper   : ['validationTemplateMultiple', 'descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
    controller: ['$scope', ($scope) => {

      applyFormControl($scope);

      // console.info('ui calendar init');
      $scope.datepicker = {};

      // make sure the initial value is of type DATE!
      var currentModelVal = $scope.model[$scope.options.key];
      if (typeof (currentModelVal) == 'string'){
        $scope.model[$scope.options.key] = new Date(currentModelVal);
      }

      $scope.specialUpdate = function(count) {
        $scope.datepicker.opened = [];
        for (let i = 0; i < count; i++) {
          $scope.datepicker.opened.push(false);
        }
      }

      $scope.datepicker.opened  = [];
      $scope.datepicker.open = function ($event, fieldIndex) {
        $event.preventDefault();
        $event.stopPropagation();
        // console.info('ui calendar open event');
        $scope.datepicker.opened[fieldIndex] = !$scope.datepicker.opened[fieldIndex];
      };
    }]
  });

  formlyConfigProvider.setType({
    name: 'textarea',
    overwriteOk: true,
    template: textareaTemplate,
    wrapper: ['validationTemplateMultiple', 'descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
    defaultOptions: {
      noFormControl: true,
      ngModelAttrs: {
        rows: {attribute: 'rows'},
        cols: {attribute: 'cols'}
      }
    },
    apiCheck: check => ({
      templateOptions: {
        rows: check.number.optional,
        cols: check.number.optional
      }
    }),
    controller: ['$scope', ($scope) => {
      applyFormControl($scope);
    }]
  });

  formlyConfigProvider.setType({
    name    : 'richEditor',
    template: richTextTemplate,
    wrapper : ['validationTemplateMultiple', 'descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
    defaultOptions: {
      noFormControl: true
    },
    controller: ['$scope', ($scope) => {
      applyFormControl($scope);
    }]
  });

  formlyConfigProvider.setType({
    name      : 'radio',
    overwriteOk: true,
    template  : radioTemplate,
    wrapper   : ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
    apiCheck: check => ({
      templateOptions: {
        options: check.arrayOf(check.object),
        labelProp: check.string.optional,
        valueProp: check.string.optional,
        inline: check.bool.optional,
      }
    })
  });

  formlyConfigProvider.setType({
    name      : 'basicSelect',
    template  : basicSelectTemplate,
    wrapper   : ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError']
  });

  formlyConfigProvider.setType({
    name      : 'basicMultiSelect',
    template  : basicMultiSelectTemplate,
    wrapper   : ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
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
  });

  formlyConfigProvider.setType({
    name      : 'groupedSelect',
    template  : groupedSelectTemplate,
    wrapper   : ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
  });

  formlyConfigProvider.setType({
    name      : 'groupedMultiSelect',
    template  : groupedMultiSelectTemplate,
    wrapper   : ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
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
  });

  // impplement from : http://jsbin.com/koredu/edit?js,output
  formlyConfigProvider.setType({
    name: 'upload',
    template  : uploadTemplate,
    wrapper: ['validationTemplateMultiple', 'descriptionTemplate', 'uploadTemplateListFiles', 'bootstrapLabel', 'bootstrapHasError'],
    defaultOptions: {
      noFormControl: true
    },
    controller: ['$scope', ($scope) => {
      applyFormControl($scope);

      $scope.deleteFile = function(referenceId) {
        if (referenceId) {
          $scope.$emit('fileDelete', referenceId);
        }
      }
    }],
    link: function(scope, el, attrs) {
      el.on("change", function(changeEvent) {
        // Find fieldControl
        let fcKey = 0;
        for (let i in scope.fc) {
          if (changeEvent.target.name == scope.fc[i].$name) {
            fcKey = i;
          }
        }

        var file = changeEvent.target.files[0];
        if (file) {
          var fd = new FormData();
          // use key on backEnd
          fd.append('uploadFile', file);
          scope.$emit('fileToUpload', fd, scope.options.key, changeEvent.target.name, fcKey);
          var fileProp = {};
          for (var properties in file) {
            if (!angular.isFunction(file[properties])) {
              fileProp[properties] = file[properties];
            }
          }
          scope.fc[fcKey].$setViewValue(fileProp);
        } else {
          scope.fc[fcKey].$setViewValue('');
        }
      });
      el.on("focusout", (focusoutEvent) => {
        // Find fieldControl
        let fcKey = 0;
        for (let i in scope.fc) {
          if (focusoutEvent.target.name == scope.fc[i].$name) {
            fcKey = i;
          }
        }

        // dont run validation , user still opening pop up file dialog
        if ($window.document.activeElement.id === scope.id) {
          // so we set it untouched
          scope.$apply(function(scope) {
            scope.fc[fcKey].$setUntouched();
          });
        } else {
          if (!angular.element(focusoutEvent.srcElement).hasClass("upload-list") && scope.fc) {
            // element losing focus so we trigger validation
            scope.fc[fcKey].$validate();
          }
        }
      });
    },
    defaultOptions: {
      templateOptions: {
        type: 'file'
      }
    }
  });

	/**
		* wrappers to show validation errors
		* without having to rewrite formly types
		*/
  formlyConfigProvider.setWrapper([{
    template: validationTemplate
  }]);

  formlyConfigProvider.setWrapper([{
    name: 'uploadTemplateListFiles',
    template: uploadTemplateListFiles
  }]);

  formlyConfigProvider.setWrapper([{
    name: 'validationTemplateMultiple',
    template: validationTemplateMultiple
  }]);

  formlyConfigProvider.setWrapper([{
    name: 'descriptionTemplate',
    template: descriptionTemplate
  }]);

	function camelize(string) {
		string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
			return chr ? chr.toUpperCase() : '';
		});
		// Ensure 1st char is always lowercase
		return string.replace(/^([A-Z])/, function(match, chr) {
			return chr ? chr.toLowerCase() : '';
		});
	}

  function applyFormControl(scope) {
    let name = scope.name;
    let key = scope.options.key;
    scope.options.formControl = [];
    scope.options.validation.errorExistsAndShouldBeVisible = false;

    scope.$watch('model["' + key + '"]', function(newVal, oldVal) {
      if (newVal.length != oldVal.length || scope.options.formControl.length <= 0) {
        setTimeout(function() {
          scope.options.formControl = [];
          scope.validationGroup = [];
          for (let i in newVal) {
            scope.options.formControl[i] = scope.form[name + "_" + i];
            scope.$watchGroup(['options.formControl[' + i + '].$invalid', 'options.formControl[' + i + '].$touched'], function() {
              checkValidity(scope);
            }, true);
          }
          if (typeof scope.specialUpdate !== "undefined") {
            scope.specialUpdate(newVal);
          }
          scope.fc = scope.options.formControl;
        }, 30);
      }
    }, true);

    return scope;
  }

  function checkValidity(scope) {
    let scopeValid = true;
    for (let i in scope.options.formControl) {
      scopeValid = !(scope.options.formControl[i].$invalid && (scope.options.formControl[i].$touched || scope.options.formControl[i].$viewValue)) && scopeValid;
    }
    scope.options.validation.errorExistsAndShouldBeVisible = !scopeValid;
  }
}


formlyConfig.$inject = ['formlyConfigProvider'];

export default formlyConfig;
