/* global angular */

const SELECT_OPTION_MANAGE_NAME = 'selectOptionManage';

class selectOptionManage {

	constructor() {

	}

	initModel(selectObj) {
		this.resetModel(selectObj);
	}

	resetModel(selectObj) {
		let zeroModel = { rows:[] };
		angular.copy(zeroModel, selectObj);
	}

	isOptionUnique(selectObj, textValue) {
		for (let i = selectObj.rows.length - 1; i >= 0; i--) {
			if (selectObj.rows[i].option === textValue) return false;
		}
		return true;
	}

	isOptionValidFormat(textValue) {
		if (textValue !== '')  return true;
		return false;
	}

	addNewOptionRadio(selectObj, newOptionText){
		let fullResponse = {
			resultFlag 	: false,
			details 		: ''
		};
		let checkResult = this.validOption(selectObj, newOptionText);
		if (checkResult.resultFlag === true){

			let newOption = {
				option			: newOptionText,
				order				: selectObj.rows.length,
				parentId 		: '',
				referenceId : ''
			};

			selectObj.rows.push(newOption);
			fullResponse.resultFlag = true;
			fullResponse.details = '';
			return fullResponse;

		}else{
			angular.copy(checkResult, fullResponse);
			return fullResponse;
		}
	}

	addNewOptionBasicSelect(selectObj, newOptionText){
		let fullResponse = {
			resultFlag 	: false,
			details 		: ''
		};

		let checkResult = this.validOption(selectObj, newOptionText);
		if (checkResult.resultFlag === true){

			let newOption = {
				option			: newOptionText,
				order				: selectObj.rows.length,
				parentId 		: '',
				referenceId : ''
			};

			selectObj.rows.push(newOption);
			fullResponse.resultFlag = true;
			fullResponse.details 		= '';

			return fullResponse;
		}else{
			angular.copy(checkResult, fullResponse);
			return fullResponse;
		}
	}

	addNewOptionGroupedSelect(selectObj, newOptionText, newOptionGroup){
		let fullResponse = {
					resultFlag 	: false,
					details 		: ''
				};

		let checkResult = this.validOption(selectObj, newOptionText);

		if (checkResult.resultFlag === true){

			let newOption = {
				option			: newOptionText,
				group				: newOptionGroup,
				order				: selectObj.rows.length,
				parentId 		: '',
				referenceId : ''
			};

			selectObj.rows.push(newOption);
			fullResponse.resultFlag = true;
			fullResponse.details = '';
			return fullResponse;

		}else{
			angular.copy(checkResult, fullResponse);
			return fullResponse;
		}
	}


	removeOption(selectObj, AtIndex) {
		let fullResponse = {
			resultFlag : false,
			details : ''
		};

		if (AtIndex !== -1) {
			selectObj.rows.splice(AtIndex, 1);
			fullResponse.resultFlag = true;
			fullResponse.details= '';
			return fullResponse;
		}else{
			fullResponse.resultFlag = false;
			fullResponse.details= 'Option index not valid';
			return fullResponse;
		}
	}



	upthisOption(selectObj, indexOption){
		var fullResponse = {
			resultFlag : false,
			details : ''
		};

		if (indexOption > -1) {
			if (indexOption > 0) {
				if (selectObj.rows[indexOption - 1]) {
					let currentOption = selectObj.rows[indexOption];
					selectObj.rows.splice(indexOption , 1);
					selectObj.rows.splice((indexOption - 1), 0, currentOption);
					fullResponse.resultFlag = true;
					fullResponse.details 		= '';
					return fullResponse;
				}else{
					fullResponse.resultFlag = false;
					fullResponse.details 		= `Can't retreive option from option index`;
					return fullResponse;
				}
			}else{
					fullResponse.resultFlag = true;
					fullResponse.details 		= '';
					return fullResponse;
			}
		}else{
			fullResponse.resultFlag = false;
			fullResponse.details 		= 'Option index not valid';
			return fullResponse;
		}
	}


	downthisOption(selectObj, indexOption){
		let fullResponse = {
			resultFlag : false,
			details : ''
		};

		if (indexOption > -1) {
			if (indexOption < selectObj.rows.length - 1){
				if (selectObj.rows[indexOption + 1]) {
					let currentOption = selectObj.rows[indexOption];
					selectObj.rows.splice(indexOption , 1);
					selectObj.rows.splice((indexOption + 1), 0, currentOption);
					fullResponse.resultFlag = true;
					fullResponse.details 		= '';
					return fullResponse;
				}else{
					fullResponse.resultFlag = false;
					fullResponse.details 		= `Can't retreive option from option index`;
					return fullResponse;
				}
			}else{
					fullResponse.resultFlag = true;
					fullResponse.details 		= '';
				return fullResponse;
			}
		}else{
			fullResponse.resultFlag = false;
			fullResponse.details = 'Option index not valid';
			return fullResponse;
		}
	}



	validOption(selectObj, newOptionText){
			let fullResponse = {
						resultFlag  : false,
						details     : ''
					};

			if (typeof newOptionText === 'undefined') {
				fullResponse.resultFlag = false;
				fullResponse.details    = 'Entered option is empty';
				return fullResponse;
			}

			if (newOptionText !== '') {
				for (let i = selectObj.rows.length - 1; i >= 0; i--) {
					if (selectObj.rows[i].option === newOptionText) {
						fullResponse.resultFlag = false;
						fullResponse.details    = 'Entered option is not unique';
						return fullResponse;
					}
				}
				fullResponse.resultFlag = true;
				fullResponse.details    = '';
				return fullResponse;
			}
			fullResponse.resultFlag = false;
			fullResponse.details    = 'Entered option is empty';
			return fullResponse;
	}


}


selectOptionManage.$inject = [];

export default selectOptionManage;
export {SELECT_OPTION_MANAGE_NAME};

