/* global angular */
import {
	configurationModelInit,
	configurationModelResult,
	resetDataModel,
	resetFormlyModel,
	addOneColumnHeader,
	addColumns
} from './edaStepWayEasyFormGen.formlyProxy.service.helpers';


const FORMLY_PROXY_SERVICE = '$formlyProxy';

class $formlyProxy {

	constructor() {
		this.init();
	}

	init() {

	}

	initConfigurationEditFromScratch(configurationModel) {
		angular.copy(configurationModelInit, configurationModel);
	}

	bindConfigurationLines(configurationModel, lines) {
		if(angular.isArray(lines)) {
			let configModelResult = configurationModelResult;
			configModelResult.lines = [].concat(lines);
			angular.copy(configModelResult, configurationModel);
			return this.getMessageObject(`configuration model is bound`,`lines are bound to configuration model.`);
		}else{
			return this.getErrorObject(`lines is not an array`, `Checks lines type, it is not an array.`);
		}
	}

	applyConfigurationToformlyModel(configurationModel, formlyModel, formlyDataModel) {
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

	getMessageObject(messageTitle, messageBody) {
		let messageObj = {
			noError : true,
			title		: messageTitle,
			Message	: messageBody
		};
		return messageObj;
	}

}

$formlyProxy.$inject = [];
export default $formlyProxy;
export {FORMLY_PROXY_SERVICE};
