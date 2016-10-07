/* global angular */

const configurationModelInit = {
	activeLine: 1,
	listConfigStep: [
										'init',
										'first',
										'second',
										'third'
									],
	stepIndicators:  [
											true,
											false,
											false,
											false
										],
	configStepCounter : 0,
	submitButtonText  : 'submit',
	cancelButtonText  : 'cancel',
	lines: [
	{
		line					:1,
		activeColumn 	: 1,
		columns				: [
		{
			numColumn: 1,
			exist:true,
			control: {
				type:'none',
				key: 'none',
				defaultValue: '',
				new: true
				// templateOptions: {
				//                     label: 'none',
				//                     placeholder: 'none',
				//                     required: false,
				//                     description: 'Descriptive text'
				//                   }
			}
			}
		]
		}
	]
};

const configurationModelResult =  {
	activeLine: 1,
	listConfigStep: [
										'init',
										'first',
										'second',
										'third'
									],
	stepIndicators:  [
											true,
											false,
											false,
											false
										],
	configStepCounter	: 0,
	submitButtonText 	: 'submit',
	cancelButtonText	: 'cancel',
	lines: []
};



const isTemplateOptionDefined = (obj)=>{
	return typeof obj.templateOptions !== 'undefined' ? true : false;
};

const extractTemplateOptionLabel = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.label !== 'undefined'? obj.templateOptions.label: '') : '';
};

const extractTemplateOptionLabelShort = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.labelShort !== 'undefined'? obj.templateOptions.labelShort: '') : '';
};

const extractTemplateOptionParentId = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.parentId !== 'undefined'? obj.templateOptions.parentId: '') : '';
};

const extractTemplateOptionReferenceId = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.referenceId !== 'undefined'? obj.templateOptions.referenceId: '') : '';
};

const extractTemplateOptionDatepickerOptions= (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.datepickerOptions !== 'undefined'? angular.copy(obj.templateOptions.datepickerOptions) : {format: ''}) : {format: ''};
};

const extractTemplateOptionMaxLengthOption= (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.maxLengthOption !== 'undefined'? obj.templateOptions.maxLengthOption: null) : null;
};

const extractTemplateOptionMinValueOption= (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.minValueOption !== 'undefined'? obj.templateOptions.minValueOption: null) : null;
};

const extractTemplateOptionMaxValueOption= (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.maxValueOption !== 'undefined'? obj.templateOptions.maxValueOption: null) : null;
};

const extractTemplateOptionNumberType= (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.numberType !== 'undefined'? angular.copy(obj.templateOptions.numberType) : 'integer') : 'integer';
};

const extractTemplateOptionIncrementalOption= (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.incrementalOption !== 'undefined'? obj.templateOptions.incrementalOption: false) : false;
};

const extractTemplateOptionCurrentYearOption= (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.currentYearOption !== 'undefined'? obj.templateOptions.currentYearOption: false) : false;
};

const extractTemplateOptionCurrentDateOption= (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.currentDateOption !== 'undefined'? obj.templateOptions.currentDateOption: false) : false;
};

const extractTemplateOptionAllowEmptyOption= (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.allowEmptyOption !== 'undefined'? obj.templateOptions.allowEmptyOption: false) : false;
};

const extractFormlyExpressionProperties = (obj)=>{
	return  typeof obj.formlyExpressionProperties !== 'undefined' ? angular.copy(obj.formlyExpressionProperties) : {};
};

const extractFormlyValidators = (obj)=>{
	return  typeof obj.formlyValidators !== 'undefined' ? angular.copy(obj.formlyValidators): {};
};

const extractFormlyValidation = (obj)=>{
	return  typeof obj.formlyValidation !== 'undefined' ?  angular.copy(obj.formlyValidation) : {};
};

const extractTemplateOptionRequired = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.required !== 'undefined'? obj.templateOptions.required: false) : false;
};

const extractTemplateOptionUnique = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.unique !== 'undefined'? obj.templateOptions.unique: false) : false;
};

const extractDefaultValue = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.defaultValue !== 'undefined'? obj.templateOptions.defaultValue: (obj.type == 'checkbox' ? false : '')) : (obj.type == 'checkbox' ? false : '');
};

const extractTemplateOptionDisplayAddOption = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.displayAddOption !== 'undefined'? obj.templateOptions.displayAddOption: true) : true;
};

const extractTemplateOptionDisplayEditOption = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.displayEditOption !== 'undefined'? obj.templateOptions.displayEditOption: true) : true;
};

const extractTemplateOptionAllowMultiple = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.allowMultiple !== 'undefined'? obj.templateOptions.allowMultiple: 1) : 1;
};

const extractTemplateOptionOptions = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.options !== 'undefined'? obj.templateOptions.options: '') : '';
};

const extractTemplateOptionType = (obj)=>{
	return  typeof obj.subtype !== 'undefined'? obj.subtype: '';
};

const extractTemplateOptionPlaceholder = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.placeholder !== 'undefined'? obj.templateOptions.placeholder: '') : '';
};

const extractTemplateOptionDescription = (obj)=>{
	return  typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.description !== 'undefined'? obj.templateOptions.description: '') : '';
};


const addDatepickerOptionsProperty = (fieldToPush, configurationModel,lineIndex, position) => {
		fieldToPush.templateOptions.datepickerOptions = extractTemplateOptionDatepickerOptions(configurationModel.lines[lineIndex].columns[position].control);
};

const addMaxLengthOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => {
		fieldToPush.templateOptions.maxLengthOption = extractTemplateOptionMaxLengthOption(configurationModel.lines[lineIndex].columns[position].control);
};

const addAllowEmptyOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => {
		fieldToPush.templateOptions.allowEmptyOption = extractTemplateOptionAllowEmptyOption(configurationModel.lines[lineIndex].columns[position].control);
};

const addNumberTypeProperty = (fieldToPush, configurationModel,lineIndex, position) => {
		fieldToPush.templateOptions.minValueOption = extractTemplateOptionNumberType(configurationModel.lines[lineIndex].columns[position].control);
};

const addMinValueOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => {
		fieldToPush.templateOptions.minValueOption = extractTemplateOptionMinValueOption(configurationModel.lines[lineIndex].columns[position].control);
};

const addMaxValueOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => {
		fieldToPush.templateOptions.maxValueOption = extractTemplateOptionMaxValueOption(configurationModel.lines[lineIndex].columns[position].control);
};

const addIncrementalOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => {
		fieldToPush.templateOptions.incrementalOption = extractTemplateOptionIncrementalOption(configurationModel.lines[lineIndex].columns[position].control);
};

const addCurrentYearOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => {
		fieldToPush.templateOptions.currentYearOption = extractTemplateOptionCurrentYearOption(configurationModel.lines[lineIndex].columns[position].control);
};

const addCurrentDateOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => {
		fieldToPush.templateOptions.currentDateOption = extractTemplateOptionCurrentDateOption(configurationModel.lines[lineIndex].columns[position].control);
};

const addOneColumnHeader = (formlyModel, configurationModel,lineIndex) => {
	const headerTemplateCol = `<div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2 class="text-center">${extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control)}</h2></div></div><div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">${extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control)}</div></div><hr/>`;
	formlyModel.push({
		template: typeof configurationModel
												.lines[lineIndex]
												.columns[0]
												.control
												.type !== 'undefined' ?
													(configurationModel.lines[lineIndex].columns[0].control.type === 'header' ?
														headerTemplateCol
														: '<div></div>')
													: '<div></div>'
	});
};

function checkIfCanDisplayMultiple(type, subtype) {
	let multipleTypes = ['input', 'datepicker', 'textarea', 'richEditor', 'upload'];
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
	let returnValue = defaultValue;
	let multipleTypes = ['input', 'datepicker', 'textarea', 'richEditor', 'upload'];
	if (multipleTypes.indexOf(type) !== -1) {
		returnValue = [];
		returnValue.push(defaultValue);
	}

	return returnValue;
}

function addColumnControl(formlyModel, configurationModel,lineIndex, numberOfColumns, columnIndex, FieldGroup) {
	let headerTemplateCol = {
		className: 'col-xs-' + (12 / numberOfColumns),
		template : `<div class="row"><div class=""><h2 class="text-center">${extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[columnIndex].control)}</h2></div></div><div class="row"><div class="">${extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[columnIndex].control)}</div></div><hr/>`
	};

	let type = typeof configurationModel.lines[lineIndex].columns[columnIndex].control.type !== 'undefined' ? (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'none' ? 'blank': typeMultiSelect(configurationModel.lines[lineIndex].columns[columnIndex].control.type, allowMultiple)) : 'blank';
	let subtype = extractTemplateOptionType(configurationModel.lines[lineIndex].columns[columnIndex].control);
	let allowMultiple = extractTemplateOptionAllowMultiple(configurationModel.lines[lineIndex].columns[columnIndex].control);

	let controlCol = {
		className			: 'col-xs-' + (12 / numberOfColumns),
		type					: type,
		key						: typeof configurationModel.lines[lineIndex].columns[columnIndex].control.key !== 'undefined' ?  configurationModel.lines[lineIndex].columns[columnIndex].control.key : 'blank' + Date.now(),
		defaultValue 	: defaultValueForMultiFields(type, extractDefaultValue(configurationModel.lines[lineIndex].columns[columnIndex].control)),
		templateOptions: {
			type							: subtype,
			label							: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[columnIndex].control),
			required 					: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[columnIndex].control),
			unique 						: extractTemplateOptionUnique(configurationModel.lines[lineIndex].columns[columnIndex].control),
			displayAddOption 	: extractTemplateOptionDisplayAddOption(configurationModel.lines[lineIndex].columns[columnIndex].control),
			displayEditOption : extractTemplateOptionDisplayEditOption(configurationModel.lines[lineIndex].columns[columnIndex].control),
			allowMultiple 		: allowMultiple,
			placeholder 			: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[columnIndex].control),
			descriptionNew 		: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[columnIndex].control),
			description 			: '',
			options 					: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[columnIndex].control),
			referenceId 			: extractTemplateOptionReferenceId(configurationModel.lines[lineIndex].columns[columnIndex].control),
			canDisplayMultiple: checkIfCanDisplayMultiple(type, subtype),
			parentId    			: extractTemplateOptionParentId(configurationModel.lines[lineIndex].columns[columnIndex].control)
		},
		expressionProperties : extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[columnIndex].control),
		validators : extractFormlyValidators(configurationModel.lines[lineIndex].columns[columnIndex].control),
		validation : extractFormlyValidation(configurationModel.lines[lineIndex].columns[columnIndex].control)
	};
	//////////////////////////////////////////////
	//datepicker additionnal particular property
	//////////////////////////////////////////////
	if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'datepicker') {
		addDatepickerOptionsProperty(controlCol, configurationModel,lineIndex, 0);
		addCurrentDateOptionProperty(controlCol, configurationModel,lineIndex, columnIndex);
	}
	if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'input') {
		switch (configurationModel.lines[lineIndex].columns[columnIndex].control.subtype) {
			case "":
				addMaxLengthOptionProperty(controlCol, configurationModel,lineIndex, columnIndex);
				break;

			case "number":
				addNumberTypeProperty(controlCol, configurationModel,lineIndex, columnIndex);
				addMinValueOptionProperty(controlCol, configurationModel,lineIndex, columnIndex);
				addMaxValueOptionProperty(controlCol, configurationModel,lineIndex, columnIndex);
				addIncrementalOptionProperty(controlCol, configurationModel,lineIndex, columnIndex);
				addCurrentYearOptionProperty(controlCol, configurationModel,lineIndex, columnIndex);
				break;
		}
	}

	let fildsWithOptions = ['basicSelect', 'groupedSelect', 'radio'];
	if (fildsWithOptions.indexOf(configurationModel.lines[lineIndex].columns[columnIndex].control.type) !== -1) {
		addAllowEmptyOptionProperty(controlCol, configurationModel,lineIndex, columnIndex);
	}

	if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'header') {
		FieldGroup.push(headerTemplateCol);
	} else {
		FieldGroup.push(controlCol);
	}

	return FieldGroup;
}

const addColumns = (formlyModel, configurationModel,lineIndex, numberOfColumns) => {
	let FieldGroup = [];

	for (var i = 0; i < numberOfColumns; i++) {
		FieldGroup = addColumnControl(formlyModel, configurationModel,lineIndex, numberOfColumns, i, FieldGroup);
	}

	formlyModel.push({
		className	: 'row',
		fieldGroup: FieldGroup
	});
}


const resetDataModel = (obj) => {
	let emptyDataModel = {};
	angular.copy(emptyDataModel, obj);
	return true;
};


const resetFormlyModel = (formlyModel) => {
	let resetformly = [];
	angular.copy(resetformly, formlyModel);
};




export {
	configurationModelInit,
	configurationModelResult,
	resetDataModel,
	resetFormlyModel,

	isTemplateOptionDefined,
	extractTemplateOptionLabel,
	extractTemplateOptionLabelShort,
	extractTemplateOptionReferenceId,
	extractTemplateOptionParentId,
	extractTemplateOptionDatepickerOptions,
	extractTemplateOptionMaxLengthOption,
	extractTemplateOptionNumberType,
	extractTemplateOptionMinValueOption,
	extractTemplateOptionMaxValueOption,
	extractTemplateOptionIncrementalOption,
	extractTemplateOptionCurrentYearOption,
	extractTemplateOptionCurrentDateOption,
	extractTemplateOptionAllowEmptyOption,
	extractFormlyExpressionProperties,
	extractFormlyValidators,
	extractFormlyValidation,
	extractTemplateOptionRequired,
	extractTemplateOptionUnique,
	extractDefaultValue,
	extractTemplateOptionDisplayAddOption,
	extractTemplateOptionDisplayEditOption,
	extractTemplateOptionAllowMultiple,
	extractTemplateOptionOptions,
	extractTemplateOptionType,
	extractTemplateOptionPlaceholder,
	extractTemplateOptionDescription,

	addDatepickerOptionsProperty,
	addNumberTypeProperty,
	addMaxLengthOptionProperty,
	addMinValueOptionProperty,
	addMaxValueOptionProperty,
	addIncrementalOptionProperty,
	addCurrentYearOptionProperty,
	addCurrentDateOptionProperty,
	addAllowEmptyOptionProperty,
	addOneColumnHeader,
	addColumns
};
