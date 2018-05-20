import easyformTemplate from './edaStepWayEasyFormGen.main.template.html!text';
import edaStepWayEasyFormGenController, {
	STEP_WAY_MAIN_CONTROLLER_NAME,
	STEP_WAY_MAIN_CONTROLLERAS_NAME
} from  './edaStepWayEasyFormGen.main.controller';



const STEP_WAY_DIRECTIVE_NAME = 'edaStepWayEasyFormGen';

function edaStepWayEasyFormGenDirective(
			$templateCache,
      $timeout,
      $formlyProxy,
      $modalProxy){

	let directive = {
		restrict 	: 'E',
		scope 		: {
			edaEasyFormGeneratorModel : '=',
			edaSaveFormEvent          : '&edaSaveFormEvent'
		},
		controller 		: STEP_WAY_MAIN_CONTROLLER_NAME,
		controllerAs 	: STEP_WAY_MAIN_CONTROLLERAS_NAME,
		replace 			: false,
		template			: easyformTemplate,
		link 					: linkFct
	};
	return directive;

	function linkFct(scope, element, attr, mCtrl){

		//watch "scope.easyFormGeneratorModel"
		scope.$watch(() => scope.edaEasyFormGeneratorModel,
			(newValue, oldValue) => {
				loadExistingConfigurationModel();
			}, true);

		//watch "scope.vm.returnSaveEvent"" = catch saving form event
		scope.$watch(() => scope.vm.returnSaveEvent, (newValue, oldValue) => {
			if (newValue === true) {
				let _easyFormGeneratorModel = {
					formName          				: scope.vm.configuration.formName,
					formDescription						: scope.vm.configuration.formDescription,
					btnSubmitText     				: scope.vm.configuration.submitButtonText,
					btnCancelText     				: scope.vm.configuration.cancelButtonText,
					parentForm     						: scope.vm.configuration.parentForm,
					idFormat									: scope.vm.configuration.idFormat,
					edaFieldsModel    				: scope.vm.configuration.lines,
					edaFieldsModelStringified : angular.toJson(scope.vm.configuration.lines),
					formlyFieldsModel 				: scope.vm.wfFormFieldsOnlyNeededProperties,
					dataModel         				: scope.vm.dataModel
				};
				scope.edaSaveFormEvent({ edaEasyFormGeneratorModel : _easyFormGeneratorModel });
				//back to false, waiting next save event
				scope.returnSaveEvent = false;
			}
		});

		//watch "scope.vm.configuration.idFormat"" = validate if optional tags are correctly opened
		scope.$watch(() => scope.vm.fieldsSpecial, (newValue, oldValue) => {
			if (scope.vm.fieldsSpecial && scope.vm.fieldsSpecial.OPTIONAL_START && scope.vm.fieldsSpecial.OPTIONAL_START.count && scope.vm.fieldsSpecial.OPTIONAL_END && scope.vm.fieldsSpecial.OPTIONAL_END.count) {
				scope.vm.configuration.idFormatValidation = scope.vm.fieldsSpecial.OPTIONAL_START.count === scope.vm.fieldsSpecial.OPTIONAL_END.count;
			}
		}, true);


		function loadExistingConfigurationModel(){
			if(angular.isDefined(scope.edaEasyFormGeneratorModel)){
				let configlines           = returnAttributeConfigurationLinesIfNotEmpty();
				scope.configurationLoaded = {};
				$formlyProxy.bindConfigurationLines(scope.configurationLoaded,configlines);
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
				scope.vm.dataModel                            = returnAttributeDataModelIfNotEmpty();
				scope.vm.configuration.formName           = angular.isString(scope.edaEasyFormGeneratorModel.formName) 			? scope.edaEasyFormGeneratorModel.formName 			: '';
				scope.vm.configuration.formDescription		= angular.isString(scope.edaEasyFormGeneratorModel.formDescription) ? scope.edaEasyFormGeneratorModel.formDescription : '';
				scope.vm.configuration.submitButtonText   = angular.isString(scope.edaEasyFormGeneratorModel.btnSubmitText)	? scope.edaEasyFormGeneratorModel.btnSubmitText	: 'Submit';
				scope.vm.configuration.cancelButtonText   = angular.isString(scope.edaEasyFormGeneratorModel.btnCancelText)	? scope.edaEasyFormGeneratorModel.btnCancelText	: 'Cancel';
				scope.vm.configuration.parentForm   			= scope.edaEasyFormGeneratorModel.parentForm	? scope.edaEasyFormGeneratorModel.parentForm	: null;
				scope.vm.configuration.idFormat 	  			= scope.edaEasyFormGeneratorModel.idFormat	? scope.edaEasyFormGeneratorModel.idFormat	: [];
			}
		}

		function returnAttributeConfigurationLinesIfNotEmpty(){
			let edaEasyFormGeneratorModelToReturn = (
					angular.isArray(scope.edaEasyFormGeneratorModel.edaFieldsModel) ?  (
							scope.edaEasyFormGeneratorModel.edaFieldsModel.length > 0 ?
								scope.edaEasyFormGeneratorModel.edaFieldsModel
							: emptyEdaFieldsModel()
							)
					: emptyEdaFieldsModel()
			);
				return edaEasyFormGeneratorModelToReturn;
		}

		function returnAttributeDataModelIfNotEmpty(){
			var dataModelToReturn = (
					angular.isArray(scope.edaEasyFormGeneratorModel.dataModel)   ?  (
							scope.edaEasyFormGeneratorModel.dataModel.length > 0 ?
							scope.edaEasyFormGeneratorModel.dataModel
							: {}
							)
					: {}
			);
				return dataModelToReturn;
		}

		/**
			* empty fields model : to display at least an empty line
			* otherwise would look like ugly empty line like it were a bug
			*/
		function emptyEdaFieldsModel(){
			var emptyModel = [
				{
					"line": 1,
					"activeColumn": 1,
					"columns": [
						{
							"numColumn": 1,
							"exist": true,
							"control": {
								"type": "none",
								"key": "none",
								"new": true
							}
						}
					]
				}
			];
			return emptyModel;
		}


	}
}


edaStepWayEasyFormGenDirective.$inject = [
	'$templateCache',
	'$timeout',
	'$formlyProxy',
	'$modalProxy'
];


export default edaStepWayEasyFormGenDirective;
export {STEP_WAY_DIRECTIVE_NAME};
