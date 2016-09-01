import {
	resetNyaSelect,
	returnControlFromAddCtrlModalModel,
	validKeyUniqueness,
	getResetConfig
} from './edaStepWayEasyFormGen.modalProxy.service.helpers.js';

const CONTROLLER_MODAL_PROXY_SERVICE = '$modalProxy';

class $modalProxy{

	constructor(easyFormSteWayConfig) {
		this.easyFormSteWayConfig	=	easyFormSteWayConfig;
		this.columnRemoved = false;
		this.columnUpdated = false;
	}

	initNyaSelect(nyaSelectObj) {
		return resetNyaSelect(nyaSelectObj);
	}

	getControlsDefinition() {
		let controls = {};
		resetNyaSelect(controls);
		return controls;
	}

	getNyASelectFromSelectedLineColumn(nyaSelectObj, configurationObj, indexLine, numcolumn) {
		resetNyaSelect(nyaSelectObj);
		/**
			* data send to modal controller
			*/
		if (typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions != 'undefined') {

			nyaSelectObj.temporyConfig.selectedControl 		= typeof configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl 									!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl : 'none';
			nyaSelectObj.temporyConfig.formlyLabel 				= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label 						!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label : '';
			nyaSelectObj.temporyConfig.formlyLabelShort 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.labelShort 				!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.labelShort : '';
			nyaSelectObj.temporyConfig.formlyRequired 		= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required 					!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required : false;
			nyaSelectObj.temporyConfig.formlyUnique				= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.unique 						!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.unique : false;
			nyaSelectObj.temporyConfig.formlyDefaultValue	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.defaultValue 			!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.defaultValue : (nyaSelectObj.temporyConfig.selectedControl === 'Checkbox' ? true : '');
			nyaSelectObj.temporyConfig.displayAddOption		= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayAddOption 	!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayAddOption : true;
			nyaSelectObj.temporyConfig.displayEditOption	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayEditOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayEditOption : true;
			nyaSelectObj.temporyConfig.formlyDesciption 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description 			!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description : '';
			nyaSelectObj.temporyConfig.formlyPlaceholder 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder 			!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder : '';
			nyaSelectObj.temporyConfig.formlyOptions 			= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options 					!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options : '';
			nyaSelectObj.temporyConfig.parentId 					= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.parentId 					!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.parentId : '';
			nyaSelectObj.temporyConfig.referenceId 				= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.referenceId 			!= 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.referenceId : '';

			nyaSelectObj.temporyConfig.formlyExpressionProperties = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties 	!= 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties) : {};
			nyaSelectObj.temporyConfig.formlyValidators 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators 										!= 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators) : {};
			nyaSelectObj.temporyConfig.formlyValidation 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation 										!= 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation) : {};

			// particular case : datepicker
			if (nyaSelectObj.temporyConfig.selectedControl === 'Date') {
				nyaSelectObj.temporyConfig.datepickerOptions 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerOptions != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerOptions) : '';
			}

			if (nyaSelectObj.temporyConfig.selectedControl === 'TextInput') {
				nyaSelectObj.temporyConfig.maxLengthOption 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxLengthOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxLengthOption : '';
			}

			if (nyaSelectObj.temporyConfig.selectedControl === 'Number') {
				nyaSelectObj.temporyConfig.numberType 			= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.numberType != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.numberType) : '';
				nyaSelectObj.temporyConfig.minValueOption 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.minValueOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.minValueOption : '';
				nyaSelectObj.temporyConfig.maxValueOption 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxValueOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.maxValueOption : '';
				nyaSelectObj.temporyConfig.incrementalOption 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.incrementalOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.incrementalOption : '';
				nyaSelectObj.temporyConfig.currentYearOption 	= typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.currentYearOption != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.currentYearOption : '';
			}
		}
		return nyaSelectObj;
	}


	bindConfigurationModelFromModalReturn(indexLine, numcolumn, modalAddCtrlModel, configurationObj){

		let extractedProps = returnControlFromAddCtrlModalModel(modalAddCtrlModel);
		configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl 		= extractedProps.selectedControl;
		configurationObj.lines[indexLine].columns[numcolumn].control.type 							= extractedProps.formlyType;
		configurationObj.lines[indexLine].columns[numcolumn].control.subtype 						= extractedProps.formlySubtype;
		//reset templateOptions
		configurationObj
			.lines[indexLine]
			.columns[numcolumn]
			.control.templateOptions 	= {
				label: '',
				labelShort: '',
				required: false,
				unique: false,
				defaultValue: '',
				displayAddOption: true,
				displayEditOption: true,
				description: '',
				placeholder: '',
				options: [],
				parentId: '',
				referenceId: ''
			};
			//then bind templateOptions
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label 							= extractedProps.formlyLabel;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.labelShort 				= extractedProps.formlyLabelShort;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required 					= extractedProps.formlyRequired;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.unique 						= extractedProps.formlyUnique;
		configurationObj.lines[indexLine].columns[numcolumn].control.defaultValue 											= extractedProps.formlyDefaultValue;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayAddOption 	= extractedProps.displayAddOption;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.displayEditOption 	= extractedProps.displayEditOption;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description 				= extractedProps.formlyDesciption;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder 				= extractedProps.formlyPlaceholder;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options 						= extractedProps.formlyOptions;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.parentId 					= extractedProps.parentId;
		configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.referenceId 				= extractedProps.referenceId;
		configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties 				= angular.copy(extractedProps.formlyExpressionProperties);
		configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators 									= angular.copy(extractedProps.formlyValidators);
		configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation 									= angular.copy(extractedProps.formlyValidation);

		//////////////////////////////////////////
		// add additionnal particular properties
		//////////////////////////////////////////
		//-> datepicker : datepickerOptions
		if (configurationObj.lines[indexLine].columns[numcolumn].control.type === 'datepicker') {
			configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerOptions = angular.copy(extractedProps.datepickerOptions);
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

		/**
			* unique key (set only first time) in this model is formly control type + Date.now();
			*/
		let newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();

		if (validKeyUniqueness(newKey, configurationObj) === true){
			configurationObj.lines[indexLine].columns[numcolumn].control.key = newKey;
		}else{
			/**
				* 2nd attempt
				*/
			newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();

			if (validKeyUniqueness(newKey, configurationObj) === true){
				configurationObj.lines[indexLine].columns[numcolumn].control.key = newKey;
			}else{
				/**
					* 3rd attempt
					*/
				newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();
			}
		}
		configurationObj.lines[indexLine].columns[numcolumn].control.edited = true;
	}


	applyConfigToSelectedControl(nyaSelectObj){
		/**
			* used in modal (edit control)
			*/
		for (let i = nyaSelectObj.controls.length - 1; i >= 0; i--) {
			if (nyaSelectObj.controls[i].id === nyaSelectObj.selectedControl) {

					nyaSelectObj.controls[i].formlyLabel 								= nyaSelectObj.temporyConfig.formlyLabel;
					nyaSelectObj.controls[i].formlyLabelShort 					= nyaSelectObj.temporyConfig.formlyLabelShort;
					nyaSelectObj.controls[i].formlyRequired 						= nyaSelectObj.temporyConfig.formlyRequired;
					nyaSelectObj.controls[i].formlyUnique 							= nyaSelectObj.temporyConfig.formlyUnique;
					nyaSelectObj.controls[i].formlyDefaultValue 				= nyaSelectObj.temporyConfig.formlyDefaultValue;
					nyaSelectObj.controls[i].displayAddOption 					= nyaSelectObj.temporyConfig.displayAddOption;
					nyaSelectObj.controls[i].displayEditOption 					= nyaSelectObj.temporyConfig.displayEditOption;
					nyaSelectObj.controls[i].formlyDesciption 					= nyaSelectObj.temporyConfig.formlyDesciption;
					nyaSelectObj.controls[i].formlyPlaceholder 					= nyaSelectObj.temporyConfig.formlyPlaceholder;
					nyaSelectObj.controls[i].formlyOptions 							= nyaSelectObj.temporyConfig.formlyOptions;
					nyaSelectObj.controls[i].parentId 									= nyaSelectObj.temporyConfig.parentId;
					nyaSelectObj.controls[i].referenceId 								= nyaSelectObj.temporyConfig.referenceId;

					if (nyaSelectObj.controls[i].id ==='Date' ) {
						nyaSelectObj.controls[i].datepickerOptions 				= angular.copy(nyaSelectObj.temporyConfig.datepickerOptions);
					}

					if (nyaSelectObj.controls[i].id ==='TextInput' ) {
						nyaSelectObj.controls[i].maxLengthOption 					= nyaSelectObj.temporyConfig.maxLengthOption;
					}

					if (nyaSelectObj.controls[i].id ==='Number' ) {
						nyaSelectObj.controls[i].numberType 							= nyaSelectObj.temporyConfig.numberType;
						nyaSelectObj.controls[i].minValueOption 					= nyaSelectObj.temporyConfig.minValueOption;
						nyaSelectObj.controls[i].maxValueOption 					= nyaSelectObj.temporyConfig.maxValueOption;
						nyaSelectObj.controls[i].incrementalOption 				= nyaSelectObj.temporyConfig.incrementalOption;
						nyaSelectObj.controls[i].currentYearOption 				= nyaSelectObj.temporyConfig.currentYearOption;
					}
				}
		}
	}

	resetTemporyConfig(){
		return getResetConfig();
	}

	/**
		* loading forms will not be able to retrieve formlyExpressionProperties
		* -> here does the job
		*/
	refreshControlFormlyExpressionProperties(configurationModel){
		if (angular.isObject(configurationModel)) {
			//iterates lines
			angular.forEach(configurationModel.lines, (line, indexLine) => {
				angular.forEach(line.columns, (column, controlIndex) => {
					let _controlsDefinition = this.getControlsDefinition();
					angular.forEach(_controlsDefinition.controls, (aControl, aControlIndex) => {
						if (column.control.type === aControl.formlyType &&
								column.control.subtype === aControl.formlySubtype) {
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
	refreshControlFormlyValidators(configurationModel){
		if (angular.isObject(configurationModel)) {
			//iterates lines
			angular.forEach(configurationModel.lines, (line, indexLine) => {
				angular.forEach(line.columns, (column, controlIndex) => {
					let _controlsDefinition = this.getControlsDefinition();
					angular.forEach(_controlsDefinition.controls, (aControl, aControlIndex) => {
						if (column.control.type === aControl.formlyType &&
								column.control.subtype === aControl.formlySubtype) {
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
	refreshControlFormlyValidation(configurationModel){
		if (angular.isObject(configurationModel)) {
			//iterates lines
			angular.forEach(configurationModel.lines, (line, indexLine) => {
				angular.forEach(line.columns, (column, controlIndex) => {
					let _controlsDefinition = this.getControlsDefinition();
					angular.forEach(_controlsDefinition.controls, (aControl, aControlIndex) => {
						if (column.control.type === aControl.formlyType &&
								column.control.subtype === aControl.formlySubtype) {
								//----> update control formlyValidation property
								column.control.formlyValidation = aControl.formlyValidation;
						}
					});
				});
			});
		}
	}


	filterDisabledControl(nyaSelectObj){
		let listAllEnabledControl = this.easyFormSteWayConfig.getListEnabledControl();
		let filteredNyaList = [];
		angular.forEach(listAllEnabledControl, (enabledControl) => {
			angular.forEach(nyaSelectObj.controls, (nyaControl) => {
				if ((nyaControl.id === enabledControl.name) &&
						(enabledControl.enabled === true)) {
					filteredNyaList = filteredNyaList.concat(nyaControl);
				}
			});
		});
		return filteredNyaList;
	}

	getFilteredNyaSelectObject(){
		let newNyaSelectObj = {};
		resetNyaSelect(newNyaSelectObj);
		return angular.copy(this.filterDisabledControl(angular.copy(newNyaSelectObj)));
		//return angular.copy(angular.copy(newNyaSelectObj));
	}
}

$modalProxy.$inject= ['easyFormSteWayConfig'];
export default $modalProxy;
export {CONTROLLER_MODAL_PROXY_SERVICE};
