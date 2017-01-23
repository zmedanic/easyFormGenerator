!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", window.angular);
    }
  };
});
$__System.registerDynamic("3", [], true, function ($__require, exports, module) {
	var define,
	    global = this || self,
	    GLOBAL = global;
	module.exports = {
		"stepway": {
			"version": "1.2.0"
		},
		"dragdropway": {
			"version": "1.2.0"
		},
		"formviewer": {
			"version": "1.2.0"
		}
	};
	return module.exports;
});
$__System.register('4', ['3'], function (_export) {
  'use strict';

  var easyFormConfig, EASY_FORM_VIEWER_VERSION_NAME, EASY_FORM_VIEWER_VERSION_VALUE;

  function easyFromConfig(edaEasyFormViewerConfigProvider) {}

  return {
    setters: [function (_) {
      easyFormConfig = _['default'];
    }],
    execute: function () {
      EASY_FORM_VIEWER_VERSION_NAME = 'easyFormViewerVersion';
      EASY_FORM_VIEWER_VERSION_VALUE = easyFormConfig.formviewer.version;
      easyFromConfig.$inject = ['edaEasyFormViewerConfigProvider'];

      _export('default', easyFromConfig);

      _export('EASY_FORM_VIEWER_VERSION_NAME', EASY_FORM_VIEWER_VERSION_NAME);

      _export('EASY_FORM_VIEWER_VERSION_VALUE', EASY_FORM_VIEWER_VERSION_VALUE);
    }
  };
});
$__System.register("5", [], function (_export) {
  "use strict";

  var blankTemplate, subTitleTemplate, inputTemplate, datepickerTemplate, textareaTemplate, richTextTemplate, radioTemplate, basicSelectTemplate, basicMultiSelectTemplate, groupedSelectTemplate, groupedMultiSelectTemplate, uploadTemplateListFiles, uploadTemplate, validationTemplate, validationTemplateMultiple, descriptionTemplate;
  return {
    setters: [],
    execute: function () {
      blankTemplate = "<div></div>";
      subTitleTemplate = "\n  <div class=\"row\">\n    <div class=\"\">\n      <h4 class=\"text-center\">\n        {{options.templateOptions.label}}\n      </h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"\">\n      {{options.templateOptions.description}}\n    </div>\n  </div>\n  <hr/>";
      inputTemplate = "\n  <input\n    id=\"{{::id}}_{{fieldIndex}}\"\n    name=\"{{::id}}_{{fieldIndex}}\"\n    class=\"form-control\"\n    ng-model=\"model[options.key][fieldIndex]\"\n  />";
      datepickerTemplate = "\n  <div>\n    <p class=\"input-group\">\n      <span class=\"input-group-btn\">\n        <button\n          type=\"button\"\n          class=\"btn btn-default\"\n          ng-click=\"formlyDatePicker.open($event, fieldIndex)\"\n        >\n          <i class=\"glyphicon glyphicon-calendar\"></i>\n        </button>\n      </span>\n      <input\n        type=\"text\"\n        id=\"{{::id}}_{{fieldIndex}}\"\n        name=\"{{::id}}_{{fieldIndex}}\"\n        ng-model=\"model[options.key][fieldIndex]\"\n        class=\"form-control\"\n        ng-click=\"datepicker.open($event, fieldIndex)\"\n        uib-datepicker-popup=\"{{to.datepickerOptions.format}}\"\n        is-open=\"datepicker.opened[fieldIndex]\"\n        datepicker-options=\"to.datepickerOptions\"\n        ng-model-options=\"{timezone: 0}\"\n      />\n    </p>\n  </div>";
      textareaTemplate = "\n  <textarea\n    id=\"{{::id}}_{{fieldIndex}}\"\n    name=\"{{::id}}_{{fieldIndex}}\"\n    class=\"form-control\"\n    ng-model=\"model[options.key][fieldIndex]\"\n  >\n  </textarea>";
      richTextTemplate = "\n  <text-angular\n    id=\"{{::id}}_{{fieldIndex}}\"\n    name=\"{{::id}}_{{fieldIndex}}\"\n    class=\"richTextAngular\"\n    ng-model=\"model[options.key || index][fieldIndex]\"\n  >\n  </text-angular>";
      radioTemplate = "\n  <div class=\"radio-group\">\n    <div\n      ng-repeat=\"(key, option) in to.options\"\n      ng-class=\"{ 'radio': !to.inline, 'radio-inline': to.inline }\"\n    >\n      <label>\n        <input\n          type=\"radio\"\n          id=\"{{id + '_'+ $index}}\"\n          tabindex=\"0\"\n          ng-value=\"option.referenceId || option.uniqueValue\"\n          ng-model=\"model[options.key]\"\n        />\n        {{option[to.labelProp || 'name']}}\n        <p\n          ng-if=\"option.description.length > 0\"\n          class=\"help-block help-inline\"\n        >\n          ({{option.description}})\n        </p>\n      </label>\n    </div>\n  </div>";
      basicSelectTemplate = "\n  <ol\n    class=\"nya-bs-select no-margin-bottom col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n    ng-model=\"model[options.key || index]\"\n    id=\"{{id}}\"\n    disabled=\"options.templateOptions.options.length === 0\"\n    title=\"{{'NOTHING_SELECTED' | translate}}\"\n  >\n    <li\n      class=\"nya-bs-option\"\n      ng-if=\"!options.templateOptions.required\"\n      data-value=\"\"\n    >\n      <a>{{'NOTHING_SELECTED' | translate}}</a>\n    </li>\n    <li\n      class=\"nya-bs-option\"\n      nya-bs-option=\"option in options.templateOptions.options\"\n      data-value=\"{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}\"\n    >\n      <a>\n        <span>{{option.name}}</span>\n        <span\n          ng-if=\"option.description.length > 0\"\n          class=\"help-block help-inline\">\n          ({{option.description}})\n        </span>\n      </a>\n    </li>\n  </ol>";
      basicMultiSelectTemplate = "\n  <ol\n    class=\"nya-bs-select no-margin-bottom col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n    ng-model=\"model[options.key || index]\"\n    multiple\n    id=\"{{id}}\"\n    disabled=\"options.templateOptions.options.length === 0\"\n    title=\"{{'NOTHING_SELECTED' | translate}}\"\n  >\n    <li\n      class=\"nya-bs-option\"\n      nya-bs-option=\"option in options.templateOptions.options\"\n      data-value=\"{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}\"\n      ng-class=\"{disabled: isDisabled(model[options.key || index], option.uniqueValue, options)}\"\n    >\n      <a>\n        <span>{{option.name}}</span>\n        <span\n          ng-if=\"option.description.length > 0\"\n          class=\"help-block help-inline\"\n        >\n          ({{option.description}})\n        </span>\n      </a>\n    </li>\n  </ol>";
      groupedSelectTemplate = "\n  <ol class=\"nya-bs-select no-margin-bottom col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n    ng-model=\"model[options.key || index]\"\n    data-live-search=\"true\"\n    disabled=\"options.templateOptions.options.length === 0\"\n    title=\"{{'NOTHING_SELECTED' | translate}}\"\n  >\n    <li\n      class=\"nya-bs-option\"\n      ng-if=\"!options.templateOptions.required\"\n      data-value=\"\"\n    >\n      <a>{{'NOTHING_SELECTED' | translate}}</a>\n    </li>\n    <li\n      nya-bs-option=\"option in options.templateOptions.options group by option.group\"\n      value=\"{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}\"\n    >\n      <span class=\"dropdown-header\">{{$group}}</span>\n      <a>\n        <span>{{option.name}}</span>\n        <span\n          ng-if=\"option.description.length > 0\"\n          class=\"help-block help-inline\"\n        >\n          ({{option.description}})\n        </span>\n        <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n      </a>\n    </li>\n  </ol>";
      groupedMultiSelectTemplate = "\n  <ol class=\"nya-bs-select no-margin-bottom col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n    ng-model=\"model[options.key || index]\"\n    multiple\n    data-live-search=\"true\"\n    disabled=\"options.templateOptions.options.length === 0\"\n    title=\"{{'NOTHING_SELECTED' | translate}}\"\n  >\n    <li\n      nya-bs-option=\"option in options.templateOptions.options group by option.group\"\n      value=\"{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}\"\n      ng-class=\"{disabled: isDisabled(model[options.key || index], option.uniqueValue, options)}\"\n    >\n      <span class=\"dropdown-header\">{{$group}}</span>\n      <a>\n        <span>{{option.name}}</span>\n        <span\n          ng-if=\"option.description.length > 0\"\n          class=\"help-block help-inline\"\n        >\n          ({{option.description}})\n        </span>\n        <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n      </a>\n    </li>\n  </ol>";
      uploadTemplateListFiles = "\n  <div ng-if=\"options.type == 'upload' && options.templateOptions.files\">\n    <div\n      ng-repeat=\"file in options.templateOptions.files\"\n      style=\"padding-bottom: 20px\"\n    >\n      <div class=\"row\">\n        <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n          <a class=\"upload-files\" href=\"{{file.path}}\" target=\"_blank\">{{file.name}}</a>\n        </div>\n        <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\">\n          <button\n            class=\"btn btn-sm btn-danger upload-files\"\n            ng-click=\"deleteFile(file.referenceId)\"\n          >\n            {{'REMOVE' | translate}}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <formly-transclude></formly-transclude>";
      uploadTemplate = "\n  <div\n    ng-hide=\"!(options.templateOptions.allowMultiple == -1 || !(options.templateOptions.files && options.templateOptions.files.length >= options.templateOptions.allowMultiple))\"\n  >\n    <input\n      type=\"file\"\n      class=\"form-control\"\n      ng-model=\"model[options.key][fieldIndex]\"\n      id=\"{{::id}}_{{fieldIndex}}\"\n      name=\"{{::id}}_{{fieldIndex}}\"\n    />\n  </div>";
      validationTemplate = "\n  <div\n    class=\"formly-template-wrapper form-group\"\n    ng-class=\"{'has-error': options.validation.errorExistsAndShouldBeVisible}\"\n  >\n    <formly-transclude></formly-transclude>\n    <div class=\"validation\"\n      ng-if=\"!options.templateOptions.canDisplayMultiple && fc[0] && fc[0].$invalid && (fc[0].$touched || fc[0].$viewValue)\"\n      ng-messages=\"fc[0].$error\"\n    >\n      <div ng-messages-include=\"validation.html\"></div>\n      <div ng-message=\"{{name}}\" ng-repeat=\"(name, value) in fc[0].$error\">\n        <div ng-if=\"value && options.validation.messages[name]\">\n          {{options.validation.messages[name](fc[0].$viewValue, fc[0].$modelValue, this)}}\n        </div>\n      </div>\n    </div>\n    <div class=\"validation\"\n      ng-if=\"!options.templateOptions.canDisplayMultiple && !fc[0] && fc.$invalid && (fc.$touched || fc.$viewValue)\"\n      ng-messages=\"fc.$error\"\n    >\n      <div ng-messages-include=\"validation.html\"></div>\n      <div ng-message=\"{{name}}\" ng-repeat=\"(name, value) in fc.$error\">\n        <div ng-if=\"value && options.validation.messages[name]\">\n          {{options.validation.messages[name](fc.$viewValue, fc.$modelValue, this)}}\n        </div>\n      </div>\n    </div>\n  </div>";
      validationTemplateMultiple = "\n  <div\n    ng-repeat=\"item in model[options.key] track by $index\" ng-init=\"fieldIndex = $index\"\n  >\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n        <formly-transclude></formly-transclude>\n      </div>\n      <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\" style=\"margin-bottom: 20px;\">\n        <button\n          type=\"button\"\n          id=\"delete-{{::id}}\"\n          class=\"btn btn-sm btn-danger\"\n          ng-click=\"model[options.key].splice($index, 1)\"\n          ng-if=\"model[options.key].length > 1\"\n        >\n          {{'REMOVE' | translate}}\n        </button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12\">\n        <div class=\"validation\"\n          ng-if=\"fc[$index] && fc[$index].$invalid && (fc[$index].$touched || fc[$index].$viewValue)\"\n          ng-messages=\"fc[$index].$error\"\n        >\n          <div ng-messages-include=\"validation.html\"></div>\n          <div ng-message=\"{{name}}\" ng-repeat=\"(name, value) in fc[$index].$error\">\n            <div ng-if=\"value && options.validation.messages[name]\">\n              {{options.validation.messages[name](fc[$index].$viewValue, fc[$index].$modelValue, this)}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p\n    ng-if=\"options.templateOptions.allowMultiple == -1 || (options.type != 'upload' && model[options.key].length < options.templateOptions.allowMultiple) || (options.type == 'upload' && options.templateOptions.files && options.templateOptions.files.length + model[options.key].length < options.templateOptions.allowMultiple)\">\n    <button\n      type=\"button\"\n      class=\"btn btn-primary\"\n      ng-click=\"model[options.key].push('')\">\n      {{'ADD_NEW' | translate}}\n    </button>\n  </p>";
      descriptionTemplate = "\n  <formly-transclude></formly-transclude>\n  <p\n    class=\"help-block\"\n    ng-if=\"to.descriptionNew\"\n  >\n    {{to.descriptionNew}}\n  </p>";

      _export("blankTemplate", blankTemplate);

      _export("subTitleTemplate", subTitleTemplate);

      _export("inputTemplate", inputTemplate);

      _export("datepickerTemplate", datepickerTemplate);

      _export("textareaTemplate", textareaTemplate);

      _export("richTextTemplate", richTextTemplate);

      _export("radioTemplate", radioTemplate);

      _export("basicSelectTemplate", basicSelectTemplate);

      _export("basicMultiSelectTemplate", basicMultiSelectTemplate);

      _export("groupedSelectTemplate", groupedSelectTemplate);

      _export("groupedMultiSelectTemplate", groupedMultiSelectTemplate);

      _export("uploadTemplate", uploadTemplate);

      _export("uploadTemplateListFiles", uploadTemplateListFiles);

      _export("validationTemplate", validationTemplate);

      _export("validationTemplateMultiple", validationTemplateMultiple);

      _export("descriptionTemplate", descriptionTemplate);
    }
  };
});
$__System.register('6', ['5'], function (_export) {
  'use strict';

  var blankTemplate, subTitleTemplate, inputTemplate, datepickerTemplate, textareaTemplate, richTextTemplate, radioTemplate, basicSelectTemplate, basicMultiSelectTemplate, groupedSelectTemplate, groupedMultiSelectTemplate, uploadTemplate, uploadTemplateListFiles, validationTemplate, validationTemplateMultiple, descriptionTemplate;

  function formlyConfig(formlyConfigProvider) {
    var initInjector = angular.injector(['ng']);
    var $window = initInjector.get('$window');

    formlyConfigProvider.setType({
      name: 'blank',
      template: blankTemplate
    });

    formlyConfigProvider.setType({
      name: 'subTitle',
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
      controller: ['$scope', function ($scope) {
        applyFormControl($scope);
      }]
    });

    ////////////////////////////
    // angular UI date picker
    ////////////////////////////
    // thx Kent C. Dodds

    var attributes = ['date-disabled', 'custom-class', 'show-weeks', 'starting-day', 'init-date', 'min-mode', 'max-mode', 'format-day', 'format-month', 'format-year', 'format-day-header', 'format-day-title', 'format-month-title', 'year-range', 'shortcut-propagation', 'datepicker-popup', 'show-button-bar', 'current-text', 'clear-text', 'close-text', 'close-on-date-selection', 'datepicker-append-to-body'];

    var bindings = ['datepicker-mode', 'min-date', 'max-date'];

    var ngModelAttrs = {};

    angular.forEach(attributes, function (attr) {
      ngModelAttrs[camelize(attr)] = { attribute: attr };
    });

    angular.forEach(bindings, function (binding) {
      ngModelAttrs[camelize(binding)] = { bound: binding };
    });

    formlyConfigProvider.setType({
      name: 'datepicker',
      template: datepickerTemplate,
      defaultOptions: {
        noFormControl: true,
        ngModelAttrs: ngModelAttrs,
        templateOptions: {
          datepickerOptions: {
            format: 'dd/MM/yyyy',
            initDate: new Date(),
            showWeeks: true
          }
        }
      },
      wrapper: ['validationTemplateMultiple', 'descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
      controller: ['$scope', function ($scope) {

        applyFormControl($scope);

        // console.info('ui calendar init');
        $scope.datepicker = {};

        // make sure the initial value is of type DATE!
        var currentModelVal = $scope.model[$scope.options.key];
        if (typeof currentModelVal == 'string') {
          $scope.model[$scope.options.key] = new Date(currentModelVal);
        }

        $scope.specialUpdate = function (count) {
          $scope.datepicker.opened = [];
          for (var i = 0; i < count; i++) {
            $scope.datepicker.opened.push(false);
          }
        };

        $scope.datepicker.opened = [];
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
          rows: { attribute: 'rows' },
          cols: { attribute: 'cols' }
        }
      },
      apiCheck: function apiCheck(check) {
        return {
          templateOptions: {
            rows: check.number.optional,
            cols: check.number.optional
          }
        };
      },
      controller: ['$scope', function ($scope) {
        applyFormControl($scope);
      }]
    });

    formlyConfigProvider.setType({
      name: 'richEditor',
      template: richTextTemplate,
      wrapper: ['validationTemplateMultiple', 'descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
      defaultOptions: {
        noFormControl: true
      },
      controller: ['$scope', function ($scope) {
        applyFormControl($scope);
      }]
    });

    formlyConfigProvider.setType({
      name: 'radio',
      overwriteOk: true,
      template: radioTemplate,
      wrapper: ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
      apiCheck: function apiCheck(check) {
        return {
          templateOptions: {
            options: check.arrayOf(check.object),
            labelProp: check.string.optional,
            valueProp: check.string.optional,
            inline: check.bool.optional
          }
        };
      }
    });

    formlyConfigProvider.setType({
      name: 'basicSelect',
      template: basicSelectTemplate,
      wrapper: ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
      name: 'basicMultiSelect',
      template: basicMultiSelectTemplate,
      wrapper: ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
      controller: ['$scope', function ($scope) {
        $scope.isDisabled = function (model, value, options) {
          if (typeof model == "object") {
            var optionSelected = true;

            for (var i in model) {
              if (model[i].uniqueValue === value) {
                optionSelected = false;
              }
            }
            var optionsMultiple = options.templateOptions.allowMultiple > 1;
            var optionsLength = model.length >= options.templateOptions.allowMultiple;
            return optionSelected && optionsMultiple && optionsLength;
          }

          return false;
        };
      }]
    });

    formlyConfigProvider.setType({
      name: 'groupedSelect',
      template: groupedSelectTemplate,
      wrapper: ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
      name: 'groupedMultiSelect',
      template: groupedMultiSelectTemplate,
      wrapper: ['descriptionTemplate', 'bootstrapLabel', 'bootstrapHasError'],
      controller: ['$scope', function ($scope) {
        $scope.isDisabled = function (model, value, options) {
          if (typeof model == "object") {
            var optionSelected = true;

            for (var i in model) {
              if (model[i].uniqueValue === value) {
                optionSelected = false;
              }
            }
            var optionsMultiple = options.templateOptions.allowMultiple > 1;
            var optionsLength = model.length >= options.templateOptions.allowMultiple;
            return optionSelected && optionsMultiple && optionsLength;
          }

          return false;
        };
      }]
    });

    // impplement from : http://jsbin.com/koredu/edit?js,output
    formlyConfigProvider.setType({
      name: 'upload',
      template: uploadTemplate,
      wrapper: ['validationTemplateMultiple', 'descriptionTemplate', 'uploadTemplateListFiles', 'bootstrapLabel', 'bootstrapHasError'],
      defaultOptions: {
        noFormControl: true
      },
      controller: ['$scope', function ($scope) {
        applyFormControl($scope);

        $scope.deleteFile = function (referenceId) {
          if (referenceId) {
            $scope.$emit('fileDelete', referenceId);
          }
        };
      }],
      link: function link(scope, el, attrs) {
        el.on("change", function (changeEvent) {
          // Find fieldControl
          var fcKey = 0;
          for (var i in scope.fc) {
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
        el.on("focusout", function (focusoutEvent) {
          // Find fieldControl
          var fcKey = 0;
          for (var i in scope.fc) {
            if (focusoutEvent.target.name == scope.fc[i].$name) {
              fcKey = i;
            }
          }

          // dont run validation , user still opening pop up file dialog
          if ($window.document.activeElement.id === scope.id) {
            // so we set it untouched
            scope.$apply(function (scope) {
              scope.fc[fcKey].$setUntouched();
            });
          } else {
            if (!angular.element(focusoutEvent.srcElement).hasClass("upload-list") && scope.fc[fcKey]) {
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
      string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
      // Ensure 1st char is always lowercase
      return string.replace(/^([A-Z])/, function (match, chr) {
        return chr ? chr.toLowerCase() : '';
      });
    }

    function applyFormControl(scope) {
      var name = scope.name;
      var key = scope.options.key;
      scope.options.formControl = [];
      scope.options.validation.errorExistsAndShouldBeVisible = false;

      scope.$watch('model["' + key + '"]', function (newVal, oldVal) {
        if (newVal.length != oldVal.length || scope.options.formControl.length <= 0) {
          setTimeout(function () {
            scope.options.formControl = [];
            scope.validationGroup = [];
            for (var i in newVal) {
              scope.options.formControl[i] = scope.form[name + "_" + i];
              scope.$watchGroup(['options.formControl[' + i + '].$invalid', 'options.formControl[' + i + '].$touched'], function () {
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
      var scopeValid = true;
      for (var i in scope.options.formControl) {
        scopeValid = !(scope.options.formControl[i].$invalid && (scope.options.formControl[i].$touched || scope.options.formControl[i].$viewValue)) && scopeValid;
      }
      scope.options.validation.errorExistsAndShouldBeVisible = !scopeValid;
    }
  }

  return {
    setters: [function (_) {
      blankTemplate = _.blankTemplate;
      subTitleTemplate = _.subTitleTemplate;
      inputTemplate = _.inputTemplate;
      datepickerTemplate = _.datepickerTemplate;
      textareaTemplate = _.textareaTemplate;
      richTextTemplate = _.richTextTemplate;
      radioTemplate = _.radioTemplate;
      basicSelectTemplate = _.basicSelectTemplate;
      basicMultiSelectTemplate = _.basicMultiSelectTemplate;
      groupedSelectTemplate = _.groupedSelectTemplate;
      groupedMultiSelectTemplate = _.groupedMultiSelectTemplate;
      uploadTemplate = _.uploadTemplate;
      uploadTemplateListFiles = _.uploadTemplateListFiles;
      validationTemplate = _.validationTemplate;
      validationTemplateMultiple = _.validationTemplateMultiple;
      descriptionTemplate = _.descriptionTemplate;
    }],
    execute: function () {
      formlyConfig.$inject = ['formlyConfigProvider'];

      _export('default', formlyConfig);
    }
  };
});
$__System.registerDynamic("7", [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    module.exports = {
        "SAY_HI": "Hello",

        "EDIT_TAB": "Edit / Create",
        "PREVIEW_TAB": "Preview",

        "WIZARD_LINES": "lines",
        "WIZARD_LAYOUT": "layout",
        "WIZARD_CONTROLS": "controls",
        "WIZARD_SAVE": "save",

        "PAGER_PREVIOUS": "Previous",
        "PAGER_NEXT": "Next",

        "COMMAND_PANEL": "Command",
        "VISUAL_PANEL": "Visual",

        "ADD_NEW_LINE": "Add a new line",

        "SELECTED_LINE": "Selected line",

        "NUMBER_OF_COLUMN": "number of columns",
        "APPLY_CTRL2COL": "Apply controls to columns",

        "CLIC_TAP_2_OPEN": "Click / Tap on column to open control selection",
        "SELECT_2_APPLY_COL": "Select desired control and valid to apply it to column",

        "CUSTOM_SUBMIT_BTN": "Customize Submit button Text",
        "CUSTOM_CANCEL_BTN": "Customize Cancel button Text",
        "NAME_THIS_FORM": "Name this form",
        "SAVE_THIS_FORM": "save this form",

        "FINAL_STEP": "Final Step : form preview",

        "DATA_MODEL": "DATA MODEL",
        "FIELDS_MODEL": "FIELDS MODEL (ready to save to database one)",

        "SELECT_A_CTRL": "Select a control",
        "SELECT_CTRL_IN_LIST": "Select a control in the list below",
        "COL_WILL_BE_BLANK": "Column will be blank",

        "EDIT_PROPERTIES": "Edit properties",

        "HEADER_TITLE": "Header title",
        "ADD_EDIT_HEADER_TITLE_HERE": "Add / edit header title here",
        "HEADER_TEXT": "Header text",
        "ADD_EDIT_HEADER_HERE": "Add / edit header text here",

        "SUBTITLE_TITLE": "Subtitle title",
        "ADD_EDIT_SUBTIL_TITLE_HERE": "Add / edit subtitle title here",
        "SUBTITLE_TEXT": "Subtitle text",
        "ADD_EDIT_SUBTIL_HERE": "Add / edit subtitle text here",

        "LABEL_TEXT": "Label text",
        "ADD_EDIT_LABEL_HERE": "Add / edit control label here",

        "PLACEHOLDER": "Placeholder",
        "ADD_EDIT_PLACEHOLD": "Add / edit placeholder text here",

        "REQUIRED": "Required",

        "DESCRIPTION": "Description",
        "ADDEDIT_DESCRIPTION": "Add / edit description here",

        "DATE_FORMAT": "Date format",

        "ADD_NEW_RADIO": "Add new radio",
        "ADD_RADIO_PLACEHOLD": "add new radio",
        "EDIT_REMOVE_RADIO": "Edit/Remove radio",
        "NO_RADIO_ADD_NEW": "no radio : add new radio values",

        "SEARCH_4_OPTION": "search for option",

        "ADD": "add",
        "ORDER": "order",
        "OPTION": "option",
        "GROUP": "group",

        "ADD_NEW_OPTIONS": "Add new options",
        "ADD_A_NEW_OPTION": "add new option",
        "EDIT_REMOVE_OPTIONS": "Edit/Remove options",
        "NO_OPTION_ADD_NEW": "no option : add new options",

        "ADD_NEW_GROUPS": "Add new groups",
        "ADD_A_NEW_GROUP": "Add new group",
        "EDIT_GROUPS_OPTIONS": "Edit/Remove options/groups",
        "NO_GROUP_ADD_NEW": "add new groups",

        "OK": "OK",
        "CANCEL": "Cancel",

        "MIN_VALUE": "Minimum value",
        "MAX_VALUE": "Maximum value",
        "INCREMENTAL": "Incremental value",
        "MAX_LENGTH": "Maximum length",
        "CURRENT_YEAR": "Current year as default value",
        "CURRENT_DATE": "Current date as default value",
        "PARENT_ID": "Parent field",
        "LABEL_TEXT_SHORT": "Label short text",
        "UNIQUE": "Unique",
        "DEFAULT_VALUE": "Default value",
        "START_VALUE": "Start value",
        "DISPLAY_ADD": "Display at input form",
        "DISPLAY_EDIT": "Display at edit form",
        "ALLOW_MULTIPLE": "Number of values per field",
        "NOTHING_SELECTED": "Nothing selected",
        "NO_VALUE": "No value",
        "ADD_DEFAUT_VALUE_HERE": "Add default value here",
        "ADD_EDIT_SHORT_LABEL_HERE": "Add / edit short label here",
        "NUMBER_TYPE": "Number type",
        "ALLOW_EMPTY_OPTION": "Allow  empty option",
        "RESET_SELECTION": "Reset selection",
        "FIELD": "Field",
        "VALIDATION_REQUIRED": " is required",
        "VALIDATION_MIN_MAX": " is limited to values ({{min}} - {{max}})",
        "VALIDATION_YEAR": " is not valid year ({{min}} - {{max}})",
        "VALIDATION_EMAIL": " is not a valid email",
        "VALIDATION_MAXLENGTH": " size should have max {{max}} characters",
        "VALIDATION_DATE_INVALID": " has invalid date",
        "VALIDATION_UNIQUE": " is not unique",
        "REMOVE": "Remove",
        "ADD_NEW": "Add new"
    };
    return module.exports;
});
$__System.registerDynamic("8", [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    module.exports = {
        "SAY_HI": "Bonjour",

        "EDIT_TAB": "Edition / Creation",
        "PREVIEW_TAB": "Aperçu",

        "WIZARD_LINES": "lignes",
        "WIZARD_LAYOUT": "disposition",
        "WIZARD_CONTROLS": "contrôles",
        "WIZARD_SAVE": "sauvegarder",

        "PAGER_PREVIOUS": "Précédent",
        "PAGER_NEXT": "Suivant",

        "COMMAND_PANEL": "Commandes",
        "VISUAL_PANEL": "Visuel",

        "ADD_NEW_LINE": "Ajouter une nouvelle ligne",

        "SELECTED_LINE": "Ligne sélectionnée",

        "NUMBER_OF_COLUMN": "nombre de colonnes",
        "APPLY_CTRL2COL": "Appliquer les contrôles aux colonnes",

        "CLIC_TAP_2_OPEN": "Cliquer sur une colonne pour ouvrir le menu d'édition",
        "SELECT_2_APPLY_COL": "Sélectionner un contrôle puis valider pour l'appliquer à la colonne",

        "CUSTOM_SUBMIT_BTN": "Personnaliser le texte du bouton envoie",
        "CUSTOM_CANCEL_BTN": "Personnaliser le texte du bouton annuler",
        "NAME_THIS_FORM": "Nommer le formulaire",
        "SAVE_THIS_FORM": "sauvegarder le formulaire",

        "FINAL_STEP": "Dernière étape : aperçu du formulaire",

        "DATA_MODEL": "MODELE DE DONNEES",
        "FIELDS_MODEL": "MODELE DES CHAMPS (modèle compatible base de données)",

        "SELECT_A_CTRL": "Sélectionner un contrôle",
        "SELECT_CTRL_IN_LIST": "Sélectionner un contrôle dans la liste ci-dessous",
        "COL_WILL_BE_BLANK": "La colonne sera vide",

        "EDIT_PROPERTIES": "Editer les propriétés",

        "HEADER_TEXT": "Texte du titre principal",
        "ADD_EDIT_HEADER_HERE": "Editer le textes du titre principal",

        "SUBTITLE_TEXT": "Texte du sous-titre",
        "ADD_EDIT_SUBTIL_HERE": "Editer le textes du sous-titre",

        "LABEL_TEXT": "Texte de l'étiquette",
        "ADD_EDIT_LABEL_HERE": "Editer le texte de l'étiquette",

        "PLACEHOLDER": "placeholder",
        "ADD_EDIT_PLACEHOLD": "Editer le placeholder",

        "REQUIRED": "Requis",

        "DESCRIPTION": "Description",
        "ADDEDIT_DESCRIPTION": "Ajouter / editer la description",

        "DATE_FORMAT": "Format de la date",

        "ADD_NEW_RADIO": "Ajouter un nouveau choix à cocher",
        "ADD_RADIO_PLACEHOLD": "Ajouter un nouveau choix à cocher",
        "EDIT_REMOVE_RADIO": "Editer / supprimer un choix à cocher",
        "NO_RADIO_ADD_NEW": "aucun choix à cocher : en ajouter un",

        "SEARCH_4_OPTION": "rechercher une option",

        "ADD": "ajouter",
        "ORDER": "ordre",
        "OPTION": "option",
        "GROUP": "groupe",

        "ADD_NEW_OPTIONS": "Ajouter de nouvelles options",
        "ADD_A_NEW_OPTION": "ajoutre une option",
        "EDIT_REMOVE_OPTIONS": "Editer / supprimer des options",
        "NO_OPTION_ADD_NEW": "aucune option : en ajouter",

        "ADD_NEW_GROUPS": "Ajouter de nouveaux groupes",
        "ADD_A_NEW_GROUP": "Ajouter un nouveau groupe",
        "EDIT_GROUPS_OPTIONS": "Editer / supprimer les groupes et options",
        "NO_GROUP_ADD_NEW": "ajouter de nouveaux groupes",

        "OK": "Valider",
        "CANCEL": "Annuler"
    };
    return module.exports;
});
$__System.registerDynamic("9", [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    module.exports = {
        "SAY_HI": "Hola",

        "EDIT_TAB": "Editar / Crear",
        "PREVIEW_TAB": "Previsualizar",

        "WIZARD_LINES": "lineas",
        "WIZARD_LAYOUT": "diseño",
        "WIZARD_CONTROLS": "controles",
        "WIZARD_SAVE": "guardar",

        "PAGER_PREVIOUS": "Anterior",
        "PAGER_NEXT": "Siguiente",

        "COMMAND_PANEL": "Comando",
        "VISUAL_PANEL": "Visual",

        "ADD_NEW_LINE": "Agregar nueva linea",

        "SELECTED_LINE": "Linea seleccionada",

        "NUMBER_OF_COLUMN": "numero de columnas",
        "APPLY_CTRL2COL": "Aplicar controles a columnas",

        "CLIC_TAP_2_OPEN": "Click / Toque en la columna para seleccionar controles",
        "SELECT_2_APPLY_COL": "Selecciona el control deseado para aplicarlo a la columna",

        "CUSTOM_SUBMIT_BTN": "Personalizar texto de boton Enviar",
        "CUSTOM_CANCEL_BTN": "Personalizar texto de boton Cancelar",
        "NAME_THIS_FORM": "Nombrar formulario",
        "SAVE_THIS_FORM": "guardar formulario",

        "FINAL_STEP": "Ultimo paso : previsualizar formulario",

        "DATA_MODEL": "MODELO DE DATOS",
        "FIELDS_MODEL": "MODELO DE CAMPOS (listo para guardar en base de datos uno)",

        "SELECT_A_CTRL": "Selecciona un control",
        "SELECT_CTRL_IN_LIST": "Selecciona un control de la lista",
        "COL_WILL_BE_BLANK": "Columna sera vacia",

        "EDIT_PROPERTIES": "Editar propiedades",

        "HEADER_TEXT": "Texto de encabezado",
        "ADD_EDIT_HEADER_HERE": "Agregar / editar texto de encabezado aqui",

        "SUBTITLE_TEXT": "Texto de subtitulo",
        "ADD_EDIT_SUBTIL_HERE": "Agregar / editar texto de subtitulo aqui",

        "LABEL_TEXT": "Texto de etiqueta",
        "ADD_EDIT_LABEL_HERE": "Agregar / editar texto de etiqueta aqui",

        "PLACEHOLDER": "Marcador",
        "ADD_EDIT_PLACEHOLD": "Agregar / editar texto de marcador aqui",

        "REQUIRED": "Requerido",

        "DESCRIPTION": "Descripcion",
        "ADDEDIT_DESCRIPTION": "Agregar / editar descripcion aqui",

        "DATE_FORMAT": "Formato de fecha",

        "ADD_NEW_RADIO": "Agregar nuevo radio",
        "ADD_RADIO_PLACEHOLD": "agregar nuevo radio",
        "EDIT_REMOVE_RADIO": "Editar/Eliminar radio",
        "NO_RADIO_ADD_NEW": "sin radio : agregar nuevos valores de radio",

        "SEARCH_4_OPTION": "buscar opcion",

        "ADD": "agregar",
        "ORDER": "orden",
        "OPTION": "opcion",
        "GROUP": "grupo",

        "ADD_NEW_OPTIONS": "agregar nuevas opciones",
        "ADD_A_NEW_OPTION": "agregar nueva opcione",
        "EDIT_REMOVE_OPTIONS": "Editar/Eliminar opciones",
        "NO_OPTION_ADD_NEW": "sin opcion : agregar nuevas opciones",

        "ADD_NEW_GROUPS": "Agregar nuevos grupos",
        "ADD_A_NEW_GROUP": "Agregar nuevo grupo",
        "EDIT_GROUPS_OPTIONS": "Editar/Eliminar opciones/grupos",
        "NO_GROUP_ADD_NEW": "agregar nuevos grupos",

        "OK": "OK",
        "CANCEL": "Cancelar"
    };
    return module.exports;
});
$__System.registerDynamic("a", [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    module.exports = {
        "SAY_HI": "Hallo",

        "EDIT_TAB": "Bearbeiten / Schaffen",
        "PREVIEW_TAB": "Vorschau",

        "WIZARD_LINES": "Linien",
        "WIZARD_LAYOUT": "Layout",
        "WIZARD_CONTROLS": "Steuerung",
        "WIZARD_SAVE": "sparen",

        "PAGER_PREVIOUS": "vorher.",
        "PAGER_NEXT": "nächste",

        "COMMAND_PANEL": "Anweisung",
        "VISUAL_PANEL": "visuell",

        "ADD_NEW_LINE": "Hinzufügen neuer Leitung",
        "SELECTED_LINE": "ausgewählte Linie",

        "NUMBER_OF_COLUMN": "Anzahl von Spalten",
        "APPLY_CTRL2COL": "gelten diese Steuer Spalte",

        "CLIC_TAP_2_OPEN": "klicken Sie auf Spalte zur Steuerungsauswahl öffnen",
        "SELECT_2_APPLY_COL": "Wählen Sie die gewünschte Steuerung und gültig , um es in Spalte anwenden",

        "CUSTOM_SUBMIT_BTN": "Passen Submit-Button Text",
        "CUSTOM_CANCEL_BTN": "Passen Cancel-Button Text",
        "NAME_THIS_FORM": "Nennen dieses Formular",
        "SAVE_THIS_FORM": "Speichern dieses Formular",

        "FINAL_STEP": "Endschritt : Formular Vorschau",

        "DATA_MODEL": "DATEN MODELL",
        "FIELDS_MODEL": "FELDER MODELL (Datenbank-kompatibel)",

        "SELECT_A_CTRL": "Wählen Sie ein Steuer",
        "SELECT_CTRL_IN_LIST": "Wählen Sie ein Steuer aus der Liste unten",
        "COL_WILL_BE_BLANK": "die Spalte werde leer sein",

        "EDIT_PROPERTIES": "Anzeigen",

        "HEADER_TEXT": "Kopftext",
        "ADD_EDIT_HEADER_HERE": "Kopftext ändern",

        "SUBTITLE_TEXT": "Untertitel",
        "ADD_EDIT_SUBTIL_HERE": "Untertitel ändern",

        "LABEL_TEXT": "Etikett",
        "ADD_EDIT_LABEL_HERE": "Etikett ändern",

        "PLACEHOLDER": "placeholder",
        "ADD_EDIT_PLACEHOLD": "placeholder ändern",

        "REQUIRED": "erforderlich",

        "DESCRIPTION": "Beschreibung",
        "ADDEDIT_DESCRIPTION": "Beschreibung ändern",

        "DATE_FORMAT": "Datumsformat",

        "ADD_NEW_RADIO": "Radiobutton hinzufügen",
        "ADD_RADIO_PLACEHOLD": "Radiobutton hinzufügen",
        "EDIT_REMOVE_RADIO": "Radiobutton ändern",
        "NO_RADIO_ADD_NEW": "kein Radiobutton : Radiobutton hinzufügen",

        "SEARCH_4_OPTION": "option suchen",

        "ADD": "hinzufügen",
        "ORDER": "bestellen",
        "OPTION": "Option",
        "GROUP": "Gruppe",

        "ADD_NEW_OPTIONS": "Optionen hinzufügen",
        "ADD_A_NEW_OPTION": "Option hinzufügen",
        "EDIT_REMOVE_OPTIONS": "Optionen ändern",
        "NO_OPTION_ADD_NEW": "kein option : Option hinzufügen",

        "ADD_NEW_GROUPS": "Gruppen hinzufügen",
        "ADD_A_NEW_GROUP": "Gruppe hinzufügen",
        "EDIT_GROUPS_OPTIONS": "Gruppen ändern",
        "NO_GROUP_ADD_NEW": "keine Gruppe : Gruppe hinzufügen",

        "OK": "bestätigen",
        "CANCEL": "stornieren"

    };
    return module.exports;
});
$__System.registerDynamic("b", [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    module.exports = {
        "SAY_HI": "Merhaba",

        "EDIT_TAB": "Düzenle / Oluştur",
        "PREVIEW_TAB": "Önizleme",

        "WIZARD_LINES": "satırlar",
        "WIZARD_LAYOUT": "düzen",
        "WIZARD_CONTROLS": "kontroller",
        "WIZARD_SAVE": "kaydet",

        "PAGER_PREVIOUS": "Geri",
        "PAGER_NEXT": "İleri",

        "COMMAND_PANEL": "Komut",
        "VISUAL_PANEL": "Görsel",

        "ADD_NEW_LINE": "Yeni satır ekle",

        "SELECTED_LINE": "Seçili satır",

        "NUMBER_OF_COLUMN": "sütun sayısı",
        "APPLY_CTRL2COL": "Sütunlara form ögesi ekle",

        "CLIC_TAP_2_OPEN": "Form ögesi eklemek için sütunlara tıkla",
        "SELECT_2_APPLY_COL": "İstediğin ögeyi seçtikten sonra gerekli yerleri doldur ve kaydet",

        "CUSTOM_SUBMIT_BTN": "Gönder butonu yazısını düzenle",
        "CUSTOM_CANCEL_BTN": "İptal butonu yazısını düzenle",
        "NAME_THIS_FORM": "Forma isim ver",
        "SAVE_THIS_FORM": "formu kaydet",

        "FINAL_STEP": "Son aşama : form önizlemesi",

        "DATA_MODEL": "VERİ MODELİ",
        "FIELDS_MODEL": "ALAN MODELİ (veritabanına kaydetmeye hazır)",

        "SELECT_A_CTRL": "Form ögesi seç",
        "SELECT_CTRL_IN_LIST": "Verilen listeden bir form ögesi seç",
        "COL_WILL_BE_BLANK": "Sütun boş kalacak",

        "EDIT_PROPERTIES": "Özellikleri düzenle",

        "HEADER_TEXT": "Başlık yazısı",
        "ADD_EDIT_HEADER_HERE": "Başlık yazısını ekle / düzenle",

        "SUBTITLE_TEXT": "Altyazı",
        "ADD_EDIT_SUBTIL_HERE": "Altyazı ekle / düzenle",

        "LABEL_TEXT": "Form ögesinin adı",
        "ADD_EDIT_LABEL_HERE": "Ad ekle / düzenle",

        "PLACEHOLDER": "Form ögesinin içine geçici yazı ekle",
        "ADD_EDIT_PLACEHOLD": "Geçici yazı ekle / düzenle",

        "REQUIRED": "Gerekli",

        "DESCRIPTION": "Açıklama",
        "ADDEDIT_DESCRIPTION": "Açıklama ekle / düzenle",

        "DATE_FORMAT": "Tarih formatı",

        "ADD_NEW_RADIO": "Radio butonu ekle",
        "ADD_RADIO_PLACEHOLD": "radio butonu ekle",
        "EDIT_REMOVE_RADIO": "Radio butonunu ekle / düzenle",
        "NO_RADIO_ADD_NEW": "radio butonu yok : yeni buton ekle",

        "SEARCH_4_OPTION": "seçenek ara",

        "ADD": "ekle",
        "ORDER": "sıra",
        "OPTION": "seçenek",
        "GROUP": "grup",

        "ADD_NEW_OPTIONS": "Yeni seçenek ekle",
        "ADD_A_NEW_OPTION": "yeni seçenek ekle",
        "EDIT_REMOVE_OPTIONS": "Seçenekleri düzenle/sil",
        "NO_OPTION_ADD_NEW": "seçenek yok : yeni seçenek ekle",

        "ADD_NEW_GROUPS": "Yeni grup ekle",
        "ADD_A_NEW_GROUP": "Yeni grup ekle",
        "EDIT_GROUPS_OPTIONS": "Seçenek/Grup Ekle/sil",
        "NO_GROUP_ADD_NEW": "yeni grup ekle",

        "OK": "TAMAM",
        "CANCEL": "İptal"
    };
    return module.exports;
});
$__System.registerDynamic("c", [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    module.exports = {
        "SAY_HI": "こんにちわ",

        "EDIT_TAB": "編集 / 作成",
        "PREVIEW_TAB": "プレビュー",

        "WIZARD_LINES": "ライン",
        "WIZARD_LAYOUT": "レイアウト",
        "WIZARD_CONTROLS": "コントロール",
        "WIZARD_SAVE": "サーブ",

        "PAGER_PREVIOUS": "前",
        "PAGER_NEXT": "次",

        "COMMAND_PANEL": "コマンド",
        "VISUAL_PANEL": "ビジュアル",

        "ADD_NEW_LINE": "新しいライン追加",

        "SELECTED_LINE": "選択されたライン",

        "NUMBER_OF_COLUMN": "カラムの数",
        "APPLY_CTRL2COL": "カラムにコントロール適用",

        "CLIC_TAP_2_OPEN": "コントロール選択を広げるには列をクリック",
        "SELECT_2_APPLY_COL": "好きなコントロールを選び適用",

        "CUSTOM_SUBMIT_BTN": "適用ボタンの文字変更する場合",
        "CUSTOM_CANCEL_BTN": "キャンセルボタンの文字変更する場合",
        "NAME_THIS_FORM": "形式に名前を付ける",
        "SAVE_THIS_FORM": "形式をサーブ",

        "FINAL_STEP": "ファイナルステップ : プレビュー形式",

        "DATA_MODEL": "データーモデル",
        "FIELDS_MODEL": "モデルフィールド",

        "SELECT_A_CTRL": "コントロールを選び選択",
        "SELECT_CTRL_IN_LIST": "以下のリストからコントロールを選び選択",
        "COL_WILL_BE_BLANK": "空になる列",

        "EDIT_PROPERTIES": "プロパティの変更",

        "HEADER_TEXT": "ヘッダーテキスト",
        "ADD_EDIT_HEADER_HERE": "ヘッダーテキスト文字変更",

        "SUBTITLE_TEXT": "サブタイトル　テキスト",
        "ADD_EDIT_SUBTIL_HERE": "サブタイトルテキスト文字変更",

        "LABEL_TEXT": "ラベルテキスト",
        "ADD_EDIT_LABEL_HERE": "ラベルテキスト文字変更",

        "PLACEHOLDER": "プレースホルダー",
        "ADD_EDIT_PLACEHOLD": "プレースホルダー文字変更",

        "REQUIRED": "必須",

        "DESCRIPTION": "説明",
        "ADDEDIT_DESCRIPTION": "説明の変更",

        "DATE_FORMAT": "日付の形式",

        "ADD_NEW_RADIO": "新ラジオボタンを追加",
        "ADD_RADIO_PLACEHOLD": "新ラジオボタンを追加",
        "EDIT_REMOVE_RADIO": "ラジオボタン変更",
        "NO_RADIO_ADD_NEW": "ラジオ無し : 新ラジオボタン追加",

        "SEARCH_4_OPTION": "オプション検索",

        "ADD": "追加",
        "ORDER": "順番",
        "OPTION": "オプション",
        "GROUP": "グループ",

        "ADD_NEW_OPTIONS": "新しいオプション追加",
        "ADD_A_NEW_OPTION": "新しいオプション追加",
        "EDIT_REMOVE_OPTIONS": "オプションの変更",
        "NO_OPTION_ADD_NEW": "オプション無し : 新しいオプション追加",

        "ADD_NEW_GROUPS": "新しいグループ追加",
        "ADD_A_NEW_GROUP": "新しいグループ追加",
        "EDIT_GROUPS_OPTIONS": "グループを変更",
        "NO_GROUP_ADD_NEW": "グループを追加",

        "OK": "オッケー",
        "CANCEL": "キャンセル"
    };
    return module.exports;
});
$__System.register('d', ['7', '8', '9', 'a', 'b', 'c'], function (_export) {
	'use strict';

	var localEn, localFr, localEs, localDe, localTr, localJp, TRANSLATE_CONFIG;

	function translateConfig($translateProvider) {
		$translateProvider.translations('en', localEn);
		$translateProvider.translations('fr', localFr);
		$translateProvider.translations('es', localEs);
		$translateProvider.translations('de', localDe);
		$translateProvider.translations('tr', localTr);
		$translateProvider.translations('jp', localJp);
	}

	return {
		setters: [function (_) {
			localEn = _['default'];
		}, function (_2) {
			localFr = _2['default'];
		}, function (_3) {
			localEs = _3['default'];
		}, function (_a) {
			localDe = _a['default'];
		}, function (_b) {
			localTr = _b['default'];
		}, function (_c) {
			localJp = _c['default'];
		}],
		execute: function () {
			TRANSLATE_CONFIG = 'easyFormTranslateConfig';
			translateConfig.$inject = ['$translateProvider'];

			_export('default', translateConfig);

			_export('TRANSLATE_CONFIG', TRANSLATE_CONFIG);
		}
	};
});
$__System.register('e', ['d'], function (_export) {
								/* global angular */
								'use strict';

								var translateConfig, TRANSLATE_CONFIG, TRANSLATE_MODULE;
								return {
																setters: [function (_d) {
																								translateConfig = _d['default'];
																								TRANSLATE_CONFIG = _d.TRANSLATE_CONFIG;
																}],
																execute: function () {
																								TRANSLATE_MODULE = 'eda.easyFormGenerator.translate';

																								_export('default', angular.module(TRANSLATE_MODULE, []).config(translateConfig));
																}
								};
});
$__System.registerDynamic("f", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = "<div class=\"easyFormViewer\">\n\t\n\t<form \tng-submit=\"vm.onSubmit()\"\n\t\t\t\t\tname=\"vm.form\"> \n\t\t<formly-form \tmodel=\"vm.model\" \n\t\t\t\t\t\t\t\t\tfields=\"vm.fields\" \n\t\t\t\t\t\t\t\t\tform=\"vm.form\"> \n\t\t\t\n\t\t\t<div class=\"pull-right\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" \n\t\t\t\t\t\t\t\tng-disabled=\"vm.form.$invalid\"\n\t\t\t\t\t\t\t\tng-click=\"vm.edaSubmitThisDataModel();\">{{vm.submitText}}</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" \n\t\t\t\t\t\t\t\tng-click=\"vm.edaCancelEvent();\">{{vm.cancelText}}</button>\t\t\t\t\n\t\t\t</div>\t\t\t\t\t\t\n\n\t\t</formly-form> \n\t</form>\n\n</div>";
  return module.exports;
});
$__System.register('10', [], function (_export) {
	/* global angular */

	'use strict';

	var EMPTY_FIELD_MODEL, emptyEdaFieldsModel, returnAttributeDataModelIfNotEmpty, returnAttributeConfigurationLinesIfNotEmpty;
	return {
		setters: [],
		execute: function () {
			EMPTY_FIELD_MODEL = [{
				'line': 1,
				'activeColumn': 1,
				'columns': [{
					'numColumn': 1,
					'exist': true,
					'control': {
						'type': 'none',
						'key': 'none',
						'defaultValue': '',
						'templateOptions': {
							'referenceId': 0
						}
					}
				}]
			}];

			/**
   	* empty fields model : to display at least an empty line
   	* otherwise would look like ugly empty line like it were a bug
   	*/

			emptyEdaFieldsModel = function emptyEdaFieldsModel() {
				return angular.copy(EMPTY_FIELD_MODEL);
			};

			returnAttributeDataModelIfNotEmpty = function returnAttributeDataModelIfNotEmpty(edaEasyFormGeneratorModel) {
				var dataModelToReturn = angular.isArray(edaEasyFormGeneratorModel.dataModel) ? edaEasyFormGeneratorModel.dataModel.length > 0 ? edaEasyFormGeneratorModel.dataModel : [] : [];
				return dataModelToReturn;
			};

			returnAttributeConfigurationLinesIfNotEmpty = function returnAttributeConfigurationLinesIfNotEmpty(loadedFieldModel) {
				var edaEasyFormGeneratorModelToReturn = angular.isArray(loadedFieldModel) ? loadedFieldModel.length > 0 ? loadedFieldModel : emptyEdaFieldsModel() : emptyEdaFieldsModel();
				return edaEasyFormGeneratorModelToReturn;
			};

			_export('emptyEdaFieldsModel', emptyEdaFieldsModel);

			_export('returnAttributeDataModelIfNotEmpty', returnAttributeDataModelIfNotEmpty);

			_export('returnAttributeConfigurationLinesIfNotEmpty', returnAttributeConfigurationLinesIfNotEmpty);
		}
	};
});
$__System.register('11', ['10', '12', 'f'], function (_export) {
	/* global angular */
	'use strict';

	var returnAttributeConfigurationLinesIfNotEmpty, EASY_FORM_VIEWER_CONTROLLER, EASY_FORM_VIEWER_CONTROLLERAS, easyFormViewerTemplate, EASY_FORM_VIEWER_DIRECTIVE_NAME;

	function edaFormViewerDirective($modelsTranslator) {
		var directive = {
			restrict: 'E',
			scope: {
				edaEasyFormViewerDataModel: '=?',
				edaEasyFormViewerEasyFormGeneratorFieldsModel: '=?',
				edaEasyFormViewerSubmitButtonText: '@?',
				edaEasyFormViewerCancelButtonText: '@?',
				edaEasyFormViewerSubmitFormEvent: '&?',
				edaEasyFormViewerCancelFormEvent: '&?'
			},
			replace: false,
			controller: EASY_FORM_VIEWER_CONTROLLER,
			controllerAs: EASY_FORM_VIEWER_CONTROLLERAS,
			template: easyFormViewerTemplate,
			link: linkFct
		};
		return directive;

		function linkFct(scope) {

			scope.vm.model = {};
			scope.vm.fields = loadFieldsModel();
			scope.vm.submitText = scope.edaEasyFormViewerSubmitButtonText || 'Submit';
			scope.vm.cancelText = scope.edaEasyFormViewerCancelButtonText || 'Cancel';

			scope.$watch(fieldsModelToWatch, fieldsModelWatcher, true);
			scope.$watch(dataModelToWatch, dataModelWatcher, true);
			scope.$watch(submitBtnTextToWatch, submitBtnTextWatcher);
			scope.$watch(cancelBtnTextToWatch, cancelBtnTextWatcher);
			scope.$watch(submitEventToWatch, submitEventWatcher);
			scope.$watch(cancelEventToWatch, cancelEventWatcher);

			function dataModelToWatch() {
				return scope.vm.model;
			}

			function fieldsModelToWatch() {
				return scope.edaEasyFormViewerEasyFormGeneratorFieldsModel;
			}

			function submitBtnTextToWatch() {
				return scope.edaEasyFormViewerSubmitButtonText;
			}

			function cancelBtnTextToWatch() {
				return scope.edaEasyFormViewerCancelButtonText;
			}

			function submitEventToWatch() {
				return scope.vm.hasJustSumitted;
			}

			function cancelEventToWatch() {
				return scope.vm.hasJustCancelled;
			}

			function fieldsModelWatcher(newFieldsModel) {
				scope.vm.fields = loadExistingConfigurationModel(newFieldsModel);
			}

			function submitBtnTextWatcher(newSubmitBtntext, oldSubmitBtntext) {
				if (newSubmitBtntext !== oldSubmitBtntext) {
					scope.vm.submitText = newSubmitBtntext || 'Submit';
				}
			}

			function cancelBtnTextWatcher(newCancelBtntext, oldCancelBtntext) {
				if (newCancelBtntext !== oldCancelBtntext) {
					scope.vm.cancelText = newCancelBtntext || 'Submit';
				}
			}

			function dataModelWatcher(newDataModel) {
				scope.edaEasyFormViewerDataModel = newDataModel;
			}

			function submitEventWatcher(newSubmitEvent) {
				if (newSubmitEvent === true) {
					if (angular.isFunction(scope.edaEasyFormViewerSubmitFormEvent)) {
						var _dataModelSubmitted = scope.vm.model;
						scope.edaEasyFormViewerSubmitFormEvent({ dataModelSubmitted: _dataModelSubmitted });
					}
				}
				scope.vm.hasJustSumitted = false;
			}

			function cancelEventWatcher(newCancelEvent) {
				if (newCancelEvent === true) {
					if (angular.isFunction(scope.edaEasyFormViewerCancelFormEvent)) {
						scope.edaEasyFormViewerCancelFormEvent();
					}
				}
				scope.vm.hasJustCancelled = false;
			}

			/**
   	* TODO : check if formly or easy form generato fields model
   	*
   	* by default or if both -> easy for generator is chosen
   	*/
			function loadFieldsModel() {

				var initialFieldsModel = angular.isArray(scope.edaEasyFormViewerEasyFormGeneratorFieldsModel) ?
				//translate easy form generator to formly fields model
				loadExistingConfigurationModel(scope.edaEasyFormViewerEasyFormGeneratorFieldsModel) : {};

				return initialFieldsModel;
			}

			function loadExistingConfigurationModel(loadedFieldModel) {

				if (angular.isArray(loadedFieldModel)) {
					var configlines = returnAttributeConfigurationLinesIfNotEmpty(loadedFieldModel);
					var formlyFieldsModel = [];

					scope.configurationLoaded = {};

					$modelsTranslator.bindConfigurationLines(scope.configurationLoaded, configlines);
					/**
     	* rebind special control properties :
     	*
     	* formly expression properties
     	* Validators
     	* Async Validators
     	* Validation
     	*/
					$modelsTranslator.refreshControlFormlyExpressionProperties(scope.configurationLoaded);
					$modelsTranslator.refreshControlFormlyValidators(scope.configurationLoaded);
					$modelsTranslator.refreshControlFormlyAsyncValidators(scope.configurationLoaded);
					$modelsTranslator.refreshControlFormlyValidation(scope.configurationLoaded);

					//apply configuration model
					scope.configuration = angular.copy(scope.configurationLoaded);

					//apply formly model
					$modelsTranslator.applyConfigurationToformlyModel(scope.configurationLoaded, formlyFieldsModel, scope.vm.model);

					return formlyFieldsModel;
				}
			}
		}
	}

	return {
		setters: [function (_) {
			returnAttributeConfigurationLinesIfNotEmpty = _.returnAttributeConfigurationLinesIfNotEmpty;
		}, function (_2) {
			EASY_FORM_VIEWER_CONTROLLER = _2.EASY_FORM_VIEWER_CONTROLLER;
			EASY_FORM_VIEWER_CONTROLLERAS = _2.EASY_FORM_VIEWER_CONTROLLERAS;
		}, function (_f) {
			easyFormViewerTemplate = _f['default'];
		}],
		execute: function () {
			EASY_FORM_VIEWER_DIRECTIVE_NAME = 'edaEasyFormViewer';
			edaFormViewerDirective.$inject = ['$modelsTranslator'];

			_export('default', edaFormViewerDirective);

			_export('EASY_FORM_VIEWER_DIRECTIVE_NAME', EASY_FORM_VIEWER_DIRECTIVE_NAME);
		}
	};
});
$__System.register('12', ['13', '14'], function (_export) {
	var _createClass, _classCallCheck, EASY_FORM_VIEWER_CONTROLLER, EASY_FORM_VIEWER_CONTROLLERAS, edaEasyFormViewerController;

	return {
		setters: [function (_) {
			_createClass = _['default'];
		}, function (_2) {
			_classCallCheck = _2['default'];
		}],
		execute: function () {
			'use strict';

			EASY_FORM_VIEWER_CONTROLLER = 'edaEasyFormViewerCtrl';
			EASY_FORM_VIEWER_CONTROLLERAS = 'vm';

			edaEasyFormViewerController = (function () {
				function edaEasyFormViewerController(edaEasyFormViewerConfig) {
					_classCallCheck(this, edaEasyFormViewerController);

					this.edaEasyFormViewerConfig = edaEasyFormViewerConfig;

					this.init();
				}

				_createClass(edaEasyFormViewerController, [{
					key: 'init',
					value: function init() {
						this.model = {};
						this.fields = {};
						this.hasJustSumitted = false;
						this.hasJustCancelled = false;
					}
				}, {
					key: 'edaSubmitThisDataModel',
					value: function edaSubmitThisDataModel() {
						this.hasJustSumitted = true;
					}
				}, {
					key: 'edaCancelEvent',
					value: function edaCancelEvent() {
						this.hasJustCancelled = true;
					}
				}]);

				return edaEasyFormViewerController;
			})();

			edaEasyFormViewerController.$inject = ['edaEasyFormViewerConfig'];

			_export('default', edaEasyFormViewerController);

			_export('EASY_FORM_VIEWER_CONTROLLER', EASY_FORM_VIEWER_CONTROLLER);

			_export('EASY_FORM_VIEWER_CONTROLLERAS', EASY_FORM_VIEWER_CONTROLLERAS);
		}
	};
});
$__System.register('15', [], function (_export) {
	/* global angular */
	'use strict';

	var EASY_FORM_VIEWER_CONFIG_NAME;

	function edaEasyFormViewerConfig($translateProvider) {
		var _defaultLanguage = getDefaultLanguage();
		var _currentLanguage = initDefaultLanguage();
		/* jshint validthis:true */
		this.$get = easyFormViewConfigGET;
		this.setLanguage = setLanguage;
		this.getCurrentLanguage = getCurrentLanguage;

		function getCurrentLanguage() {
			return _currentLanguage;
		}

		//language : set default to english
		function getDefaultLanguage() {
			var lang = 'en';
			return lang;
		}

		function setDefaultLanguage() {
			_currentLanguage = _defaultLanguage;
			$translateProvider.preferredLanguage(_currentLanguage);
			return _currentLanguage;
		}

		function setLanguage(language) {
			if (angular.isString(language)) {
				_currentLanguage = language;
				$translateProvider.preferredLanguage(language);
			} else {
				setDefaultLanguage();
			}
		}

		function initDefaultLanguage() {
			$translateProvider.useSanitizeValueStrategy('escape'); //security : Enable escaping of HTML
			$translateProvider.fallbackLanguage(_defaultLanguage); //fallback language to default language
			$translateProvider.preferredLanguage(_defaultLanguage);
			return _defaultLanguage;
		}

		//$get implementation :
		easyFormViewConfigGET.$inject = ['$translate'];
		function easyFormViewConfigGET($translate) {

			var service = {
				setLanguage: switchLanguage,
				getCurrentLanguage: getCurrentLanguage
			};
			return service;

			function switchLanguage(language) {
				if (angular.isString(language)) {
					_currentLanguage = language;
					$translate.use(language);
				} else {
					setDefaultLanguage();
				}
			}
		}
	}

	return {
		setters: [],
		execute: function () {
			EASY_FORM_VIEWER_CONFIG_NAME = 'edaEasyFormViewerConfig';
			edaEasyFormViewerConfig.$inject = ['$translateProvider'];

			_export('default', edaEasyFormViewerConfig);

			_export('EASY_FORM_VIEWER_CONFIG_NAME', EASY_FORM_VIEWER_CONFIG_NAME);
		}
	};
});
$__System.register('16', ['11', '12', '15'], function (_export) {
	/* global angular */
	'use strict';

	var edaFormViewerDirective, EASY_FORM_VIEWER_DIRECTIVE_NAME, edaEasyFormViewerController, EASY_FORM_VIEWER_CONTROLLER, edaEasyFormViewerConfig, EASY_FORM_VIEWER_CONFIG_NAME, FORM_VIEWER_MAIN_MODULE_NAME;
	return {
		setters: [function (_) {
			edaFormViewerDirective = _['default'];
			EASY_FORM_VIEWER_DIRECTIVE_NAME = _.EASY_FORM_VIEWER_DIRECTIVE_NAME;
		}, function (_2) {
			edaEasyFormViewerController = _2['default'];
			EASY_FORM_VIEWER_CONTROLLER = _2.EASY_FORM_VIEWER_CONTROLLER;
		}, function (_3) {
			edaEasyFormViewerConfig = _3['default'];
			EASY_FORM_VIEWER_CONFIG_NAME = _3.EASY_FORM_VIEWER_CONFIG_NAME;
		}],
		execute: function () {
			FORM_VIEWER_MAIN_MODULE_NAME = 'edaFormViewerMainModule';

			_export('default', angular.module(FORM_VIEWER_MAIN_MODULE_NAME, []).controller(EASY_FORM_VIEWER_CONTROLLER, edaEasyFormViewerController).directive(EASY_FORM_VIEWER_DIRECTIVE_NAME, edaFormViewerDirective).provider(EASY_FORM_VIEWER_CONFIG_NAME, edaEasyFormViewerConfig));
		}
	};
});
$__System.register('17', [], function (_export) {
	'use strict';

	var CORE_MODULES, FORMVIEWER_CORE_MODULE_NAME;
	return {
		setters: [],
		execute: function () {
			CORE_MODULES = ['textAngular', 'formly', 'ngAnimate', 'formlyBootstrap', 'ui.bootstrap', 'nya.bootstrap.select', 'pascalprecht.translate'];
			FORMVIEWER_CORE_MODULE_NAME = 'edaEasyFormViewerCore.module';

			_export('default', angular.module(FORMVIEWER_CORE_MODULE_NAME, CORE_MODULES));
		}
	};
});
$__System.registerDynamic("18", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});
$__System.registerDynamic('19', ['18'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('18');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});
$__System.registerDynamic("1a", ["19"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("19"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic("13", ["1a"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("1a")["default"];
  exports["default"] = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  exports.__esModule = true;
  return module.exports;
});
$__System.registerDynamic("14", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  exports["default"] = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  exports.__esModule = true;
  return module.exports;
});
$__System.register('1b', [], function (_export) {
	/* global angular */

	'use strict';

	var resetNyaSelect, getConfigurationModelInit, getEmptyConfigModelResult, resetDataModel, getErrorObject, getMessageObject, resetFormlyModel, extractTemplateOptionDescription, extractTemplateOptionPlaceholder, extractTemplateOptionType, extractTemplateOptionLabel, extractTemplateOptionLabelShort, extractTemplateOptionParentId, extractTemplateOptionReferenceId, extractTemplateOptionDatepickerOptions, extractTemplateOptionMaxLengthOption, extractTemplateOptionNumberType, extractTemplateOptionMinValueOption, extractTemplateOptionMaxValueOption, extractTemplateOptionIncrementalOption, extractTemplateOptionCurrentYearOption, extractTemplateOptionCurrentDateOption, extractTemplateOptionAllowEmptyOption, extractTemplateOptionFiles, extractFormlyExpressionProperties, extractFormlyValidators, extractFormlyAsyncValidators, extractFormlyValidation, extractTemplateOptionRequired, extractTemplateOptionUnique, extractDefaultValue, extractTemplateOptionDisplayAddOption, extractTemplateOptionDisplayEditOption, extractTemplateOptionAllowMultiple, extractTemplateOptionOptions, extractTemplateEventOnChange, addDatepickerOptionsProperty, addMaxLengthOptionProperty, addNumberTypeProperty, addMinValueOptionProperty, addMaxValueOptionProperty, addIncrementalOptionProperty, addCurrentYearOptionProperty, addCurrentDateOptionProperty, addAllowEmptyOptionProperty, addFilesProperty, addOneColumnHeader, addColumns;

	function checkIfCanDisplayMultiple(type, subtype) {
		var multipleTypes = ['input', 'datepicker', 'textarea', 'richEditor', 'upload'];
		return multipleTypes.indexOf(type) !== -1;
	}

	function typeMultiSelect(type, allowMultiple) {
		if (allowMultiple != 1) {
			switch (type) {
				case 'basicSelect':
					type = 'basicMultiSelect';
					break;

				case 'groupedSelect':
					type = 'groupedMultiSelect';
					break;
			}
		}

		return type;
	}

	function defaultValueForMultiFields(type, defaultValue) {
		var returnValue = defaultValue;
		var multipleTypes = ['input', 'datepicker', 'textarea', 'richEditor', 'upload', 'basicMultiSelect', 'groupedMultiSelect'];
		if (multipleTypes.indexOf(type) !== -1 && typeof defaultValue[0] === "undefined") {
			returnValue = [];
			returnValue.push(defaultValue);
		}

		return returnValue;
	}

	function addColumnControl(formlyModel, configurationModel, lineIndex, numberOfColumns, columnIndex, FieldGroup) {
		var headerTemplateCol = {
			className: 'col-xs-' + 12 / numberOfColumns,
			template: '<div class="row"><div class=""><h2 class="text-center">' + extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[columnIndex].control) + '</h2></div></div><div class="row"><div class="">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[columnIndex].control) + '</div></div><hr/>'
		};

		var allowMultiple = extractTemplateOptionAllowMultiple(configurationModel.lines[lineIndex].columns[columnIndex].control);
		var type = typeof configurationModel.lines[lineIndex].columns[columnIndex].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'none' ? 'blank' : typeMultiSelect(configurationModel.lines[lineIndex].columns[columnIndex].control.type, allowMultiple) : 'blank';
		var subtype = extractTemplateOptionType(configurationModel.lines[lineIndex].columns[columnIndex].control);

		var controlCol = {
			className: 'col-xs-' + 12 / numberOfColumns,
			type: type,
			key: typeof configurationModel.lines[lineIndex].columns[columnIndex].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[columnIndex].control.key : 'blank' + Date.now(),
			defaultValue: defaultValueForMultiFields(type, extractDefaultValue(configurationModel.lines[lineIndex].columns[columnIndex].control)),
			templateOptions: {
				type: subtype,
				label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[columnIndex].control),
				required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[columnIndex].control),
				unique: extractTemplateOptionUnique(configurationModel.lines[lineIndex].columns[columnIndex].control),
				displayAddOption: extractTemplateOptionDisplayAddOption(configurationModel.lines[lineIndex].columns[columnIndex].control),
				displayEditOption: extractTemplateOptionDisplayEditOption(configurationModel.lines[lineIndex].columns[columnIndex].control),
				allowMultiple: allowMultiple,
				placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[columnIndex].control),
				descriptionNew: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[columnIndex].control),
				description: '',
				options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[columnIndex].control),
				referenceId: extractTemplateOptionReferenceId(configurationModel.lines[lineIndex].columns[columnIndex].control),
				parentId: extractTemplateOptionParentId(configurationModel.lines[lineIndex].columns[columnIndex].control),
				canDisplayMultiple: checkIfCanDisplayMultiple(type, subtype),
				onChange: extractTemplateEventOnChange(configurationModel.lines[lineIndex].columns[columnIndex].control)
			},
			expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[columnIndex].control),
			validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[columnIndex].control),
			asyncValidators: extractFormlyAsyncValidators(configurationModel.lines[lineIndex].columns[columnIndex].control),
			validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[columnIndex].control)
		};
		//////////////////////////////////////////////
		//datepicker additionnal particular property
		//////////////////////////////////////////////
		if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'datepicker') {
			addDatepickerOptionsProperty(controlCol, configurationModel, lineIndex, columnIndex);
			addCurrentDateOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
		}
		if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'input') {
			switch (configurationModel.lines[lineIndex].columns[columnIndex].control.subtype) {
				case "":
					addMaxLengthOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					break;

				case "number":
					addNumberTypeProperty(controlCol, configurationModel, lineIndex, columnIndex);
					addMinValueOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					addMaxValueOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					addIncrementalOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					addCurrentYearOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					break;
			}
		}
		if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'upload') {
			addFilesProperty(controlCol, configurationModel, lineIndex, columnIndex);
		}

		var fildsWithOptions = ['basicSelect', 'groupedSelect', 'radio'];
		if (fildsWithOptions.indexOf(configurationModel.lines[lineIndex].columns[columnIndex].control.type) !== -1) {
			addAllowEmptyOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
		}

		if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'header') {
			FieldGroup.push(headerTemplateCol);
		} else {
			FieldGroup.push(controlCol);
		}

		return FieldGroup;
	}

	return {
		setters: [],
		execute: function () {
			resetNyaSelect = function resetNyaSelect(nyaSelectObj, $translate, $http, $q, $timeout) {

				var newNyaSelectObj = {
					controls: [{
						id: 'empty',
						name: 'no control',
						subtitle: 'no control',
						group: 'Blank',
						formlyType: 'blank',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {}
					}, {
						id: 'Header',
						name: 'Header',
						subtitle: 'no control',
						group: 'Decoration',
						formlyType: 'header',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {}
					}, {
						id: 'Subtitle',
						name: 'Subtitle',
						subtitle: 'no control',
						group: 'Decoration',
						formlyType: 'subTitle',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {}
					}, {
						id: 'TextInput',
						name: 'Text input',
						subtitle: 'Text input',
						group: 'input',
						formlyType: 'input',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						maxLengthOption: null,
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {
							textShape: {
								expression: function expression(viewValue, modelValue, scope) {
									var value = modelValue || viewValue;
									return scope.to.maxLengthOption ? (value ? value.length : 0) <= parseInt(scope.to.maxLengthOption) : true;
								},
								message: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_MAX_LENGTH\"| translate: \"{max: \" + to.maxLengthOption + \"}\")"
							}
						},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'Number',
						name: 'Number',
						subtitle: 'Number',
						group: 'input',
						formlyType: 'input',
						formlySubtype: 'number',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						numberType: 'integer',
						minValueOption: null,
						maxValueOption: null,
						incrementalOption: true,
						currentYearOption: false,
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {
							numberShape: {
								expression: function expression(viewValue, modelValue, scope) {
									var value = modelValue || viewValue;
									var returnMin = scope.to.minValueOption && value ? parseInt(value) >= parseInt(scope.to.minValueOption) : true;
									var returnMax = scope.to.maxValueOption && value ? parseInt(value) <= parseInt(scope.to.maxValueOption) : true;
									return returnMin && returnMax;
								},
								message: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_MIN_MAX\"| translate: \"{min: \" + to.minValueOption + \", max: \" + to.maxValueOption + \"}\")"
							},
							yearShape: {
								expression: function expression(viewValue, modelValue, scope) {
									if (scope.to.numberType == "year") {
										var value = modelValue || viewValue;
										return (/^[0-9]{1,4}$/.test(value)
										);
									}
									return true;
								},
								message: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_YEAR\" | translate: \"{min: 0, max: 9999}\")"
							}
						},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'Password',
						name: 'Password',
						subtitle: 'Password',
						group: 'input',
						formlyType: 'input',
						formlySubtype: 'password',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'Email',
						name: 'Email',
						subtitle: 'Email',
						group: 'input',
						formlyType: 'input',
						formlySubtype: 'email',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {
							emailShape: {
								expression: function expression(viewValue, modelValue) {
									var value = modelValue || viewValue;
									if (value) {
										return (/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test(value)
										);
									}
									return true;
								},
								message: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_EMAIL\" | translate)"
							}
						},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'Date',
						name: 'Date',
						subtitle: 'Date',
						group: 'input',
						formlyType: 'datepicker',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						datepickerOptions: { format: 'dd-MMMM-yyyy' },
						currentDateOption: false,
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								},
								date: function date(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_DATE_INVALID');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'Texarea',
						name: 'Textarea',
						subtitle: 'Textarea',
						group: 'Textarea',
						formlyType: 'textarea',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'RichTextEditor',
						name: 'RichTextEditor',
						subtitle: 'RichTextEditor',
						group: 'Textarea',
						formlyType: 'richEditor',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'Radio',
						name: 'Radio',
						subtitle: 'Radio',
						options: [],
						group: 'Radio',
						formlyType: 'radio',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowEmptyOption: false,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'Checkbox',
						name: 'Checkbox',
						subtitle: 'Checkbox',
						group: 'Checkbox',
						formlyType: 'checkbox',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: false,
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'BasicSelect',
						name: 'Basic select',
						subtitle: 'Basic select',
						options: [],
						group: 'Select',
						formlyType: 'basicSelect',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowEmptyOption: false,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'GroupedSelect',
						name: 'Grouped Select',
						subtitle: 'Grouped Select',
						options: [],
						group: 'Select',
						formlyType: 'groupedSelect',
						formlySubtype: '',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowEmptyOption: false,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
									return returnMsg;
								}
							}
						}
					}, {
						id: 'Upload',
						name: 'Upload',
						subtitle: 'Upload',
						group: 'upload',
						formlyType: 'upload',
						formlySubtype: 'file',
						formlyLabel: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						files: [],
						formlyEvents: {
							onChange: ''
						},
						formlyExpressionProperties: {},
						formlyValidators: {
							required: {
								expression: function expression(viewValue, modelValue, scope) {
									var value = modelValue || viewValue;
									var cnt = 0;
									if (scope.to.files) {
										cnt = scope.to.files.length;
									}
									if (!scope.to.required || cnt > 0 || value) {
										return true;
									}
									return false;
								},
								message: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_REQUIRED\" | translate)"
							}
						},
						formlyAsyncValidators: {},
						formlyValidation: {}
					}],
					selectedControl: 'none',
					temporyConfig: {
						selectedControl: 'none',
						formlyLabel: 'label',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						formlyDefaultValue: '',
						displayAddOption: true,
						displayEditOption: true,
						allowMultiple: 1,
						formlyDesciption: '',
						formlyPlaceholder: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyEvents: {
							onChange: ''
						},
						//expressions/validation fields
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyAsyncValidators: {},
						formlyValidation: {}
					}
				};

				// Apply unique validator to all fields
				var uniqueValidator = {
					uniqueValue: {
						expression: function expression(viewValue, modelValue, scope) {
							var deferred = $q.defer();

							// Write down own logic
							var isOK = true;

							if (isOK || !scope.to.unique) {
								deferred.resolve(isOK);
							} else {
								deferred.reject(isOK);
							}
							return deferred.promise;
						},
						message: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_UNIQUE\" | translate)"
					}
				};

				var notUnique = ['blank', 'header', 'subTitle'];
				angular.forEach(newNyaSelectObj.controls, function (control) {
					if (notUnique.indexOf(control.formlyType) === -1) {
						control.formlyAsyncValidators = angular.merge({}, control.formlyAsyncValidators, uniqueValidator);
					}
				});

				//reset
				angular.copy(newNyaSelectObj, nyaSelectObj);
				return true;
			};

			/**
   	* equivalent to formFielManage service in easy form generator
   	*/

			getConfigurationModelInit = function getConfigurationModelInit() {
				var configurationModelInit = {
					activeLine: 1,
					listConfigStep: ['init', 'first', 'second', 'third'],
					stepIndicators: [true, false, false, false],
					configStepCounter: 0,
					submitButtonText: 'submit',
					cancelButtonText: 'cancel',
					lines: [{
						line: 1,
						activeColumn: 1,
						columns: [{
							numColumn: 1,
							exist: true,
							control: {
								type: 'none',
								key: 'none',
								defaultValue: ''
								// templateOptions: {
								//                     label: 'none',
								//                     placeholder: 'none',
								//                     required: false,
								//                     description: 'Descriptive text'
								//                   }
							}
						}]
					}]
				};
				return configurationModelInit;
			};

			getEmptyConfigModelResult = function getEmptyConfigModelResult() {
				var configurationModelResult = {
					activeLine: 1,
					listConfigStep: ['init', 'first', 'second', 'third'],
					stepIndicators: [true, false, false, false],
					configStepCounter: 0,
					submitButtonText: 'submit',
					cancelButtonText: 'cancel',
					lines: []
				};
				return angular.copy(configurationModelResult);
			};

			resetDataModel = function resetDataModel(obj) {
				var emptyDataModel = {};
				angular.copy(emptyDataModel, obj);
				return true;
			};

			getErrorObject = function getErrorObject(errorTitle, errorMessage) {
				var messageObj = {
					noError: false,
					title: '',
					Message: ''
				};
				messageObj.noError = false;
				messageObj.title = errorTitle;
				messageObj.Message = errorMessage;
				return messageObj;
			};

			getMessageObject = function getMessageObject(messageTitle, messageBody) {
				var messageObj = {
					noError: false,
					title: '',
					Message: ''
				};
				messageObj.noError = true;
				messageObj.title = messageTitle;
				messageObj.Message = messageBody;
				return messageObj;
			};

			resetFormlyModel = function resetFormlyModel(formlyModel) {
				var resetformly = [];
				angular.copy(resetformly, formlyModel);
			};

			extractTemplateOptionDescription = function extractTemplateOptionDescription(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.description !== 'undefined' ? obj.templateOptions.description : '' : '';
			};

			extractTemplateOptionPlaceholder = function extractTemplateOptionPlaceholder(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.placeholder !== 'undefined' ? obj.templateOptions.placeholder : '' : '';
			};

			extractTemplateOptionType = function extractTemplateOptionType(obj) {
				return typeof obj.subtype !== 'undefined' ? obj.subtype : '';
			};

			// const isTemplateOptionDefined = (obj) => typeof obj.templateOptions !== 'undefined' ? true : false;

			extractTemplateOptionLabel = function extractTemplateOptionLabel(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.label !== 'undefined' ? obj.templateOptions.label : '' : '';
			};

			extractTemplateOptionLabelShort = function extractTemplateOptionLabelShort(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.labelShort !== 'undefined' ? obj.templateOptions.labelShort : '' : '';
			};

			extractTemplateOptionParentId = function extractTemplateOptionParentId(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.parentId !== 'undefined' ? obj.templateOptions.parentId : '' : '';
			};

			extractTemplateOptionReferenceId = function extractTemplateOptionReferenceId(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.referenceId !== 'undefined' ? obj.templateOptions.referenceId : '' : '';
			};

			extractTemplateOptionDatepickerOptions = function extractTemplateOptionDatepickerOptions(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.datepickerOptions !== 'undefined' ? angular.copy(obj.templateOptions.datepickerOptions) : '' : '';
			};

			extractTemplateOptionMaxLengthOption = function extractTemplateOptionMaxLengthOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.maxLengthOption !== 'undefined' ? obj.templateOptions.maxLengthOption : null : null;
			};

			extractTemplateOptionNumberType = function extractTemplateOptionNumberType(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.numberType !== 'undefined' ? angular.copy(obj.templateOptions.numberType) : 'integer' : 'integer';
			};

			extractTemplateOptionMinValueOption = function extractTemplateOptionMinValueOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.minValueOption !== 'undefined' ? obj.templateOptions.minValueOption : null : null;
			};

			extractTemplateOptionMaxValueOption = function extractTemplateOptionMaxValueOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.maxValueOption !== 'undefined' ? obj.templateOptions.maxValueOption : null : null;
			};

			extractTemplateOptionIncrementalOption = function extractTemplateOptionIncrementalOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.incrementalOption !== 'undefined' ? obj.templateOptions.incrementalOption : false : false;
			};

			extractTemplateOptionCurrentYearOption = function extractTemplateOptionCurrentYearOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.currentYearOption !== 'undefined' ? obj.templateOptions.currentYearOption : false : false;
			};

			extractTemplateOptionCurrentDateOption = function extractTemplateOptionCurrentDateOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.currentDateOption !== 'undefined' ? obj.templateOptions.currentDateOption : false : false;
			};

			extractTemplateOptionAllowEmptyOption = function extractTemplateOptionAllowEmptyOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.allowEmptyOption !== 'undefined' ? obj.templateOptions.allowEmptyOption : false : false;
			};

			extractTemplateOptionFiles = function extractTemplateOptionFiles(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.files !== 'undefined' ? obj.templateOptions.files : [] : [];
			};

			extractFormlyExpressionProperties = function extractFormlyExpressionProperties(obj) {
				return typeof obj.formlyExpressionProperties !== 'undefined' ? angular.copy(obj.formlyExpressionProperties) : {};
			};

			extractFormlyValidators = function extractFormlyValidators(obj) {
				return typeof obj.formlyValidators !== 'undefined' ? angular.copy(obj.formlyValidators) : {};
			};

			extractFormlyAsyncValidators = function extractFormlyAsyncValidators(obj) {
				return typeof obj.formlyAsyncValidators !== 'undefined' ? angular.copy(obj.formlyAsyncValidators) : {};
			};

			extractFormlyValidation = function extractFormlyValidation(obj) {
				return typeof obj.formlyValidation !== 'undefined' ? angular.copy(obj.formlyValidation) : {};
			};

			extractTemplateOptionRequired = function extractTemplateOptionRequired(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.required !== 'undefined' ? obj.templateOptions.required : false : false;
			};

			extractTemplateOptionUnique = function extractTemplateOptionUnique(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.unique !== 'undefined' ? obj.templateOptions.unique : false : false;
			};

			extractDefaultValue = function extractDefaultValue(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.defaultValue !== 'undefined' ? obj.templateOptions.defaultValue : obj.type == 'checkbox' ? false : '' : obj.type == 'checkbox' ? false : '';
			};

			extractTemplateOptionDisplayAddOption = function extractTemplateOptionDisplayAddOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.displayAddOption !== 'undefined' ? obj.templateOptions.displayAddOption : true : true;
			};

			extractTemplateOptionDisplayEditOption = function extractTemplateOptionDisplayEditOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.displayEditOption !== 'undefined' ? obj.templateOptions.displayEditOption : true : true;
			};

			extractTemplateOptionAllowMultiple = function extractTemplateOptionAllowMultiple(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.allowMultiple !== 'undefined' ? obj.templateOptions.allowMultiple : 1 : 1;
			};

			extractTemplateOptionOptions = function extractTemplateOptionOptions(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.options !== 'undefined' ? obj.templateOptions.options : '' : '';
			};

			extractTemplateEventOnChange = function extractTemplateEventOnChange(obj) {
				return typeof obj.templateOptions !== 'undefined' && typeof obj.formlyEvents !== 'undefined' && typeof obj.formlyEvents.onChange !== 'undefined' ? angular.copy(obj.formlyEvents.onChange) : '';
			};

			addDatepickerOptionsProperty = function addDatepickerOptionsProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.datepickerOptions = extractTemplateOptionDatepickerOptions(configurationModel.lines[lineIndex].columns[position].control);
			};

			addMaxLengthOptionProperty = function addMaxLengthOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.maxLengthOption = extractTemplateOptionMaxLengthOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addNumberTypeProperty = function addNumberTypeProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.numberType = extractTemplateOptionNumberType(configurationModel.lines[lineIndex].columns[position].control);
			};

			addMinValueOptionProperty = function addMinValueOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.minValueOption = extractTemplateOptionMinValueOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addMaxValueOptionProperty = function addMaxValueOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.maxValueOption = extractTemplateOptionMaxValueOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addIncrementalOptionProperty = function addIncrementalOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.incrementalOption = extractTemplateOptionIncrementalOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addCurrentYearOptionProperty = function addCurrentYearOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.currentYearOption = extractTemplateOptionCurrentYearOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addCurrentDateOptionProperty = function addCurrentDateOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.currentDateOption = extractTemplateOptionCurrentDateOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addAllowEmptyOptionProperty = function addAllowEmptyOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.allowEmptyOption = extractTemplateOptionAllowEmptyOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addFilesProperty = function addFilesProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.files = extractTemplateOptionFiles(configurationModel.lines[lineIndex].columns[position].control);
			};

			addOneColumnHeader = function addOneColumnHeader(formlyModel, configurationModel, lineIndex) {
				/**
    	* text header is stored in "description" in templateOtion model
    	*/
				var headerTemplateCol = '<div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2 class="text-center">' + extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control) + '</h2></div></div><div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control) + '</div></div><hr/>';
				formlyModel.push({
					template: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'header' ? headerTemplateCol : '<div></div>' : '<div></div>'
				});
			};

			addColumns = function addColumns(formlyModel, configurationModel, lineIndex, numberOfColumns) {
				var FieldGroup = [];

				for (var i = 0; i < numberOfColumns; i++) {
					FieldGroup = addColumnControl(formlyModel, configurationModel, lineIndex, numberOfColumns, i, FieldGroup);
				}

				formlyModel.push({
					className: 'row',
					fieldGroup: FieldGroup
				});
			};

			_export('resetNyaSelect', resetNyaSelect);

			_export('getConfigurationModelInit', getConfigurationModelInit);

			_export('getEmptyConfigModelResult', getEmptyConfigModelResult);

			_export('resetDataModel', resetDataModel);

			_export('getErrorObject', getErrorObject);

			_export('getMessageObject', getMessageObject);

			_export('resetFormlyModel', resetFormlyModel);

			_export('addOneColumnHeader', addOneColumnHeader);

			_export('addColumns', addColumns);
		}
	};
});
$__System.register('1c', ['13', '14', '1b'], function (_export) {
	var _createClass, _classCallCheck, resetNyaSelect, getEmptyConfigModelResult, resetDataModel, getErrorObject, getMessageObject, resetFormlyModel, addOneColumnHeader, addColumns, MODEL_TRANSLATOR_SERVICE, $modelsTranslator;

	return {
		setters: [function (_) {
			_createClass = _['default'];
		}, function (_2) {
			_classCallCheck = _2['default'];
		}, function (_b) {
			resetNyaSelect = _b.resetNyaSelect;
			getEmptyConfigModelResult = _b.getEmptyConfigModelResult;
			resetDataModel = _b.resetDataModel;
			getErrorObject = _b.getErrorObject;
			getMessageObject = _b.getMessageObject;
			resetFormlyModel = _b.resetFormlyModel;
			addOneColumnHeader = _b.addOneColumnHeader;
			addColumns = _b.addColumns;
		}],
		execute: function () {
			/* global angular */
			'use strict';

			MODEL_TRANSLATOR_SERVICE = '$modelsTranslator';

			$modelsTranslator = (function () {
				function $modelsTranslator($translate, $http, $q, $timeout) {
					_classCallCheck(this, $modelsTranslator);

					this.$translate = $translate;
					this.$http = $http;
					this.$q = $q;
					this.$timeout = $timeout;
				}

				_createClass($modelsTranslator, [{
					key: 'initNyaSelect',
					value: function initNyaSelect(nyaSelectObj) {
						return resetNyaSelect(nyaSelectObj, this.$translate, this.$http, this.$q, this.$timeout);
					}

					/**
     	* get all controls definition (nyaSelectObj)
     	*
     	* needed to bind these properties :
     	*
     	* formlyExpressionProperties: {},
     	* formlyValidators: {},
     	* formlyAsyncValidators: {},
     	* formlyValidation
     	*/
				}, {
					key: 'getControlsDefinition',
					value: function getControlsDefinition() {
						var controls = {};
						resetNyaSelect(controls, this.$translate, this.$http, this.$q, this.$timeout);
						return controls;
					}

					/**
     	* loading forms will not be able to retrieve formlyExpressionProperties
     	* -> here does the job
     	*/
				}, {
					key: 'refreshControlFormlyExpressionProperties',
					value: function refreshControlFormlyExpressionProperties(configurationModel) {
						var _this = this;

						if (angular.isObject(configurationModel)) {
							//iterates lines
							angular.forEach(configurationModel.lines, function (line) {
								angular.forEach(line.columns, function (column) {
									var _controlsDefinition = _this.getControlsDefinition();
									angular.forEach(_controlsDefinition.controls, function (aControl) {
										if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
											//----> update control formlyExpressionProperties property
											column.control.formlyExpressionProperties = angular.merge({}, aControl.formlyExpressionProperties, column.control.formlyExpressionProperties);
										}
									});
								});
							});
						}
					}

					/**
     	* loading forms will not be able to retrieve formlyValidators
     	* -> here does the job
     	*/
				}, {
					key: 'refreshControlFormlyValidators',
					value: function refreshControlFormlyValidators(configurationModel) {
						var _this2 = this;

						if (angular.isObject(configurationModel)) {
							//iterates lines
							angular.forEach(configurationModel.lines, function (line) {
								angular.forEach(line.columns, function (column) {
									var _controlsDefinition = _this2.getControlsDefinition();
									angular.forEach(_controlsDefinition.controls, function (aControl) {
										if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
											//----> update control formlyValidators property
											column.control.formlyValidators = angular.merge({}, aControl.formlyValidators, column.control.formlyValidators);
										}
									});
								});
							});
						}
					}

					/**
     	* loading forms will not be able to retrieve formlyAsyncValidators
     	* -> here does the job
     	*/
				}, {
					key: 'refreshControlFormlyAsyncValidators',
					value: function refreshControlFormlyAsyncValidators(configurationModel) {
						var _this3 = this;

						if (angular.isObject(configurationModel)) {
							//iterates lines
							angular.forEach(configurationModel.lines, function (line) {
								angular.forEach(line.columns, function (column) {
									var _controlsDefinition = _this3.getControlsDefinition();
									angular.forEach(_controlsDefinition.controls, function (aControl) {
										if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
											//----> update control formlyAsyncValidators property
											column.control.formlyAsyncValidators = angular.merge({}, aControl.formlyAsyncValidators, column.control.formlyAsyncValidators);
										}
									});
								});
							});
						}
					}

					/**
     	* loading forms will not be able to retrieve formlyValidation
     	* -> here does the job
     	*/
				}, {
					key: 'refreshControlFormlyValidation',
					value: function refreshControlFormlyValidation(configurationModel) {
						var _this4 = this;

						if (angular.isObject(configurationModel)) {
							//iterates lines
							angular.forEach(configurationModel.lines, function (line) {
								angular.forEach(line.columns, function (column) {
									var _controlsDefinition = _this4.getControlsDefinition();
									angular.forEach(_controlsDefinition.controls, function (aControl) {
										if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
											//----> update control formlyValidation property
											column.control.formlyValidation = angular.merge({}, aControl.formlyValidation, column.control.formlyValidation);
										}
									});
								});
							});
						}
					}

					// initConfigurationEditFromScratch(configurationModel) {
					// 	configurationModel = angular.copy(getConfigurationModelInit());
					// }

				}, {
					key: 'bindConfigurationLines',
					value: function bindConfigurationLines(configurationModel, lines) {
						if (angular.isArray(lines)) {
							var configurationModelResult = getEmptyConfigModelResult();
							configurationModelResult.lines = [].concat(lines);
							angular.copy(configurationModelResult, configurationModel);
							return getMessageObject('configuration model is bound', 'lines are bound to configuration model.');
						} else {
							return getErrorObject('lines is not an array', 'Checks lines type, it is not an array.');
						}
					}
				}, {
					key: 'applyConfigurationToformlyModel',
					value: function applyConfigurationToformlyModel(configurationModel, formlyModel, formlyDataModel) {
						resetFormlyModel(formlyModel);
						resetDataModel(formlyDataModel);
						/**
      	* manage header here line0
      	*/
						var lineNumber = configurationModel.lines.length;
						var columnsCount = 0;
						for (var i = 0; i < lineNumber; i++) {
							columnsCount = configurationModel.lines[i].columns.length;
							if (columnsCount === 1 && configurationModel.lines[i].columns[0].control.type === 'header') {
								addOneColumnHeader(formlyModel, configurationModel, i);
							} else {
								addColumns(formlyModel, configurationModel, i, columnsCount);
							}
						}
					}
				}]);

				return $modelsTranslator;
			})();

			$modelsTranslator.$inject = ['$translate', '$http', '$q', '$timeout'];

			_export('default', $modelsTranslator);

			_export('MODEL_TRANSLATOR_SERVICE', MODEL_TRANSLATOR_SERVICE);
		}
	};
});

// getConfigurationModelInit,
$__System.register('1d', ['1c'], function (_export) {
	/* global angular */
	'use strict';

	var $modelsTranslator, MODEL_TRANSLATOR_SERVICE, FORM_VIEWER_MODEL_TRANSLATOR_MODULE_NAME;
	return {
		setters: [function (_c) {
			$modelsTranslator = _c['default'];
			MODEL_TRANSLATOR_SERVICE = _c.MODEL_TRANSLATOR_SERVICE;
		}],
		execute: function () {
			FORM_VIEWER_MODEL_TRANSLATOR_MODULE_NAME = 'edaFormViewerModelTranslatorModule';

			_export('default', angular.module(FORM_VIEWER_MODEL_TRANSLATOR_MODULE_NAME, []).service(MODEL_TRANSLATOR_SERVICE, $modelsTranslator));
		}
	};
});
$__System.register('1', ['2', '4', '6', '16', '17', 'e', '1d'], function (_export) {
         'use strict';

         var edaEasyFormViewConfig, EASY_FORM_VIEWER_VERSION_NAME, EASY_FORM_VIEWER_VERSION_VALUE, formlyConfig, edaFormViewerMainModule, edaFormViewerCoreModule, translateConfig, edaFormViewerModelTranslatorModule, MAIN_MODULE_NAME, DEP_TO_INJECT_IN_MAIN, mainModule;
         return {
                  setters: [function (_) {}, function (_2) {
                           edaEasyFormViewConfig = _2['default'];
                           EASY_FORM_VIEWER_VERSION_NAME = _2.EASY_FORM_VIEWER_VERSION_NAME;
                           EASY_FORM_VIEWER_VERSION_VALUE = _2.EASY_FORM_VIEWER_VERSION_VALUE;
                  }, function (_3) {
                           formlyConfig = _3['default'];
                  }, function (_4) {
                           edaFormViewerMainModule = _4['default'];
                  }, function (_5) {
                           edaFormViewerCoreModule = _5['default'];
                  }, function (_e) {
                           translateConfig = _e['default'];
                  }, function (_d) {
                           edaFormViewerModelTranslatorModule = _d['default'];
                  }],
                  execute: function () {
                           MAIN_MODULE_NAME = 'eda.easyFormViewer';
                           DEP_TO_INJECT_IN_MAIN = [edaFormViewerCoreModule.name, translateConfig.name, edaFormViewerMainModule.name, edaFormViewerModelTranslatorModule.name];
                           mainModule = angular.module(MAIN_MODULE_NAME, DEP_TO_INJECT_IN_MAIN).value(EASY_FORM_VIEWER_VERSION_NAME, EASY_FORM_VIEWER_VERSION_VALUE).config(formlyConfig).config(edaEasyFormViewConfig);

                           _export('default', mainModule);
                  }
         };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=eda.easyFormViewer.js.map