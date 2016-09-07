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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
				formlyRequired		: false,
				formlyUnique			: false,
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
						message		: 'to.label + \' size should have max \' + to.maxLengthOption + \' characters\''
					}
				},
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
				allowMultiple			: false,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				numberType				: 'integer',
				minValueOption		: '',
				maxValueOption  	: '',
				incrementalOption	: false,
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
						message	: 'to.label + \' is limited to values (\' + to.minValueOption + \' - \' + to.maxValueOption + \')\''
					},
					yearShape : {
						expression : function(viewValue, modelValue, scope) {
							if (scope.to.numberType == "year") {
								var value = modelValue || viewValue;
								return /^[0-9]{1,4}$/.test(value);
							}
							return true;
						},
						message	: 'to.label + \' is not valid year (0 - 9999)\''
					}
				},
		    formlyAsyncValidators: {
		      unique: {
		        message: 'to.label + \" value $value already exists\"'
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyValidation	: {
					messages: {
						required: (viewValue, modelValue, scope) => {
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
				formlyDefaultValue					: '',
				displayAddOption						: true,
				displayEditOption						: true,
				allowMultiple								: false,
				formlyDesciption 						: '',
				formlyOptions 							: [],
				parentId										: '',
				referenceId									: '',
				formlyExpressionProperties 	: {},
				formlyValidators 						: {
					emailShape : {
						expression : (viewValue, modelValue) => {
							var value = modelValue || viewValue;
							return /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test(value);
						},
						message		: '$viewValue + \' is not a valid email\''
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
				formlyDesciption	: '',
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				datepickerOptions	: 'dd-MMMM-yyyy',
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
				formlyDefaultValue: '',
				displayAddOption	: true,
				displayEditOption	: true,
				allowMultiple			: false,
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
				allowMultiple			: false,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				maxLengthOption		: '',
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
			formlyLabel				: '',
			formlyLabelShort	: '',
			formlyRequired		: false,
			formlyUnique			: false,
			formlyDefaultValue: '',
			displayAddOption	: true,
			displayEditOption	: true,
			allowMultiple			: false,
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


const getResetConfig = () => {
	let emptyConfig = {};
	angular.extend(emptyConfig, {
			formlyLabel				: '',
			formlyLabelShort	: '',
			formlyRequired		: false,
			formlyUnique			: false,
			formlyDefaultValue: '',
			displayAddOption	: true,
			displayEditOption	: true,
			allowMultiple			: false,
			formlyPlaceholder	: '',
			formlyDesciption	: '',
			formlyOptions			: [],
			parentId					: '',
			referenceId				: ''
	});
	return emptyConfig;
};

/**
	* data passed back to parent controller
	* after control being finsihed editing in modal
	*/
const returnControlFromAddCtrlModalModel = (CtrlModalModel) =>{

	let modelToReturn = {
		selectedControl:'none',
		formlyType : 'none',
		formlySubtype: 'none',
		formlyLabel: '',
		formlyLabelShort: '',
		formlyRequired : false,
		formlyUnique: false,
		formlyDefaultValue: '',
		displayAddOption: true,
		displayEditOption: true,
		allowMultiple: false,
		formlyDesciption: '',
		formlyPlaceholder: '',
		formlyOptions: [],
		parentId					: '',
		referenceId				: '',
		//validation fields
		formlyExpressionProperties: {},
		formlyValidators: {},
		formlyValidation: {}
	};


	for (let i = CtrlModalModel.controls.length - 1; i >= 0; i--) {
		if (CtrlModalModel.selectedControl === CtrlModalModel.controls[i].id) {
			modelToReturn.selectedControl 		= CtrlModalModel.selectedControl;
			modelToReturn.formlyType 					= CtrlModalModel.controls[i].formlyType;
			modelToReturn.formlySubtype 			= CtrlModalModel.controls[i].formlySubtype;
			modelToReturn.formlyLabel 				= CtrlModalModel.controls[i].formlyLabel;
			modelToReturn.formlyLabelShort 		= CtrlModalModel.controls[i].formlyLabelShort;
			modelToReturn.formlyRequired 			= CtrlModalModel.controls[i].formlyRequired;
			modelToReturn.formlyUnique 				= CtrlModalModel.controls[i].formlyUnique;
			modelToReturn.formlyDefaultValue 	= CtrlModalModel.controls[i].formlyDefaultValue;
			modelToReturn.displayAddOption 		= CtrlModalModel.controls[i].displayAddOption;
			modelToReturn.displayEditOption 	= CtrlModalModel.controls[i].displayEditOption;
			modelToReturn.allowMultiple 			= CtrlModalModel.controls[i].allowMultiple;
			modelToReturn.formlyDesciption 		= CtrlModalModel.controls[i].formlyDesciption;
			modelToReturn.formlyPlaceholder 	= CtrlModalModel.controls[i].formlyPlaceholder;
			modelToReturn.formlyOptions 			= CtrlModalModel.controls[i].formlyOptions;
			modelToReturn.parentId 						= CtrlModalModel.controls[i].parentId;
			modelToReturn.referenceId 				= CtrlModalModel.controls[i].referenceId;

			modelToReturn.formlyExpressionProperties 	= angular.copy(CtrlModalModel.controls[i].formlyExpressionProperties);
			modelToReturn.formlyValidators 						= angular.copy(CtrlModalModel.controls[i].formlyValidators);
			modelToReturn.formlyValidation 						= angular.copy(CtrlModalModel.controls[i].formlyValidation);

			//particular properties
			//datetpicker format
			if (CtrlModalModel.controls[i].formlyType === 'datepicker') {
				modelToReturn.datepickerOptions = CtrlModalModel.controls[i].datepickerOptions;
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
		}
	}
	return modelToReturn;
};




/**
	* validKeyUniqueness
	* to be sure the "keys" are unique (in same formly field model)
	*/
const validKeyUniqueness = (thisKey, configurationObj) => {
	let isUnique = true;
	//each lines
	for (let i = configurationObj.lines.length - 1; i >= 0; i--) {
		//each columns
		for (let j = configurationObj.lines[i].columns.length - 1; j >= 0; j--) {
			if (configurationObj.lines[i].columns[j].control.key === thisKey) {
				isUnique = false;
			}
		}
	}
	return isUnique;
};


export {
	resetNyaSelect,
	returnControlFromAddCtrlModalModel,
	validKeyUniqueness,
	getResetConfig

};
