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
$__System.registerDynamic("3", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = "<div class=\"easyFormViewer\">\n\t\n\t<form \tng-submit=\"vm.onSubmit()\"\n\t\t\t\t\tname=\"vm.form\"> \n\t\t<formly-form \tmodel=\"vm.model\" \n\t\t\t\t\t\t\t\t\tfields=\"vm.fields\" \n\t\t\t\t\t\t\t\t\tform=\"vm.form\"> \n\t\t\t\n\t\t\t<div class=\"pull-right\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" \n\t\t\t\t\t\t\t\tng-disabled=\"vm.form.$invalid\"\n\t\t\t\t\t\t\t\tng-click=\"vm.edaSubmitThisDataModel();\">{{vm.submitText}}</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" \n\t\t\t\t\t\t\t\tng-click=\"vm.edaCancelEvent();\">{{vm.cancelText}}</button>\t\t\t\t\n\t\t\t</div>\t\t\t\t\t\t\n\n\t\t</formly-form> \n\t</form>\n\n</div>";
  return module.exports;
});

$__System.register('4', [], function (_export) {
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
$__System.register('5', ['3', '4', '6'], function (_export) {
	/* global angular */
	'use strict';

	var easyFormViewerTemplate, returnAttributeConfigurationLinesIfNotEmpty, EASY_FORM_VIEWER_CONTROLLER, EASY_FORM_VIEWER_CONTROLLERAS, EASY_FORM_VIEWER_DIRECTIVE_NAME;

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
     	* Validation
     	*/
					$modelsTranslator.refreshControlFormlyExpressionProperties(scope.configurationLoaded);
					$modelsTranslator.refreshControlFormlyValidators(scope.configurationLoaded);
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
			easyFormViewerTemplate = _['default'];
		}, function (_2) {
			returnAttributeConfigurationLinesIfNotEmpty = _2.returnAttributeConfigurationLinesIfNotEmpty;
		}, function (_3) {
			EASY_FORM_VIEWER_CONTROLLER = _3.EASY_FORM_VIEWER_CONTROLLER;
			EASY_FORM_VIEWER_CONTROLLERAS = _3.EASY_FORM_VIEWER_CONTROLLERAS;
		}],
		execute: function () {
			EASY_FORM_VIEWER_DIRECTIVE_NAME = 'edaEasyFormViewer';
			edaFormViewerDirective.$inject = ['$modelsTranslator'];

			_export('default', edaFormViewerDirective);

			_export('EASY_FORM_VIEWER_DIRECTIVE_NAME', EASY_FORM_VIEWER_DIRECTIVE_NAME);
		}
	};
});
$__System.register('6', ['7', '8'], function (_export) {
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
				function edaEasyFormViewerController() {
					_classCallCheck(this, edaEasyFormViewerController);

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

			edaEasyFormViewerController.$inject = [];

			_export('default', edaEasyFormViewerController);

			_export('EASY_FORM_VIEWER_CONTROLLER', EASY_FORM_VIEWER_CONTROLLER);

			_export('EASY_FORM_VIEWER_CONTROLLERAS', EASY_FORM_VIEWER_CONTROLLERAS);
		}
	};
});
$__System.register('9', ['5', '6'], function (_export) {
	/* global angular */
	'use strict';

	var edaFormViewerDirective, EASY_FORM_VIEWER_DIRECTIVE_NAME, edaEasyFormViewerController, EASY_FORM_VIEWER_CONTROLLER, FORM_VIEWER_MAIN_MODULE_NAME;
	return {
		setters: [function (_) {
			edaFormViewerDirective = _['default'];
			EASY_FORM_VIEWER_DIRECTIVE_NAME = _.EASY_FORM_VIEWER_DIRECTIVE_NAME;
		}, function (_2) {
			edaEasyFormViewerController = _2['default'];
			EASY_FORM_VIEWER_CONTROLLER = _2.EASY_FORM_VIEWER_CONTROLLER;
		}],
		execute: function () {
			FORM_VIEWER_MAIN_MODULE_NAME = 'edaFormViewerMainModule';

			_export('default', angular.module(FORM_VIEWER_MAIN_MODULE_NAME, []).directive(EASY_FORM_VIEWER_DIRECTIVE_NAME, edaFormViewerDirective).controller(EASY_FORM_VIEWER_CONTROLLER, edaEasyFormViewerController));
		}
	};
});
$__System.register('a', [], function (_export) {
	'use strict';

	var CORE_MODULES, FORMVIEWER_CORE_MODULE_NAME;
	return {
		setters: [],
		execute: function () {
			CORE_MODULES = ['textAngular', 'formly', 'ngAnimate', 'formlyBootstrap', 'ui.bootstrap', 'nya.bootstrap.select'];
			FORMVIEWER_CORE_MODULE_NAME = 'edaEasyFormViewerCore.module';

			_export('default', angular.module(FORMVIEWER_CORE_MODULE_NAME, CORE_MODULES));
		}
	};
});
$__System.registerDynamic("b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
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

$__System.registerDynamic("c", ["b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('b');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("d", ["c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "default": $__require('c'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("7", ["d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require('d')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("8", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.register('e', [], function (_export) {
	/* global angular */

	'use strict';

	var resetNyaSelect, getConfigurationModelInit, getEmptyConfigModelResult, resetDataModel, getErrorObject, getMessageObject, resetFormlyModel, extractTemplateOptionDescription, extractTemplateOptionPlaceholder, extractTemplateOptionType, extractTemplateOptionLabel, extractTemplateOptionLabelShort, extractTemplateOptionParentId, extractTemplateOptionReferenceId, extractTemplateOptionDatepickerOptions, extractTemplateOptionMaxLengthOption, extractTemplateOptionMinValueOption, extractTemplateOptionMaxValueOption, extractTemplateOptionIncrementalOption, extractTemplateOptionCurrentYearOption, extractFormlyExpressionProperties, extractFormlyValidators, extractFormlyValidation, extractTemplateOptionRequired, extractTemplateOptionUnique, extractDefaultValue, extractTemplateOptionDisplayAddOption, extractTemplateOptionDisplayEditOption, extractTemplateOptionOptions, addDatepickerOptionsProperty, addMaxLengthOptionProperty, addMinValueOptionProperty, addMaxValueOptionProperty, addIncrementalOptionProperty, addCurrentYearOptionProperty, addOneColumnHeader, addColumns;

	function addColumnControl(formlyModel, configurationModel, lineIndex, numberOfColumns, columnIndex, FieldGroup) {
		var headerTemplateCol = {
			className: 'col-xs-' + 12 / numberOfColumns,
			template: '<div class="row"><div class=""><h2 class="text-center">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[columnIndex].control) + '<h2><hr/></div></div>'
		};

		var controlCol = {
			className: 'col-xs-' + 12 / numberOfColumns,
			type: typeof configurationModel.lines[lineIndex].columns[columnIndex].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[columnIndex].control.type : 'blank',
			key: typeof configurationModel.lines[lineIndex].columns[columnIndex].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[columnIndex].control.key : 'blank' + Date.now(),
			defaultValue: extractDefaultValue(configurationModel.lines[lineIndex].columns[columnIndex].control),
			templateOptions: {
				type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[columnIndex].control),
				label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[columnIndex].control),
				required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[columnIndex].control),
				unique: extractTemplateOptionUnique(configurationModel.lines[lineIndex].columns[columnIndex].control),
				displayAddOption: extractTemplateOptionDisplayAddOption(configurationModel.lines[lineIndex].columns[columnIndex].control),
				displayEditOption: extractTemplateOptionDisplayEditOption(configurationModel.lines[lineIndex].columns[columnIndex].control),
				placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[columnIndex].control),
				description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[columnIndex].control),
				options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[columnIndex].control),
				referenceId: extractTemplateOptionReferenceId(configurationModel.lines[lineIndex].columns[columnIndex].control),
				parentId: extractTemplateOptionParentId(configurationModel.lines[lineIndex].columns[columnIndex].control)
			},
			expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[columnIndex].control),
			validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[columnIndex].control),
			validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[columnIndex].control)
		};
		//////////////////////////////////////////////
		//datepicker additionnal particular property
		//////////////////////////////////////////////
		if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'datepicker') {
			addDatepickerOptionsProperty(controlCol, configurationModel, lineIndex, 0);
		}
		if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'input') {
			switch (configurationModel.lines[lineIndex].columns[columnIndex].control.subtype) {
				case "":
					addMaxLengthOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					break;

				case "number":
					addMinValueOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					addMaxValueOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					addIncrementalOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					break;

				case "year":
					addCurrentYearOptionProperty(controlCol, configurationModel, lineIndex, columnIndex);
					break;
			}
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
			resetNyaSelect = function resetNyaSelect(nyaSelectObj) {

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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						maxLengthOption: '',
						formlyExpressionProperties: {},
						formlyValidators: {
							textShape: {
								expression: function expression(viewValue, modelValue, scope) {
									var value = modelValue || viewValue;
									return scope.to.maxLengthOption ? (value ? value.length : 0) <= parseInt(scope.to.maxLengthOption) : true;
								},
								message: 'to.label + \' size should have max \' + to.maxLengthOption + \' characters\''
							}
						},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Text input field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
									if (scope.to.required) return returnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						minValueOption: '',
						maxValueOption: '',
						incrementalOption: true,
						formlyExpressionProperties: {},
						formlyValidators: {
							numberShape: {
								expression: function expression(viewValue, modelValue, scope) {
									var value = modelValue || viewValue;
									var returnMin = scope.to.minValueOption ? parseInt(value) >= parseInt(scope.to.minValueOption) : true;
									var returnMax = scope.to.maxValueOption ? parseInt(value) <= parseInt(scope.to.maxValueOption) : true;
									return returnMin && returnMax;
								},
								message: 'to.label + \' is limited to values (\' + to.minValueOption + \' - \' + to.maxValueOption + \')\''
							}
						},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Number field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
									if (scope.to.required) return returnMsg;
								}
							}
						}
					}, {
						id: 'Year',
						name: 'Year',
						subtitle: 'Year',
						group: 'input',
						formlyType: 'input',
						formlySubtype: 'year',
						formlyLabel: '',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						currentYearOption: true,
						formlyExpressionProperties: {},
						formlyValidators: {
							yearShape: {
								expression: function expression(viewValue, modelValue) {
									var value = modelValue || viewValue;
									return true;
									return (/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test(value)
									);
								},
								message: 'to.label + \' is not valid year (0 - 9999)\''
							}
						},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Year field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
									if (scope.to.required) return returnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Password field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},

						formlyValidators: {
							emailShape: {
								expression: function expression(viewValue, modelValue) {
									var value = modelValue || viewValue;
									return (/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test(value)
									);
								},
								message: '$viewValue + \' is not a valid email\''
							}
						},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Email field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
									//check if validation is really dued to require validation
									//and not another validation like emailShape validator
									if (scope.to.required) return returnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						datepickerOptions: { format: 'dd-MMMM-yyyy' },
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Date field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Textarea field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this RichTextEditor field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Password field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Checkbox field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Basic select field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
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
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyValidation: {
							messages: {
								required: function required(viewValue, modelValue, scope) {
									//return a required validation message :
									//-> '<label as name> is required '
									//-> or if not exists or empty just 'this field is required'
									var defaultReturnMsg = 'this Grouped Select field is required';
									var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
									return returnMsg;
								}
							}
						}
					}],
					selectedControl: 'none',
					temporyConfig: {
						selectedControl: 'none',
						formlyLabel: 'label',
						formlyLabelShort: '',
						formlyRequired: false,
						formlyUnique: false,
						displayAddOption: true,
						displayEditOption: true,
						formlyDesciption: '',
						formlyPlaceholder: '',
						formlyOptions: [],
						parentId: '',
						referenceId: '',
						//expressions/validation fields
						formlyExpressionProperties: {},
						formlyValidators: {},
						formlyValidation: {}
					}

				};

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
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.maxLengthOption !== 'undefined' ? obj.templateOptions.maxLengthOption : '' : '';
			};

			extractTemplateOptionMinValueOption = function extractTemplateOptionMinValueOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.minValueOption !== 'undefined' ? obj.templateOptions.minValueOption : '' : '';
			};

			extractTemplateOptionMaxValueOption = function extractTemplateOptionMaxValueOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.maxValueOption !== 'undefined' ? obj.templateOptions.maxValueOption : '' : '';
			};

			extractTemplateOptionIncrementalOption = function extractTemplateOptionIncrementalOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.incrementalOption !== 'undefined' ? obj.templateOptions.incrementalOption : '' : '';
			};

			extractTemplateOptionCurrentYearOption = function extractTemplateOptionCurrentYearOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.currentYearOption !== 'undefined' ? obj.templateOptions.currentYearOption : '' : '';
			};

			extractFormlyExpressionProperties = function extractFormlyExpressionProperties(obj) {
				return typeof obj.formlyExpressionProperties !== 'undefined' ? angular.copy(obj.formlyExpressionProperties) : {};
			};

			extractFormlyValidators = function extractFormlyValidators(obj) {
				return typeof obj.formlyValidators !== 'undefined' ? angular.copy(obj.formlyValidators) : {};
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
				return typeof obj.defaultValue !== 'undefined' ? obj.defaultValue : obj.type == 'checkbox' ? false : '';
			};

			extractTemplateOptionDisplayAddOption = function extractTemplateOptionDisplayAddOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.displayAddOption !== 'undefined' ? obj.templateOptions.displayAddOption : true : true;
			};

			extractTemplateOptionDisplayEditOption = function extractTemplateOptionDisplayEditOption(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.displayEditOption !== 'undefined' ? obj.templateOptions.displayEditOption : true : true;
			};

			extractTemplateOptionOptions = function extractTemplateOptionOptions(obj) {
				return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.options !== 'undefined' ? obj.templateOptions.options : '' : '';
			};

			addDatepickerOptionsProperty = function addDatepickerOptionsProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.datepickerOptions = extractTemplateOptionDatepickerOptions(configurationModel.lines[lineIndex].columns[position].control);
			};

			addMaxLengthOptionProperty = function addMaxLengthOptionProperty(fieldToPush, configurationModel, lineIndex, position) {
				return fieldToPush.templateOptions.maxLengthOption = extractTemplateOptionMaxLengthOption(configurationModel.lines[lineIndex].columns[position].control);
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

			addOneColumnHeader = function addOneColumnHeader(formlyModel, configurationModel, lineIndex) {
				/**
    	* text header is stored in "description" in templateOtion model
    	*/
				var headerTemplateCol0 = '<div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2 class="text-center">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control) + '<h2></div></div><hr/>';
				formlyModel.push({
					template: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'header' ? headerTemplateCol0 : '<div></div>' : '<div></div>'
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
$__System.register('f', ['7', '8', 'e'], function (_export) {
	var _createClass, _classCallCheck, resetNyaSelect, getEmptyConfigModelResult, resetDataModel, getErrorObject, getMessageObject, resetFormlyModel, addOneColumnHeader, addColumns, MODEL_TRANSLATOR_SERVICE, $modelsTranslator;

	return {
		setters: [function (_) {
			_createClass = _['default'];
		}, function (_2) {
			_classCallCheck = _2['default'];
		}, function (_e) {
			resetNyaSelect = _e.resetNyaSelect;
			getEmptyConfigModelResult = _e.getEmptyConfigModelResult;
			resetDataModel = _e.resetDataModel;
			getErrorObject = _e.getErrorObject;
			getMessageObject = _e.getMessageObject;
			resetFormlyModel = _e.resetFormlyModel;
			addOneColumnHeader = _e.addOneColumnHeader;
			addColumns = _e.addColumns;
		}],
		execute: function () {
			/* global angular */
			'use strict';

			MODEL_TRANSLATOR_SERVICE = '$modelsTranslator';

			$modelsTranslator = (function () {
				function $modelsTranslator() {
					_classCallCheck(this, $modelsTranslator);
				}

				_createClass($modelsTranslator, [{
					key: 'initNyaSelect',
					value: function initNyaSelect(nyaSelectObj) {
						return resetNyaSelect(nyaSelectObj);
					}

					/**
     	* get all controls definition (nyaSelectObj)
     	*
     	* needed to bind these properties :
     	*
     	* formlyExpressionProperties: {},
     	* formlyValidators: {},
     	* formlyValidation
     	*/
				}, {
					key: 'getControlsDefinition',
					value: function getControlsDefinition() {
						var controls = {};
						resetNyaSelect(controls);
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
											column.control.formlyExpressionProperties = aControl.formlyExpressionProperties;
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
											column.control.formlyValidators = aControl.formlyValidators;
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
						var _this3 = this;

						if (angular.isObject(configurationModel)) {
							//iterates lines
							angular.forEach(configurationModel.lines, function (line) {
								angular.forEach(line.columns, function (column) {
									var _controlsDefinition = _this3.getControlsDefinition();
									angular.forEach(_controlsDefinition.controls, function (aControl) {
										if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
											//----> update control formlyValidation property
											column.control.formlyValidation = aControl.formlyValidation;
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

			$modelsTranslator.$inject = [];

			_export('default', $modelsTranslator);

			_export('MODEL_TRANSLATOR_SERVICE', MODEL_TRANSLATOR_SERVICE);
		}
	};
});

// getConfigurationModelInit,
$__System.register('10', ['f'], function (_export) {
	/* global angular */
	'use strict';

	var $modelsTranslator, MODEL_TRANSLATOR_SERVICE, FORM_VIEWER_MODEL_TRANSLATOR_MODULE_NAME;
	return {
		setters: [function (_f) {
			$modelsTranslator = _f['default'];
			MODEL_TRANSLATOR_SERVICE = _f.MODEL_TRANSLATOR_SERVICE;
		}],
		execute: function () {
			FORM_VIEWER_MODEL_TRANSLATOR_MODULE_NAME = 'edaFormViewerModelTranslatorModule';

			_export('default', angular.module(FORM_VIEWER_MODEL_TRANSLATOR_MODULE_NAME, []).service(MODEL_TRANSLATOR_SERVICE, $modelsTranslator));
		}
	};
});
$__System.register("11", [], function (_export) {
	"use strict";

	var richTextTemplate, blankTemplate, subTitleTemplate, basicSelectTemplate, groupedSelectTemplate, datepickerTemplate, validationTemplate;
	return {
		setters: [],
		execute: function () {
			richTextTemplate = "\n\t<text-angular name=\"{{id}}\"\n\t\tclass=\"richTextAngular\"\n\t\tng-model=\"model[options.key || index]\">\n\t</text-angular>";
			blankTemplate = "<div></div>";
			subTitleTemplate = "\n\t<div class=\"row\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"text-center\">\n\t\t\t{{options.templateOptions.placeholder}}\n\t\t\t<h4><hr/>\n\t\t</div>\n\t</div>";
			basicSelectTemplate = "\n<ol\n\tclass=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n\tng-model=\"model[options.key || index]\"\n\tid=\"{{id}}\"\n\tdisabled=\"options.templateOptions.options.length === 0\">\n\t<li class=\"nya-bs-option\" nya-bs-option=\"option in options.templateOptions.options\">\n\t\t<a>{{option.name}}</a>\n\t</li>\n</ol>";
			groupedSelectTemplate = "\n\t<ol class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n\t\tng-model=\"model[options.key || index]\"\n\t\tdata-live-search=\"true\"\n\t\tdisabled=\"options.templateOptions.options.length === 0\">\n\t\t<li nya-bs-option=\"option in  options.templateOptions.options group by option.group\">\n\t\t\t<span class=\"dropdown-header\">{{$group}}</span>\n\t\t\t<a>\n\t\t\t\t<span>{{option.name}}</span>\n\t\t\t\t<span class=\"glyphicon glyphicon-ok check-mark\"></span>\n\t\t\t</a>\n\t\t</li>\n\t</ol>";
			datepickerTemplate = "\n  <p class=\"input-group\">\n    <span class=\"input-group-btn\">\n        <button\n          type=\"button\"\n          class=\"btn btn-default\"\n          ng-click=\"formlyDatePicker.open($event)\">\n          <i class=\"glyphicon glyphicon-calendar\"></i>\n        </button>\n    </span>\n    <input  type=\"text\"\n            id=\"{{::id}}\"\n            name=\"{{::id}}\"\n            ng-model=\"model[options.key]\"\n            class=\"form-control\"\n            ng-click=\"datepicker.open($event)\"\n            uib-datepicker-popup=\"{{to.datepickerOptions.format}}\"\n            is-open=\"datepicker.opened\"\n            datepicker-options=\"to.datepickerOptions\"\n    />\n  </p>\n  ";
			validationTemplate = "\n\t<div class=\"formly-template-wrapper form-group\"\n\t\t\t\t\t\tng-class=\"{'has-error': options.validation.errorExistsAndShouldBeVisible}\">\n\t\t\t\t<formly-transclude></formly-transclude>\n\t\t\t\t<div class=\"validation\"\n\t\t\t\t\t\t\tng-if=\"options.validation.errorExistsAndShouldBeVisible\"\n\t\t\t\t\t\t\tng-messages=\"options.formControl.$error\">\n\t\t\t\t\t<div ng-messages-include=\"validation.html\"></div>\n\t\t\t\t\t<div ng-message=\"{{::name}}\" ng-repeat=\"(name, message) in ::options.validation.messages\">\n\t\t\t\t\t\t{{message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>";

			_export("richTextTemplate", richTextTemplate);

			_export("blankTemplate", blankTemplate);

			_export("subTitleTemplate", subTitleTemplate);

			_export("basicSelectTemplate", basicSelectTemplate);

			_export("groupedSelectTemplate", groupedSelectTemplate);

			_export("datepickerTemplate", datepickerTemplate);

			_export("validationTemplate", validationTemplate);
		}
	};
});
$__System.register('12', ['11'], function (_export) {
  'use strict';

  var richTextTemplate, blankTemplate, subTitleTemplate, basicSelectTemplate, groupedSelectTemplate, datepickerTemplate, validationTemplate;

  function edaEasyFormViewerConfig(formlyConfigProvider) {

    formlyConfigProvider.setType({
      name: 'richEditor',
      template: richTextTemplate,
      wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
      name: 'blank',
      template: blankTemplate
    });

    formlyConfigProvider.setType({
      name: 'subTitle',
      template: subTitleTemplate
    });

    formlyConfigProvider.setType({
      name: 'basicSelect',
      template: basicSelectTemplate,
      wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
      name: 'groupedSelect',
      template: groupedSelectTemplate,
      wrapper: ['bootstrapLabel', 'bootstrapHasError']
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
        ngModelAttrs: ngModelAttrs,
        templateOptions: {
          datepickerOptions: {
            format: 'dd/MM/yyyy',
            initDate: new Date(),
            showWeeks: false
          }
        }
      },
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      controller: ['$scope', function ($scope) {
        // console.info('ui calendar init');
        $scope.datepicker = {};

        // make sure the initial value is of type DATE!
        var currentModelVal = $scope.model[$scope.options.key];
        if (typeof currentModelVal == 'string') {
          $scope.model[$scope.options.key] = new Date(currentModelVal);
        }

        $scope.datepicker.opened = false;
        $scope.datepicker.open = function ($event) {
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
    formlyConfigProvider.setWrapper([{
      template: validationTemplate
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
  }

  return {
    setters: [function (_) {
      richTextTemplate = _.richTextTemplate;
      blankTemplate = _.blankTemplate;
      subTitleTemplate = _.subTitleTemplate;
      basicSelectTemplate = _.basicSelectTemplate;
      groupedSelectTemplate = _.groupedSelectTemplate;
      datepickerTemplate = _.datepickerTemplate;
      validationTemplate = _.validationTemplate;
    }],
    execute: function () {
      edaEasyFormViewerConfig.$inject = ['formlyConfigProvider'];

      _export('default', edaEasyFormViewerConfig);
    }
  };
});
$__System.registerDynamic("13", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "stepway": {"version": "1.2.0"},
    "dragdropway": {"version": "1.2.0"},
    "formviewer": {"version": "1.2.0"}
  };
  return module.exports;
});

$__System.register('1', ['2', '9', '10', '12', '13', 'a'], function (_export) {
	'use strict';

	var edaFormViewerMainModule, edaFormViewerModelTranslatorModule, edaEasyFormViewerConfig, easyFormConfig, edaFormViewerCoreModule, DEP_TO_INJECT_IN_MAIN, EASY_FORM_VIEWER_VERSION_NAME, EASY_FORM_VIEWER_VERSION_VALUE, MAIN_MODULE_NAME, mainModule;
	return {
		setters: [function (_) {}, function (_2) {
			edaFormViewerMainModule = _2['default'];
		}, function (_3) {
			edaFormViewerModelTranslatorModule = _3['default'];
		}, function (_4) {
			edaEasyFormViewerConfig = _4['default'];
		}, function (_5) {
			easyFormConfig = _5['default'];
		}, function (_a) {
			edaFormViewerCoreModule = _a['default'];
		}],
		execute: function () {
			DEP_TO_INJECT_IN_MAIN = [edaFormViewerMainModule.name, edaFormViewerCoreModule.name, edaFormViewerModelTranslatorModule.name];
			EASY_FORM_VIEWER_VERSION_NAME = 'easyFormViewerVersion';
			EASY_FORM_VIEWER_VERSION_VALUE = easyFormConfig.formviewer.version;
			MAIN_MODULE_NAME = 'eda.easyFormViewer';
			mainModule = angular.module(MAIN_MODULE_NAME, DEP_TO_INJECT_IN_MAIN).config(edaEasyFormViewerConfig).value(EASY_FORM_VIEWER_VERSION_NAME, EASY_FORM_VIEWER_VERSION_VALUE);

			_export('default', mainModule);
		}
	};
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=eda.easyFormViewer.js.map