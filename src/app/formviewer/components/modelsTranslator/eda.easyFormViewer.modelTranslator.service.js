/* global angular */
import {
	resetNyaSelect,
	// getConfigurationModelInit,
	getEmptyConfigModelResult,
	resetDataModel,
	getErrorObject,
	getMessageObject,
	resetFormlyModel,
	addOneColumnHeader,
	addColumns
}		from './eda.easyFormViewer.modelTranslator.service.helpers';

const MODEL_TRANSLATOR_SERVICE = '$modelsTranslator';



class $modelsTranslator{

	constructor($translate, $http, $q, $timeout){
		this.$translate = $translate;
		this.$http = $http;
		this.$q = $q;
		this.$timeout = $timeout;
	}


	initNyaSelect(nyaSelectObj){
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
	getControlsDefinition(){
		let controls = {};
		resetNyaSelect(controls, this.$translate, this.$http, this.$q, this.$timeout);
		return controls;
	}


	/**
		* loading forms will not be able to retrieve formlyExpressionProperties
		* -> here does the job
		*/
	refreshControlFormlyExpressionProperties(configurationModel){
		if (angular.isObject(configurationModel)) {
			//iterates lines
			angular.forEach(configurationModel.lines, (line) => {
				angular.forEach(line.columns, (column) => {
					let _controlsDefinition = this.getControlsDefinition();
					angular.forEach(_controlsDefinition.controls, (aControl) => {
						if (column.control.type === aControl.formlyType &&
							column.control.subtype === aControl.formlySubtype) {
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
	refreshControlFormlyValidators(configurationModel){
		if (angular.isObject(configurationModel)) {
			//iterates lines
			angular.forEach(configurationModel.lines, (line) => {
				angular.forEach(line.columns, (column) => {
					let _controlsDefinition = this.getControlsDefinition();
					angular.forEach(_controlsDefinition.controls, (aControl) => {
						if (column.control.type === aControl.formlyType &&
							column.control.subtype === aControl.formlySubtype) {
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
	refreshControlFormlyAsyncValidators(configurationModel){
		if (angular.isObject(configurationModel)) {
			//iterates lines
			angular.forEach(configurationModel.lines, (line) => {
				angular.forEach(line.columns, (column) => {
					let _controlsDefinition = this.getControlsDefinition();
					angular.forEach(_controlsDefinition.controls, (aControl) => {
						if (column.control.type === aControl.formlyType &&
							column.control.subtype === aControl.formlySubtype) {
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
	refreshControlFormlyValidation(configurationModel){
		if (angular.isObject(configurationModel)) {
			//iterates lines
			angular.forEach(configurationModel.lines, (line) => {
				angular.forEach(line.columns, (column) => {
					let _controlsDefinition = this.getControlsDefinition();
					angular.forEach(_controlsDefinition.controls, (aControl) => {
						if (column.control.type === aControl.formlyType &&
							column.control.subtype === aControl.formlySubtype) {
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


	bindConfigurationLines(configurationModel, lines){
		if(angular.isArray(lines)){
			let configurationModelResult 		= getEmptyConfigModelResult();
			configurationModelResult.lines	= [].concat(lines);
			angular.copy(configurationModelResult, configurationModel);
			return getMessageObject(`configuration model is bound`,`lines are bound to configuration model.`);
		}else{
			return getErrorObject(`lines is not an array`, `Checks lines type, it is not an array.`);
		}
	}


	applyConfigurationToformlyModel(configurationModel, formlyModel, formlyDataModel){
		resetFormlyModel(formlyModel);
		resetDataModel(formlyDataModel);
		/**
			* manage header here line0
			*/
		var lineNumber = configurationModel.lines.length;
		let columnsCount = 0;
		for (let i = 0; i < lineNumber; i++) {
			columnsCount = configurationModel.lines[i].columns.length;
			if (columnsCount === 1 && configurationModel.lines[i].columns[0].control.type === 'header') {
				addOneColumnHeader(formlyModel, configurationModel, i);
			} else {
				addColumns(formlyModel, configurationModel, i, columnsCount);
			}
		}
	}
}

$modelsTranslator.$inject = ['$translate', '$http', '$q', '$timeout'];

export default $modelsTranslator;

export {MODEL_TRANSLATOR_SERVICE};
