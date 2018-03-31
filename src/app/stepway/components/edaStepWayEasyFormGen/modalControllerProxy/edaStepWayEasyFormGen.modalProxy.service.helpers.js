/* global angular */

const resetNyaSelect = (nyaSelectObj, $translate, $q, $timeout) => {

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
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				allowMultiple			: 1,
				formlyDesciption	: '',
				formlyOptions			: [] ,
				parentId					: '',
				referenceId				: '',
				maxLengthOption		: null,
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators 	: {
					textShape : {
						expression : function(viewValue, modelValue, scope) {
							var value = modelValue || viewValue;
							return (scope.to.maxLengthOption) ? (value ? value.length : 0) <= parseInt(scope.to.maxLengthOption) : true;
						},
						message	: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_MAX_LENGTH\"| translate: \"{max: \" + to.maxLengthOption + \"}\")"
					}
				},
				formlyAsyncValidators: {},
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
				incrementalOption	: false,
				currentYearOption	: false,
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators 	: {
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
				formlyAsyncValidators: {},
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
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				id 									: 'Email',
				name 								: 'Email',
				subtitle 						: 'Email',
				group 							: 'input',
				formlyType					: 'input',
				formlySubtype 			: 'email',
				formlyLabel 				: '',
				formlyLabelShort		: '',
				formlyRequired 			: false,
				formlyUnique				: false,
				formlyDefaultValue	: '',
				displayAddOption		: true,
				displayEditOption		: true,
				allowMultiple				: 1,
				formlyDesciption 		: '',
				formlyOptions 			: [],
				parentId						: '',
				referenceId					: '',
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators 		: {
					emailShape : {
						expression : (viewValue, modelValue) => {
							var value = modelValue || viewValue;
							if (value) {
								return /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test(value);
							}
							return true;
						},
						message	: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_EMAIL\" | translate)"
					}
				},
				formlyAsyncValidators: {},
				formlyValidation		: {
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
				datepickerOptions	: 'dd-MMMM-yyyy',
				currentDateOption	: false,
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators 	: {},
				formlyAsyncValidators: {},
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
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				optionsSourceType : 'static',
				optionsSourceDbTable : null,
				optionsSourceDbFormat : null,
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				optionsSourceType : 'static',
				optionsSourceDbTable : null,
				optionsSourceDbFormat : null,
				formlyOptions			: [],
				parentId					: '',
				referenceId				: '',
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators	: {},
				formlyAsyncValidators: {},
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
				formlyHideExpression: '',
				formlyExpressionProperties: {},
				formlyValidators  : {
					required : {
						expression : function(viewValue, modelValue, scope) {
							var value = modelValue || viewValue;
							let cnt = 0;
							if (scope.to.files) {
								cnt = scope.to.files.length;
							}
							if (!scope.to.required || cnt > 0 || value) {
								return true;
							} else {
								return false;
							}
						},
						message	: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_REQUIRED\" | translate)"
					},
				},
				formlyAsyncValidators: {},
				formlyValidation	: {}
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
			allowMultiple			: 1,
			formlyDesciption	: '',
			formlyPlaceholder	: '',
			formlyOptions 		: [],
			parentId					: '',
			referenceId				: '',
			formlyHideExpression: '',
			formlyExpressionProperties: {},
			formlyValidators	: {},
			formlyAsyncValidators: {},
			formlyValidation	: {}
		}

	};

	// Apply unique validator to all fields
	let uniqueValidator = {
    uniqueValue: {
			expression : function(viewValue, modelValue, scope) {
				let deferred = $q.defer();

				return $timeout(function() {
					// Write down own logic
					let isOK = true;

				  if (isOK || !scope.to.unique) {
				    deferred.resolve(isOK);
				  } else {
				    deferred.reject(isOK);
				  }
					return deferred.promise;
				}, 1000);
			},
      message: "(to.label ? to.label : (\"FIELD\" | translate)) + (\"VALIDATION_UNIQUE\" | translate)"
    }
  };

  let notUnique = ['blank', 'header', 'subTitle'];
  angular.forEach(newNyaSelectObj.controls, (control) => {
  	if (notUnique.indexOf(control.formlyType) === -1) {
			control.formlyAsyncValidators = angular.merge({}, control.formlyAsyncValidators, uniqueValidator);
		}
	});

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
			allowMultiple			: 1,
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
		allowMultiple: 1,
		formlyDesciption: '',
		formlyPlaceholder: '',
		formlyOptions: [],
		parentId					: '',
		referenceId				: '',
		formlyHideExpression: '',
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

			modelToReturn.formlyHideExpression 				= angular.copy(CtrlModalModel.controls[i].formlyHideExpression);
			modelToReturn.formlyExpressionProperties 	= angular.copy(CtrlModalModel.controls[i].formlyExpressionProperties);
			modelToReturn.formlyValidators 						= angular.copy(CtrlModalModel.controls[i].formlyValidators);
			modelToReturn.formlyValidation 						= angular.copy(CtrlModalModel.controls[i].formlyValidation);

			//particular properties
			//datetpicker format
			if (CtrlModalModel.controls[i].formlyType === 'datepicker') {
				modelToReturn.datepickerOptions = CtrlModalModel.controls[i].datepickerOptions;
				modelToReturn.currentDateOption = CtrlModalModel.controls[i].currentDateOption;
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
			let fieldsWithOptions = ['basicSelect', 'groupedSelect', 'radio'];
			if (fieldsWithOptions.indexOf(CtrlModalModel.controls[i].formlyType) !== -1) {
				modelToReturn.allowEmptyOption = CtrlModalModel.controls[i].allowEmptyOption;
				modelToReturn.optionsSourceType = CtrlModalModel.controls[i].optionsSourceType;
				modelToReturn.optionsSourceDbTable = CtrlModalModel.controls[i].optionsSourceDbTable;
				modelToReturn.optionsSourceDbFormat = CtrlModalModel.controls[i].optionsSourceDbFormat;
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
