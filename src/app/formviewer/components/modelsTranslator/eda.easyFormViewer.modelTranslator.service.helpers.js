/* global angular */

const resetNyaSelect = (nyaSelectObj, $translate, $http) => {

	let newNyaSelectObj = {
		controls : [
			{
				id								: 'empty',
				name							: 'no control',
				subtitle					: 'no control',
				group							: 'Blank',
				formlyType				: 'blank',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {}
			},

			{
				id								: 'Header',
				name							: 'Header',
				subtitle					: 'no control',
				group							: 'Decoration',
				formlyType				: 'header',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {}
			},

			{
				id								: 'Subtitle',
				name							: 'Subtitle',
				subtitle					: 'no control',
				group							: 'Decoration',
				formlyType				: 'subTitle',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {}
			},

			{
				id								: 'TextInput',
				name							: 'Text input',
				subtitle					: 'Text input',
				group							: 'input',
				formlyType				: 'input',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				maxLengthOption		: null,
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators 						: {
					textShape : {
						expression : function(viewValue, modelValue, scope) {
							var value = modelValue || viewValue;
							return (scope.to.maxLengthOption) ? (value ? value.length : 0) <= parseInt(scope.to.maxLengthOption) : true;
						},
						message	: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_MAX_LENGTH\"| translate: \"{max: \" + to.maxLengthOption + \"}\")"
					}
				},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'Number',
				name							: 'Number',
				subtitle					: 'Number',
				group							: 'input',
				formlyType				: 'input',
				formlySubtype			: 'number',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				numberType				: 'integer',
				minValueOption		: null,
				maxValueOption  	: null,
				incrementalOption	: true,
				currentYearOption	: false,
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators  : {
					numberShape : {
						expression : function(viewValue, modelValue, scope) {
							var value = modelValue || viewValue;
							var returnMin = (scope.to.minValueOption && value) ? parseInt(value) >= parseInt(scope.to.minValueOption) : true;
							var returnMax = (scope.to.maxValueOption && value) ? parseInt(value) <= parseInt(scope.to.maxValueOption) : true;
							return returnMin && returnMax;
						},
						message	: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_MIN_MAX\"| translate: \"{min: \" + to.minValueOption + \", max: \" + to.maxValueOption + \"}\")"
					},
					yearShape : {
						expression : function(viewValue, modelValue, scope) {
							if (scope.to.numberType == "year") {
								var value = modelValue || viewValue;
								return /^[0-9]{1,4}$/.test(value);
							}
							return true;
						},
						message	: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_YEAR\" | translate: \"{min: 0, max: 9999}\")"
					}
				},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'Password',
				name							: 'Password',
				subtitle					: 'Password',
				group							: 'input',
				formlyType				: 'input',
				formlySubtype			: 'password',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
		},

			{
				id 								: 'Email',
				name 							: 'Email',
				subtitle 					: 'Email',
				group 						: 'input',
				formlyType				: 'input',
				formlySubtype 		: 'email',
				formlyLabel 			: '',
				formlyLabelShort	: '',
				formlyRequired 		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption 	: '',
				formlyOptions 		: [],
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties : {},
				formlyValidators 	: {
					emailShape : {
						expression : function(viewValue, modelValue) {
							var value = modelValue || viewValue;
							if (value) {
								return /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test(value);
							}
							return true;
						},
						message	: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_EMAIL\" | translate)"
					}
				},
				formlyValidation: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'Date',
				name							: 'Date',
				subtitle					: 'Date',
				group							: 'input',
				formlyType				: 'datepicker',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				datepickerOptions	: {format : 'dd-MMMM-yyyy'},
				currentDateOption	: false,
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						},
						date: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_DATE_INVALID');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'Texarea',
				name							: 'Textarea',
				subtitle					: 'Textarea',
				group							: 'Textarea',
				formlyType				: 'textarea',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages	: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'RichTextEditor',
				name							: 'RichTextEditor',
				subtitle					: 'RichTextEditor',
				group							: 'Textarea',
				formlyType				: 'richEditor',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators 					: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'Radio',
				name							: 'Radio',
				subtitle					: 'Radio',
				options						: [],
				group							: 'Radio',
				formlyType				: 'radio',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowEmptyOption 	: false,
				allowMultiple			: 1,
				formlyDesciption	: '' ,
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'Checkbox',
				name							: 'Checkbox',
				subtitle					: 'Checkbox',
				group							: 'Checkbox',
				formlyType				: 'checkbox',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: false,
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'BasicSelect',
				name							: 'Basic select',
				subtitle					: 'Basic select',
				options						: [],
				group							: 'Select',
				formlyType				: 'basicSelect',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowEmptyOption 	: false,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'GroupedSelect',
				name							: 'Grouped Select',
				subtitle					: 'Grouped Select',
				options						: [],
				group							: 'Select',
				formlyType				: 'groupedSelect',
				formlySubtype			: '',
				formlyLabel				: '',
				formlyLabelShort	: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowEmptyOption 	: false,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages				: {
						required	: function(viewValue, modelValue, scope) {
							var returnMsg = (scope.to.label ? scope.to.label : $translate.instant('FIELD')) + $translate.instant('VALIDATION_REQUIRED');
							return returnMsg;
						}
					}
				}
			},

			{
				id								: 'Upload',
				name							: 'Upload',
				subtitle					: 'Upload',
				group							: 'upload',
				formlyType				: 'upload',
				formlySubtype			: 'file',
				formlyLabel				: '',
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				files 						: [],
				formlyEvents: {
					onChange 				: ''
				},
				formlyExpressionProperties: {},
				formlyValidators  : {
					required : {
						expression : function(viewValue, modelValue, scope) {
							var value = modelValue || viewValue;
							let cnt = 0;
							if (scope.to.files) {
								cnt = scope.to.files.length;
							}
							if (cnt > 0 || value) {
								return true;
							} else {
								return false;
							}
						},
						message	: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_REQUIRED\" | translate)"
					},
				},
				formlyValidation	: {}
			}
		],
		selectedControl : 'none' ,
		temporyConfig 	: {
			selectedControl		: 'none',
			formlyLabel				: 'label',
			formlyLabelShort	: '',
			formlyRequired		: false,
			formlyUnique			: false,
			formlyDefaultValue: '',
			displayAddOption	: true,
			displayEditOption	: true,
			allowMultiple			: 1,
			formlyDesciption	: '',
			formlyPlaceholder	: '',
			formlyOptions 		: [],
			parentId					: '',
			referenceId				: '',
			formlyEvents: {
				onChange 				: ''
			},
			//expressions/validation fields
			formlyExpressionProperties: {},
			formlyValidators	: {},
			formlyValidation	: {}
		}

	};

	//reset
	angular.copy(newNyaSelectObj, nyaSelectObj);
	return true;
};

/**
	* equivalent to formFielManage service in easy form generator
	*/
const getConfigurationModelInit = () => {
	let configurationModelInit = {
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
							line:1,
							activeColumn : 1,
							columns: [
												{
													numColumn: 1,
													exist:true,
													control: {
																			type:'none',
																			key: 'none',
																			defaultValue: ''
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
	return configurationModelInit;
};

const getEmptyConfigModelResult = () => {
	let configurationModelResult = {
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
		configStepCounter: 0,
		submitButtonText : 'submit',
		cancelButtonText: 'cancel',
		lines: []
	};
	return angular.copy(configurationModelResult);
};



const resetDataModel = (obj) => {
	let emptyDataModel = {};
	angular.copy(emptyDataModel, obj);
	return true;
};


const getErrorObject = (errorTitle, errorMessage) => {
	let messageObj = {
		noError : false,
		title		: '',
		Message	: ''
	};
	messageObj.noError	= false;
	messageObj.title 		= errorTitle;
	messageObj.Message 	= errorMessage;
	return messageObj;
};

const getMessageObject = (messageTitle, messageBody) => {
	let messageObj = {
		noError 	: false,
		title			: '',
		Message		: ''
	};
	messageObj.noError	= true;
	messageObj.title 		= messageTitle;
	messageObj.Message 	= messageBody;
	return messageObj;
};

const resetFormlyModel = (formlyModel) => {
	var resetformly = [];
	angular.copy(resetformly, formlyModel);
};

const extractTemplateOptionDescription = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.description !== 'undefined'? obj.templateOptions.description: '') : '';

const extractTemplateOptionPlaceholder = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.placeholder !== 'undefined'? obj.templateOptions.placeholder: '') : '';

const extractTemplateOptionType = (obj) => typeof obj.subtype !== 'undefined'? obj.subtype: '';

// const isTemplateOptionDefined = (obj) => typeof obj.templateOptions !== 'undefined' ? true : false;

const extractTemplateOptionLabel = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.label !== 'undefined'? obj.templateOptions.label: '') : '';

const extractTemplateOptionLabelShort = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.labelShort !== 'undefined'? obj.templateOptions.labelShort: '') : '';

const extractTemplateOptionParentId = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.parentId !== 'undefined'? obj.templateOptions.parentId: '') : '';

const extractTemplateOptionReferenceId = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.referenceId !== 'undefined'? obj.templateOptions.referenceId: '') : '';

const extractTemplateOptionDatepickerOptions = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.datepickerOptions !== 'undefined'? angular.copy(obj.templateOptions.datepickerOptions) : '') : '';

const extractTemplateOptionMaxLengthOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.maxLengthOption !== 'undefined'? obj.templateOptions.maxLengthOption : null) : null;
const extractTemplateOptionNumberType = (obj)=> typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.numberType !== 'undefined'? angular.copy(obj.templateOptions.numberType) : 'integer') : 'integer';
const extractTemplateOptionMinValueOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.minValueOption !== 'undefined'? obj.templateOptions.minValueOption : null) : null;
const extractTemplateOptionMaxValueOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.maxValueOption !== 'undefined'? obj.templateOptions.maxValueOption : null) : null;
const extractTemplateOptionIncrementalOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.incrementalOption !== 'undefined'? obj.templateOptions.incrementalOption : false) : false;
const extractTemplateOptionCurrentYearOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.currentYearOption !== 'undefined'? obj.templateOptions.currentYearOption : false) : false;
const extractTemplateOptionCurrentDateOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.currentDateOption !== 'undefined'? obj.templateOptions.currentDateOption : false) : false;
const extractTemplateOptionAllowEmptyOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.allowEmptyOption !== 'undefined'? obj.templateOptions.allowEmptyOption : false) : false;

const extractTemplateOptionFiles = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.files !== 'undefined'? obj.templateOptions.files : []) : [];

const extractFormlyExpressionProperties = (obj) => typeof obj.formlyExpressionProperties !== 'undefined' ? angular.copy(obj.formlyExpressionProperties) : {};

const extractFormlyValidators = (obj) => typeof obj.formlyValidators !== 'undefined' ? angular.copy(obj.formlyValidators): {};

const extractFormlyValidation = (obj) => typeof obj.formlyValidation !== 'undefined' ?  angular.copy(obj.formlyValidation) : {};

const extractTemplateOptionRequired = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.required !== 'undefined'? obj.templateOptions.required: false) : false;

const extractTemplateOptionUnique = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.unique !== 'undefined'? obj.templateOptions.unique: false) : false;

const extractDefaultValue = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.defaultValue !== 'undefined'? obj.templateOptions.defaultValue: (obj.type == 'checkbox' ? false : '')) : (obj.type == 'checkbox' ? false : '');

const extractTemplateOptionDisplayAddOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.displayAddOption !== 'undefined'? obj.templateOptions.displayAddOption: true) : true;

const extractTemplateOptionDisplayEditOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.displayEditOption !== 'undefined'? obj.templateOptions.displayEditOption: true) : true;

const extractTemplateOptionAllowMultiple = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.allowMultiple !== 'undefined'? obj.templateOptions.allowMultiple: 1) : 1;

const extractTemplateOptionOptions = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.options !== 'undefined'? obj.templateOptions.options: '') : '';

const extractTemplateEventOnChange = (obj) => typeof obj.templateOptions !== 'undefined' && typeof obj.formlyEvents !== 'undefined' && typeof obj.formlyEvents.onChange !== 'undefined' ? angular.copy(obj.formlyEvents.onChange) : '';

const addDatepickerOptionsProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.datepickerOptions = extractTemplateOptionDatepickerOptions(configurationModel.lines[lineIndex].columns[position].control);
const addMaxLengthOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.maxLengthOption = extractTemplateOptionMaxLengthOption(configurationModel.lines[lineIndex].columns[position].control);
const addNumberTypeProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.numberType = extractTemplateOptionNumberType(configurationModel.lines[lineIndex].columns[position].control);
const addMinValueOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.minValueOption = extractTemplateOptionMinValueOption(configurationModel.lines[lineIndex].columns[position].control);
const addMaxValueOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.maxValueOption = extractTemplateOptionMaxValueOption(configurationModel.lines[lineIndex].columns[position].control);
const addIncrementalOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.incrementalOption = extractTemplateOptionIncrementalOption(configurationModel.lines[lineIndex].columns[position].control);
const addCurrentYearOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.currentYearOption = extractTemplateOptionCurrentYearOption(configurationModel.lines[lineIndex].columns[position].control);
const addCurrentDateOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.currentDateOption = extractTemplateOptionCurrentDateOption(configurationModel.lines[lineIndex].columns[position].control);
const addAllowEmptyOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.allowEmptyOption = extractTemplateOptionAllowEmptyOption(configurationModel.lines[lineIndex].columns[position].control);

const addFilesProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.files = extractTemplateOptionFiles(configurationModel.lines[lineIndex].columns[position].control);

const addOneColumnHeader = (formlyModel, configurationModel,lineIndex) => {
	/**
		* text header is stored in "description" in templateOtion model
		*/
	let headerTemplateCol = `<div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2 class="text-center">${extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control)}</h2></div></div><div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">${extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control)}</div></div><hr/>`;
	formlyModel.push(
		{
			template: typeof configurationModel
													.lines[lineIndex]
													.columns[0]
													.control
													.type !== 'undefined' ?
														(configurationModel.lines[lineIndex].columns[0].control.type === 'header' ?
															headerTemplateCol
															: '<div></div>')
														: '<div></div>'
		}
	);
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
			parentId    			: extractTemplateOptionParentId(configurationModel.lines[lineIndex].columns[columnIndex].control),
			canDisplayMultiple: checkIfCanDisplayMultiple(type, subtype),
			onChange    			: extractTemplateEventOnChange(configurationModel.lines[lineIndex].columns[columnIndex].control),
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
	if (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'upload') {
		addFilesProperty(controlCol, configurationModel,lineIndex, columnIndex);
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


export {
	resetNyaSelect,
	getConfigurationModelInit,
	getEmptyConfigModelResult,
	resetDataModel,
	getErrorObject,
	getMessageObject,
	resetFormlyModel,
	addOneColumnHeader,
	addColumns
};
