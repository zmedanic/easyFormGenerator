/* global angular */

const resetNyaSelect = (nyaSelectObj) => {

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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				maxLengthOption		: '',
				formlyExpressionProperties: {},
				formlyValidators 						: {
					textShape : {
						expression : function(viewValue, modelValue, scope) {
							var value = modelValue || viewValue;
							return (scope.to.maxLengthOption) ? (value ? value.length : 0) <= parseInt(scope.to.maxLengthOption) : true;
						},
						message		: "to.label + \" size should have max \" + to.maxLengthOption + \" characters\""
					}
				},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= "this Text input field is required";
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
							if (scope.to.required) return returnMsg;
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				numberType				: 'integer',
				minValueOption		: '',
				maxValueOption  	: '',
				incrementalOption	: true,
				currentYearOption	: false,
				formlyExpressionProperties: {},
				formlyValidators 						: {
					numberShape : {
						expression : function(viewValue, modelValue, scope) {
							var value = modelValue || viewValue;
							var returnMin = (scope.to.minValueOption) ? parseInt(value) >= parseInt(scope.to.minValueOption) : true;
							var returnMax = (scope.to.maxValueOption) ? parseInt(value) <= parseInt(scope.to.maxValueOption) : true;
							return returnMin && returnMax;
						},
						message	: "to.label + \" is limited to values (\" + to.minValueOption + \" - \" + to.maxValueOption + \")\""
					},
					yearShape : {
						expression : function(viewValue, modelValue, scope) {
							if (scope.to.numberType == "year") {
								var value = modelValue || viewValue;
								return /^[0-9]{1,4}$/.test(value);
							}
							return true;
						},
						message	: "to.label + \" is not valid year (0 - 9999)\""
					}
				},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Number field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
							if (scope.to.required) return returnMsg;
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Password field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
							return returnMsg;
						}
					}
				}
		},

			{
				id 													: 'Email',
				name 												: 'Email',
				subtitle 										: 'Email',
				group 											: 'input',
				formlyType									: 'input',
				formlySubtype 							: 'email',
				formlyLabel 								: '',
				formlyLabelShort						: '',
				formlyRequired 							: false,
				formlyUnique								: false,
				displayAddOption						: true,
				displayEditOption						: true,
				allowMultiple								: 1,
				formlyDesciption 						: '',
				formlyOptions 							: [],
				parentId										: '',
				referenceId									: '',
				formlyExpressionProperties 	: {},
				formlyValidators 						: {
					emailShape : {
						expression : function(viewValue, modelValue) {
							var value = modelValue || viewValue;
							return /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test(value);
						},
						message		: "$viewValue + \" is not a valid email\""
					}
				},
				formlyValidation: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Email field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
							//check if validation is really dued to require validation
							//and not another validation like emailShape validator
							if (scope.to.required) return returnMsg;
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				datepickerOptions	: {format : 'dd-MMMM-yyyy'},
				currentDateOption	: false,
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Date field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages	: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Textarea field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyExpressionProperties: {},
				formlyValidators 					: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg	= 'this RichTextEditor field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '' ,
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Password field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Checkbox field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Basic select field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
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
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages				: {
						required	: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Grouped Select field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
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
				formlyExpressionProperties: {},
				formlyValidators 	: {},
				formlyValidation	: {
					messages: {
						required: function(viewValue, modelValue, scope) {
							//return a required validation message :
							//-> '<label as name> is required '
							//-> or if not exists or empty just 'this field is required'
							var defaultReturnMsg 	= 'this Text input field is required';
							var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
							if (scope.to.required) return returnMsg;
						}
					}
				}
			}
		],
		selectedControl : 'none' ,
		temporyConfig 	: {
			selectedControl		: 'none',
			formlyLabel				: 'label',
			formlyLabelShort	: '',
			formlyRequired		: false,
			formlyUnique			: false,
			displayAddOption	: true,
			displayEditOption	: true,
			allowMultiple			: 1,
			formlyDesciption	: '',
			formlyPlaceholder	: '',
			formlyOptions 		: [],
			parentId					: '',
			referenceId				: '',
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

const extractTemplateOptionMaxLengthOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.maxLengthOption !== 'undefined'? obj.templateOptions.maxLengthOption : '') : '';
const extractTemplateOptionNumberType = (obj)=> typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.numberType !== 'undefined'? angular.copy(obj.templateOptions.numberType) : 'integer') : 'integer';
const extractTemplateOptionMinValueOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.minValueOption !== 'undefined'? obj.templateOptions.minValueOption : '') : '';
const extractTemplateOptionMaxValueOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.maxValueOption !== 'undefined'? obj.templateOptions.maxValueOption : '') : '';
const extractTemplateOptionIncrementalOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.incrementalOption !== 'undefined'? obj.templateOptions.incrementalOption : false) : false;
const extractTemplateOptionCurrentYearOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.currentYearOption !== 'undefined'? obj.templateOptions.currentYearOption : false) : false;
const extractTemplateOptionCurrentDateOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.currentDateOption !== 'undefined'? obj.templateOptions.currentDateOption : false) : false;

const extractFormlyExpressionProperties = (obj) => typeof obj.formlyExpressionProperties !== 'undefined' ? angular.copy(obj.formlyExpressionProperties) : {};

const extractFormlyValidators = (obj) => typeof obj.formlyValidators !== 'undefined' ? angular.copy(obj.formlyValidators): {};

const extractFormlyValidation = (obj) => typeof obj.formlyValidation !== 'undefined' ?  angular.copy(obj.formlyValidation) : {};

const extractTemplateOptionRequired = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.required !== 'undefined'? obj.templateOptions.required: false) : false;

const extractTemplateOptionUnique = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.unique !== 'undefined'? obj.templateOptions.unique: false) : false;

const extractDefaultValue = (obj) => typeof obj.defaultValue !== 'undefined' ? obj.defaultValue: (obj.type == 'checkbox' ? false : '');

const extractTemplateOptionDisplayAddOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.displayAddOption !== 'undefined'? obj.templateOptions.displayAddOption: true) : true;

const extractTemplateOptionDisplayEditOption = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.displayEditOption !== 'undefined'? obj.templateOptions.displayEditOption: true) : true;

const extractTemplateOptionAllowMultiple = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.allowMultiple !== 'undefined'? obj.templateOptions.allowMultiple: 1) : 1;

const extractTemplateOptionOptions = (obj) => typeof obj.templateOptions !== 'undefined' ? (typeof obj.templateOptions.options !== 'undefined'? obj.templateOptions.options: '') : '';

const addDatepickerOptionsProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.datepickerOptions = extractTemplateOptionDatepickerOptions(configurationModel.lines[lineIndex].columns[position].control);

const addMaxLengthOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.maxLengthOption = extractTemplateOptionMaxLengthOption(configurationModel.lines[lineIndex].columns[position].control);
const addNumberTypeProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.numberType = extractTemplateOptionNumberType(configurationModel.lines[lineIndex].columns[position].control);
const addMinValueOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.minValueOption = extractTemplateOptionMinValueOption(configurationModel.lines[lineIndex].columns[position].control);
const addMaxValueOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.maxValueOption = extractTemplateOptionMaxValueOption(configurationModel.lines[lineIndex].columns[position].control);
const addIncrementalOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.incrementalOption = extractTemplateOptionIncrementalOption(configurationModel.lines[lineIndex].columns[position].control);
const addCurrentYearOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.currentYearOption = extractTemplateOptionCurrentYearOption(configurationModel.lines[lineIndex].columns[position].control);
const addCurrentDateOptionProperty = (fieldToPush, configurationModel,lineIndex, position) => fieldToPush.templateOptions.currentDateOption = extractTemplateOptionCurrentDateOption(configurationModel.lines[lineIndex].columns[position].control);

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

function addColumnControl(formlyModel, configurationModel,lineIndex, numberOfColumns, columnIndex, FieldGroup) {
	let headerTemplateCol = {
		className: 'col-xs-' + (12 / numberOfColumns),
		template : `<div class="row"><div class=""><h2 class="text-center">${extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[columnIndex].control)}</h2></div></div><div class="row"><div class="">${extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[columnIndex].control)}</div></div><hr/>`
	};

	let controlCol = {
		className			: 'col-xs-' + (12 / numberOfColumns),
		type					: typeof configurationModel.lines[lineIndex].columns[columnIndex].control.type !== 'undefined' ? (configurationModel.lines[lineIndex].columns[columnIndex].control.type === 'none' ? 'blank': configurationModel.lines[lineIndex].columns[columnIndex].control.type): 'blank',
		key						: typeof configurationModel.lines[lineIndex].columns[columnIndex].control.key !== 'undefined' ?  configurationModel.lines[lineIndex].columns[columnIndex].control.key : 'blank' + Date.now(),
		defaultValue 	: extractDefaultValue(configurationModel.lines[lineIndex].columns[columnIndex].control),
		templateOptions: {
			type							: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[columnIndex].control),
			label							: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[columnIndex].control),
			required 					: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[columnIndex].control),
			unique 						: extractTemplateOptionUnique(configurationModel.lines[lineIndex].columns[columnIndex].control),
			displayAddOption 	: extractTemplateOptionDisplayAddOption(configurationModel.lines[lineIndex].columns[columnIndex].control),
			displayEditOption : extractTemplateOptionDisplayEditOption(configurationModel.lines[lineIndex].columns[columnIndex].control),
			allowMultiple 		: extractTemplateOptionAllowMultiple(configurationModel.lines[lineIndex].columns[columnIndex].control),
			placeholder 			: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[columnIndex].control),
			description 			: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[columnIndex].control),
			options 					: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[columnIndex].control),
			referenceId 			: extractTemplateOptionReferenceId(configurationModel.lines[lineIndex].columns[columnIndex].control),
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
