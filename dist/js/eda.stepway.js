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

	var easyFormConfig, EASY_FORM_VERSION_NAME, EASY_FORM_VERSION_VALUE, ACTIVE_MODAL_ANIMATION;

	function easyFromConfig(easyFormSteWayConfigProvider) {
		//enable/disable easy form modal animation
		//HERE : disabling animation due to angular bootstrap backdrop bug with angular >= 1.4
		easyFormSteWayConfigProvider.setModalAnimation(ACTIVE_MODAL_ANIMATION);
	}

	return {
		setters: [function (_) {
			easyFormConfig = _['default'];
		}],
		execute: function () {
			EASY_FORM_VERSION_NAME = 'easyFormGenVersion';
			EASY_FORM_VERSION_VALUE = easyFormConfig.stepway.version;
			ACTIVE_MODAL_ANIMATION = false;
			easyFromConfig.$inject = ['easyFormSteWayConfigProvider'];

			_export('default', easyFromConfig);

			_export('EASY_FORM_VERSION_NAME', EASY_FORM_VERSION_NAME);

			_export('EASY_FORM_VERSION_VALUE', EASY_FORM_VERSION_VALUE);
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
      basicSelectTemplate = "\n  <ol\n    class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n    ng-model=\"model[options.key || index]\"\n    id=\"{{id}}\"\n    disabled=\"options.templateOptions.options.length === 0\"\n    title=\"{{'NOTHING_SELECTED' | translate}}\"\n    data-live-search=\"true\"\n  >\n    <li\n      class=\"nya-bs-option\"\n      ng-if=\"!options.templateOptions.required\"\n      data-value=\"\"\n    >\n      <a>{{'NOTHING_SELECTED' | translate}}</a>\n    </li>\n    <li\n      class=\"nya-bs-option\"\n      nya-bs-option=\"option in options.templateOptions.options\"\n      data-value=\"{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}\"\n    >\n      <a>\n        <span>\n          {{option.name}}\n          <span\n            ng-if=\"option.description.length > 0\"\n            class=\"help-block help-inline\">\n            ({{option.description}})\n          </span>\n        </span>\n      </a>\n    </li>\n  </ol>";
      basicMultiSelectTemplate = "\n  <ol\n    class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n    ng-model=\"model[options.key || index]\"\n    multiple\n    id=\"{{id}}\"\n    disabled=\"options.templateOptions.options.length === 0\"\n    title=\"{{'NOTHING_SELECTED' | translate}}\"\n    data-live-search=\"true\"\n  >\n    <li\n      class=\"nya-bs-option\"\n      nya-bs-option=\"option in options.templateOptions.options\"\n      data-value=\"{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}\"\n      ng-class=\"{disabled: isDisabled(model[options.key || index], option.uniqueValue, options)}\"\n    >\n      <a>\n        <span>\n          {{option.name}}\n          <span\n            ng-if=\"option.description.length > 0\"\n            class=\"help-block help-inline\"\n          >\n            ({{option.description}})\n          </span>\n        </span>\n      </a>\n    </li>\n  </ol>";
      groupedSelectTemplate = "\n  <ol class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n    ng-model=\"model[options.key || index]\"\n    data-live-search=\"true\"\n    disabled=\"options.templateOptions.options.length === 0\"\n    title=\"{{'NOTHING_SELECTED' | translate}}\"\n    data-live-search=\"true\"\n  >\n    <li\n      class=\"nya-bs-option\"\n      ng-if=\"!options.templateOptions.required\"\n      data-value=\"\"\n    >\n      <a>{{'NOTHING_SELECTED' | translate}}</a>\n    </li>\n    <li\n      nya-bs-option=\"option in options.templateOptions.options group by option.group\"\n      value=\"{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}\"\n    >\n      <span class=\"dropdown-header\">{{$group}}</span>\n      <a>\n        <span>\n          {{option.name}}\n          <span\n            ng-if=\"option.description.length > 0\"\n            class=\"help-block help-inline\"\n          >\n            ({{option.description}})\n          </span>\n        </span>\n        <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n      </a>\n    </li>\n  </ol>";
      groupedMultiSelectTemplate = "\n  <ol class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n    ng-model=\"model[options.key || index]\"\n    multiple\n    data-live-search=\"true\"\n    disabled=\"options.templateOptions.options.length === 0\"\n    title=\"{{'NOTHING_SELECTED' | translate}}\"\n    data-live-search=\"true\"\n  >\n    <li\n      nya-bs-option=\"option in options.templateOptions.options group by option.group\"\n      data-value=\"{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}\"\n      ng-class=\"{disabled: isDisabled(model[options.key || index], option.uniqueValue, options)}\"\n    >\n      <span class=\"dropdown-header\">{{$group}}</span>\n      <a>\n        <span>\n          {{option.name}}\n          <span\n            ng-if=\"option.description.length > 0\"\n            class=\"help-block help-inline\"\n          >\n            ({{option.description}})\n          </span>\n        </span>\n        <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n      </a>\n    </li>\n  </ol>";
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
  /* global angular */
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
        if (newVal && oldVal && (newVal.length != oldVal.length || scope.options.formControl.length <= 0)) {
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
        "ADD_NEW": "Add new",
        "OPTIONS_SOURCE_TYPE": "Options source type",
        "OPTIONS_SOURCE_STATIC": "Option values static",
        "OPTIONS_SOURCE_DB": "Option values defined in DB",
        "OPTIONS_SOURCE_DB_TABLE": "External table",
        "OPTIONS_SOURCE_DB_FORMAT": "Display format",
        "OPTION_DESCRIPTION": "Option description",
        "PARENT_FORM": "Parent Form",
        "FORM_ID_FORMAT": "Format of form ID",
        "OPTIONAL_VALIDATION_FALSE": "Incorrect usage of optional tags"
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
$__System.register('f', [], function (_export) {
	/* global angular */
	'use strict';

	var CORE_MODULES;
	return {
		setters: [],
		execute: function () {
			CORE_MODULES = ['textAngular', 'textAngularSetup', 'ngAnimate', 'toaster', 'formly', 'formlyBootstrap', 'ui.bootstrap', 'nya.bootstrap.select', 'pascalprecht.translate', 'selectize'];

			_export('default', angular.module('edaStepWayEasyFormGen.core', CORE_MODULES));
		}
	};
});
$__System.registerDynamic("10", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = "<section id=\"pageWfEdit\">\n\t<div ng-init=\"\">\n\t\t<div class=\"container\">\n\t\t\t<section id=\"preview\">\n\t\t\t\t<div id=\"preview-content\">\n\t\t\t\t\t<div class=\"content-container\">\n\t\t\t\t\t\t<!-- taoster alert -->\n\t\t\t\t\t\t<toaster-container  toaster-options=\"{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'position-class': 'toast-top-full-width',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'extendedTimeout':500,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'timeOut':500,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\">\n\t\t\t\t\t\t</toaster-container>\n\t\t\t\t\t\t<uib-tabset justified=\"true\">\n\t\t\t\t\t\t\t<uib-tab active=\"vm.tab.editTab.active\" heading=\"{{'EDIT_TAB' | translate}}\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- STEP INDICATOR -->\n\t\t\t\t\t\t\t\t\t<div class=\"row stepwizardTopmargin\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row stepwizard-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard-step col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[0], 'btn-default': !vm.configuration.stepIndicators[0]}\" >0</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'WIZARD_LINES' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard-step col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[1], 'btn-default': !vm.configuration.stepIndicators[1], 'disabled': (vm.configuration.configStepCounter < 1)}\"  >1</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'WIZARD_LAYOUT' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard-step col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[2], 'btn-default': !vm.configuration.stepIndicators[2], 'disabled': (vm.configuration.configStepCounter < 2)}\" >2</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'WIZARD_CONTROLS' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard-step col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[3], 'btn-default': !vm.configuration.stepIndicators[3], 'disabled': (vm.configuration.configStepCounter < 3)}\" >3</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'WIZARD_SAVE' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<ul class=\"pager\">\n\t\t\t\t\t\t\t\t\t\t<li ng-class=\"{'disabled':vm.stepIndicators[0]}\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary customPagerButton\" ng-click=\"vm.previousConfigStep()\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-left fa-2x pull-left\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">{{'PAGER_PREVIOUS' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li ng-class=\"{'disabled':vm.stepIndicators[3]}\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary customPagerButton\" ng-click=\"vm.nextConfigStep()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-left\">{{'PAGER_NEXT' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-right fa-2x pull-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class=\"animate-switch-container\" ng-switch on=\"vm.configuration.listConfigStep[vm.configuration.configStepCounter]\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"animate-switch\" ng-switch-when=\"init\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"commandPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"addNewLine\">{{'ADD_NEW_LINE' | translate}} :</span>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" ng-click=\"vm.addNewline()\"><i class=\"fa fa-plus fa-1x\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"visualPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-eye\"></i>&nbsp;{{'VISUAL_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- lines -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item\" ng-repeat=\"line in vm.configuration.lines track by $index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-warning\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-hide=\"$index==0 || $index==1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-click=\"vm.upThisLine($index)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-up\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-warning\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-hide=\"$index==(vm.configuration.lines.length-1) || $index==0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-click=\"vm.downThisLine($index)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-down\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-danger pull-right\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-hide=\"$index==0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-click=\"vm.removeThisLine($index)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div ng-repeat=\"column in line.columns\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-{{12 / line.columns.length}} well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{column.control.templateOptions.label && column.control.templateOptions.label !== '' ? column.control.templateOptions.label : 'column ' + ($index + 1)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{column.control.type !== 'none'  ? column.control.type + ' ' + column.control.subtype || '' : 'column ' + ($index + 1)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"animate-switch\" ng-switch-when=\"first\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"commandPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"numberOfcolumsText text-center\"><i>- {{'SELECTED_LINE' | translate}} -</i></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"numberOfcolumsText text-center\">{{'NUMBER_OF_COLUMN' | translate}} :</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary pull-right btnMinusColumns\" ng-click=\"vm.decreaseNumberOfColumns(vm.configuration.activeLine -1, vm.configuration.lines[vm.configuration.activeLine - 1].columns.length - 1)\"><i class=\"fa fa-minus fa-1x\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2 col-sm-2 col-md-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"numberOfColumnsLabel \">{{vm.configuration.lines[vm.configuration.activeLine -1].columns.length}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2 col-sm-2 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary pull-left btnAddColumns\" ng-click=\"vm.increaseNumberOfColumns()\"><i class=\"fa fa-plus fa-1x\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"visualPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-eye\"></i>&nbsp;{{'VISUAL_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- lines / columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item\" ng-repeat=\"line in vm.configuration.lines track by $index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa\"  ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div ng-repeat=\"column in line.columns\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-{{12 / line.columns.length}} well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--button class=\"btn btn-warning btn-xs\" ng-hide=\"$index==0 || $index==(line.columns.length-1)\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrows-h\"></i></button-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{column.control.templateOptions.label && column.control.templateOptions.label !== '' ? column.control.templateOptions.label : 'column ' + ($index + 1)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{column.control.type !== 'none'  ? column.control.type + ' ' + column.control.subtype || '' : 'column ' + ($index + 1)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"animate-switch\" ng-switch-when=\"second\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"commandPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"numberOfcolumsText text-center\">- {{'APPLY_CTRL2COL' | translate}} -</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"numberOfcolumsText\"><i class=\"fa fa-minus\"></i>&nbsp; {{'CLIC_TAP_2_OPEN' | translate}}.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"numberOfcolumsText\"><i class=\"fa fa-minus\"></i>&nbsp; {{'SELECT_2_APPLY_COL' | translate}}.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"visualPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-eye\"></i>&nbsp;{{'VISUAL_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- lines / columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item\" ng-repeat=\"line in vm.configuration.lines track by $index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa\"  ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div ng-repeat=\"column in line.columns\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-{{12 / line.columns.length}} well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block\" ng-class=\"{'btn-primary': !column.control.edited, 'btn-success': column.control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $parent.$index, $index)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{column.control.templateOptions.label && column.control.templateOptions.label !== '' ? column.control.templateOptions.label : 'column ' + ($index + 1)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{column.control.type !== 'none'  ? column.control.type + ' ' + column.control.subtype || '' : 'column ' + ($index + 1)}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"animate-switch\" ng-switch-when=\"third\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"commandPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"inputSubmitButtontext\" class=\" greyText control-label\">{{'CUSTOM_SUBMIT_BTN' | translate}} :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputSubmitButtontext\" placeholder=\"\" ng-model=\"vm.configuration.submitButtonText\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"inputCancelButtontext\" class=\" greyText control-label\">{{'CUSTOM_CANCEL_BTN' | translate}} :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputCancelButtontext\" placeholder=\"\" ng-model=\"vm.configuration.cancelButtonText\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"inputNameFormtext\" class=\" greyText control-label\">{{'NAME_THIS_FORM' | translate}} :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputNameFormtext\" placeholder=\"\" ng-model=\"vm.configuration.formName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"parentForm\" class=\" greyText control-label\">{{'PARENT_FORM' | translate}} :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t                  <ol\n\t\t\t\t\t\t\t\t\t\t                    class=\"nya-bs-select col-xs-12\"\n\t\t\t\t\t\t\t\t\t\t                    ng-model=\"vm.configuration.parentForm\"\n\t\t\t\t\t\t\t\t\t\t                    ng-init=\"vm.populateSourceForms();\"\n\t\t\t\t\t\t\t\t\t\t                    id=\"parentForm\"\n\t\t\t\t\t\t\t\t\t\t                    title=\"Nothing selected\">\n\t\t\t\t\t\t\t\t\t\t                    <li nya-bs-option=\"form in vm.parentForms\">\n\t\t\t\t\t\t\t\t\t\t                      <a>\n\t\t\t\t\t\t\t\t\t\t                        <span>\n\t\t\t\t\t\t\t\t\t\t                          {{ form.name }}\n\t\t\t\t\t\t\t\t\t\t                        </span>\n\t\t\t\t\t\t\t\t\t\t                        <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n\t\t\t\t\t\t\t\t\t\t                      </a>\n\t\t\t\t\t\t\t\t\t\t                    </li>\n\t\t\t\t\t\t\t\t\t\t                  </ol>\n\t\t\t\t\t\t\t\t\t\t                </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" ng-class=\"{'has-error': vm.configuration.idFormat.length < 1 || !vm.configuration.idFormatValidation}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"idFormat\" class=\" greyText control-label\">{{'FORM_ID_FORMAT' | translate}} :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t                  <selectize\n\t\t\t\t\t\t\t\t\t\t                    ng-init=\"vm.populateFields();\"\n\t\t\t\t\t\t\t\t\t\t                    config=\"vm.optionsSourceDbFormatConfig\"\n\t\t\t\t\t\t\t\t\t\t                    options=\"vm.fields\"\n\t\t\t\t\t\t\t\t\t\t                    ng-model=\"vm.configuration.idFormat\">\n\t\t\t\t\t\t\t\t\t\t                  </selectize>\n\t\t\t\t\t\t\t\t\t\t                  <div class=\"validation\">\n\t\t\t\t\t\t\t\t\t\t                  \t<div ng-if=\"vm.configuration.idFormat.length < 1\">{{'FIELD' | translate}}{{'VALIDATION_REQUIRED' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t                  \t<div ng-if=\"!vm.configuration.idFormatValidation\">{{'OPTIONAL_VALIDATION_FALSE' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t                  </div>\n\t\t\t\t\t\t\t\t\t\t                </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-block btn-lg\" ng-click=\"vm.saveThisForm()\" ng-disabled=\"!vm.configuration.idFormatValidation || vm.configuration.idFormat.length < 1\">{{'SAVE_THIS_FORM' | translate}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"visualPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-thumbs-o-up\"></i>&nbsp;{{'FINAL_STEP' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form ng-submit=\"vm.onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<formly-form id=\"saveFormlyFom\" model=\"vm.dataModel\" fields=\"vm.wfFormFields\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">{{vm.configuration.submitButtonText}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"cancel\">{{vm.configuration.cancelButtonText}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</formly-form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</uib-tab>\n\t\t\t\t\t\t\t<uib-tab active=\"vm.tab.previewTab.active\" ng-if=\"vm.tab.previewTab.tabVisible\" heading=\"{{'PREVIEW_TAB' | translate}}\">\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<!-- formly here -->\n\t\t\t\t\t\t\t\t\t\t<form ng-submit=\"vm.onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t<formly-form id=\"previewFormlyForm\" model=\"vm.dataModel\" fields=\"vm.wfFormFields\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">{{vm.configuration.submitButtonText}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"cancel\">{{vm.configuration.cancelButtonText}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</formly-form>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div ng-if=\"vm.tab.previewTab.modelsVisible\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<p>{{'DATA_MODEL' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t<pre>\n\t\t\t\t\t\t\t\t\t\t\t{{vm.dataModel | json}}\n\t\t\t\t\t\t\t\t\t\t</pre>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div ng-if=\"vm.tab.previewTab.modelsVisible\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<p>{{'FIELDS_MODEL' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t<pre>\n\t\t\t\t\t\t\t\t\t\t\t{{vm.wfFormFieldsOnlyNeededProperties | json}}\n\t\t\t\t\t\t\t\t\t\t</pre>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</uib-tab>\n\t\t\t\t\t\t</uib-tabset>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<hr/>\n\t\t\t<!--<section>\n\t\t\t\t<h6 class=\"text-right\">Easy form generator : {{vm.easyFormGeneratorVERSION}} — Erwan DATIN (MacKentoch)</h6>\n\t\t\t</section>-->\n\t\t</div>\n\t</div>\n</section>\n";
  return module.exports;
});
$__System.register('11', [], function (_export) {
	/* global angular */
	'use strict';

	var DEBUG_MODEL, initDebugModel, DEFAULT_TAB_MODEL, initTabModel, initColumnTemplate, initLineTemplate;
	return {
		setters: [],
		execute: function () {
			DEBUG_MODEL = {
				showDebug: false,
				configurationModelNumberofLines: 1,
				numberOfNewFields: 0
			};

			initDebugModel = function initDebugModel() {
				return angular.copy(DEBUG_MODEL);
			};

			DEFAULT_TAB_MODEL = {
				editTab: {
					active: true
				},
				previewTab: {
					active: false,
					tabVisible: true,
					modelsVisible: true
				}
			};

			initTabModel = function initTabModel(isPreviewPanelVisible, arePreviewModelsVisible) {
				var _tabModel = angular.copy(DEFAULT_TAB_MODEL);
				angular.extend(_tabModel.previewTab, {
					tabVisible: isPreviewPanelVisible,
					modelsVisible: arePreviewModelsVisible
				});
				return _tabModel;
			};

			initColumnTemplate = function initColumnTemplate(newReferenceId) {
				return {
					numColumn: -1,
					exist: true,
					control: {
						type: 'none',
						key: 'none',
						subtype: 'none',
						'new': true,
						defaultValue: '',
						templateOptions: {
							referenceId: newReferenceId
							//                     label: 'none',
							//                     placeholder: 'none',
							//                     required: false,
							//                     description: 'Descriptive text'
						}
					}
				};
			};

			initLineTemplate = function initLineTemplate(newReferenceId) {
				return {
					line: -1,
					activeColumn: 1,
					columns: [{
						numColumn: 1,
						exist: true,
						control: {
							type: 'none',
							key: 'none',
							'new': true,
							defaultValue: '',
							templateOptions: {
								referenceId: newReferenceId
								//                     label: 'none',
								//                     placeholder: 'none',
								//                     required: false,
								//                     description: 'Descriptive text'
							}
						}
					}]
				};
			};

			_export('initDebugModel', initDebugModel);

			_export('initTabModel', initTabModel);

			_export('initColumnTemplate', initColumnTemplate);

			_export('initLineTemplate', initLineTemplate);
		}
	};
});
$__System.registerDynamic("12", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = "<div class=\"modal-header\">\n  <h3 class=\"modal-title greyText\">\n    {{'SELECT_A_CTRL' | translate}}\n  </h3>\n</div>\n<div class=\"modal-body\">\n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h5 class=\"greyText\">\n        <i class=\"fa fa-filter\"></i>\n        &nbsp;\n        {{'SELECT_CTRL_IN_LIST' | translate}} :\n      </h5>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <ol\n        class=\"nya-bs-select col-xs-12 col-sm-12 col-md-12 col-lg-12\"\n        ng-model=\"editControlModCtrl.modelNyaSelect\"\n        data-live-search=\"false\">\n        <li nya-bs-option=\"option in editControlModCtrl.nyaSelectFiltered.controls group by option.group\">\n          <span class=\"dropdown-header greyText\">\n            {{$group}}\n          </span> <!-- group header cannot be searched -->\n          <a ng-click=\"editControlModCtrl.selectThisControl(option.id)\">\n            <span>\n              {{ option.name }}\n            </span>\n            <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n          </a>\n        </li>\n      </ol>\n    </div>\n  </div>\n  <hr/>\n  <div ng-switch on=\"editControlModCtrl.nyaSelect.selectedControl\">\n    <!--no control selected-->\n    <div ng-switch-when=\"none\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h5 class=\"text-center texteRouge\">\n            <i class=\"fa fa-arrow-up\"></i>\n            &nbsp; {{'SELECT_A_CTRL' | translate}}\n          </h5>\n        </div>\n      </div>\n    </div>\n    <!--empty (or blank) control -->\n    <div ng-switch-when=\"empty\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h5 class=\"text-center greyText\">\n                {{'COL_WILL_BE_BLANK' | translate}}\n              </h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--header-->\n    <div ng-switch-when=\"Header\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\"><i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <div class=\"\">\n                  <h2 class=\"text-center\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </h2>\n                  <hr/>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n                </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"headerTitleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'HEADER_TITLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"headerTitleUpdate\"\n                  placeholder=\"{{'ADD_EDIT_HEADER_TITLE_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"headerTextUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'HEADER_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"headerTextUpdate\"\n                  placeholder=\"{{'ADD_EDIT_HEADER_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--Subtitle-->\n    <div ng-switch-when=\"Subtitle\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <h5\n                    class=\"greyText\">\n                    <i class=\"fa fa-eye\"></i>\n                    &nbsp;\n                    {{'PREVIEW_TAB' | translate}} :\n                  </h5>\n              </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <div class=\"\">\n                      <h4 class=\"text-center\">\n                        {{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\n                      </h4>\n                      <hr/>\n                    </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5\n                class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"subtitleTitleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'SUBTITLE_TITLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"subtitleTitleUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SUBTIL_TITLE_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"subtitleTextUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'SUBTITLE_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"subtitleTextUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SUBTIL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- TextInput -->\n    <div ng-switch-when=\"TextInput\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputText\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div\n                  ng-init=\"editControlModCtrl.demoInput=['']\">\n                  <div ng-repeat=\"item in editControlModCtrl.demoInput track by $index\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          ng-model=\"editControlModCtrl.demoInput[$index]\"\n                          id=\"inputText\"\n                          placeholder=\"{{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\">\n                      </div>\n                      <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\" style=\"margin-bottom: 20px;\">\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-sm btn-danger\"\n                          ng-click=\"editControlModCtrl.demoInput.splice($index, 1)\"\n                          ng-if=\"editControlModCtrl.demoInput.length > 1\">\n                          {{'REMOVE' | translate}}\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <p\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == -1 || (editControlModCtrl.demoInput.length < editControlModCtrl.nyaSelect.temporyConfig.allowMultiple)\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.demoInput.push('')\">\n                      {{'ADD_NEW' | translate}}\n                    </button>\n                  </p>\n                  <p class=\"help-block\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"inputTextParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"inputTextLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextplaceholderUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PLACEHOLDER' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\"\n                  id=\"inputTextplaceholderUpdate\"\n                  placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextUniqueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'UNIQUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyUnique\"\n                  id=\"inputTextUniqueUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextMaxLengthUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'MAX_LENGTH' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.maxLengthOption\"\n                  id=\"inputTextMaxLengthUpdate\"\n                  placeholder=\"\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                  id=\"inputTextDefaultValueUpdate\"\n                  placeholder=\"{{'ADD_DEFAUT_VALUE_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"inputTextDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"inputTextDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Number -->\n    <div ng-switch-when=\"Number\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputNumber\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div\n                  ng-init=\"editControlModCtrl.demoInput=['']\">\n                  <div ng-repeat=\"item in editControlModCtrl.demoInput track by $index\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n                        <input\n                          type=\"number\"\n                          class=\"form-control\"\n                          ng-model=\"editControlModCtrl.demoInput[$index]\"\n                          id=\"inputNumber\"\n                          placeholder=\"{{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\">\n                      </div>\n                      <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\" style=\"margin-bottom: 20px;\">\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-sm btn-danger\"\n                          ng-click=\"editControlModCtrl.demoInput.splice($index, 1)\"\n                          ng-if=\"editControlModCtrl.demoInput.length > 1\">\n                          {{'REMOVE' | translate}}\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <p\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == -1 || (editControlModCtrl.demoInput.length < editControlModCtrl.nyaSelect.temporyConfig.allowMultiple)\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.demoInput.push('')\">\n                      {{'ADD_NEW' | translate}}\n                    </button>\n                  </p>\n                  <p class=\"help-block\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"inputNumberParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputNumberLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"inputNumberLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberplaceholderUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PLACEHOLDER' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\"\n                  id=\"inputNumberplaceholderUpdate\"\n                  placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputNumberRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumbeUniqueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'UNIQUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyUnique\"\n                  id=\"inputNumbeUniqueUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'NUMBER_TYPE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.numberType\"\n                  ng-change=\"editControlModCtrl.nyaSelect.temporyConfig.incrementalOption=false;editControlModCtrl.nyaSelect.temporyConfig.currentYearOption=false\"\n                  id=\"inputNumberTypeUpdate\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"type in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberTypesList()\">\n                    <a>\n                      <span>\n                        {{ type }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div ng-switch on=\"editControlModCtrl.nyaSelect.temporyConfig.numberType\">\n            <!--no control selected-->\n            <div ng-switch-when=\"integer\">\n              <div class=\"row\">\n                <div class=\"form-group\">\n                  <label\n                    for=\"inputNumberIncrementalUpdate\"\n                    class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                    {{'INCREMENTAL' | translate}} :\n                  </label>\n                  <div class=\"col-lg-9\">\n                    <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                    <input\n                      type=\"checkbox\"\n                      ng-change=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple = 1\"\n                      ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.incrementalOption\"\n                      id=\"inputNumberIncrementalUpdate\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div ng-switch-when=\"year\">\n              <div class=\"row\">\n                <div class=\"form-group\">\n                  <label\n                    for=\"inputYearCurrentUpdate\"\n                    class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                    {{'CURRENT_YEAR' | translate}} :\n                  </label>\n                  <div class=\"col-lg-9\">\n                    <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                    <input\n                      type=\"checkbox\"\n                      ng-change=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple = 1\"\n                      ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.currentYearOption\"\n                      id=\"inputYearCurrentUpdate\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div\n            class=\"row\"\n            ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.currentYearOption === false\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{editControlModCtrl.nyaSelect.temporyConfig.incrementalOption ? 'START_VALUE' : 'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                  id=\"inputNumberDefaultValueUpdate\"\n                  min=\"{{editControlModCtrl.nyaSelect.temporyConfig.minValueOption}}\"\n                  max=\"{{editControlModCtrl.nyaSelect.temporyConfig.maxValueOption}}\"\n                  placeholder=\"{{'ADD_DEFAUT_VALUE_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberMinValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'MIN_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.minValueOption\"\n                  id=\"inputNumberMinValueUpdate\"\n                  placeholder=\"\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberMaxValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'MAX_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.maxValueOption\"\n                  id=\"inputNumberMaxValueUpdate\"\n                  placeholder=\"\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"inputNumberDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"inputNumberDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div\n            class=\"row\"\n            ng-if=\"!editControlModCtrl.nyaSelect.temporyConfig.incrementalOption && !editControlModCtrl.nyaSelect.temporyConfig.currentYearOption\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputNumberDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputNumberDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- password -->\n    <div ng-switch-when=\"Password\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputPassword\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div\n                  ng-init=\"editControlModCtrl.demoInput=['']\">\n                  <div ng-repeat=\"item in editControlModCtrl.demoInput track by $index\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n                        <input\n                          type=\"password\"\n                          class=\"form-control\"\n                          ng-model=\"editControlModCtrl.demoInput[$index]\"\n                          id=\"inputPassword\"\n                          placeholder=\"{{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\">\n                      </div>\n                      <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\" style=\"margin-bottom: 20px;\">\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-sm btn-danger\"\n                          ng-click=\"editControlModCtrl.demoInput.splice($index, 1)\"\n                          ng-if=\"editControlModCtrl.demoInput.length > 1\">\n                          {{'REMOVE' | translate}}\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <p\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == -1 || (editControlModCtrl.demoInput.length < editControlModCtrl.nyaSelect.temporyConfig.allowMultiple)\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.demoInput.push('')\">\n                      {{'ADD_NEW' | translate}}\n                    </button>\n                  </p>\n                  <p class=\"help-block\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"greyText\">\n                  <i class=\"fa fa-pencil-square-o\"></i>\n                  &nbsp;\n                  {{'EDIT_PROPERTIES' | translate}} :\n                </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputPasswordParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"inputPasswordParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputPasswordLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"inputPasswordLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextplaceholderUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PLACEHOLDER' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\"\n                  id=\"inputTextplaceholderUpdate\"\n                  placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputPasswordUniqueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'UNIQUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyUnique\"\n                  id=\"inputPasswordUniqueUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputPasswordDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                  id=\"inputPasswordDefaultValueUpdate\"\n                  placeholder=\"{{'ADD_DEFAUT_VALUE_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputPasswordDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"inputPasswordDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputPasswordDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"inputPasswordDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Email -->\n    <div ng-switch-when=\"Email\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputEmail\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div\n                  ng-init=\"editControlModCtrl.demoInput=['']\">\n                  <div ng-repeat=\"item in editControlModCtrl.demoInput track by $index\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n                        <input\n                          type=\"email\"\n                          class=\"form-control\"\n                          ng-model=\"editControlModCtrl.demoInput[$index]\"\n                          id=\"inputEmail\"\n                          placeholder=\"{{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\">\n                      </div>\n                      <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\" style=\"margin-bottom: 20px;\">\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-sm btn-danger\"\n                          ng-click=\"editControlModCtrl.demoInput.splice($index, 1)\"\n                          ng-if=\"editControlModCtrl.demoInput.length > 1\">\n                          {{'REMOVE' | translate}}\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <p\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == -1 || (editControlModCtrl.demoInput.length < editControlModCtrl.nyaSelect.temporyConfig.allowMultiple)\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.demoInput.push('')\">\n                      {{'ADD_NEW' | translate}}\n                    </button>\n                  </p>\n                  <p class=\"help-block\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputEmailParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"inputEmailParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputEmailLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"inputTextLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextplaceholderUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PLACEHOLDER' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\"\n                  id=\"inputTextplaceholderUpdate\"\n                  placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputEmailUniqueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'UNIQUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyUnique\"\n                  id=\"inputEmailUniqueUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputEmailDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"email\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                  id=\"inputEmailDefaultValueUpdate\"\n                  placeholder=\"{{'ADD_DEFAUT_VALUE_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputEmailDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"inputEmailDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputEmailDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"inputEmailDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- datetimepicker (input type date not ok in all browsers) -->\n    <div ng-switch-when=\"Date\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputDate\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div>\n                  <div ng-repeat=\"item in editControlModCtrl.demodt.dt track by $index\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\">\n                            <i class=\"glyphicon glyphicon-calendar\"></i>\n                          </span>\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            uib-datepicker-popup=\"{{editControlModCtrl.nyaSelect.temporyConfig.datepickerOptions.format}}\"\n                            ng-model=\"editControlModCtrl.demodt.dt[$index]\"\n                            ng-init=\"editControlModCtrl.today('demodt', $index); editControlModCtrl.demodt.opened[$index] = false\"\n                            is-open=\"editControlModCtrl.demodt.opened[$index]\"\n                            datepicker-options=\"editControlModCtrl.dateOptions\"\n                            close-text=\"Close\"\n                            ng-click=\"editControlModCtrl.open($event, 'demodt', $index)\"\n                            placeholder=\"{{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\" style=\"margin-bottom: 20px;\">\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-sm btn-danger\"\n                          ng-click=\"editControlModCtrl.demodt.dt.splice($index, 1); editControlModCtrl.demodt.opened.splice($index, 1)\"\n                          ng-if=\"editControlModCtrl.demodt.dt.length > 1\">\n                          {{'REMOVE' | translate}}\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <p\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == -1 || (editControlModCtrl.demodt.dt.length < editControlModCtrl.nyaSelect.temporyConfig.allowMultiple)\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.demodt.dt.push(''); editControlModCtrl.demodt.opened.push(false)\">\n                      {{'ADD_NEW' | translate}}\n                    </button>\n                  </p>\n                  <p class=\"help-block\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputDateParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"inputDateParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputDateLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"inputDateLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputDateUniqueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'UNIQUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyUnique\"\n                  id=\"inputDateUniqueUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DATE_FORMAT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.datepickerOptions.format\"\n                  id=\"dateformatSelect\">\n                  <li\n                    class=\"nya-bs-option\"\n                    nya-bs-option=\"dateformat in editControlModCtrl.demodt.formats\"\n                    value=\"dateformat\">\n                    <a>\n                      {{dateformat}}\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputDateCurrentUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'CURRENT_DATE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-change=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple = 1\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.currentDateOption\"\n                  id=\"inputDateCurrentUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\" ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.currentDateOption === false\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputDateDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"\">\n                  <div class=\"input-group\" >\n                    <span class=\"input-group-addon\">\n                      <i class=\"glyphicon glyphicon-calendar\"></i>\n                    </span>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      uib-datepicker-popup=\"{{editControlModCtrl.nyaSelect.temporyConfig.datepickerOptions.format}}\"\n                      ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                      is-open=\"editControlModCtrl.defaultdt.opened\"\n                      datepicker-options=\"editControlModCtrl.dateOptions\"\n                      ng-model-options=\"{timezone: 0}\"\n                      close-text=\"Close\"\n                      ng-click=\"editControlModCtrl.open($event, 'defaultdt', -1)\"\n                    />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputDateDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"inputDateDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputDateDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"inputDateDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\" ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.currentDateOption === false\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- textarea -->\n    <div ng-switch-when=\"Texarea\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"textArea\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div\n                  ng-init=\"editControlModCtrl.demoInput=['']\">\n                  <div ng-repeat=\"item in editControlModCtrl.demoInput track by $index\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n                        <textarea\n                          class=\"form-control\"\n                          ng-model=\"editControlModCtrl.demoInput[$index]\"\n                          rows=\"3\"\n                          id=\"textArea\">\n                        </textarea>\n                      </div>\n                      <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\" style=\"margin-bottom: 20px;\">\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-sm btn-danger\"\n                          ng-click=\"editControlModCtrl.demoInput.splice($index, 1)\"\n                          ng-if=\"editControlModCtrl.demoInput.length > 1\">\n                          {{'REMOVE' | translate}}\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <p\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == -1 || (editControlModCtrl.demoInput.length < editControlModCtrl.nyaSelect.temporyConfig.allowMultiple)\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.demoInput.push('')\">\n                      {{'ADD_NEW' | translate}}\n                    </button>\n                  </p>\n                  <p class=\"help-block\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"textareaParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"textareaParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"textareaLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"textareaLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"textareaDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <textarea\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                  id=\"textareaDefaultValueUpdate\"\n                  placeholder=\"{{'ADD_DEFAUT_VALUE_HERE' | translate}}\">\n                </textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"textareaDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"textareaDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"textareaDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"textareaDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- RichText -->\n    <div ng-switch-when=\"RichTextEditor\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"RichTextEditor\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div\n                  ng-init=\"editControlModCtrl.demoInput=['']\">\n                  <div ng-repeat=\"item in editControlModCtrl.demoInput track by $index\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n                        <text-angular\n                          ng-model=\"editControlModCtrl.demoInput[$index]\">\n                        </text-angular>\n                      </div>\n                      <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\" style=\"margin-bottom: 20px;\">\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-sm btn-danger\"\n                          ng-click=\"editControlModCtrl.demoInput.splice($index, 1)\"\n                          ng-if=\"editControlModCtrl.demoInput.length > 1\">\n                          {{'REMOVE' | translate}}\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <p\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == -1 || (editControlModCtrl.demoInput.length < editControlModCtrl.nyaSelect.temporyConfig.allowMultiple)\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.demoInput.push('')\">\n                      {{'ADD_NEW' | translate}}\n                    </button>\n                  </p>\n                  <p class=\"help-block\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"richTextParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"richTextParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"richTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"richTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"richTextLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"richTextLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <!-- required can't be applied to rich text editor (textAngular) right now -->\n          <!--<div class=\"row\">\n                <div class=\"form-group\">\n                  <label\n                    for=\"inputTextRequiredUpdate\"\n                    class=\"col-lg-3 control-label greyText editPropertiesLabel\">Required :\n                  </label>\n                  <div class=\"col-lg-9\">\n                    <div class=\"checkboxCssCorrection\">\n                      &nbsp;\n                    </div>\n                    <input\n                      type=\"checkbox\"\n                      ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"marginTopFivepixels\"></div>-->\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"richTextDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <text-angular\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                  id=\"richTextDefaultValueUpdate\"\n                  placeholder=\"{{'ADD_DEFAUT_VALUE_HERE' | translate}}\">\n                </text-angular>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"richTextDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"richTextDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"richTextDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"richTextDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- radios -->\n    <div ng-switch-when=\"Radio\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"radio\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div class=\"\">\n                  <div\n                    class=\"radio\"\n                    ng-repeat=\"radioRow in editControlModCtrl.radioRowCollection.rows\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        name=\"optionsRadios\"\n                        id=\"{{'optionsRadio-' + $index}}\"\n                        value=\"$index\">\n                        {{radioRow.option}}\n                      <span\n                        ng-if=\"radioRow.description.length > 0\"\n                        class=\"help-block help-inline\">\n                        ({{radioRow.description}})\n                      </span>\n                    </label>\n                  </div>\n                  <p class=\"help-block\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5\n                class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-3\">\n              <label\n                for=\"optionsSourceTypeRadioOption\"\n                class=\" control-label greyText editPropertiesLabel\">\n                {{'OPTIONS_SOURCE_TYPE' | translate}} :\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div>\n              <div class=\"row\">\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5\">\n                  <div class=\"radio\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        id=\"optionsSourceTypeRadioOption\"\n                        value=\"static\"\n                        ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType\">\n                      {{'OPTIONS_SOURCE_STATIC' | translate}} :\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 col-sm-offset-1 col-xs-offset-1 col-md-offset-1 col-lg-offset-1\">\n                  <div class=\"radio\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        id=\"optionsSourceTypeRadioOption\"\n                        value=\"db\"\n                        ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType\">\n                      {{'OPTIONS_SOURCE_DB' | translate}} :\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType == 'static'\">\n            <div class=\"marginTopFivepixels\"></div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3\">\n                <label\n                  for=\"radioRowCollection\"\n                  class=\" control-label greyText editPropertiesLabel\">\n                  {{'ADD_NEW_RADIO' | translate}} :\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div>\n                <div class=\"row\">\n                  <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"inputAddNewRadioOption\"\n                      placeholder=\"{{'ADD_A_NEW_OPTION' | translate}}\"\n                      ng-model=\"editControlModCtrl.newOptionRadio.saisie\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      ng-model=\"editControlModCtrl.newOptionRadio.description\"\n                      id=\"inputAddNewRadioOptionDescription\"\n                      placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                  </div>\n                  <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\">\n                    <button\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.addNewOptionRadio()\">\n                      {{'ADD' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3\">\n                <label\n                  for=\"radioRowCollection\"\n                  class=\" control-label greyText editPropertiesLabel\">\n                  {{'EDIT_REMOVE_RADIO' | translate}} :\n                </label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group\">\n                <div class-\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"container\">\n                    <div ng-show=\"editControlModCtrl.radioRowCollection.rows.length === 0\">\n                      <h5 class=\"text-center greyText\">\n                        <em>\n                          - {{'NO_RADIO_ADD_NEW' | translate}} -\n                        </em>\n                      </h5>\n                    </div>\n                    <table\n                      ng-if=\"editControlModCtrl.radioRowCollection.rows.length > 0\"\n                      class=\"table table-striped\">\n                      <thead>\n                      <tr>\n                        <th st-ratio=\"10\">\n                          {{'ORDER' | translate}}\n                        </th>\n                        <th st-ratio=\"25\">\n                          {{'OPTION' | translate}}\n                        </th>\n                        <th st-ratio=\"40\">\n                          {{'OPTION_DESCRIPTION' | translate}}\n                        </th>\n                        <th st-ratio=\"25\">\n                        </th>\n                      </tr>\n                      <tr>\n                        <th st-ratio=\"10\">\n                        </th>\n                        <th st-ratio=\"25\">\n                          <input\n                            ng-model=\"editControlModCtrl.radioFilter\"\n                            placeholder=\"{{'SEARCH_4_OPTION' | translate}}\"\n                            class=\"input-sm form-control\"\n                            type=\"search\"\n                          />\n                        </th>\n                        <th st-ratio=\"40\">\n                        </th>\n                        <th st-ratio=\"25\">\n                        </th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                        <tr ng-repeat=\"radioRow in editControlModCtrl.radioRowCollection.rows | filter:radioFilter as radioRow\">\n                          <td st-ratio=\"10\">\n                            {{$index}}\n                          </td>\n                          <td st-ratio=\"25\">\n                            {{radioRow.option}}\n                          </td>\n                          <td st-ratio=\"40\">\n                            {{radioRow.description}}\n                          </td>\n                          <td st-ratio=\"25\">\n                            <div class=\"pull-right\">\n                              <button\n                                class=\"btn btn-primary\"\n                                ng-click=\"editControlModCtrl.upThisRadioRow($index)\">\n                                <i class=\"fa fa-arrow-up\"></i>\n                              </button>\n                              <button\n                                class=\"btn btn-primary\"\n                                ng-click=\"editControlModCtrl.downThisRadioRow($index)\">\n                                <i class=\"fa fa-arrow-down\"></i>\n                              </button>\n                              <button\n                                class=\"btn btn-danger\"\n                                ng-click=\"editControlModCtrl.removeRadioRow($index)\">\n                                <i class=\"fa fa-trash-o\"></i>\n                              </button>\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType == 'db'\">\n            <div class=\"row\">\n              <div class=\"form-group\" ng-class=\"{'has-error': editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable.id == null}\">\n                <label\n                  for=\"radioOptionsSourceDbTable\"\n                  class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                  {{'OPTIONS_SOURCE_DB_TABLE' | translate}} :\n                </label>\n                <div class=\"col-lg-9\">\n                  <ol\n                    class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n                    ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable\"\n                    ng-init=\"editControlModCtrl.populateSourceTables(); editControlModCtrl.populateSourceFields(editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable)\"\n                    ng-change=\"editControlModCtrl.populateSourceFields(editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable)\"\n                    id=\"radioOptionsSourceDbTable\"\n                    title=\"Nothing selected\">\n                    <li nya-bs-option=\"table in editControlModCtrl.optionsSourceDbTables\">\n                      <a>\n                        <span>\n                          {{ table.name }}\n                        </span>\n                        <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                      </a>\n                    </li>\n                  </ol>\n                  <div class=\"validation\">\n                    <div ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable.id == null\">{{'FIELD' | translate}}{{'VALIDATION_REQUIRED' | translate}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group\" ng-class=\"{'has-error': !editControlModCtrl.optionsSourceDbFormatValidation}\">\n                <label\n                  for=\"radioOptionsSourceDbFormat\"\n                  class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                  {{'OPTIONS_SOURCE_DB_FORMAT' | translate}} :\n                </label>\n                <div class=\"col-lg-9\">\n                  <selectize\n                    config=\"editControlModCtrl.optionsSourceDbFormatConfig\"\n                    options=\"editControlModCtrl.optionsSourceDbFields\"\n                    ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbFormat\">\n                  </selectize>\n                  <div class=\"validation\">\n                    <div ng-if=\"!editControlModCtrl.optionsSourceDbFormatValidation\">{{'OPTIONAL_VALIDATION_FALSE' | translate}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputRadioParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"inputRadioParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputRadioLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"inputRadioLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputRadioDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div\n                  class=\"\">\n                   <div\n                    class=\"radio\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        name=\"optionsRadiosDefaultValue\"\n                        ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                        id=\"{{'optionsRadio-a'}}\"\n                        value=\"\">\n                        {{'NOTHING_SELECTED' | translate}}\n                    </label>\n                  </div>\n                  <div\n                    class=\"radio\"\n                    ng-repeat=\"row in editControlModCtrl.radioRowCollection.rows\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        name=\"optionsRadiosDefaultValue\"\n                        ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                        id=\"{{'optionsRadioDefaultValue-' + $index}}\"\n                        ng-value=\"row.referenceId || row.uniqueValue\">\n                      {{row.option}}\n                      <span\n                        ng-if=\"row.description.length > 0\"\n                        class=\"help-block help-inline\">\n                        ({{row.description}})\n                      </span>\n                    </label>\n                  </div>\n                  <p class=\"help-block\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputRadioDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"inputRadioDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputRadioDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"inputRadioDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- checkbox -->\n    <div ng-switch-when=\"Checkbox\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <div class=\"col-md-12\">\n                  <div class=\"checkbox\">\n                    <label>\n                      <input\n                        type=\"checkbox\"\n                        id=\"checkBox\">\n                      <span class=\"blackText\">\n                        {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                      </span>\n                      <span\n                        ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                        class=\"textControlLabel\">\n                        *\n                      </span>\n                    </label>\n                  </div>\n                  <p class=\"help-block\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputCheckboxParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"inputCheckboxParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputCheckboxLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"inputCheckboxLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputCheckboxDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                  id=\"checkBox\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputCheckboxDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"inputCheckboxDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputCheckboxDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"inputCheckboxDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--  basic selects -->\n    <div ng-switch-when=\"BasicSelect\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"basicSelect\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div class=\"\">\n                  <ol\n                    class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                    ng-model=\"editControlModCtrl.modelbasicSelect\"\n                    id=\"basicSelect\"\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == 1\"\n                    disabled=\"editControlModCtrl.basicSelectRowCollection.rows.length === 0\">\n                    <li\n                      class=\"nya-bs-option\"\n                      ng-if=\"!editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                      value=\"\">\n                      <a>{{'NOTHING_SELECTED' | translate}}</a>\n                    </li>\n                    <li\n                      class=\"nya-bs-option\"\n                      nya-bs-option=\"basicSelectRow in editControlModCtrl.basicSelectRowCollection.rows\"\n                      value=\"$index\">\n                      <a>\n                        <span>\n                          {{basicSelectRow.option}}\n                          <span\n                            ng-if=\"basicSelectRow.description.length > 0\"\n                            class=\"help-block help-inline\">\n                            ({{basicSelectRow.description}})\n                          </span>\n                        </span>\n                      </a>\n                    </li>\n                  </ol>\n                  <ol\n                    class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                    ng-model=\"editControlModCtrl.modelbasicSelect\"\n                    id=\"basicSelect\"\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple != 1\"\n                    multiple\n                    disabled=\"editControlModCtrl.basicSelectRowCollection.rows.length === 0\">\n                    <li\n                      class=\"nya-bs-option\"\n                      nya-bs-option=\"basicSelectRow in editControlModCtrl.basicSelectRowCollection.rows\"\n                      value=\"$index\"\n                      ng-class=\"{disabled: editControlModCtrl.nyaSelect.temporyConfig.allowMultiple > 1 && editControlModCtrl.modelbasicSelect.length >= editControlModCtrl.nyaSelect.temporyConfig.allowMultiple && editControlModCtrl.modelbasicSelect.indexOf($index) == -1}\">\n                      <a>\n                        <span>\n                          {{basicSelectRow.option}}\n                          <span\n                            ng-if=\"basicSelectRow.description.length > 0\"\n                            class=\"help-block help-inline\">\n                            ({{basicSelectRow.description}})\n                          </span>\n                        </span>\n                      </a>\n                    </li>\n                  </ol>\n                  <p class=\"help-block\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-3\">\n              <label\n                for=\"optionsSourceTypeBasicSelectOption\"\n                class=\" control-label greyText editPropertiesLabel\">\n                {{'OPTIONS_SOURCE_TYPE' | translate}} :\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div>\n              <div class=\"row\">\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5\">\n                  <div class=\"radio\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        id=\"optionsSourceTypeBasicSelectOption\"\n                        value=\"static\"\n                        ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType\">\n                      {{'OPTIONS_SOURCE_STATIC' | translate}} :\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 col-sm-offset-1 col-xs-offset-1 col-md-offset-1 col-lg-offset-1\">\n                  <div class=\"radio\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        id=\"optionsSourceTypeBasicSelectOption\"\n                        value=\"db\"\n                        ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType\">\n                      {{'OPTIONS_SOURCE_DB' | translate}} :\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType == 'static'\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3\">\n                <label\n                  for=\"basicSelectRowCollection\"\n                  class=\" control-label greyText editPropertiesLabel\">\n                  {{'ADD_NEW_OPTIONS' | translate}} :\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div>\n                <div class=\"row\">\n                  <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"inputAddNewBasicOption\"\n                      placeholder=\"{{'ADD_A_NEW_OPTION' | translate}}\"\n                      ng-model=\"editControlModCtrl.newOptionBasicSelect.saisie\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      ng-model=\"editControlModCtrl.newOptionBasicSelect.description\"\n                      id=\"inputAddNewBasicOptionDescription\"\n                      placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                  </div>\n                  <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\">\n                    <button\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.addNewOptionBasicSelect()\">\n                      {{'ADD' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3\">\n                <label class=\" control-label greyText editPropertiesLabel\">\n                  {{'EDIT_REMOVE_OPTIONS' | translate}} :\n                </label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group\">\n                <div class-\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"container\">\n                    <div ng-if=\"editControlModCtrl.basicSelectRowCollection.rows.length === 0\">\n                      <h5 class=\"text-center greyText\">\n                        <em>\n                          - {{'NO_OPTION_ADD_NEW' | translate}} -\n                        </em>\n                      </h5>\n                    </div>\n                    <table\n                      ng-if=\"editControlModCtrl.basicSelectRowCollection.rows.length > 0\"\n                      class=\"table table-striped\">\n                      <thead>\n                        <tr>\n                          <th st-ratio=\"5\">\n                            {{'ORDER' | translate}}\n                          </th>\n                          <th st-ratio=\"25\">\n                            {{'PARENT_ID' | translate}}\n                          </th>\n                          <th st-ratio=\"20\">\n                            {{'OPTION' | translate}}\n                          </th>\n                          <th st-ratio=\"25\">\n                            {{'OPTION_DESCRIPTION' | translate}}\n                          </th>\n                          <th st-ratio=\"25\">\n                          </th>\n                        </tr>\n                        <tr>\n                          <th st-ratio=\"5\">\n                          </th>\n                          <th st-ratio=\"25\">\n                          </th>\n                          <th st-ratio=\"20\">\n                            <input\n                              ng-model=\"basicSelectFilter\"\n                              placeholder=\"{{'SEARCH_4_OPTION' | translate}}\"\n                              class=\"input-sm form-control\"\n                              type=\"search\"\n                            />\n                          </th>\n                          <th st-ratio=\"25\">\n                          </th>\n                          <th st-ratio=\"25\">\n                          </th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr ng-repeat=\"basicSelectRow in editControlModCtrl.basicSelectRowCollection.rows\">\n                          <td st-ratio=\"5\">\n                            {{$index}}\n                          </td>\n                          <td st-ratio=\"25\">\n                            <div ng-if=\"editControlModCtrl.basicSelectGroupClick.showList === true\">\n                              <div ng-if=\"editControlModCtrl.basicSelectRowCollection.parents.length === 0\">\n                                <p class=\"text-left noGroupText\">-</p>\n                              </div>\n                              <div ng-if=\"editControlModCtrl.basicSelectRowCollection.parents.length > 0\">\n                                <ol\n                                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12 editGroupedSelectnyaSelect\"\n                                  ng-model=\"basicSelectRow.parentId\"\n                                  id=\"modelBasicOptionParentChoose\"\n                                  title=\"No value\">\n                                  <li\n                                    class=\"nya-bs-option\"\n                                    nya-bs-option=\"parent in editControlModCtrl.basicSelectRowCollection.parents\"\n                                    ng-if=\"parent.option!=basicSelectRow.option\"\n                                    value=\"{id: parent.referenceId, name: parent.option, value: parent.uniqueValue}\">\n                                    <a>{{parent.option}}</a>\n                                  </li>\n                                </ol>\n                              </div>\n                            </div>\n                            <div ng-if=\"editControlModCtrl.basicSelectGroupClick.showList === false\">\n                              {{basicSelectRow.parentId.name}}\n                            </div>\n                          </td>\n                          <td st-ratio=\"20\">\n                            {{basicSelectRow.option}}\n                          </td>\n                          <td st-ratio=\"25\">\n                            {{basicSelectRow.description}}\n                          </td>\n                          <td st-ratio=\"25\">\n                            <div class=\"pull-right\">\n                              <button\n                                class=\"btn btn-primary\"\n                                ng-click=\"editControlModCtrl.upThisRow($index)\">\n                                <i class=\"fa fa-arrow-up\"></i>\n                              </button>\n                              <button\n                                class=\"btn btn-primary\"\n                                ng-click=\"editControlModCtrl.downThisRow($index)\">\n                                <i class=\"fa fa-arrow-down\"></i>\n                              </button>\n                              <button\n                                class=\"btn btn-warning\"\n                                ng-click=\"editControlModCtrl.showBasicListToChoose()\">\n                                <i class=\"fa fa-pencil-square-o\"></i>\n                              </button>\n                              <button\n                                class=\"btn btn-danger\"\n                                ng-click=\"editControlModCtrl.removeRow($index)\">\n                                <i class=\"fa fa-trash-o\"></i>\n                              </button>\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType == 'db'\">\n            <div class=\"row\">\n              <div class=\"form-group\" ng-class=\"{'has-error': editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable.id == null}\">\n                <label\n                  for=\"basicSelectOptionsSourceDbTable\"\n                  class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                  {{'OPTIONS_SOURCE_DB_TABLE' | translate}} :\n                </label>\n                <div class=\"col-lg-9\">\n                  <ol\n                    class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n                    ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable\"\n                    ng-init=\"editControlModCtrl.populateSourceTables(); editControlModCtrl.populateSourceFields(editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable)\"\n                    ng-change=\"editControlModCtrl.populateSourceFields(editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable)\"\n                    id=\"basicSelectOptionsSourceDbTable\"\n                    title=\"Nothing selected\">\n                    <li nya-bs-option=\"table in editControlModCtrl.optionsSourceDbTables\">\n                      <a>\n                        <span>\n                          {{ table.name }}\n                        </span>\n                        <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                      </a>\n                    </li>\n                  </ol>\n                  <div class=\"validation\">\n                    <div ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable.id == null\">{{'FIELD' | translate}}{{'VALIDATION_REQUIRED' | translate}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group\" ng-class=\"{'has-error': !editControlModCtrl.optionsSourceDbFormatValidation}\">\n                <label\n                  for=\"basicSelectOptionsSourceDbFormat\"\n                  class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                  {{'OPTIONS_SOURCE_DB_FORMAT' | translate}} :\n                </label>\n                <div class=\"col-lg-9\">\n                  <selectize\n                    config=\"editControlModCtrl.optionsSourceDbFormatConfig\"\n                    options=\"editControlModCtrl.optionsSourceDbFields\"\n                    ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbFormat\">\n                  </selectize>\n                  <div class=\"validation\">\n                    <div ng-if=\"!editControlModCtrl.optionsSourceDbFormatValidation\">{{'OPTIONAL_VALIDATION_FALSE' | translate}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"basicSelectParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"basicSelectParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"basicSelectLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"basicSelectLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"basicSelectRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"basicSelectRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"basicSelectDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-6\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                  id=\"basicSelect\"\n                  disabled=\"editControlModCtrl.basicSelectRowCollection.rows.length === 0\">\n                  <li\n                    class=\"nya-bs-option\"\n                    nya-bs-option=\"row in editControlModCtrl.basicSelectRowCollection.rows\"\n                    data-value=\"{referenceId: row.referenceId, name: row.option, uniqueValue: row.uniqueValue}\">\n                    <a>\n                      <span>\n                        {{row.option}}\n                      </span>\n                      <span\n                        ng-if=\"row.description.length > 0\"\n                        class=\"help-block help-inline\">\n                        ({{row.description}})\n                      </span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n              <div class=\"col-lg-3\">\n                <button\n                  class=\"btn btn-warning\"\n                  ng-click=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue=''\">\n                    {{'RESET SELECTION' | translate}}\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"basicSelectDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"basicSelectDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"basicSelectDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"basicSelectDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"basicSelectAllowEmptyOptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_EMPTY_OPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowEmptyOption\"\n                  id=\"basicSelectAllowEmptyOptionUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- grouped selects -->\n    <div ng-switch-when=\"GroupedSelect\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5\n                class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"select\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div class=\"\">\n                  <ol\n                    class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                    ng-model=\"editControlModCtrl.modelGroupedSelect\"\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == 1\"\n                    data-live-search=\"true\"\n                    disabled=\"editControlModCtrl.groupedSelectRowCollection.rows.length === 0\">\n                    <li\n                      class=\"nya-bs-option\"\n                      ng-if=\"!editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                      value=\"\">\n                      <a>{{'NOTHING_SELECTED' | translate}}</a>\n                    </li>\n                    <li\n                      nya-bs-option=\"groupedSelectRow in editControlModCtrl.groupedSelectRowCollection.rows group by groupedSelectRow.group\"\n                      value=\"$index\">\n                      <span class=\"dropdown-header\">\n                        {{groupedSelectRow.group}}\n                      </span>\n                      <a>\n                        <span>\n                          {{groupedSelectRow.option}}\n                          <span\n                            ng-if=\"groupedSelectRow.description.length > 0\"\n                            class=\"help-block help-inline\">\n                            ({{groupedSelectRow.description}})\n                          </span>\n                        </span>\n                        <span class=\"glyphicon glyphicon-ok check-mark\">\n                        </span>\n                      </a>\n                    </li>\n                  </ol>\n                  <ol\n                    class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                    ng-model=\"editControlModCtrl.modelGroupedSelect\"\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple != 1\"\n                    multiple\n                    data-live-search=\"true\"\n                    disabled=\"editControlModCtrl.groupedSelectRowCollection.rows.length === 0\">\n                    <li\n                      nya-bs-option=\"groupedSelectRow in editControlModCtrl.groupedSelectRowCollection.rows group by groupedSelectRow.group\"\n                      value=\"$index\"\n                      ng-class=\"{disabled: editControlModCtrl.nyaSelect.temporyConfig.allowMultiple > 1 && editControlModCtrl.modelGroupedSelect.length >= editControlModCtrl.nyaSelect.temporyConfig.allowMultiple && editControlModCtrl.modelGroupedSelect.indexOf($index) == -1}\">\n                      <span class=\"dropdown-header\">\n                        {{groupedSelectRow.group}}\n                      </span>\n                      <a>\n                        <span>\n                          {{groupedSelectRow.option}}\n                          <span\n                            ng-if=\"groupedSelectRow.description.length > 0\"\n                            class=\"help-block help-inline\">\n                            ({{groupedSelectRow.description}})\n                          </span>\n                        </span>\n                        <span class=\"glyphicon glyphicon-ok check-mark\">\n                        </span>\n                      </a>\n                    </li>\n                  </ol>\n                  <p class=\"help-block\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5\n                class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n         <div class=\"row\">\n            <div class=\"col-lg-3 col-md-3\">\n              <label\n                for=\"optionsSourceTypeGroupedSelectOption\"\n                class=\" control-label greyText editPropertiesLabel\">\n                {{'OPTIONS_SOURCE_TYPE' | translate}} :\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div>\n              <div class=\"row\">\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5\">\n                  <div class=\"radio\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        id=\"optionsSourceTypeGroupedSelectOption\"\n                        value=\"static\"\n                        ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType\">\n                      {{'OPTIONS_SOURCE_STATIC' | translate}} :\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 col-sm-offset-1 col-xs-offset-1 col-md-offset-1 col-lg-offset-1\">\n                  <div class=\"radio\">\n                    <label>\n                      <input\n                        type=\"radio\"\n                        id=\"optionsSourceTypeGroupedSelectOption\"\n                        value=\"db\"\n                        ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType\">\n                      {{'OPTIONS_SOURCE_DB' | translate}} :\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType == 'static'\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3\">\n                <label\n                  for=\"groupedSelectRowCollection\"\n                  class=\" control-label greyText editPropertiesLabel\">\n                  {{'ADD_NEW_OPTIONS' | translate}} :\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div>\n                <div class=\"row\">\n                  <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"inputAddNewGroupedOption\"\n                      placeholder=\"{{'ADD_A_NEW_OPTION' | translate}}\"\n                      ng-model=\"editControlModCtrl.newOptionGroupedSelect.saisie\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      ng-model=\"editControlModCtrl.newOptionGroupedSelect.description\"\n                      id=\"inputAddNewGroupedOptionDescription\"\n                      placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                  </div>\n                  <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\">\n                    <button\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.addNewOptionGroupedSelect()\">\n                      {{'ADD' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3\">\n                <label\n                  for=\"groupedSelectRowCollection\"\n                  class=\" control-label greyText editPropertiesLabel\">\n                  {{'ADD_NEW_GROUPS' | translate}} :\n                </label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div>\n                <div class=\"form-group\">\n                  <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n                    <input\n                      id=\"inputAddNewGroupGroupedOption\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      ng-model=\"editControlModCtrl.newGroupGroupedSelect.saisie\" id=\"inputTextLabelUpdateGroupedSelect\"\n                      placeholder=\"{{'ADD_A_NEW_GROUP' | translate}}\">\n                  </div>\n                  <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\">\n                    <button\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.addNewGroupToGroupedSelect()\">\n                      {{'ADD' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3\">\n                <label  class=\" control-label greyText editPropertiesLabel\">\n                  {{'EDIT_GROUPS_OPTIONS' | translate}} :\n                </label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"container\">\n                    <div ng-if=\"editControlModCtrl.groupedSelectRowCollection.rows.length === 0\">\n                      <h5 class=\"text-center greyText\">\n                        <em>\n                          - {{'NO_OPTION_ADD_NEW' | translate}} -\n                        </em>\n                      </h5>\n                    </div>\n                    <table\n                      ng-if=\"editControlModCtrl.groupedSelectRowCollection.rows.length > 0\"\n                      class=\"table table-striped\">\n                      <thead>\n                        <tr>\n                          <th st-ratio=\"5\">\n                            {{'ORDER' | translate}}\n                          </th>\n                          <th st-ratio=\"20\">\n                            {{'PARENT_ID' | translate}}\n                          </th>\n                          <th st-ratio=\"15\">\n                            {{'GROUP' | translate}}\n                          </th>\n                          <th st-ratio=\"15\">\n                            {{'OPTION' | translate}}\n                          </th>\n                          <th st-ratio=\"20\">\n                            {{'OPTION_DESCRIPTION' | translate}}\n                          </th>\n                          <th st-ratio=\"25\">\n                          </th>\n                        </tr>\n                        <tr>\n                          <th st-ratio=\"5\">\n                          </th>\n                          <th st-ratio=\"20\">\n                          </th>\n                          <th st-ratio=\"15\">\n                          </th>\n                          <th st-ratio=\"15\">\n                          </th>\n                          <th st-ratio=\"20\">\n                            <input\n                              ng-model=\"editControlModCtrl.groupedSelectFilter\"\n                              placeholder=\"{{'SEARCH_4_OPTION' | translate}}\"\n                              class=\"input-sm form-control\"\n                              type=\"search\"\n                            />\n                          </th>\n                          <th st-ratio=\"25\">\n                          </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr ng-repeat=\"groupedSelectRow in editControlModCtrl.groupedSelectRowCollection.rows | filter:editControlModCtrl.groupedSelectFilter as groupedSelectRow\">\n                          <td st-ratio=\"5\">\n                            {{$index}}\n                          </td>\n                          <td st-ratio=\"20\">\n                            <div ng-if=\"editControlModCtrl.groupSelectGroupClick.showList === true\">\n                              <div ng-if=\"editControlModCtrl.groupedSelectRowCollection.parents.length === 0\">\n                                <p class=\"text-left noGroupText\">-</p>\n                              </div>\n                              <div ng-if=\"editControlModCtrl.groupedSelectRowCollection.parents.length > 0\">\n                                <ol\n                                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12 editGroupedSelectnyaSelect\"\n                                  ng-model=\"groupedSelectRow.parentId\"\n                                  id=\"modelGroupedOptionParentChoose\"\n                                  title=\"No value\">\n                                  <li\n                                    class=\"nya-bs-option\"\n                                    nya-bs-option=\"parent in editControlModCtrl.groupedSelectRowCollection.parents\"\n                                    ng-if=\"parent.option!=groupedSelectRow.option\"\n                                    value=\"{id: parent.referenceId, name: parent.option, value: parent.uniqueValue}\">\n                                    <a>{{parent.option}}</a>\n                                  </li>\n                                </ol>\n                              </div>\n                            </div>\n                            <div ng-if=\"editControlModCtrl.groupSelectGroupClick.showList === false\">\n                              {{groupedSelectRow.parentId.name}}\n                            </div>\n                          </td>\n                          <td st-ratio=\"15\">\n                            <div ng-if=\"editControlModCtrl.groupSelectGroupClick.showList === true\">\n                              <div ng-if=\"editControlModCtrl.GroupedSelectGroups.list.length === 0\">\n                                <p class=\"text-left noGroupText\">- {{'NO_GROUP_ADD_NEW' | translate}} -</p>\n                              </div>\n                              <div ng-if=\"editControlModCtrl.GroupedSelectGroups.list.length > 0\">\n                                <ol class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12 editGroupedSelectnyaSelect\" ng-model=\"groupedSelectRow.group\" id=\"modelGroupedOptionGroupedChoose\"\n                                disabled=\"editControlModCtrl.GroupedSelectGroups.list.length === 0\">\n                                  <li class=\"nya-bs-option\" nya-bs-option=\"GroupedSelectGroup in editControlModCtrl.GroupedSelectGroups.list\" value=\"GroupedSelectGroup\">\n                                    <a>{{GroupedSelectGroup}}</a>\n                                  </li>\n                                </ol>\n                              </div>\n                            </div>\n                            <div ng-if=\"editControlModCtrl.groupSelectGroupClick.showList === false\">\n                              {{groupedSelectRow.group}}\n                            </div>\n                          </td>\n                          <td st-ratio=\"15\">\n                            {{groupedSelectRow.option}}\n                          </td>\n                          <td st-ratio=\"20\">\n                            {{groupedSelectRow.description}}\n                          </td>\n                          <td st-ratio=\"25\">\n                            <div class=\"pull-right\">\n                              <button\n                                class=\"btn btn-primary\"\n                                ng-click=\"editControlModCtrl.upThisGroupedSelectRow($index)\">\n                                <i class=\"fa fa-arrow-up\"></i>\n                              </button>\n                              <button\n                                class=\"btn btn-primary\"\n                                ng-click=\"editControlModCtrl.downThisGroupedSelectRow($index)\">\n                                <i class=\"fa fa-arrow-down\"></i>\n                              </button>\n                              <button\n                                class=\"btn btn-warning\"\n                                ng-click=\"editControlModCtrl.showGroupListToChoose()\">\n                                <i class=\"fa fa-pencil-square-o\"></i>\n                              </button>\n                              <button\n                                class=\"btn btn-danger\"\n                                ng-click=\"editControlModCtrl.removeGroupedSelectRow($index)\">\n                                <i class=\"fa fa-trash-o\"></i>\n                              </button>\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType == 'db'\">\n            <div class=\"row\">\n              <div class=\"form-group\" ng-class=\"{'has-error': editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable.id == null}\">\n                <label\n                  for=\"SelectOptionsSourceDbTable\"\n                  class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                  {{'OPTIONS_SOURCE_DB_TABLE' | translate}} :\n                </label>\n                <div class=\"col-lg-9\">\n                  <ol\n                    class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12\"\n                    ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable\"\n                    ng-init=\"editControlModCtrl.populateSourceTables(); editControlModCtrl.populateSourceFields(editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable)\"\n                    ng-change=\"editControlModCtrl.populateSourceFields(editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable)\"\n                    id=\"groupedSelectOptionsSourceDbTable\"\n                    title=\"Nothing selected\">\n                    <li nya-bs-option=\"table in editControlModCtrl.optionsSourceDbTables\">\n                      <a>\n                        <span>\n                          {{ table.name }}\n                        </span>\n                        <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                      </a>\n                    </li>\n                  </ol>\n                  <div class=\"validation\">\n                    <div ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable.id == null\">{{'FIELD' | translate}}{{'VALIDATION_REQUIRED' | translate}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group\" ng-class=\"{'has-error': !editControlModCtrl.optionsSourceDbFormatValidation}\">\n                <label\n                  for=\"groupedSelectOptionsSourceDbFormat\"\n                  class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                  {{'OPTIONS_SOURCE_DB_FORMAT' | translate}} :\n                </label>\n                <div class=\"col-lg-9\">\n                  <selectize\n                    config=\"editControlModCtrl.optionsSourceDbFormatConfig\"\n                    options=\"editControlModCtrl.optionsSourceDbFields\"\n                    ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbFormat\">\n                  </selectize>\n                  <div class=\"validation\">\n                    <div ng-if=\"!editControlModCtrl.optionsSourceDbFormatValidation\">{{'OPTIONAL_VALIDATION_FALSE' | translate}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"groupedSelectParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"groupedSelectParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"groupedSelectLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"groupedSelectLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"groupedSelectRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"groupedSelectRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"groupedSelectDefaultValueUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DEFAULT_VALUE' | translate}} :\n              </label>\n              <div class=\"col-lg-6\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\"\n                  data-live-search=\"true\"\n                  disabled=\"editControlModCtrl.groupedSelectRowCollection.rows.length === 0\">\n                  <li\n                    nya-bs-option=\"row in editControlModCtrl.groupedSelectRowCollection.rows group by row.group\"\n                    value=\"{referenceId: row.referenceId, name: row.option, uniqueValue: row.uniqueValue}\">\n                    <span class=\"dropdown-header\">\n                      {{row.group}}\n                    </span>\n                    <a>\n                      <span>\n                        {{row.option}}\n                      </span>\n                      <span\n                        ng-if=\"row.description.length > 0\"\n                        class=\"help-block help-inline\">\n                        ({{row.description}})\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\">\n                      </span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n              <div class=\"col-lg-3\">\n                <button\n                  class=\"btn btn-warning\"\n                  ng-click=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue=''\">\n                    {{'RESET SELECTION' | translate}}\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"groupedSelectDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"groupedSelectDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"groupedSelectDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"groupedSelectDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"groupSelectAllowEmptyOptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_EMPTY_OPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowEmptyOption\"\n                  id=\"groupSelectAllowEmptyOptionUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Upload -->\n    <div ng-switch-when=\"Upload\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputText\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div\n                  ng-init=\"editControlModCtrl.demoInput=['']\">\n                  <div ng-repeat=\"item in editControlModCtrl.demoInput track by $index\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-9 col-xs-12 col-md-9 col-lg-9\">\n                        <input\n                          type=\"file\"\n                          class=\"form-control\"\n                          ng-model=\"editControlModCtrl.demoInput[$index]\"\n                          id=\"upload\"\n                          placeholder=\"{{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\">\n                      </div>\n                      <div class=\"col-sm-3 col-xs-12 col-md-3 col-lg-3\" style=\"margin-bottom: 20px;\">\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-sm btn-danger\"\n                          ng-click=\"editControlModCtrl.demoInput.splice($index, 1)\"\n                          ng-if=\"editControlModCtrl.demoInput.length > 1\">\n                          {{'REMOVE' | translate}}\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <p\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple == -1 || (editControlModCtrl.demoInput.length < editControlModCtrl.nyaSelect.temporyConfig.allowMultiple)\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      ng-click=\"editControlModCtrl.demoInput.push('')\">\n                      {{'ADD_NEW' | translate}}\n                    </button>\n                  </p>\n                  <p class=\"help-block\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"uploadParentIdUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PARENT_ID' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.parentId\"\n                  id=\"uploadParentIdUpdate\"\n                  data-live-search=\"true\"\n                  title=\"No value\">\n                  <li nya-bs-option=\"column in editControlModCtrl.columns\">\n                    <a>\n                      <span>\n                        {{ column.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"uploadLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"uploadLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"uploadLabelShortUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT_SHORT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabelShort\"\n                  id=\"uploadLabelShortUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SHORT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"uploadRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"uploadRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"uploadDisplayAddUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_ADD' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayAddOption\"\n                  id=\"uploadDisplayAddUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"uploadDisplayEditUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DISPLAY_EDIT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.displayEditOption\"\n                  id=\"uploadDisplayEditUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextAllowMultipleUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'ALLOW_MULTIPLE' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <ol\n                  class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.allowMultiple\"\n                  id=\"allowMultipleUpdate\"\n                  title=\"No value\">\n                  <li\n                    value=\"allowedValue.value\"\n                    nya-bs-option=\"allowedValue in editControlModCtrl.$modalProxy.easyFormSteWayConfig.getNumberAllowedValues()\">\n                    <a>\n                      <span>\n                        {{ allowedValue.name }}\n                      </span>\n                      <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                    </a>\n                  </li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 text-left\">\n      <button\n        class=\"btn btn-danger pull-left\"\n        ng-hide=\"editControlModCtrl.activeLineColumnsCount === 1 || (editControlModCtrl.activeLine === 0 && editControlModCtrl.activeColumn === 0)\"\n        ng-click=\"editControlModCtrl.removeColumn()\">\n        <i class=\"fa fa-trash-o\"></i>\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-primary\"\n        ng-class=\"{'disabled': editControlModCtrl.nyaSelect.selectedControl === 'none' || (editControlModCtrl.nyaSelect.temporyConfig.optionsSourceType == 'db' && editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbTable.id == null) || !editControlModCtrl.optionsSourceDbFormatValidation}\"\n        ng-click=\"editControlModCtrl.ok()\">\n        {{'OK' | translate}}\n      </button>\n      <button\n        class=\"btn btn-warning\"\n        ng-click=\"editControlModCtrl.cancel()\">\n        {{'CANCEL' | translate}}\n      </button>\n    </div>\n  </div>\n</div>\n";
  return module.exports;
});
$__System.register('13', ['11', '12', '14', '15', '16'], function (_export) {
	var initDebugModel, initTabModel, initColumnTemplate, initLineTemplate, editControlModalTemplate, EDIT_MODAL_CONTROLLER_NAME, EDIT_MODAL_CONTROLLERAS_NAME, _createClass, _classCallCheck, STEP_WAY_MAIN_CONTROLLER_NAME, STEP_WAY_MAIN_CONTROLLERAS_NAME, edaStepWayEasyFormGenController, toInject;

	return {
		setters: [function (_3) {
			initDebugModel = _3.initDebugModel;
			initTabModel = _3.initTabModel;
			initColumnTemplate = _3.initColumnTemplate;
			initLineTemplate = _3.initLineTemplate;
		}, function (_4) {
			editControlModalTemplate = _4['default'];
		}, function (_5) {
			EDIT_MODAL_CONTROLLER_NAME = _5.EDIT_MODAL_CONTROLLER_NAME;
			EDIT_MODAL_CONTROLLERAS_NAME = _5.EDIT_MODAL_CONTROLLERAS_NAME;
		}, function (_) {
			_createClass = _['default'];
		}, function (_2) {
			_classCallCheck = _2['default'];
		}],
		execute: function () {
			/* global angular */
			'use strict';

			STEP_WAY_MAIN_CONTROLLER_NAME = 'edaStepWayEasyFormGenController';
			STEP_WAY_MAIN_CONTROLLERAS_NAME = 'vm';

			edaStepWayEasyFormGenController = (function () {
				function edaStepWayEasyFormGenController(easyFormGenVersion, $filter, toaster, $timeout, $uibModal, $log, $formlyProxy, $modalProxy, $scope, easyFormSteWayConfig) {
					_classCallCheck(this, edaStepWayEasyFormGenController);

					this.easyFormGenVersion = easyFormGenVersion;
					this.$filter = $filter;
					this.toaster = toaster;
					this.$timeout = $timeout;
					this.$modal = $uibModal;
					this.$log = $log;
					this.$formlyProxy = $formlyProxy;
					this.$modalProxy = $modalProxy;
					this.easyFormSteWayConfig = easyFormSteWayConfig;

					this.populateSourceForms = function () {
						this.parentForms = [{ id: null, name: 'Nothing selected' }];
						$scope.$emit('parentForms');
					};

					this.init();
				}

				_createClass(edaStepWayEasyFormGenController, [{
					key: 'init',
					value: function init() {

						this.dataModel = {};
						this.wfFormFields = [];
						this.wfFormFieldsOnlyNeededProperties = [];
						this.easyFormGeneratorVERSION = this.easyFormGenVersion;
						this.debug = initDebugModel();
						this.tab = initTabModel(this.easyFormSteWayConfig.isPreviewPanelVisible(), this.easyFormSteWayConfig.arePreviewModelsVisible());
						this.configuration = {}; //configuration model (contains array of lines which contains array of columns)
						this.numberOfColumns = 1;
						this.MaxNumberOfColumns = 4;
						this.MinNumberOfColumns = 1;
						this.columnTemplate = initColumnTemplate(0, 0); //TODO : check is really needed
						this.lineTemplate = initLineTemplate(0); //TODO : check if really needed
						this.nyaSelect = {};
						this.animationsEnabled = this.easyFormSteWayConfig.getModalAnimationValue(); //-> disabling animation untill correction in angular bootstrap
						this.editControlModalSize = 'lg';
						this.formlyList = {};
						this.previewLoadedForm = { fieldsModel: [] };
						this.configurationLoaded = {};
						this.returnSaveEvent = false;
						//this.resetToZeroModel         = resetToZeroModel; //function no more used
						this.configuration.idFormatValidation = true;

						this.$formlyProxy.initConfigurationEditFromScratch(this.configuration);

						this.$modalProxy.initNyaSelect(this.nyaSelect);

						this.populateFields = function (value) {
							var _this = this;

							this.fields = [{
								value: '[OPTIONAL_START]',
								text: 'Optional display start'
							}, {
								value: '[OPTIONAL_END]',
								text: 'Optional display end'
							}];

							var columns = this.prepareExistingColumns(null);
							angular.forEach(columns.columns, function (column) {
								if (column.id !== null) {
									_this.fields.push({
										value: '[FIELD_ID_' + column.id + ':' + column.name + ']',
										text: column.name
									});
								}
							});

							if (this.configuration.idFormat && this.configuration.idFormat.length > 0) {
								angular.forEach(this.configuration.idFormat, function (formatPart) {
									var matches = formatPart.match(/\[CHAR_[0-9]*:(.*?)\]/);
									if (matches && matches.length == 2 && matches[1] && matches[1].length > 0) {
										_this.fields.push({ value: formatPart, text: matches[1] });
									}
								});
							}
						};

						var formFormatConfigIndex = this.idFormat ? this.idFormat.length : 0;
						this.optionsSourceDbFormatConfig = {
							create: function create(input) {
								formFormatConfigIndex++;
								var obj = {
									'value': '[CHAR_' + formFormatConfigIndex + ':' + input + ']',
									'text': input
								};
								return obj;
							},
							maxItems: 10
						};

						//console.info(`main controller : init nyaSelect model`);
						//console.dir(angular.copy(this.nyaSelect));
					}
				}, {
					key: 'onSubmit',
					value: function onSubmit() {
						var JSONedModel = this.$filter('json')(this.dataModel, 4);
						this.toaster.pop({
							type: 'info',
							timeout: 2000,
							title: 'it should save data model if it were not in editor',
							body: 'data : ' + JSONedModel,
							showCloseButton: true
						});
					}
				}, {
					key: 'countConfigurationModelLines',
					value: function countConfigurationModelLines() {
						this.debug.configurationModelNumberofLines = this.configuration.lines.length;
						return this.configuration.lines.length;
					}
				}, {
					key: 'setActiveLineNumber',
					value: function setActiveLineNumber(lineNumber) {
						if (lineNumber <= this.countConfigurationModelLines()) this.configuration.activeLine = lineNumber;
					}
				}, {
					key: 'upThisLine',
					value: function upThisLine(indexLine) {
						if (indexLine > -1) {
							if (this.configuration.lines[indexLine - 1]) {

								// update parent fields
								this.updateParents(indexLine, -1, 'upLine');

								var currentLineObj = this.configuration.lines[indexLine];
								this.configuration.lines.splice(indexLine, 1);
								this.configuration.lines.splice(indexLine - 1, 0, currentLineObj);
								//manage selected aciveLine
								this.configuration.activeLine = 1;
							}
						}
						//re-render formfield
						this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
						this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
					}
				}, {
					key: 'downThisLine',
					value: function downThisLine(indexLine) {
						if (indexLine > -1) {
							if (this.configuration.lines[indexLine + 1]) {

								// update parent fields
								this.updateParents(indexLine, -1, 'downLine');

								var currentLineObj = this.configuration.lines[indexLine];
								this.configuration.lines.splice(indexLine, 1);
								this.configuration.lines.splice(indexLine + 1, 0, currentLineObj);
								//manage selected aciveLine
								this.configuration.activeLine = 1;
							}
						}
						//re-render formfield
						this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
						this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
					}
				}, {
					key: 'addNewline',
					value: function addNewline() {
						this.debug.numberOfNewFields++;
						this.configuration.lines.push(initLineTemplate(this.debug.numberOfNewFields * -1));
						//re-render formfield
						this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
						this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
					}
				}, {
					key: 'removeThisLine',
					value: function removeThisLine(index) {
						if (index > -1) {
							if (this.configuration.lines.length > 1) {

								// update parent fields
								this.updateParents(index, -1, 'removeLine');

								//manage selected aciveLine
								if (this.configuration.activeLine === index + 1) this.configuration.activeLine = 1;
								this.configuration.lines.splice(index, 1);
							} else {
								this.$timeout(function () {
									this.toaster.pop({
										type: 'warning',
										title: 'Last line',
										body: 'Can\'t delete the last line',
										showCloseButton: true
									});
								}, 100);
							}
							//re-render formfield
							this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
							this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
						}
					}
				}, {
					key: 'increaseNumberOfColumns',
					value: function increaseNumberOfColumns() {
						var lineIndex = this.configuration.activeLine - 1;
						this.debug.numberOfNewFields++;

						if (this.configuration.lines[lineIndex].columns.length < this.MaxNumberOfColumns) {

							var newNumberOfColumns = this.configuration.lines[lineIndex].columns.push(angular.copy(initColumnTemplate(this.debug.numberOfNewFields * -1)));
							this.configuration.lines[lineIndex].columns[newNumberOfColumns - 1].numColumn = newNumberOfColumns;
						}
						//re-render formfield
						this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
						this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
					}
				}, {
					key: 'decreaseNumberOfColumns',
					value: function decreaseNumberOfColumns(row, column) {
						var currentColumnLength = this.configuration.lines[row].columns.length;

						// update parent fields
						this.updateParents(row, column, 'removeColumn');

						// Remove parent connections if column removed
						if (currentColumnLength > 1 && column !== -1 && column < currentColumnLength) {

							this.configuration.lines[row].columns.splice(column, 1);
						}
						this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
						this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
					}

					// Remove parent connections if line or column removed, nestings updated
				}, {
					key: 'updateParents',
					value: function updateParents(row, column, switchType) {
						var _this2 = this;

						var newRow = undefined,
						    newColumn = undefined;
						var pos1 = undefined,
						    pos2 = undefined;
						var updatePositions = true;

						angular.forEach(this.configuration.lines, function (line) {
							angular.forEach(line.columns, function (column) {
								if (column.control.templateOptions && typeof column.control.templateOptions.parentId === 'object') {
									var position = column.control.templateOptions.parentId.name.match(/([0-9]+)\,([0-9]+)/);
									if (typeof position === 'object' && position[1] && position[2]) {
										pos1 = parseInt(position[1]);
										pos2 = parseInt(position[2]);
										updatePositions = true;

										switch (switchType) {
											case 'removeLine':
												if (pos1 === row) {
													updatePositions = false;
													column.control.templateOptions.parentId = "";
												} else {
													newRow = pos1 > row ? pos1 - 1 : pos1;
													newColumn = pos2;
												}
												break;

											case 'upLine':
												newRow = pos1;
												if (pos1 === row) newRow = pos1 - 1;
												if (pos1 === row - 1) newRow = pos1 + 1;
												newColumn = pos2;
												break;

											case 'downLine':
												newRow = pos1;
												if (pos1 === row) newRow = pos1 + 1;
												if (pos1 === row + 1) newRow = pos1 - 1;
												newColumn = pos2;
												break;

											case 'removeColumn':
												if (pos2 === column) {
													updatePositions = false;
													column.control.templateOptions.parentId = "";
												} else {
													newRow = pos1;
													newColumn = pos2 > column ? pos2 - 1 : pos2;
												}
												break;

											default:
												newRow = pos1;
												newColumn = pos2;
										}

										if (updatePositions) {
											column.control.templateOptions.parentId.name = (_this2.configuration.lines[pos1].columns[pos2].control.templateOptions.label ? _this2.configuration.lines[pos1].columns[pos2].control.templateOptions.label : 'Field') + ' ' + newRow + ',' + newColumn + ' - ' + _this2.configuration.lines[pos1].columns[pos2].control.type + ' ' + _this2.configuration.lines[pos1].columns[pos2].control.subtype;
										}
									}
								}
							});
						});
					}
				}, {
					key: 'removeOption',
					value: function removeOption(selectObj, AtIndex, parentsBasic) {
						var fullResponse = {
							resultFlag: false,
							details: ''
						};

						if (AtIndex !== -1) {
							for (var i = 0; i < selectObj.rows.length; i++) {
								if (selectObj.rows[i].parentId.id === selectObj.rows[AtIndex].referenceId) {
									selectObj.rows[i].parentId = {
										id: '',
										name: 'No value',
										value: ''
									};
								}
							}

							selectObj.rows.splice(AtIndex, 1);
							selectObj.parents = parentsBasic.concat(selectObj.rows);

							fullResponse.resultFlag = true;
							fullResponse.details = '';
							return fullResponse;
						} else {
							fullResponse.resultFlag = false;
							fullResponse.details = 'Option index not valid';
							return fullResponse;
						}
					}
				}, {
					key: 'resetStepCounter',
					value: function resetStepCounter() {
						this.configuration.configStepCounter = 0;
					}
				}, {
					key: 'nextConfigStep',
					value: function nextConfigStep() {
						var configStepCounterMAX = this.configuration.listConfigStep.length - 1;
						if (this.configuration.configStepCounter !== configStepCounterMAX) {
							this.configuration.configStepCounter++;
						}
						this.setTrueThisStepIndicator(this.configuration.configStepCounter);
					}
				}, {
					key: 'resetAllIndicators',
					value: function resetAllIndicators() {
						for (var i = this.configuration.stepIndicators.length - 1; i >= 0; i--) {
							this.configuration.stepIndicators[i] = false;
						}
					}
				}, {
					key: 'setTrueThisStepIndicator',
					value: function setTrueThisStepIndicator(indexIndicator) {
						this.resetAllIndicators();
						this.configuration.stepIndicators[indexIndicator] = true;
					}
				}, {
					key: 'previousConfigStep',
					value: function previousConfigStep() {
						if (this.configuration.configStepCounter !== 0) {
							this.configuration.configStepCounter--;
						}
						this.setTrueThisStepIndicator(this.configuration.configStepCounter);
					}
				}, {
					key: 'stepReachable',
					value: function stepReachable(indexStep) {
						if (indexStep < this.configuration.configStepCounter) {
							return 'disabled';
						} else {
							return 'enabled';
						}
					}
				}, {
					key: 'prepareExistingColumns',
					value: function prepareExistingColumns(currentReferenceId) {
						var field = '';
						var titleColumns = [{
							id: null,
							name: 'No value'
						}];
						var columns = angular.copy(titleColumns);

						angular.forEach(this.configuration.lines, function (line, lineKey) {
							angular.forEach(line.columns, function (column, columnKey) {
								if (column.control.templateOptions) {
									if (column.control.templateOptions.referenceId !== currentReferenceId) {
										field = {
											id: column.control.templateOptions.referenceId,
											name: (column.control.templateOptions.label ? column.control.templateOptions.label : 'Field') + ' ' + lineKey + ',' + columnKey + ' - ' + column.control.type + ' ' + column.control.subtype
										};
										if (column.control.type == 'header' || column.control.type == 'subTitle') {
											titleColumns.push(field);
										} else {
											columns.push(field);
										}
									}
								}
							});
						});

						return {
							titleColumns: titleColumns,
							columns: columns
						};
					}
				}, {
					key: 'showModalAddCtrlToColumn',
					value: function showModalAddCtrlToColumn(size, indexLine, numcolumn) {
						var _this3 = this;

						var editControlModal = {};
						var _nyaSelect = this.$modalProxy.getNyASelectFromSelectedLineColumn(this.nyaSelect, this.configuration, indexLine, numcolumn);

						var _columns = this.prepareExistingColumns(_nyaSelect.temporyConfig.referenceId);

						angular.extend(editControlModal, {
							animation: this.animationsEnabled,
							template: editControlModalTemplate,
							controller: EDIT_MODAL_CONTROLLER_NAME,
							controllerAs: EDIT_MODAL_CONTROLLERAS_NAME,
							size: this.editControlModalSize,
							resolve: {
								titleColumns: function titleColumns() {
									return _columns.titleColumns;
								},
								columns: function columns() {
									return _columns.columns;
								},
								activeLine: indexLine,
								activeColumn: numcolumn,
								activeLineColumnsCount: function activeLineColumnsCount() {
									return _this3.configuration.lines[indexLine].columns.length;
								},
								nyaSelect: function nyaSelect() {
									return _nyaSelect;
								}
							}
						});

						var modalInstance = this.$modal.open(editControlModal);
						modalInstance.result.then(function (modalAddCtrlModel) {
							_this3.$modalProxy.bindConfigurationModelFromModalReturn(indexLine, numcolumn, modalAddCtrlModel, _this3.configuration);
							_this3.$formlyProxy.applyConfigurationToformlyModel(_this3.configuration, _this3.wfFormFields, _this3.dataModel);
							_this3.wfFormFieldsOnlyNeededProperties = angular.copy(_this3.wfFormFields);

							if (_this3.$modalProxy.columnRemoved) {
								_this3.decreaseNumberOfColumns(indexLine, numcolumn);
								_this3.$modalProxy.columnRemoved = false;
							}
							if (_this3.$modalProxy.columnUpdated) {
								_this3.updateParents(indexLine, numcolumn, '');
								_this3.$modalProxy.columnUpdated = false;
							}
						}, function () {
							//$log.info('Modal dismissed at: ' + new Date());
						});
					}
				}, {
					key: 'previewExistingform',
					value: function previewExistingform(formlyform) {
						var configlines = JSON.parse(formlyform.formlyField);
						//here to replace with $scope.configuration : initialise configuration with lines
						this.configurationLoaded = {};
						this.$formlyProxy.bindConfigurationLines(this.configurationLoaded, configlines);
						this.$formlyProxy.applyConfigurationToformlyModel(this.configurationLoaded, this.previewLoadedForm.fieldsModel, this.dataModel);
						this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
						this.previewLoadedForm.cancelButtonText = formlyform.cancelButtonText;
						this.previewLoadedForm.submitButtonText = formlyform.submitButtonText;
					}
				}, {
					key: 'saveThisForm',
					value: function saveThisForm() {
						if (typeof this.configuration.formName === 'undefined') {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: 'Form name is undefined',
								body: 'Form has not been saved.',
								showCloseButton: true
							});
							return false;
						}
						if (this.configuration.formName === '') {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: 'Form name is required',
								body: 'Form has not been saved.',
								showCloseButton: true
							});
							return false;
						}
						this.toaster.pop({
							type: 'wait',
							timeout: 10000,
							title: 'Form is being saved',
							body: 'Wait.',
							showCloseButton: true
						});
						this.toaster.clear();
						this.returnSaveEvent = true;
						return true;
					}
				}]);

				return edaStepWayEasyFormGenController;
			})();

			toInject = ['easyFormGenVersion', '$filter', 'toaster', '$timeout', '$uibModal', '$log', '$formlyProxy', '$modalProxy', '$scope', 'easyFormSteWayConfig'];

			edaStepWayEasyFormGenController.$inject = toInject;

			_export('default', edaStepWayEasyFormGenController);

			_export('STEP_WAY_MAIN_CONTROLLER_NAME', STEP_WAY_MAIN_CONTROLLER_NAME);

			_export('STEP_WAY_MAIN_CONTROLLERAS_NAME', STEP_WAY_MAIN_CONTROLLERAS_NAME);
		}
	};
});
$__System.register('17', ['10', '13'], function (_export) {
	'use strict';

	var easyformTemplate, edaStepWayEasyFormGenController, STEP_WAY_MAIN_CONTROLLER_NAME, STEP_WAY_MAIN_CONTROLLERAS_NAME, STEP_WAY_DIRECTIVE_NAME;

	function edaStepWayEasyFormGenDirective($templateCache, $timeout, $formlyProxy, $modalProxy) {

		var directive = {
			restrict: 'E',
			scope: {
				edaEasyFormGeneratorModel: '=',
				edaSaveFormEvent: '&edaSaveFormEvent'
			},
			controller: STEP_WAY_MAIN_CONTROLLER_NAME,
			controllerAs: STEP_WAY_MAIN_CONTROLLERAS_NAME,
			replace: false,
			template: easyformTemplate,
			link: linkFct
		};
		return directive;

		function linkFct(scope, element, attr, mCtrl) {

			//watch "scope.easyFormGeneratorModel"
			scope.$watch(function () {
				return scope.edaEasyFormGeneratorModel;
			}, function (newValue, oldValue) {
				loadExistingConfigurationModel();
			}, true);

			//watch "scope.vm.returnSaveEvent"" = catch saving form event
			scope.$watch(function () {
				return scope.vm.returnSaveEvent;
			}, function (newValue, oldValue) {
				if (newValue === true) {
					var _easyFormGeneratorModel = {
						formName: scope.vm.configuration.formName,
						btnSubmitText: scope.vm.configuration.submitButtonText,
						btnCancelText: scope.vm.configuration.cancelButtonText,
						parentForm: scope.vm.configuration.parentForm,
						idFormat: scope.vm.configuration.idFormat,
						edaFieldsModel: scope.vm.configuration.lines,
						edaFieldsModelStringified: angular.toJson(scope.vm.configuration.lines),
						formlyFieldsModel: scope.vm.wfFormFieldsOnlyNeededProperties,
						dataModel: scope.vm.dataModel
					};
					scope.edaSaveFormEvent({ edaEasyFormGeneratorModel: _easyFormGeneratorModel });
					//back to false, waiting next save event
					scope.returnSaveEvent = false;
				}
			});

			//watch "scope.vm.configuration.idFormat"" = validate if optional tags are correctly opened
			scope.$watch(function () {
				return scope.vm.configuration.idFormat;
			}, function (newValue, oldValue) {
				scope.vm.configuration.idFormatValidation = true;
				var inOptional = false;
				if (newValue != oldValue) {
					angular.forEach(scope.vm.configuration.idFormat, function (idFormatPart) {
						if (idFormatPart == '[OPTIONAL_START]') {
							inOptional = true;
						}

						if (idFormatPart == '[OPTIONAL_END]') {
							if (!inOptional) {
								scope.vm.configuration.idFormatValidation = false;
							}
							inOptional = false;
						}
					});
				}

				if (inOptional) {
					scope.vm.configuration.idFormatValidation = false;
				}
			}, true);

			function loadExistingConfigurationModel() {
				if (angular.isDefined(scope.edaEasyFormGeneratorModel)) {
					var configlines = returnAttributeConfigurationLinesIfNotEmpty();
					scope.configurationLoaded = {};
					$formlyProxy.bindConfigurationLines(scope.configurationLoaded, configlines);
					/**
     	* rebind special control properties :
     	*
     	* formly expression properties
     	* Validators
     	* Async Validators
     	* Validation
     	*/
					$modalProxy.refreshControlFormlyExpressionProperties(scope.configurationLoaded);
					$modalProxy.refreshControlFormlyValidators(scope.configurationLoaded);
					$modalProxy.refreshControlFormlyAsyncValidators(scope.configurationLoaded);
					$modalProxy.refreshControlFormlyValidation(scope.configurationLoaded);
					//apply configuration model
					scope.vm.configuration = angular.copy(scope.configurationLoaded);
					//apply formly model
					$formlyProxy.applyConfigurationToformlyModel(scope.configurationLoaded, scope.vm.wfFormFields, scope.vm.model);
					scope.vm.wfFormFieldsOnlyNeededProperties = angular.copy(scope.vm.wfFormFields);
					scope.vm.dataModel = returnAttributeDataModelIfNotEmpty();
					scope.vm.configuration.formName = angular.isString(scope.edaEasyFormGeneratorModel.formName) ? scope.edaEasyFormGeneratorModel.formName : '';
					scope.vm.configuration.submitButtonText = angular.isString(scope.edaEasyFormGeneratorModel.btnSubmitText) ? scope.edaEasyFormGeneratorModel.btnSubmitText : 'Submit';
					scope.vm.configuration.cancelButtonText = angular.isString(scope.edaEasyFormGeneratorModel.btnCancelText) ? scope.edaEasyFormGeneratorModel.btnCancelText : 'Cancel';
					scope.vm.configuration.parentForm = scope.edaEasyFormGeneratorModel.parentForm ? scope.edaEasyFormGeneratorModel.parentForm : null;
					scope.vm.configuration.idFormat = scope.edaEasyFormGeneratorModel.idFormat ? scope.edaEasyFormGeneratorModel.idFormat : [];
				}
			}

			function returnAttributeConfigurationLinesIfNotEmpty() {
				var edaEasyFormGeneratorModelToReturn = angular.isArray(scope.edaEasyFormGeneratorModel.edaFieldsModel) ? scope.edaEasyFormGeneratorModel.edaFieldsModel.length > 0 ? scope.edaEasyFormGeneratorModel.edaFieldsModel : emptyEdaFieldsModel() : emptyEdaFieldsModel();
				return edaEasyFormGeneratorModelToReturn;
			}

			function returnAttributeDataModelIfNotEmpty() {
				var dataModelToReturn = angular.isArray(scope.edaEasyFormGeneratorModel.dataModel) ? scope.edaEasyFormGeneratorModel.dataModel.length > 0 ? scope.edaEasyFormGeneratorModel.dataModel : {} : {};
				return dataModelToReturn;
			}

			/**
   	* empty fields model : to display at least an empty line
   	* otherwise would look like ugly empty line like it were a bug
   	*/
			function emptyEdaFieldsModel() {
				var emptyModel = [{
					"line": 1,
					"activeColumn": 1,
					"columns": [{
						"numColumn": 1,
						"exist": true,
						"control": {
							"type": "none",
							"key": "none",
							"new": true
						}
					}]
				}];
				return emptyModel;
			}
		}
	}

	return {
		setters: [function (_) {
			easyformTemplate = _['default'];
		}, function (_2) {
			edaStepWayEasyFormGenController = _2['default'];
			STEP_WAY_MAIN_CONTROLLER_NAME = _2.STEP_WAY_MAIN_CONTROLLER_NAME;
			STEP_WAY_MAIN_CONTROLLERAS_NAME = _2.STEP_WAY_MAIN_CONTROLLERAS_NAME;
		}],
		execute: function () {
			STEP_WAY_DIRECTIVE_NAME = 'edaStepWayEasyFormGen';
			edaStepWayEasyFormGenDirective.$inject = ['$templateCache', '$timeout', '$formlyProxy', '$modalProxy'];

			_export('default', edaStepWayEasyFormGenDirective);

			_export('STEP_WAY_DIRECTIVE_NAME', STEP_WAY_DIRECTIVE_NAME);
		}
	};
});
$__System.register('18', [], function (_export) {
	/* global angular */
	'use strict';

	var EASY_FORM_STEP_WAY_CONFIG_NAME;

	function easyFormSteWayConfig($translateProvider) {
		var _configuration = defaultConfig();
		var _controlsList = controlsList();
		var _numberTypesList = numberTypesList();
		var _numberAllowedValues = numberAllowedValues();
		var _defaultLanguage = getDefaultLanguage();
		var _currentLanguage = initDefaultLanguage();
		var _showPreviewPanel = getDefaultshowPreviewPanel();
		var _showPreviewModels = getDefaultShowPreviewModel();
		/* jshint validthis:true */
		this.$get = easyFormStepWayConfigGET;
		this.setModalAnimation = setModalAnimation;
		this.getModalAnimation = getModalAnimation;
		this.configuration = _configuration;
		this.getEnabledControls = getEnabledControls;
		this.disableControl = disableControl;
		this.enableControl = enableControl;
		this.setLanguage = setLanguage;
		this.getCurrentLanguage = getCurrentLanguage;
		this.showPreviewPanel = showPreviewPanel;
		this.showPreviewModels = showPreviewModels;

		//set default config
		function defaultConfig() {
			var _defaultConfiguration = {
				modalAnimated: false
			};
			return _defaultConfiguration;
		}

		//show preview panel by default
		function getDefaultshowPreviewPanel() {
			return true;
		}

		//show preview data, fields models in preview panel
		function getDefaultShowPreviewModel() {
			return true;
		}

		function getCurrentLanguage() {
			return _currentLanguage;
		}

		//list of controls
		function controlsList() {
			var controls = [{ name: 'empty', enabled: true }, { name: 'Header', enabled: true }, { name: 'Subtitle', enabled: true }, { name: 'TextInput', enabled: true }, { name: 'Number', enabled: true }, { name: 'Password', enabled: true }, { name: 'Email', enabled: true }, { name: 'Date', enabled: true }, { name: 'Texarea', enabled: true }, { name: 'RichTextEditor', enabled: true }, { name: 'Radio', enabled: true }, { name: 'Checkbox', enabled: true }, { name: 'BasicSelect', enabled: true }, { name: 'GroupedSelect', enabled: true }, { name: 'Upload', enabled: true }];
			return controls;
		}

		//lists of number types
		function numberTypesList() {
			var numberTypes = ['integer', 'decimal', 'currency', 'year'];
			return numberTypes;
		}

		//lists number of possible copies for elements
		function numberAllowedValues() {
			var allowedValues = [{
				name: 'Unlimited',
				value: -1
			}];

			for (var i = 1; i <= 10; i++) {
				allowedValues[i] = {
					name: i,
					value: i
				};
			}

			return allowedValues;
		}

		function showPreviewPanel(wantToShow) {
			if (angular.isDefined(wantToShow)) {
				if (wantToShow === true) _showPreviewPanel = true;
				if (wantToShow === false) _showPreviewPanel = false;
			}
		}

		function showPreviewModels(wantToShow) {
			if (angular.isDefined(wantToShow)) {
				if (wantToShow === true) _showPreviewModels = true;
				if (wantToShow === false) _showPreviewModels = false;
			}
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

		function getEnabledControls() {
			return _controlsList;
		}

		function disableControl(controlName) {
			if (angular.isString(controlName)) {
				angular.forEach(_controlsList, function (aControl) {
					if (aControl.name === controlName) aControl.enabled = false;
				});
			}
		}

		function enableControl(controlName) {
			if (angular.isString(controlName)) {
				angular.forEach(_controlsList, function (aControl) {
					if (aControl.name === controlName) aControl.enabled = true;
				});
			}
		}

		function setModalAnimation(flagConfig) {
			var valueToApply = flagConfig === true ? flagConfig : flagConfig === false ? flagConfig : _configuration.modalAnimated;

			_configuration.modalAnimated = valueToApply;
		}

		function getModalAnimation() {
			return _configuration.modalAnimated;
		}

		//$get implementation :
		easyFormStepWayConfigGET.$inject = ['$translate'];
		function easyFormStepWayConfigGET($translate) {

			var service = {
				setModalAnimation: setModalAnimationFct,
				getModalAnimationValue: getModalAnimationValue,
				getListEnabledControl: getListEnabledControl,
				getNumberTypesList: getNumberTypesList,
				getNumberAllowedValues: getNumberAllowedValues,
				setLanguage: switchLanguage,
				getCurrentLanguage: getCurrentLanguage,
				isPreviewPanelVisible: isPreviewPanelVisible,
				arePreviewModelsVisible: arePreviewModelsVisible
			};
			return service;

			function getModalAnimationValue() {
				return _configuration.modalAnimated;
			}

			function setModalAnimationFct(value) {
				setModalAnimation(value);
			}

			function getListEnabledControl() {
				return angular.copy(_controlsList);
			}

			function getNumberTypesList() {
				return _numberTypesList;
			}

			function getNumberAllowedValues() {
				return _numberAllowedValues;
			}

			function switchLanguage(language) {
				if (angular.isString(language)) {
					_currentLanguage = language;
					$translate.use(language);
				} else {
					setDefaultLanguage();
				}
			}

			function isPreviewPanelVisible() {
				return _showPreviewPanel;
			}

			function arePreviewModelsVisible() {
				return _showPreviewModels;
			}
		}
	}

	return {
		setters: [],
		execute: function () {
			EASY_FORM_STEP_WAY_CONFIG_NAME = 'easyFormSteWayConfig';
			easyFormSteWayConfig.$inject = ['$translateProvider'];

			_export('default', easyFormSteWayConfig);

			_export('EASY_FORM_STEP_WAY_CONFIG_NAME', EASY_FORM_STEP_WAY_CONFIG_NAME);
		}
	};
});
$__System.register('19', ['13', '17', '18'], function (_export) {
                /* global angular */
                'use strict';

                var edaStepWayEasyFormGenController, STEP_WAY_MAIN_CONTROLLER_NAME, edaStepWayEasyFormGenDirective, STEP_WAY_DIRECTIVE_NAME, easyFormSteWayConfig, EASY_FORM_STEP_WAY_CONFIG_NAME, STEP_WAY_MAIN_MODULE;
                return {
                                setters: [function (_) {
                                                edaStepWayEasyFormGenController = _['default'];
                                                STEP_WAY_MAIN_CONTROLLER_NAME = _.STEP_WAY_MAIN_CONTROLLER_NAME;
                                }, function (_2) {
                                                edaStepWayEasyFormGenDirective = _2['default'];
                                                STEP_WAY_DIRECTIVE_NAME = _2.STEP_WAY_DIRECTIVE_NAME;
                                }, function (_3) {
                                                easyFormSteWayConfig = _3['default'];
                                                EASY_FORM_STEP_WAY_CONFIG_NAME = _3.EASY_FORM_STEP_WAY_CONFIG_NAME;
                                }],
                                execute: function () {
                                                STEP_WAY_MAIN_MODULE = 'easyFormStepwayMainModule';

                                                _export('default', angular.module(STEP_WAY_MAIN_MODULE, []).controller(STEP_WAY_MAIN_CONTROLLER_NAME, edaStepWayEasyFormGenController).directive(STEP_WAY_DIRECTIVE_NAME, edaStepWayEasyFormGenDirective).provider(EASY_FORM_STEP_WAY_CONFIG_NAME, easyFormSteWayConfig));
                                }
                };
});
$__System.register('14', ['15', '16'], function (_export) {
	var _createClass, _classCallCheck, EDIT_MODAL_CONTROLLER_NAME, EDIT_MODAL_CONTROLLERAS_NAME, editControlModalController, toInject;

	return {
		setters: [function (_2) {
			_createClass = _2['default'];
		}, function (_3) {
			_classCallCheck = _3['default'];
		}],
		execute: function () {
			'use strict';

			EDIT_MODAL_CONTROLLER_NAME = 'editControlModalController';
			EDIT_MODAL_CONTROLLERAS_NAME = 'editControlModCtrl';

			editControlModalController = (function () {
				function editControlModalController($uibModalInstance, nyaSelect, toaster, selectOptionManage, $modalProxy, titleColumns, columns, activeLine, activeColumn, activeLineColumnsCount, $scope) {
					_classCallCheck(this, editControlModalController);

					this.$modalInstance = $uibModalInstance;
					this.nyaSelect = nyaSelect;
					this.toaster = toaster;
					this.selectOptionManage = selectOptionManage;
					this.$modalProxy = $modalProxy;
					this.titleColumns = titleColumns;
					this.columns = columns;
					this.activeLine = activeLine;
					this.activeColumn = activeColumn;
					this.activeLineColumnsCount = activeLineColumnsCount;

					this.populateSourceTables = function () {
						this.optionsSourceDbTables = [{ id: null, name: 'Nothing selected' }];
						$scope.$emit('sourceTables');
					};

					this.populateSourceFields = function (value) {
						var _this = this;

						this.optionsSourceDbFields = [{
							value: '[VALUE]',
							text: 'Field value'
						}, {
							value: '[OPTIONAL_START]',
							text: 'Optional display start'
						}, {
							value: '[OPTIONAL_END]',
							text: 'Optional display end'
						}];
						$scope.$emit('sourceFields', value);
						if (this.nyaSelect.temporyConfig.optionsSourceDbFormat && this.nyaSelect.temporyConfig.optionsSourceDbFormat.length > 0) {
							angular.forEach(this.nyaSelect.temporyConfig.optionsSourceDbFormat, function (formatPart) {
								var matches = formatPart.match(/\[CHAR_[0-9]*:(.*?)\]/);
								if (matches && matches.length == 2 && matches[1] && matches[1].length > 0) {
									_this.optionsSourceDbFields.push({ value: formatPart, text: matches[1] });
								}
							});
						}
					};

					//watch "scope.editControlModCtrl.idFormat"" = validate if optional tags are correctly opened
					$scope.$watch(function () {
						return $scope.editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbFormat;
					}, function (newValue, oldValue) {
						$scope.editControlModCtrl.optionsSourceDbFormatValidation = true;
						var inOptional = false;
						if (newValue != oldValue) {
							angular.forEach($scope.editControlModCtrl.nyaSelect.temporyConfig.optionsSourceDbFormat, function (idFormatPart) {
								if (idFormatPart == '[OPTIONAL_START]') {
									inOptional = true;
								}

								if (idFormatPart == '[OPTIONAL_END]') {
									if (!inOptional) {
										$scope.editControlModCtrl.optionsSourceDbFormatValidation = false;
									}
									inOptional = false;
								}
							});
						}

						if (inOptional) {
							$scope.editControlModCtrl.optionsSourceDbFormatValidation = false;
						}
					}, true);

					this.init();
				}

				_createClass(editControlModalController, [{
					key: 'init',
					value: function init() {
						var initOptionModel = { rows: [], parents: [] };

						this.parentsBasic = [{
							option: 'No value',
							description: '',
							parentId: '',
							referenceId: '',
							order: -1,
							uniqueValue: ''
						}];
						this.radioRowCollection = initOptionModel;
						this.newOptionRadio = { saisie: '', description: '' };
						this.basicSelectRowCollection = initOptionModel;
						this.newOptionBasicSelect = { saisie: '', description: '' };
						this.groupedSelectRowCollection = initOptionModel;
						this.newOptionGroupedSelect = { saisie: '', description: '' };
						this.GroupedSelectGroups = { list: [] };
						this.newGroupGroupedSelect = { saisie: '' };
						this.basicSelectGroupClick = { showList: false };
						this.groupSelectGroupClick = { showList: false };
						this.demodt = { dt: [new Date()], opened: [false] };
						this.dateOptions = this.dateOptionsInit();
						this.demodt.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'mediumDate', 'longDate', 'fullDate'];
						this.defaultdt = {};
						this.nyaSelect.selectedControl = this.nyaSelect.temporyConfig.selectedControl;
						this.nyaSelectFiltered = {};
						this.modelNyaSelect = {};
						this.optionsSourceDbFormatValidation = true;

						var optionsSourceDbFormatConfigIndex = this.nyaSelect.temporyConfig.optionsSourceDbFormat ? this.nyaSelect.temporyConfig.optionsSourceDbFormat.length : 0;
						this.optionsSourceDbFormatConfig = {
							create: function create(input) {
								optionsSourceDbFormatConfigIndex++;
								var obj = {
									'value': '[CHAR_' + optionsSourceDbFormatConfigIndex + ':' + input + ']',
									'text': input
								};
								return obj;
							},
							maxItems: 10
						};

						//init nyaSelect model depending selected control
						this.initNyaSelectConformingSelectedControl();
					}
				}, {
					key: 'initNyaSelectConformingSelectedControl',
					value: function initNyaSelectConformingSelectedControl() {
						//place nya-select to selection if not none :
						if (this.nyaSelect.selectedControl !== 'none') {
							for (var i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
								if (this.nyaSelect.controls[i].id === this.nyaSelect.selectedControl) this.modelNyaSelect = this.nyaSelect.controls[i];
							}
							if (this.nyaSelect.selectedControl === 'BasicSelect') this.bindBasicSelectFromNYA();
							if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectFromNYA();
							if (this.nyaSelect.selectedControl === 'Radio') this.bindRadioFromNYA();
						}
						this.initNyaSelectFiltered();

						// console.info(`modal controller : nyaSelect`);
						// console.dir(this.nyaSelect);
					}
				}, {
					key: 'initNyaSelectFiltered',
					value: function initNyaSelectFiltered() {
						var listCtrl = [].concat(this.$modalProxy.getFilteredNyaSelectObject());
						angular.extend(this.nyaSelectFiltered, {
							'controls': listCtrl,
							'selectedControl': this.nyaSelect.selectedControl,
							'temporyConfig': this.nyaSelect.temporyConfig
						});
					}
				}, {
					key: 'bindBasicSelectFromNYA',
					value: function bindBasicSelectFromNYA() {
						if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
							for (var i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
								var newOption = {
									'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
									'description': this.nyaSelect.temporyConfig.formlyOptions[i].description,
									'order': i,
									'uniqueValue': this.nyaSelect.temporyConfig.formlyOptions[i].uniqueValue,
									'group': '',
									'parentId': angular.copy(this.nyaSelect.temporyConfig.formlyOptions[i].parentId),
									'referenceId': this.nyaSelect.temporyConfig.formlyOptions[i].referenceId
								};
								this.basicSelectRowCollection.rows.push(newOption);
							}
							this.basicSelectRowCollection.parents = this.parentsBasic.concat(this.basicSelectRowCollection.rows);
						}
					}
				}, {
					key: 'bindRadioFromNYA',
					value: function bindRadioFromNYA() {
						if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
							for (var i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
								var newOption = {
									'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
									'description': this.nyaSelect.temporyConfig.formlyOptions[i].description,
									'order': i,
									'uniqueValue': this.nyaSelect.temporyConfig.formlyOptions[i].uniqueValue,
									'group': '',
									'parentId': angular.copy(this.nyaSelect.temporyConfig.formlyOptions[i].parentId),
									'referenceId': this.nyaSelect.temporyConfig.formlyOptions[i].referenceId
								};
								this.radioRowCollection.rows.push(newOption);
							}
							this.radioRowCollection.parents = this.parentsBasic.concat(this.radioRowCollection.rows);
						}
					}
				}, {
					key: 'bindGroupedSelectFromNYA',
					value: function bindGroupedSelectFromNYA() {
						if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
							for (var i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
								var newOption = {
									'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
									'description': this.nyaSelect.temporyConfig.formlyOptions[i].description,
									'order': i,
									'uniqueValue': this.nyaSelect.temporyConfig.formlyOptions[i].uniqueValue,
									'group': this.nyaSelect.temporyConfig.formlyOptions[i].group,
									'parentId': angular.copy(this.nyaSelect.temporyConfig.formlyOptions[i].parentId),
									'referenceId': this.nyaSelect.temporyConfig.formlyOptions[i].referenceId
								};
								this.groupedSelectRowCollection.rows.push(newOption);
							}
							var filteredgroup = _.uniq(_.pluck(this.groupedSelectRowCollection.rows, 'group'));
							angular.copy(filteredgroup, this.GroupedSelectGroups.list);
							this.groupedSelectRowCollection.parents = this.parentsBasic.concat(this.groupedSelectRowCollection.rows);
						}
					}
				}, {
					key: 'addNewOptionRadio',
					value: function addNewOptionRadio() {
						var result = this.selectOptionManage.addNewOptionRadio(this.radioRowCollection, this.newOptionRadio, this.parentsBasic, this.nyaSelect.temporyConfig.allowEmptyOption);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: '\'' + this.newOptionRadio.saisie + '\' cannot be added.',
								showCloseButton: true
							});
						}
						this.newOptionRadio = { saisie: '', description: '' }; //reset input
					}
				}, {
					key: 'removeRadioRow',
					value: function removeRadioRow(index) {
						var result = this.selectOptionManage.removeOption(this.radioRowCollection, index, this.parentsBasic);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: 'Delete was cancelled.',
								showCloseButton: true
							});
						}
					}
				}, {
					key: 'upThisRadioRow',
					value: function upThisRadioRow(index) {
						var result = this.selectOptionManage.upthisOption(this.radioRowCollection, index, this.parentsBasic);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: 'Operation cancelled.',
								showCloseButton: true
							});
						}
					}
				}, {
					key: 'downThisRadioRow',
					value: function downThisRadioRow(index) {
						var result = this.selectOptionManage.downthisOption(this.radioRowCollection, index, this.parentsBasic);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: 'Operation cancelled.',
								showCloseButton: true
							});
						}
					}
				}, {
					key: 'addNewOptionBasicSelect',
					value: function addNewOptionBasicSelect() {
						var result = this.selectOptionManage.addNewOptionBasicSelect(this.basicSelectRowCollection, this.newOptionBasicSelect, this.parentsBasic, this.nyaSelect.temporyConfig.allowEmptyOption);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: '\'' + this.newOptionBasicSelect.saisie + '\' cannot be added.',
								showCloseButton: true
							});
						}
						this.newOptionBasicSelect = { saisie: '', description: '' }; //reset input
					}
				}, {
					key: 'removeRow',
					value: function removeRow(index) {
						var result = this.selectOptionManage.removeOption(this.basicSelectRowCollection, index, this.parentsBasic);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: 'Delete was cancelled.',
								showCloseButton: true
							});
						}
					}
				}, {
					key: 'upThisRow',
					value: function upThisRow(index) {
						var result = this.selectOptionManage.upthisOption(this.basicSelectRowCollection, index, this.parentsBasic);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: 'Operation cancelled.',
								showCloseButton: true
							});
						}
					}
				}, {
					key: 'downThisRow',
					value: function downThisRow(index) {
						var result = this.selectOptionManage.downthisOption(this.basicSelectRowCollection, index, this.parentsBasic);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: 'Operation cancelled.',
								showCloseButton: true
							});
						}
					}
				}, {
					key: 'showBasicListToChoose',
					value: function showBasicListToChoose() {
						this.basicSelectGroupClick.showList = !this.basicSelectGroupClick.showList;
					}
				}, {
					key: 'showGroupListToChoose',
					value: function showGroupListToChoose() {
						this.groupSelectGroupClick.showList = !this.groupSelectGroupClick.showList;
					}
				}, {
					key: 'addNewGroupToGroupedSelect',
					value: function addNewGroupToGroupedSelect() {
						if (this.newGroupGroupedSelect.saisie !== '') {
							for (var i = this.GroupedSelectGroups.list.length - 1; i >= 0; i--) {
								if (this.GroupedSelectGroups.list[i] === this.newGroupGroupedSelect.saisie) {
									this.toaster.pop({
										type: 'warning',
										timeout: 2000,
										title: 'Group already exists',
										body: 'No group added.',
										showCloseButton: true
									});
								}
							}
							this.GroupedSelectGroups.list.push(this.newGroupGroupedSelect.saisie);
						} else {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: 'Not a valid group to add',
								body: 'No group added.',
								showCloseButton: true
							});
						}
						this.newGroupGroupedSelect.saisie = '';
					}
				}, {
					key: 'addNewOptionGroupedSelect',
					value: function addNewOptionGroupedSelect() {
						var result = this.selectOptionManage.addNewOptionGroupedSelect(this.groupedSelectRowCollection, this.newOptionGroupedSelect, '', this.parentsBasic, this.nyaSelect.temporyConfig.allowEmptyOption);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: '\'' + this.newOptionGroupedSelect.saisie + '\' cannot be added.',
								showCloseButton: true
							});
						}
						//bind nya : dont bind here $apply is not done fast enough
						//bindGroupedSelectToNya();
						//reset input
						this.newOptionGroupedSelect = { saisie: '', description: '' };
					}
				}, {
					key: 'removeGroupedSelectRow',
					value: function removeGroupedSelectRow(index) {
						var result = this.selectOptionManage.removeOption(this.groupedSelectRowCollection, index, this.parentsBasic);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: 'Delete was cancelled.',
								showCloseButton: true
							});
						}
					}
				}, {
					key: 'upThisGroupedSelectRow',
					value: function upThisGroupedSelectRow(index) {
						var result = this.selectOptionManage.upthisOption(this.groupedSelectRowCollection, index, this.parentsBasic);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: 'Operation cancelled.',
								showCloseButton: true
							});
						}
					}
				}, {
					key: 'downThisGroupedSelectRow',
					value: function downThisGroupedSelectRow(index) {
						var result = this.selectOptionManage.downthisOption(this.groupedSelectRowCollection, index, this.parentsBasic);
						if (result.resultFlag === false) {
							this.toaster.pop({
								type: 'warning',
								timeout: 2000,
								title: result.details,
								body: 'Operation cancelled.',
								showCloseButton: true
							});
						}
					}
				}, {
					key: 'today',
					value: function today(field, position) {
						if (position >= 0) {
							this[field].dt[position] = new Date();
						}
					}
				}, {
					key: 'open',
					value: function open($event, field, position) {
						$event.preventDefault();
						$event.stopPropagation();
						if (position >= 0) {
							this[field].opened[position] = true;
						} else {
							this[field].opened = true;
						}
					}
				}, {
					key: 'dateOptionsInit',
					value: function dateOptionsInit() {
						return {
							formatYear: 'yy',
							startingDay: 1,
							showWeeks: true,
							initDate: null
						};
					}
				}, {
					key: 'selectThisControl',
					value: function selectThisControl(controlName) {
						this.nyaSelect.selectedControl = 'none';
						this.resetTemporyConfig();
						for (var i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
							if (this.nyaSelect.controls[i].id === controlName) this.nyaSelect.selectedControl = this.nyaSelect.controls[i].id;
						}
						if (this.nyaSelect.selectedControl === 'Date') this.initDatePicker();
					}
				}, {
					key: 'ok',
					value: function ok() {
						if (this.nyaSelect.selectedControl === 'BasicSelect') this.bindBasicSelectToNya();
						if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectToNya();
						if (this.nyaSelect.selectedControl === 'Radio') this.bindRadioToNya();
						//save config to control
						this.$modalProxy.applyConfigToSelectedControl(this.nyaSelect);
						this.$modalProxy.columnUpdated = true;
						//return current model to parent controller :
						this.$modalInstance.close(this.nyaSelect);
					}
				}, {
					key: 'cancel',
					value: function cancel() {
						this.$modalInstance.dismiss('cancel');
					}
				}, {
					key: 'removeColumn',
					value: function removeColumn() {
						this.$modalProxy.columnRemoved = true;
						this.$modalInstance.close(this.nyaSelect);
					}
				}, {
					key: 'bindBasicSelectToNya',
					value: function bindBasicSelectToNya() {
						var resetNyASelectOptions = [];
						this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
						if (this.basicSelectRowCollection.rows.length > 0) {
							for (var i = 0; i <= this.basicSelectRowCollection.rows.length - 1; i++) {
								var newOption = {
									'name': this.basicSelectRowCollection.rows[i].option,
									'description': this.basicSelectRowCollection.rows[i].description,
									'value': i,
									'uniqueValue': this.basicSelectRowCollection.rows[i].uniqueValue,
									'group': '',
									'parentId': angular.copy(this.basicSelectRowCollection.rows[i].parentId),
									'referenceId': this.basicSelectRowCollection.rows[i].referenceId
								};
								if (this.basicSelectRowCollection.rows[i]['new']) {
									newOption['new'] = this.basicSelectRowCollection.rows[i]['new'];
								}
								this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
							}
						}
					}
				}, {
					key: 'bindGroupedSelectToNya',
					value: function bindGroupedSelectToNya() {
						this.nyaSelect.temporyConfig.formlyOptions = [];
						for (var i = 0; i <= this.groupedSelectRowCollection.rows.length - 1; i++) {
							var newOption = {
								'name': this.groupedSelectRowCollection.rows[i].option,
								'description': this.groupedSelectRowCollection.rows[i].description,
								'value': i,
								'uniqueValue': this.groupedSelectRowCollection.rows[i].uniqueValue,
								'group': this.groupedSelectRowCollection.rows[i].group,
								'parentId': angular.copy(this.groupedSelectRowCollection.rows[i].parentId),
								'referenceId': this.groupedSelectRowCollection.rows[i].referenceId
							};
							if (this.groupedSelectRowCollection.rows[i]['new']) {
								newOption['new'] = this.groupedSelectRowCollection.rows[i]['new'];
							}
							this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
						}
					}
				}, {
					key: 'bindRadioToNya',
					value: function bindRadioToNya() {
						var resetNyASelectOptions = [];
						this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
						if (this.radioRowCollection.rows.length > 0) {
							for (var i = 0; i <= this.radioRowCollection.rows.length - 1; i++) {
								var newOption = {
									'name': this.radioRowCollection.rows[i].option,
									'description': this.radioRowCollection.rows[i].description,
									'value': i,
									'uniqueValue': this.radioRowCollection.rows[i].uniqueValue,
									'group': '',
									'parentId': angular.copy(this.radioRowCollection.rows[i].parentId),
									'referenceId': this.radioRowCollection.rows[i].referenceId
								};
								if (this.radioRowCollection.rows[i]['new']) {
									newOption['new'] = this.radioRowCollection.rows[i]['new'];
								}
								this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
							}
						}
					}
				}, {
					key: 'initDatePicker',
					value: function initDatePicker() {
						this.nyaSelect.temporyConfig.datepickerOptions = {
							format: this.demodt.formats[0]
						};
					}
				}, {
					key: 'resetTemporyConfig',
					value: function resetTemporyConfig() {
						this.nyaSelectFiltered.temporyConfig = {
							formlyLabel: '',
							formlyLabelShort: '',
							formlyRequired: false,
							formlyUnique: false,
							formlyDefaultValue: '',
							displayAddOption: true,
							displayEditOption: true,
							allowMultiple: 1,
							formlyPlaceholder: '',
							formlyDesciption: '',
							formlyOptions: [],
							parentId: '',
							referenceId: ''
						};
					}
				}]);

				return editControlModalController;
			})();

			toInject = ['$uibModalInstance', 'nyaSelect', 'toaster', 'selectOptionManage', '$modalProxy', 'titleColumns', 'columns', 'activeLine', 'activeColumn', 'activeLineColumnsCount', '$scope'];

			editControlModalController.$inject = toInject;

			_export('default', editControlModalController);

			_export('EDIT_MODAL_CONTROLLER_NAME', EDIT_MODAL_CONTROLLER_NAME);

			_export('EDIT_MODAL_CONTROLLERAS_NAME', EDIT_MODAL_CONTROLLERAS_NAME);
		}
	};
});
$__System.register('1a', ['14'], function (_export) {
	/* global angular */
	'use strict';

	var editModalController, EDIT_MODAL_CONTROLLER_NAME, EDIT_CONTROLE_MODAL_NAME;
	return {
		setters: [function (_) {
			editModalController = _['default'];
			EDIT_MODAL_CONTROLLER_NAME = _.EDIT_MODAL_CONTROLLER_NAME;
		}],
		execute: function () {
			EDIT_CONTROLE_MODAL_NAME = 'editControlModalModule';

			_export('default', angular.module(EDIT_CONTROLE_MODAL_NAME, []).controller(EDIT_MODAL_CONTROLLER_NAME, editModalController));
		}
	};
});
$__System.register('1b', [], function (_export) {
	/* global angular */

	'use strict';

	var resetNyaSelect, getResetConfig, returnControlFromAddCtrlModalModel, validKeyUniqueness;
	return {
		setters: [],
		execute: function () {
			resetNyaSelect = function resetNyaSelect(nyaSelectObj, $translate, $q, $timeout) {

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
						incrementalOption: false,
						currentYearOption: false,
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
						datepickerOptions: 'dd-MMMM-yyyy',
						currentDateOption: false,
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
						optionsSourceType: 'static',
						optionsSourceDbTable: null,
						optionsSourceDbFormat: null,
						formlyOptions: [],
						parentId: '',
						referenceId: '',
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
						optionsSourceType: 'static',
						optionsSourceDbTable: null,
						optionsSourceDbFormat: null,
						formlyOptions: [],
						parentId: '',
						referenceId: '',
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
									} else {
										return false;
									}
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
						formlyLabel: '',
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

							return $timeout(function () {
								// Write down own logic
								var isOK = true;

								if (isOK || !scope.to.unique) {
									deferred.resolve(isOK);
								} else {
									deferred.reject(isOK);
								}
								return deferred.promise;
							}, 1000);
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

			getResetConfig = function getResetConfig() {
				var emptyConfig = {};
				angular.extend(emptyConfig, {
					formlyLabel: '',
					formlyLabelShort: '',
					formlyRequired: false,
					formlyUnique: false,
					formlyDefaultValue: '',
					displayAddOption: true,
					displayEditOption: true,
					allowMultiple: 1,
					formlyPlaceholder: '',
					formlyDesciption: '',
					formlyOptions: [],
					parentId: '',
					referenceId: ''
				});
				return emptyConfig;
			};

			/**
   	* data passed back to parent controller
   	* after control being finsihed editing in modal
   	*/

			returnControlFromAddCtrlModalModel = function returnControlFromAddCtrlModalModel(CtrlModalModel) {

				var modelToReturn = {
					selectedControl: 'none',
					formlyType: 'none',
					formlySubtype: 'none',
					formlyLabel: '',
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
					//validation fields
					formlyExpressionProperties: {},
					formlyValidators: {},
					formlyValidation: {}
				};

				for (var i = CtrlModalModel.controls.length - 1; i >= 0; i--) {
					if (CtrlModalModel.selectedControl === CtrlModalModel.controls[i].id) {
						modelToReturn.selectedControl = CtrlModalModel.selectedControl;
						modelToReturn.formlyType = CtrlModalModel.controls[i].formlyType;
						modelToReturn.formlySubtype = CtrlModalModel.controls[i].formlySubtype;
						modelToReturn.formlyLabel = CtrlModalModel.controls[i].formlyLabel;
						modelToReturn.formlyLabelShort = CtrlModalModel.controls[i].formlyLabelShort;
						modelToReturn.formlyRequired = CtrlModalModel.controls[i].formlyRequired;
						modelToReturn.formlyUnique = CtrlModalModel.controls[i].formlyUnique;
						modelToReturn.formlyDefaultValue = CtrlModalModel.controls[i].formlyDefaultValue;
						modelToReturn.displayAddOption = CtrlModalModel.controls[i].displayAddOption;
						modelToReturn.displayEditOption = CtrlModalModel.controls[i].displayEditOption;
						modelToReturn.allowMultiple = CtrlModalModel.controls[i].allowMultiple;
						modelToReturn.formlyDesciption = CtrlModalModel.controls[i].formlyDesciption;
						modelToReturn.formlyPlaceholder = CtrlModalModel.controls[i].formlyPlaceholder;
						modelToReturn.formlyOptions = CtrlModalModel.controls[i].formlyOptions;
						modelToReturn.parentId = CtrlModalModel.controls[i].parentId;
						modelToReturn.referenceId = CtrlModalModel.controls[i].referenceId;

						modelToReturn.formlyExpressionProperties = angular.copy(CtrlModalModel.controls[i].formlyExpressionProperties);
						modelToReturn.formlyValidators = angular.copy(CtrlModalModel.controls[i].formlyValidators);
						modelToReturn.formlyValidation = angular.copy(CtrlModalModel.controls[i].formlyValidation);

						//particular properties
						//datetpicker format
						if (CtrlModalModel.controls[i].formlyType === 'datepicker') {
							modelToReturn.datepickerOptions = CtrlModalModel.controls[i].datepickerOptions;
							modelToReturn.currentDateOption = CtrlModalModel.controls[i].currentDateOption;
						}
						if (CtrlModalModel.controls[i].formlyType === 'input') {
							switch (CtrlModalModel.controls[i].formlySubtype) {
								case "":
									modelToReturn.maxLengthOption = CtrlModalModel.controls[i].maxLengthOption;
									break;

								case "number":
									modelToReturn.numberType = CtrlModalModel.controls[i].numberType;
									modelToReturn.minValueOption = CtrlModalModel.controls[i].minValueOption;
									modelToReturn.maxValueOption = CtrlModalModel.controls[i].maxValueOption;
									modelToReturn.incrementalOption = CtrlModalModel.controls[i].incrementalOption;
									modelToReturn.currentYearOption = CtrlModalModel.controls[i].currentYearOption;
									break;
							}
						}
						var fieldsWithOptions = ['basicSelect', 'groupedSelect', 'radio'];
						if (fieldsWithOptions.indexOf(CtrlModalModel.controls[i].formlyType) !== -1) {
							modelToReturn.allowEmptyOption = CtrlModalModel.controls[i].allowEmptyOption;
							modelToReturn.optionsSourceType = CtrlModalModel.controls[i].optionsSourceType;
							modelToReturn.optionsSourceDbTable = CtrlModalModel.controls[i].optionsSourceDbTable;
							modelToReturn.optionsSourceDbFormat = CtrlModalModel.controls[i].optionsSourceDbFormat;
						}
					}
				}
				return modelToReturn;
			};

			/**
   	* validKeyUniqueness
   	* to be sure the "keys" are unique (in same formly field model)
   	*/

			validKeyUniqueness = function validKeyUniqueness(thisKey, configurationObj) {
				var isUnique = true;
				//each lines
				for (var i = configurationObj.lines.length - 1; i >= 0; i--) {
					//each columns
					for (var j = configurationObj.lines[i].columns.length - 1; j >= 0; j--) {
						if (configurationObj.lines[i].columns[j].control.key === thisKey) {
							isUnique = false;
						}
					}
				}
				return isUnique;
			};

			_export('resetNyaSelect', resetNyaSelect);

			_export('returnControlFromAddCtrlModalModel', returnControlFromAddCtrlModalModel);

			_export('validKeyUniqueness', validKeyUniqueness);

			_export('getResetConfig', getResetConfig);
		}
	};
});
$__System.register('1c', ['15', '16', '1b'], function (_export) {
	var _createClass, _classCallCheck, resetNyaSelect, returnControlFromAddCtrlModalModel, validKeyUniqueness, getResetConfig, CONTROLLER_MODAL_PROXY_SERVICE, $modalProxy;

	return {
		setters: [function (_) {
			_createClass = _['default'];
		}, function (_2) {
			_classCallCheck = _2['default'];
		}, function (_b) {
			resetNyaSelect = _b.resetNyaSelect;
			returnControlFromAddCtrlModalModel = _b.returnControlFromAddCtrlModalModel;
			validKeyUniqueness = _b.validKeyUniqueness;
			getResetConfig = _b.getResetConfig;
		}],
		execute: function () {
			'use strict';

			CONTROLLER_MODAL_PROXY_SERVICE = '$modalProxy';

			$modalProxy = (function () {
				function $modalProxy(easyFormSteWayConfig, $translate, $q, $timeout) {
					_classCallCheck(this, $modalProxy);

					this.easyFormSteWayConfig = easyFormSteWayConfig;
					this.$translate = $translate;
					this.columnRemoved = false;
					this.columnUpdated = false;
					this.$q = $q;
					this.$timeout = $timeout;
				}

				_createClass($modalProxy, [{
					key: 'initNyaSelect',
					value: function initNyaSelect(nyaSelectObj) {
						return resetNyaSelect(nyaSelectObj, this.$translate, this.$q, this.$timeout);
					}
				}, {
					key: 'getControlsDefinition',
					value: function getControlsDefinition() {
						var controls = {};
						resetNyaSelect(controls, this.$translate, this.$q, this.$timeout);
						return controls;
					}
				}, {
					key: 'getNyASelectFromSelectedLineColumn',
					value: function getNyASelectFromSelectedLineColumn(nyaSelectObj, configurationObj, indexLine, numcolumn) {
						resetNyaSelect(nyaSelectObj, this.$translate, this.$q, this.$timeout);
						/**
      	* data send to modal controller
      	*/

						if (typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions != 'undefined') {

							nyaSelectObj.temporyConfig.selectedControl = typeof configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl : 'none';
							nyaSelectObj.temporyConfig.formlyLabel = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label : '';
							nyaSelectObj.temporyConfig.formlyLabelShort = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.labelShort != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.labelShort : '';
							nyaSelectObj.temporyConfig.formlyRequired = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required : false;
							nyaSelectObj.temporyConfig.formlyUnique = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.unique != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.unique : false;
							nyaSelectObj.temporyConfig.formlyDefaultValue = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.defaultValue != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.defaultValue : nyaSelectObj.temporyConfig.selectedControl === 'Checkbox' ? true : '';
							nyaSelectObj.temporyConfig.displayAddOption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayAddOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayAddOption : true;
							nyaSelectObj.temporyConfig.displayEditOption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayEditOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayEditOption : true;
							nyaSelectObj.temporyConfig.allowMultiple = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.allowMultiple != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.allowMultiple : 1;
							nyaSelectObj.temporyConfig.formlyDesciption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description : '';
							nyaSelectObj.temporyConfig.formlyPlaceholder = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder : '';
							nyaSelectObj.temporyConfig.formlyOptions = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options : '';
							nyaSelectObj.temporyConfig.parentId = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.parentId != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.parentId : '';
							nyaSelectObj.temporyConfig.referenceId = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.referenceId != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.referenceId : '';

							nyaSelectObj.temporyConfig.formlyExpressionProperties = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties) : {};
							nyaSelectObj.temporyConfig.formlyValidators = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators) : {};
							nyaSelectObj.temporyConfig.formlyValidation = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation) : {};

							// particular case : datepicker
							if (nyaSelectObj.temporyConfig.selectedControl === 'Date') {
								nyaSelectObj.temporyConfig.datepickerOptions = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerOptions != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerOptions) : '';
								nyaSelectObj.temporyConfig.currentDateOption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.currentDateOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.currentDateOption : false;
							}

							if (nyaSelectObj.temporyConfig.selectedControl === 'TextInput') {
								nyaSelectObj.temporyConfig.maxLengthOption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxLengthOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxLengthOption : null;
							}

							if (nyaSelectObj.temporyConfig.selectedControl === 'Number') {
								nyaSelectObj.temporyConfig.numberType = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.numberType != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.numberType) : 'integer';
								nyaSelectObj.temporyConfig.minValueOption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.minValueOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.minValueOption : null;
								nyaSelectObj.temporyConfig.maxValueOption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxValueOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxValueOption : null;
								nyaSelectObj.temporyConfig.incrementalOption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.incrementalOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.incrementalOption : false;
								nyaSelectObj.temporyConfig.currentYearOption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.currentYearOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.currentYearOption : false;
							}
							var fieldsWithOptions = ['BasicSelect', 'GroupedSelect', 'Radio'];
							if (fieldsWithOptions.indexOf(nyaSelectObj.temporyConfig.selectedControl) !== -1) {
								nyaSelectObj.temporyConfig.allowEmptyOption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.allowEmptyOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.allowEmptyOption : false;
								nyaSelectObj.temporyConfig.optionsSourceType = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.optionsSourceType != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.optionsSourceType : 'static';
								nyaSelectObj.temporyConfig.optionsSourceDbTable = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.optionsSourceDbTable != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.optionsSourceDbTable : null;
								nyaSelectObj.temporyConfig.optionsSourceDbFormat = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.optionsSourceDbFormat != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.optionsSourceDbFormat : null;
							}
						}
						return nyaSelectObj;
					}
				}, {
					key: 'bindConfigurationModelFromModalReturn',
					value: function bindConfigurationModelFromModalReturn(indexLine, numcolumn, modalAddCtrlModel, configurationObj) {

						var extractedProps = returnControlFromAddCtrlModalModel(modalAddCtrlModel);
						configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl = extractedProps.selectedControl;
						configurationObj.lines[indexLine].columns[numcolumn].control.type = extractedProps.formlyType;
						configurationObj.lines[indexLine].columns[numcolumn].control.subtype = extractedProps.formlySubtype;
						//reset templateOptions
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions = {
							label: '',
							labelShort: '',
							required: false,
							unique: false,
							defaultValue: '',
							displayAddOption: true,
							displayEditOption: true,
							allowMultiple: 1,
							description: '',
							placeholder: '',
							options: [],
							parentId: '',
							referenceId: ''
						};

						//then bind templateOptions
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label = extractedProps.formlyLabel;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.labelShort = extractedProps.formlyLabelShort;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required = extractedProps.formlyRequired;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.unique = extractedProps.formlyUnique;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.defaultValue = extractedProps.formlyDefaultValue;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayAddOption = extractedProps.displayAddOption;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayEditOption = extractedProps.displayEditOption;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.allowMultiple = extractedProps.allowMultiple;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description = extractedProps.formlyDesciption;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder = extractedProps.formlyPlaceholder;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options = extractedProps.formlyOptions;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.parentId = extractedProps.parentId;
						configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.referenceId = extractedProps.referenceId;
						configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties = angular.copy(extractedProps.formlyExpressionProperties);
						configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators = angular.copy(extractedProps.formlyValidators);
						configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation = angular.copy(extractedProps.formlyValidation);

						//////////////////////////////////////////
						// add additionnal particular properties
						//////////////////////////////////////////
						//-> datepicker : datepickerOptions
						if (configurationObj.lines[indexLine].columns[numcolumn].control.type === 'datepicker') {
							configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerOptions = angular.copy(extractedProps.datepickerOptions);
							configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.currentDateOption = extractedProps.currentDateOption;
						}

						if (configurationObj.lines[indexLine].columns[numcolumn].control.type === 'input') {
							switch (configurationObj.lines[indexLine].columns[numcolumn].control.subtype) {
								case "":
									configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxLengthOption = extractedProps.maxLengthOption;
									break;

								case "number":
									configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.numberType = extractedProps.numberType;
									configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.minValueOption = extractedProps.minValueOption;
									configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxValueOption = extractedProps.maxValueOption;
									configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.incrementalOption = extractedProps.incrementalOption;
									configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.currentYearOption = extractedProps.currentYearOption;
									break;
							}
						}

						var fieldsWithOptions = ['basicSelect', 'groupedSelect', 'radio'];
						if (fieldsWithOptions.indexOf(configurationObj.lines[indexLine].columns[numcolumn].control.type) !== -1) {
							configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.allowEmptyOption = extractedProps.allowEmptyOption;
							configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.optionsSourceType = extractedProps.optionsSourceType;
							configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.optionsSourceDbTable = extractedProps.optionsSourceDbTable;
							configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.optionsSourceDbFormat = extractedProps.optionsSourceDbFormat;
						}

						/**
      	* unique key (set only first time) in this model is formly control type + Date.now();
      	*/
						var newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();

						if (validKeyUniqueness(newKey, configurationObj) === true) {
							configurationObj.lines[indexLine].columns[numcolumn].control.key = newKey;
						} else {
							/**
       	* 2nd attempt
       	*/
							newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();

							if (validKeyUniqueness(newKey, configurationObj) === true) {
								configurationObj.lines[indexLine].columns[numcolumn].control.key = newKey;
							} else {
								/**
        	* 3rd attempt
        	*/
								newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();
							}
						}
						configurationObj.lines[indexLine].columns[numcolumn].control.edited = true;
					}
				}, {
					key: 'applyConfigToSelectedControl',
					value: function applyConfigToSelectedControl(nyaSelectObj) {
						/**
      	* used in modal (edit control)
      	*/
						for (var i = nyaSelectObj.controls.length - 1; i >= 0; i--) {
							if (nyaSelectObj.controls[i].id === nyaSelectObj.selectedControl) {

								nyaSelectObj.controls[i].formlyLabel = nyaSelectObj.temporyConfig.formlyLabel;
								nyaSelectObj.controls[i].formlyLabelShort = nyaSelectObj.temporyConfig.formlyLabelShort;
								nyaSelectObj.controls[i].formlyRequired = nyaSelectObj.temporyConfig.formlyRequired;
								nyaSelectObj.controls[i].formlyUnique = nyaSelectObj.temporyConfig.formlyUnique;
								nyaSelectObj.controls[i].formlyDefaultValue = nyaSelectObj.temporyConfig.formlyDefaultValue;
								nyaSelectObj.controls[i].displayAddOption = nyaSelectObj.temporyConfig.displayAddOption;
								nyaSelectObj.controls[i].displayEditOption = nyaSelectObj.temporyConfig.displayEditOption;
								nyaSelectObj.controls[i].allowMultiple = nyaSelectObj.temporyConfig.allowMultiple;
								nyaSelectObj.controls[i].formlyDesciption = nyaSelectObj.temporyConfig.formlyDesciption;
								nyaSelectObj.controls[i].formlyPlaceholder = nyaSelectObj.temporyConfig.formlyPlaceholder;
								nyaSelectObj.controls[i].formlyOptions = nyaSelectObj.temporyConfig.formlyOptions;
								nyaSelectObj.controls[i].parentId = nyaSelectObj.temporyConfig.parentId;
								nyaSelectObj.controls[i].referenceId = nyaSelectObj.temporyConfig.referenceId;

								if (nyaSelectObj.controls[i].id === 'Date') {
									nyaSelectObj.controls[i].datepickerOptions = angular.copy(nyaSelectObj.temporyConfig.datepickerOptions);
									nyaSelectObj.controls[i].currentDateOption = nyaSelectObj.temporyConfig.currentDateOption;
								}

								if (nyaSelectObj.controls[i].id === 'TextInput') {
									nyaSelectObj.controls[i].maxLengthOption = nyaSelectObj.temporyConfig.maxLengthOption;
								}

								if (nyaSelectObj.controls[i].id === 'Number') {
									nyaSelectObj.controls[i].numberType = nyaSelectObj.temporyConfig.numberType;
									nyaSelectObj.controls[i].minValueOption = nyaSelectObj.temporyConfig.minValueOption;
									nyaSelectObj.controls[i].maxValueOption = nyaSelectObj.temporyConfig.maxValueOption;
									nyaSelectObj.controls[i].incrementalOption = nyaSelectObj.temporyConfig.incrementalOption;
									nyaSelectObj.controls[i].currentYearOption = nyaSelectObj.temporyConfig.currentYearOption;
								}
								var fildsWithOptions = ['BasicSelect', 'GroupedSelect', 'Radio'];
								if (fildsWithOptions.indexOf(nyaSelectObj.controls[i].id) !== -1) {
									nyaSelectObj.controls[i].allowEmptyOption = nyaSelectObj.temporyConfig.allowEmptyOption;
									nyaSelectObj.controls[i].optionsSourceType = nyaSelectObj.temporyConfig.optionsSourceType;
									nyaSelectObj.controls[i].optionsSourceDbTable = nyaSelectObj.temporyConfig.optionsSourceDbTable;
									nyaSelectObj.controls[i].optionsSourceDbFormat = nyaSelectObj.temporyConfig.optionsSourceDbFormat;
								}
							}
						}
					}
				}, {
					key: 'resetTemporyConfig',
					value: function resetTemporyConfig() {
						return getResetConfig();
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
							angular.forEach(configurationModel.lines, function (line, indexLine) {
								angular.forEach(line.columns, function (column, controlIndex) {
									var _controlsDefinition = _this.getControlsDefinition();
									angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
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
							angular.forEach(configurationModel.lines, function (line, indexLine) {
								angular.forEach(line.columns, function (column, controlIndex) {
									var _controlsDefinition = _this2.getControlsDefinition();
									angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
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
							angular.forEach(configurationModel.lines, function (line, indexLine) {
								angular.forEach(line.columns, function (column, controlIndex) {
									var _controlsDefinition = _this3.getControlsDefinition();
									angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
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
							angular.forEach(configurationModel.lines, function (line, indexLine) {
								angular.forEach(line.columns, function (column, controlIndex) {
									var _controlsDefinition = _this4.getControlsDefinition();
									angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
										if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
											//----> update control formlyValidation property
											column.control.formlyValidation = angular.merge({}, aControl.formlyValidation, column.control.formlyValidation);
										}
									});
								});
							});
						}
					}
				}, {
					key: 'filterDisabledControl',
					value: function filterDisabledControl(nyaSelectObj) {
						var listAllEnabledControl = this.easyFormSteWayConfig.getListEnabledControl();
						var filteredNyaList = [];
						angular.forEach(listAllEnabledControl, function (enabledControl) {
							angular.forEach(nyaSelectObj.controls, function (nyaControl) {
								if (nyaControl.id === enabledControl.name && enabledControl.enabled === true) {
									filteredNyaList = filteredNyaList.concat(nyaControl);
								}
							});
						});
						return filteredNyaList;
					}
				}, {
					key: 'getFilteredNyaSelectObject',
					value: function getFilteredNyaSelectObject() {
						var newNyaSelectObj = {};
						resetNyaSelect(newNyaSelectObj, this.$translate, this.$q, this.$timeout);
						return angular.copy(this.filterDisabledControl(angular.copy(newNyaSelectObj)));
						//return angular.copy(angular.copy(newNyaSelectObj));
					}
				}]);

				return $modalProxy;
			})();

			$modalProxy.$inject = ['easyFormSteWayConfig', '$translate', '$q', '$timeout'];

			_export('default', $modalProxy);

			_export('CONTROLLER_MODAL_PROXY_SERVICE', CONTROLLER_MODAL_PROXY_SERVICE);
		}
	};
});
$__System.register('1d', ['1c'], function (_export) {
									/* global angular */
									'use strict';

									var $modalProxy, CONTROLLER_MODAL_PROXY_SERVICE, MODAL_PROXY_MODULE_NAME;
									return {
																		setters: [function (_c) {
																											$modalProxy = _c['default'];
																											CONTROLLER_MODAL_PROXY_SERVICE = _c.CONTROLLER_MODAL_PROXY_SERVICE;
																		}],
																		execute: function () {
																											MODAL_PROXY_MODULE_NAME = 'modalProxyModule';

																											_export('default', angular.module(MODAL_PROXY_MODULE_NAME, []).service(CONTROLLER_MODAL_PROXY_SERVICE, $modalProxy));
																		}
									};
});
$__System.register('1e', [], function (_export) {
	/* global angular */

	'use strict';

	var configurationModelInit, configurationModelResult, isTemplateOptionDefined, extractTemplateOptionLabel, extractTemplateOptionLabelShort, extractTemplateOptionParentId, extractTemplateOptionReferenceId, extractTemplateOptionDatepickerOptions, extractTemplateOptionMaxLengthOption, extractTemplateOptionMinValueOption, extractTemplateOptionMaxValueOption, extractTemplateOptionNumberType, extractTemplateOptionIncrementalOption, extractTemplateOptionCurrentYearOption, extractTemplateOptionCurrentDateOption, extractTemplateOptionAllowEmptyOption, extractTemplateOptionOptionsSourceType, extractTemplateOptionOptionsSourceDbTable, extractTemplateOptionOptionsSourceDbFormat, extractFormlyExpressionProperties, extractFormlyValidators, extractFormlyAsyncValidators, extractFormlyValidation, extractTemplateOptionRequired, extractTemplateOptionUnique, extractDefaultValue, extractTemplateOptionDisplayAddOption, extractTemplateOptionDisplayEditOption, extractTemplateOptionAllowMultiple, extractTemplateOptionOptions, extractTemplateOptionType, extractTemplateOptionPlaceholder, extractTemplateOptionDescription, addDatepickerOptionsProperty, addMaxLengthOptionProperty, addAllowEmptyOptionProperty, addOptionsSourceTypeProperty, addOptionsSourceDbTableProperty, addOptionsSourceDbFormatProperty, addNumberTypeProperty, addMinValueOptionProperty, addMaxValueOptionProperty, addIncrementalOptionProperty, addCurrentYearOptionProperty, addCurrentDateOptionProperty, addOneColumnHeader, addColumns, resetDataModel, resetFormlyModel;

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

		if (multipleTypes.indexOf(type) !== -1 && (typeof defaultValue[0] === "undefined" || typeof defaultValue == 'string' && defaultValue != '')) {
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
				canDisplayMultiple: checkIfCanDisplayMultiple(type, subtype),
				parentId: extractTemplateOptionParentId(configurationModel.lines[lineIndex].columns[columnIndex].control)
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

		var fieldsWithOptions = ['basicSelect', 'groupedSelect', 'radio'];
		if (fieldsWithOptions.indexOf(configurationModel.lines[lineIndex].columns[columnIndex].control.type) !== -1) {
			addAllowEmptyOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
			addOptionsSourceTypeProperty(controlCol, configurationModel, lineIndex, columnIndex);
			addOptionsSourceDbTableProperty(controlCol, configurationModel, lineIndex, columnIndex);
			addOptionsSourceDbFormatProperty(controlCol, configurationModel, lineIndex, columnIndex);
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
			configurationModelInit = {
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
							defaultValue: '',
							'new': true
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
			configurationModelResult = {
				activeLine: 1,
				listConfigStep: ['init', 'first', 'second', 'third'],
				stepIndicators: [true, false, false, false],
				configStepCounter: 0,
				submitButtonText: 'submit',
				cancelButtonText: 'cancel',
				lines: []
			};

			isTemplateOptionDefined = function isTemplateOptionDefined(obj) {
				return typeof obj.templateOptions !== 'undefined' ? true : false;
			};

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
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.datepickerOptions !== 'undefined' ? angular.copy(obj.templateOptions.datepickerOptions) : { format: '' } : { format: '' };
			};

			extractTemplateOptionMaxLengthOption = function extractTemplateOptionMaxLengthOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.maxLengthOption !== 'undefined' ? obj.templateOptions.maxLengthOption : null : null;
			};

			extractTemplateOptionMinValueOption = function extractTemplateOptionMinValueOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.minValueOption !== 'undefined' ? obj.templateOptions.minValueOption : null : null;
			};

			extractTemplateOptionMaxValueOption = function extractTemplateOptionMaxValueOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.maxValueOption !== 'undefined' ? obj.templateOptions.maxValueOption : null : null;
			};

			extractTemplateOptionNumberType = function extractTemplateOptionNumberType(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.numberType !== 'undefined' ? angular.copy(obj.templateOptions.numberType) : 'integer' : 'integer';
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

			extractTemplateOptionOptionsSourceType = function extractTemplateOptionOptionsSourceType(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.optionsSourceType !== 'undefined' ? obj.templateOptions.optionsSourceType : 'static' : 'static';
			};

			extractTemplateOptionOptionsSourceDbTable = function extractTemplateOptionOptionsSourceDbTable(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.optionsSourceDbTable !== 'undefined' ? obj.templateOptions.optionsSourceDbTable : null : null;
			};

			extractTemplateOptionOptionsSourceDbFormat = function extractTemplateOptionOptionsSourceDbFormat(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.optionsSourceDbFormat !== 'undefined' ? obj.templateOptions.optionsSourceDbFormat : null : null;
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

			extractTemplateOptionType = function extractTemplateOptionType(obj) {
				return typeof obj.subtype !== 'undefined' ? obj.subtype : '';
			};

			extractTemplateOptionPlaceholder = function extractTemplateOptionPlaceholder(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.placeholder !== 'undefined' ? obj.templateOptions.placeholder : '' : '';
			};

			extractTemplateOptionDescription = function extractTemplateOptionDescription(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.description !== 'undefined' ? obj.templateOptions.description : '' : '';
			};

			addDatepickerOptionsProperty = function addDatepickerOptionsProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.datepickerOptions = extractTemplateOptionDatepickerOptions(configurationModel.lines[lineIndex].columns[position].control);
			};

			addMaxLengthOptionProperty = function addMaxLengthOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.maxLengthOption = extractTemplateOptionMaxLengthOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addAllowEmptyOptionProperty = function addAllowEmptyOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.allowEmptyOption = extractTemplateOptionAllowEmptyOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addOptionsSourceTypeProperty = function addOptionsSourceTypeProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.optionsSourceType = extractTemplateOptionOptionsSourceType(configurationModel.lines[lineIndex].columns[position].control);
			};

			addOptionsSourceDbTableProperty = function addOptionsSourceDbTableProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.optionsSourceDbTable = extractTemplateOptionOptionsSourceDbTable(configurationModel.lines[lineIndex].columns[position].control);
			};

			addOptionsSourceDbFormatProperty = function addOptionsSourceDbFormatProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.optionsSourceDbFormat = extractTemplateOptionOptionsSourceDbFormat(configurationModel.lines[lineIndex].columns[position].control);
			};

			addNumberTypeProperty = function addNumberTypeProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.minValueOption = extractTemplateOptionNumberType(configurationModel.lines[lineIndex].columns[position].control);
			};

			addMinValueOptionProperty = function addMinValueOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.minValueOption = extractTemplateOptionMinValueOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addMaxValueOptionProperty = function addMaxValueOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.maxValueOption = extractTemplateOptionMaxValueOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addIncrementalOptionProperty = function addIncrementalOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.incrementalOption = extractTemplateOptionIncrementalOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addCurrentYearOptionProperty = function addCurrentYearOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.currentYearOption = extractTemplateOptionCurrentYearOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addCurrentDateOptionProperty = function addCurrentDateOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				fieldToPush.templateOptions.currentDateOption = extractTemplateOptionCurrentDateOption(configurationModel.lines[lineIndex].columns[position].control);
			};

			addOneColumnHeader = function addOneColumnHeader(formlyModel, configurationModel, lineIndex) {
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

			resetDataModel = function resetDataModel(obj) {
				var emptyDataModel = {};
				angular.copy(emptyDataModel, obj);
				return true;
			};

			resetFormlyModel = function resetFormlyModel(formlyModel) {
				var resetformly = [];
				angular.copy(resetformly, formlyModel);
			};

			_export('configurationModelInit', configurationModelInit);

			_export('configurationModelResult', configurationModelResult);

			_export('resetDataModel', resetDataModel);

			_export('resetFormlyModel', resetFormlyModel);

			_export('isTemplateOptionDefined', isTemplateOptionDefined);

			_export('extractTemplateOptionLabel', extractTemplateOptionLabel);

			_export('extractTemplateOptionLabelShort', extractTemplateOptionLabelShort);

			_export('extractTemplateOptionReferenceId', extractTemplateOptionReferenceId);

			_export('extractTemplateOptionParentId', extractTemplateOptionParentId);

			_export('extractTemplateOptionDatepickerOptions', extractTemplateOptionDatepickerOptions);

			_export('extractTemplateOptionMaxLengthOption', extractTemplateOptionMaxLengthOption);

			_export('extractTemplateOptionNumberType', extractTemplateOptionNumberType);

			_export('extractTemplateOptionMinValueOption', extractTemplateOptionMinValueOption);

			_export('extractTemplateOptionMaxValueOption', extractTemplateOptionMaxValueOption);

			_export('extractTemplateOptionIncrementalOption', extractTemplateOptionIncrementalOption);

			_export('extractTemplateOptionCurrentYearOption', extractTemplateOptionCurrentYearOption);

			_export('extractTemplateOptionCurrentDateOption', extractTemplateOptionCurrentDateOption);

			_export('extractTemplateOptionAllowEmptyOption', extractTemplateOptionAllowEmptyOption);

			_export('extractTemplateOptionOptionsSourceType', extractTemplateOptionOptionsSourceType);

			_export('extractTemplateOptionOptionsSourceDbTable', extractTemplateOptionOptionsSourceDbTable);

			_export('extractTemplateOptionOptionsSourceDbFormat', extractTemplateOptionOptionsSourceDbFormat);

			_export('extractFormlyExpressionProperties', extractFormlyExpressionProperties);

			_export('extractFormlyValidators', extractFormlyValidators);

			_export('extractFormlyAsyncValidators', extractFormlyAsyncValidators);

			_export('extractFormlyValidation', extractFormlyValidation);

			_export('extractTemplateOptionRequired', extractTemplateOptionRequired);

			_export('extractTemplateOptionUnique', extractTemplateOptionUnique);

			_export('extractDefaultValue', extractDefaultValue);

			_export('extractTemplateOptionDisplayAddOption', extractTemplateOptionDisplayAddOption);

			_export('extractTemplateOptionDisplayEditOption', extractTemplateOptionDisplayEditOption);

			_export('extractTemplateOptionAllowMultiple', extractTemplateOptionAllowMultiple);

			_export('extractTemplateOptionOptions', extractTemplateOptionOptions);

			_export('extractTemplateOptionType', extractTemplateOptionType);

			_export('extractTemplateOptionPlaceholder', extractTemplateOptionPlaceholder);

			_export('extractTemplateOptionDescription', extractTemplateOptionDescription);

			_export('addDatepickerOptionsProperty', addDatepickerOptionsProperty);

			_export('addNumberTypeProperty', addNumberTypeProperty);

			_export('addMaxLengthOptionProperty', addMaxLengthOptionProperty);

			_export('addMinValueOptionProperty', addMinValueOptionProperty);

			_export('addMaxValueOptionProperty', addMaxValueOptionProperty);

			_export('addIncrementalOptionProperty', addIncrementalOptionProperty);

			_export('addCurrentYearOptionProperty', addCurrentYearOptionProperty);

			_export('addCurrentDateOptionProperty', addCurrentDateOptionProperty);

			_export('addAllowEmptyOptionProperty', addAllowEmptyOptionProperty);

			_export('addOptionsSourceTypeProperty', addOptionsSourceTypeProperty);

			_export('addOptionsSourceDbTableProperty', addOptionsSourceDbTableProperty);

			_export('addOptionsSourceDbFormatProperty', addOptionsSourceDbFormatProperty);

			_export('addOneColumnHeader', addOneColumnHeader);

			_export('addColumns', addColumns);
		}
	};
});
$__System.register('1f', ['15', '16', '1e'], function (_export) {
	var _createClass, _classCallCheck, configurationModelInit, configurationModelResult, resetDataModel, resetFormlyModel, addOneColumnHeader, addColumns, FORMLY_PROXY_SERVICE, $formlyProxy;

	return {
		setters: [function (_) {
			_createClass = _['default'];
		}, function (_2) {
			_classCallCheck = _2['default'];
		}, function (_e) {
			configurationModelInit = _e.configurationModelInit;
			configurationModelResult = _e.configurationModelResult;
			resetDataModel = _e.resetDataModel;
			resetFormlyModel = _e.resetFormlyModel;
			addOneColumnHeader = _e.addOneColumnHeader;
			addColumns = _e.addColumns;
		}],
		execute: function () {
			/* global angular */
			'use strict';

			FORMLY_PROXY_SERVICE = '$formlyProxy';

			$formlyProxy = (function () {
				function $formlyProxy() {
					_classCallCheck(this, $formlyProxy);

					this.init();
				}

				_createClass($formlyProxy, [{
					key: 'init',
					value: function init() {}
				}, {
					key: 'initConfigurationEditFromScratch',
					value: function initConfigurationEditFromScratch(configurationModel) {
						angular.copy(configurationModelInit, configurationModel);
					}
				}, {
					key: 'bindConfigurationLines',
					value: function bindConfigurationLines(configurationModel, lines) {
						if (angular.isArray(lines)) {
							var configModelResult = configurationModelResult;
							configModelResult.lines = [].concat(lines);
							angular.copy(configModelResult, configurationModel);
							return this.getMessageObject('configuration model is bound', 'lines are bound to configuration model.');
						} else {
							return this.getErrorObject('lines is not an array', 'Checks lines type, it is not an array.');
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
				}, {
					key: 'getMessageObject',
					value: function getMessageObject(messageTitle, messageBody) {
						var messageObj = {
							noError: true,
							title: messageTitle,
							Message: messageBody
						};
						return messageObj;
					}
				}]);

				return $formlyProxy;
			})();

			$formlyProxy.$inject = [];

			_export('default', $formlyProxy);

			_export('FORMLY_PROXY_SERVICE', FORMLY_PROXY_SERVICE);
		}
	};
});
$__System.register('20', ['1f'], function (_export) {
									/* global angular */
									'use strict';

									var $formlyProxy, FORMLY_PROXY_SERVICE, FORMLY_PROXY_MODULE_NAME;
									return {
																		setters: [function (_f) {
																											$formlyProxy = _f['default'];
																											FORMLY_PROXY_SERVICE = _f.FORMLY_PROXY_SERVICE;
																		}],
																		execute: function () {
																											FORMLY_PROXY_MODULE_NAME = 'formlyProxyModule';

																											_export('default', angular.module(FORMLY_PROXY_MODULE_NAME, []).service(FORMLY_PROXY_SERVICE, $formlyProxy));
																		}
									};
});
$__System.registerDynamic("21", [], true, function ($__require, exports, module) {
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
$__System.registerDynamic('22', ['21'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('21');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});
$__System.registerDynamic("23", ["22"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("22"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic("15", ["23"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("23")["default"];
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
$__System.registerDynamic("16", [], true, function ($__require, exports, module) {
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
$__System.register('24', ['15', '16'], function (_export) {
	var _createClass, _classCallCheck, SELECT_OPTION_MANAGE_NAME, selectOptionManage;

	return {
		setters: [function (_) {
			_createClass = _['default'];
		}, function (_2) {
			_classCallCheck = _2['default'];
		}],
		execute: function () {
			/* global angular */

			'use strict';

			SELECT_OPTION_MANAGE_NAME = 'selectOptionManage';

			selectOptionManage = (function () {
				function selectOptionManage() {
					_classCallCheck(this, selectOptionManage);
				}

				_createClass(selectOptionManage, [{
					key: 'initModel',
					value: function initModel(selectObj) {
						this.resetModel(selectObj);
					}
				}, {
					key: 'resetModel',
					value: function resetModel(selectObj) {
						var zeroModel = { rows: [], parents: [] };
						angular.copy(zeroModel, selectObj);
					}
				}, {
					key: 'isOptionUnique',
					value: function isOptionUnique(selectObj, textValue) {
						for (var i = selectObj.rows.length - 1; i >= 0; i--) {
							if (selectObj.rows[i].option === textValue) return false;
						}
						return true;
					}
				}, {
					key: 'isOptionValidFormat',
					value: function isOptionValidFormat(textValue) {
						if (textValue !== '') return true;
						return false;
					}
				}, {
					key: 'addNewOptionRadio',
					value: function addNewOptionRadio(selectObj, newOptionOptions, parentsBasic, allowEmpty) {
						var fullResponse = {
							resultFlag: false,
							details: ''
						};
						var checkResult = this.validOption(selectObj, newOptionOptions.saisie, allowEmpty);
						if (checkResult.resultFlag === true) {

							var newOption = {
								option: newOptionOptions.saisie,
								description: newOptionOptions.description,
								order: selectObj.rows.length,
								uniqueValue: selectObj.rows.length,
								parentId: {
									id: '',
									name: 'No value',
									value: ''
								},
								referenceId: '',
								'new': true
							};

							selectObj.rows.push(newOption);
							selectObj.parents = parentsBasic.concat(selectObj.rows);

							fullResponse.resultFlag = true;
							fullResponse.details = '';
							return fullResponse;
						} else {
							angular.copy(checkResult, fullResponse);
							return fullResponse;
						}
					}
				}, {
					key: 'addNewOptionBasicSelect',
					value: function addNewOptionBasicSelect(selectObj, newOptionOptions, parentsBasic, allowEmpty) {
						var fullResponse = {
							resultFlag: false,
							details: ''
						};

						var checkResult = this.validOption(selectObj, newOptionOptions.saisie, allowEmpty);
						if (checkResult.resultFlag === true) {

							var newOption = {
								option: newOptionOptions.saisie,
								description: newOptionOptions.description,
								order: selectObj.rows.length,
								uniqueValue: selectObj.rows.length,
								parentId: {
									id: '',
									name: 'No value',
									value: ''
								},
								referenceId: '',
								'new': true
							};

							selectObj.rows.push(newOption);
							selectObj.parents = parentsBasic.concat(selectObj.rows);

							fullResponse.resultFlag = true;
							fullResponse.details = '';

							return fullResponse;
						} else {
							angular.copy(checkResult, fullResponse);
							return fullResponse;
						}
					}
				}, {
					key: 'addNewOptionGroupedSelect',
					value: function addNewOptionGroupedSelect(selectObj, newOptionOptions, newOptionGroup, parentsBasic, allowEmpty) {
						var fullResponse = {
							resultFlag: false,
							details: ''
						};

						var checkResult = this.validOption(selectObj, newOptionOptions.saisie, allowEmpty);

						if (checkResult.resultFlag === true) {

							var newOption = {
								option: newOptionOptions.saisie,
								description: newOptionOptions.description,
								group: newOptionGroup,
								order: selectObj.rows.length,
								uniqueValue: selectObj.rows.length,
								parentId: {
									id: '',
									name: 'No value',
									value: ''
								},
								referenceId: '',
								'new': true
							};

							selectObj.rows.push(newOption);
							selectObj.parents = parentsBasic.concat(selectObj.rows);

							fullResponse.resultFlag = true;
							fullResponse.details = '';
							return fullResponse;
						} else {
							angular.copy(checkResult, fullResponse);
							return fullResponse;
						}
					}
				}, {
					key: 'removeOption',
					value: function removeOption(selectObj, AtIndex, parentsBasic) {
						var fullResponse = {
							resultFlag: false,
							details: ''
						};

						if (AtIndex !== -1) {
							for (var i = 0; i < selectObj.rows.length; i++) {
								if (selectObj.rows[i].parentId.id === selectObj.rows[AtIndex].referenceId) {
									selectObj.rows[i].parentId = {
										id: '',
										name: 'No value',
										value: ''
									};
								}
							}

							selectObj.rows.splice(AtIndex, 1);
							selectObj.parents = parentsBasic.concat(selectObj.rows);

							fullResponse.resultFlag = true;
							fullResponse.details = '';
							return fullResponse;
						} else {
							fullResponse.resultFlag = false;
							fullResponse.details = 'Option index not valid';
							return fullResponse;
						}
					}
				}, {
					key: 'upthisOption',
					value: function upthisOption(selectObj, indexOption, parentsBasic) {
						var fullResponse = {
							resultFlag: false,
							details: ''
						};

						if (indexOption > -1) {
							if (indexOption > 0) {
								if (selectObj.rows[indexOption - 1]) {
									var currentOption = selectObj.rows[indexOption];
									selectObj.rows.splice(indexOption, 1);
									selectObj.rows.splice(indexOption - 1, 0, currentOption);
									selectObj.parents = parentsBasic.concat(selectObj.rows);

									fullResponse.resultFlag = true;
									fullResponse.details = '';
									return fullResponse;
								} else {
									fullResponse.resultFlag = false;
									fullResponse.details = 'Can\'t retreive option from option index';
									return fullResponse;
								}
							} else {
								fullResponse.resultFlag = true;
								fullResponse.details = '';
								return fullResponse;
							}
						} else {
							fullResponse.resultFlag = false;
							fullResponse.details = 'Option index not valid';
							return fullResponse;
						}
					}
				}, {
					key: 'downthisOption',
					value: function downthisOption(selectObj, indexOption, parentsBasic) {
						var fullResponse = {
							resultFlag: false,
							details: ''
						};

						if (indexOption > -1) {
							if (indexOption < selectObj.rows.length - 1) {
								if (selectObj.rows[indexOption + 1]) {
									var currentOption = selectObj.rows[indexOption];
									selectObj.rows.splice(indexOption, 1);
									selectObj.rows.splice(indexOption + 1, 0, currentOption);
									selectObj.parents = parentsBasic.concat(selectObj.rows);

									fullResponse.resultFlag = true;
									fullResponse.details = '';
									return fullResponse;
								} else {
									fullResponse.resultFlag = false;
									fullResponse.details = 'Can\'t retreive option from option index';
									return fullResponse;
								}
							} else {
								fullResponse.resultFlag = true;
								fullResponse.details = '';
								return fullResponse;
							}
						} else {
							fullResponse.resultFlag = false;
							fullResponse.details = 'Option index not valid';
							return fullResponse;
						}
					}
				}, {
					key: 'validOption',
					value: function validOption(selectObj, newOptionText, allowEmpty) {
						var fullResponse = {
							resultFlag: false,
							details: ''
						};

						var allowEmptyOption = typeof allowEmpty === 'undefined' ? false : allowEmpty;

						if (typeof newOptionText === 'undefined') {
							fullResponse.resultFlag = false;
							fullResponse.details = 'Entered option is empty';
							return fullResponse;
						}

						if (allowEmptyOption || newOptionText !== '') {
							for (var i = selectObj.rows.length - 1; i >= 0; i--) {
								if (selectObj.rows[i].option === newOptionText) {
									fullResponse.resultFlag = false;
									fullResponse.details = 'Entered option is not unique';
									return fullResponse;
								}
							}
							fullResponse.resultFlag = true;
							fullResponse.details = '';
							return fullResponse;
						}
						fullResponse.resultFlag = false;
						fullResponse.details = 'Entered option is empty';
						return fullResponse;
					}
				}]);

				return selectOptionManage;
			})();

			selectOptionManage.$inject = [];

			_export('default', selectOptionManage);

			_export('SELECT_OPTION_MANAGE_NAME', SELECT_OPTION_MANAGE_NAME);
		}
	};
});
$__System.register('25', ['24'], function (_export) {
									/* global angular */
									'use strict';

									var selectOptionManage, SELECT_OPTION_MANAGE_NAME, COMMON_MODULE_NAME;
									return {
																		setters: [function (_) {
																											selectOptionManage = _['default'];
																											SELECT_OPTION_MANAGE_NAME = _.SELECT_OPTION_MANAGE_NAME;
																		}],
																		execute: function () {
																											COMMON_MODULE_NAME = 'commonModule';

																											_export('default', angular.module(COMMON_MODULE_NAME, []).service(SELECT_OPTION_MANAGE_NAME, selectOptionManage));
																		}
									};
});
$__System.register('26', [], function (_export) {
  'use strict';

  var DROP_ZONE_DIRECTIVE_NAME;

  function dropzone() {
    var directive = {
      restrict: 'AE',
      link: linkFct
    };
    return directive;

    function linkFct(scope, element, attrs) {
      var config = undefined;
      var dropzone = undefined;
      //console.log(scope);
      config = scope[attrs.dropzone];
      // create a Dropzone for the element with the given options
      dropzone = new Dropzone(element[0], config.options);
      // bind the given event handlers
      angular.forEach(config.eventHandlers, function (handler, event) {
        return dropzone.on(event, handler);
      });
    }
  }

  return {
    setters: [],
    execute: function () {
      DROP_ZONE_DIRECTIVE_NAME = 'dropzone';

      _export('default', dropzone);

      _export('DROP_ZONE_DIRECTIVE_NAME', DROP_ZONE_DIRECTIVE_NAME);
    }
  };
});
$__System.register('27', ['26'], function (_export) {
  'use strict';

  var dropzone, DROP_ZONE_DIRECTIVE_NAME, DROP_ZONE_MODULE_NAME;
  return {
    setters: [function (_) {
      dropzone = _['default'];
      DROP_ZONE_DIRECTIVE_NAME = _.DROP_ZONE_DIRECTIVE_NAME;
    }],
    execute: function () {
      DROP_ZONE_MODULE_NAME = 'easyFirmStepWay.dropzone.module';

      _export('default', angular.module(DROP_ZONE_MODULE_NAME, []).directive(DROP_ZONE_DIRECTIVE_NAME, dropzone));
    }
  };
});
$__System.register('1', ['2', '4', '6', '19', '20', '25', '27', 'e', 'f', '1a', '1d'], function (_export) {
		'use strict';

		var easyFormStepWayConfig, EASY_FORM_VERSION_NAME, EASY_FORM_VERSION_VALUE, formlyConfig, easyFormStepwayMainModule, easyFormStepwayFormlyProxyModule, easyFormStepwayCommonModules, dropZoneModule, translateConfig, easyFormStepWayCoreModule, easyFormStepwayModalModule, easyFormStepwayModalProxyModule, STEP_WAY_MODULE_NAME, STEP_WAY_MODULES_INJECT, mainModule;
		return {
				setters: [function (_) {}, function (_2) {
						easyFormStepWayConfig = _2['default'];
						EASY_FORM_VERSION_NAME = _2.EASY_FORM_VERSION_NAME;
						EASY_FORM_VERSION_VALUE = _2.EASY_FORM_VERSION_VALUE;
				}, function (_3) {
						formlyConfig = _3['default'];
				}, function (_4) {
						easyFormStepwayMainModule = _4['default'];
				}, function (_5) {
						easyFormStepwayFormlyProxyModule = _5['default'];
				}, function (_6) {
						easyFormStepwayCommonModules = _6['default'];
				}, function (_7) {
						dropZoneModule = _7['default'];
				}, function (_e) {
						translateConfig = _e['default'];
				}, function (_f) {
						easyFormStepWayCoreModule = _f['default'];
				}, function (_a) {
						easyFormStepwayModalModule = _a['default'];
				}, function (_d) {
						easyFormStepwayModalProxyModule = _d['default'];
				}],
				execute: function () {
						STEP_WAY_MODULE_NAME = 'eda.easyformGen.stepway';
						STEP_WAY_MODULES_INJECT = [easyFormStepWayCoreModule.name, translateConfig.name, easyFormStepwayMainModule.name, easyFormStepwayModalModule.name, easyFormStepwayModalProxyModule.name, easyFormStepwayFormlyProxyModule.name, easyFormStepwayCommonModules.name, dropZoneModule.name];
						mainModule = angular.module(STEP_WAY_MODULE_NAME, STEP_WAY_MODULES_INJECT).value(EASY_FORM_VERSION_NAME, EASY_FORM_VERSION_VALUE).config(formlyConfig).config(easyFormStepWayConfig);

						_export('default', mainModule);
				}
		};
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=eda.stepway.js.map