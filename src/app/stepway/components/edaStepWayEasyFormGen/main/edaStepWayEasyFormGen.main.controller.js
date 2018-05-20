/* global angular */
import {
	initDebugModel,
	initTabModel,
	initColumnTemplate,
	initLineTemplate
} from './edaStepWayEasyFormGen.main.controller.helpers';

import editControlModalTemplate 		from '../modal/edaStepWayEasyFormGen.editControlModal.template.html!text';
import {
	EDIT_MODAL_CONTROLLER_NAME,
	EDIT_MODAL_CONTROLLERAS_NAME} 		from '../modal/edaStepWayEasyFormGen.editControlModal.controller';



const STEP_WAY_MAIN_CONTROLLER_NAME 	= 'edaStepWayEasyFormGenController';
const STEP_WAY_MAIN_CONTROLLERAS_NAME = 'vm';

class edaStepWayEasyFormGenController {

	constructor	(
		easyFormGenVersion,
		$filter,
		toaster,
		$timeout,
		$uibModal,
		$log,
		$formlyProxy,
		$modalProxy,
		$scope,
		$translate,
		easyFormSteWayConfig){

		this.easyFormGenVersion		= easyFormGenVersion;
		this.$filter 							= $filter;
		this.toaster 							= toaster;
		this.$timeout 						= $timeout;
		this.$modal 							= $uibModal;
		this.$log 								= $log;
		this.$formlyProxy 				= $formlyProxy;
		this.$modalProxy 					= $modalProxy;
		this.easyFormSteWayConfig	= easyFormSteWayConfig;
		this.$translate						= $translate;
		this.$scope										= $scope;

		this.populateSourceForms = function() {
			this.parentForms = [{id: null, name: 'Nothing selected'}];
			$scope.$emit('parentForms');
		}

		this.init();
	}

	init() {

		this.dataModel                = {};
		this.wfFormFields          		= [];
		this.wfFormFieldsOnlyNeededProperties = [];
		this.easyFormGeneratorVERSION = this.easyFormGenVersion;
		this.debug                    = initDebugModel();
		this.tab                      = initTabModel(this.easyFormSteWayConfig.isPreviewPanelVisible(), this.easyFormSteWayConfig.arePreviewModelsVisible());
		this.configuration            = {}; //configuration model (contains array of lines which contains array of columns)
		this.numberOfColumns          = 1;
		this.MaxNumberOfColumns       = 4;
		this.MinNumberOfColumns       = 1;
		this.columnTemplate           = initColumnTemplate(0, 0); //TODO : check is really needed
		this.lineTemplate             = initLineTemplate(0);   //TODO : check if really needed
		this.nyaSelect              	= {};
		this.animationsEnabled        = this.easyFormSteWayConfig.getModalAnimationValue();  //-> disabling animation untill correction in angular bootstrap
		this.editControlModalSize			= 'lg';
		this.formlyList               = {};
		this.previewLoadedForm        = { fieldsModel:[] };
		this.configurationLoaded      = {};
		this.returnSaveEvent          = false;
		this.configuration.idFormatValidation = true;

		this.$formlyProxy.initConfigurationEditFromScratch(this.configuration);


		this.$modalProxy.initNyaSelect(this.nyaSelect);
		this.fieldsSpecial = {
			OPTIONAL_START: {
				value: 'OPTIONAL_START_',
				text: this.$translate.instant('FORMAT_OPTIONAL_START'),
				count: 0,
				index: 0,
			},
			OPTIONAL_END: {
				value: 'OPTIONAL_END_',
				text: this.$translate.instant('FORMAT_OPTIONAL_END'),
				count: 0,
				index: 0,
			},
			SPACE: {
				value: 'SPACE_',
				text: this.$translate.instant('FORMAT_SPACE'),
				count: 0,
				index: 0,
			},
		};

		let formFormatConfigIndex = 0;
		this.fieldsInit = true;

		var edaController = this;
		this.optionsSourceDbFormatConfig = {
			create: function(input) {
				formFormatConfigIndex++;
				let obj = {
					'value': '[CHAR_' + formFormatConfigIndex + ':' + input + ']',
					'text': input,
				};
				return obj;
			},
			maxItems: 30,
			onInitialize: function(selectize) {
				this.fieldsInit = true;
				edaController.fields = [];

				let columns = edaController.prepareExistingColumns(null);
				angular.forEach(columns.columns, (column) => {
					if (column.id !== null) {
						edaController.fields.push({
							value: '[FIELD_ID_' + column.id + ':' + column.name + ']',
							text: column.name,
						});
					}
				});

				formFormatConfigIndex = edaController.configuration.idFormat ? edaController.configuration.idFormat.length : 0;

				if (formFormatConfigIndex > 0) {
					angular.forEach(edaController.configuration.idFormat, (formatPart) => {
						let matches = formatPart.match(/\[CHAR_[0-9]*:(.*?)\]/);
						if (matches && matches.length == 2 && matches[1] && matches[1].length > 0) {
							edaController.fields.push({
								value: formatPart,
								text: matches[1]
							});
						}

						matches = formatPart.match(/\[(OPTIONAL_START|OPTIONAL_END|SPACE)_([0-9]*)\]/);
						if (matches && matches.length == 3 && matches[1] && matches[1].length > 0 && matches[2] && matches[2].length > 0) {
							let fieldSpecial = edaController.fieldsSpecial[matches[1]];
							fieldSpecial.count++;
							fieldSpecial.index++;
							edaController.fields.push({
								value: '[' + fieldSpecial.value + fieldSpecial.index + ']',
								text: fieldSpecial.text,
							});
						}
					});
				}

				angular.forEach(edaController.fieldsSpecial, (field) => {
					field.count++;
					field.index++;

					edaController.fields.push({
						value: '[' + field.value + field.index + ']',
						text: field.text,
					});
				});
			},
			onDropdownOpen: function() {
				edaController.fieldsInit = false;
			},
			onItemAdd: function(value) {
				if (!edaController.fieldsInit) {
					let matches = value.match(/\[(OPTIONAL_START|OPTIONAL_END|SPACE)_([0-9]*)\]/);
					if (matches && matches.length == 3 && matches[1] && matches[1].length > 0 && matches[2] && matches[2].length > 0) {
						let fieldSpecial = edaController.fieldsSpecial[matches[1]];
						fieldSpecial.count++;
						fieldSpecial.index++;

						let field = {
							value: '[' + fieldSpecial.value + fieldSpecial.index + ']',
							text: fieldSpecial.text,
						};
						this.addOption(field);
						this.refreshOptions(false);
					}
				}
			},
			onItemRemove: function(value) {
				if (!edaController.fieldsInit) {
					let matches = value.match(/\[(OPTIONAL_START|OPTIONAL_END|SPACE)_([0-9]*)\]/);
					if (matches && matches.length == 3 && matches[1] && matches[1].length > 0 && matches[2] && matches[2].length > 0) {
						let fieldSpecial = edaController.fieldsSpecial[matches[1]];
						fieldSpecial.count--;

						let index = -1;
						angular.forEach(edaController.fields, (field, key) => {
							if (field.value == value) {
								index = key;
							}
						});

						if (index >= 0) {
							this.removeOption(value);
							this.refreshOptions(false);
							edaController.fields.splice(index, 1);
							edaController.$scope.$apply();
						}
					}
				}
			}
		}
	}

	onSubmit() {
		let JSONedModel = this.$filter('json')(this.dataModel, 4);
		this.toaster.pop({
				type 		: 'info',
				timeout : 2000,
				title 	: `it should save data model if it were not in editor`,
				body 		: `data : ${JSONedModel}`,
				showCloseButton: true
		});
	}

	countConfigurationModelLines() {
		this.debug.configurationModelNumberofLines = this.configuration.lines.length;
		return this.configuration.lines.length;
	}

	setActiveLineNumber(lineNumber) {
		if (lineNumber <= this.countConfigurationModelLines()) this.configuration.activeLine = lineNumber;
	}

	upThisLine(indexLine) {
		if (indexLine > -1) {
			if (this.configuration.lines[indexLine - 1]) {

				// update parent fields
				this.updateParents(indexLine, -1, 'upLine');

				var currentLineObj = this.configuration.lines[indexLine];
				this.configuration.lines.splice(indexLine , 1);
				this.configuration.lines.splice((indexLine - 1), 0, currentLineObj);
				//manage selected aciveLine
				this.configuration.activeLine = 1;
			}
		}
			//re-render formfield
		this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
		this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
	}

	downThisLine(indexLine) {
		if (indexLine > -1) {
			if (this.configuration.lines[indexLine + 1]) {

				// update parent fields
				this.updateParents(indexLine, -1, 'downLine');

				var currentLineObj = this.configuration.lines[indexLine];
				this.configuration.lines.splice(indexLine , 1);
				this.configuration.lines.splice((indexLine + 1), 0, currentLineObj);
				//manage selected aciveLine
				this.configuration.activeLine = 1;
			}
		}
		//re-render formfield
		this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
		this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
	}

	addNewline() {
		this.debug.numberOfNewFields++;
		this.configuration.lines.push(initLineTemplate(this.debug.numberOfNewFields * -1));
			//re-render formfield
		this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
		this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
	}

	removeThisLine(index) {
		if (index > -1) {
			if (this.configuration.lines.length > 1) {

				// update parent fields
				this.updateParents(index, -1, 'removeLine');

				//manage selected aciveLine
				if (this.configuration.activeLine === index + 1) this.configuration.activeLine = 1;
				this.configuration.lines.splice(index, 1);
			}else{
				this.$timeout(function(){
						this.toaster.pop({
										type: 'warning',
										title: 'Last line' ,
										body: 'Can\'t delete the last line',
										showCloseButton: true
							});
				}, 100);
			}
		//re-render formfield
		this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
		this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
		}
	}


	increaseNumberOfColumns() {
		let lineIndex = this.configuration.activeLine -1;
		this.debug.numberOfNewFields++;

		if (this
					.configuration
					.lines[lineIndex]
					.columns.length < this.MaxNumberOfColumns) {

			var newNumberOfColumns = this
																	.configuration
																	.lines[lineIndex]
																	.columns
																	.push(angular.copy(initColumnTemplate(this.debug.numberOfNewFields * -1)));
			this
					.configuration
					.lines[lineIndex]
					.columns[newNumberOfColumns - 1]
					.numColumn = newNumberOfColumns;
			}
			//re-render formfield
			this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
			this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
	}

	decreaseNumberOfColumns(row, column) {
		let currentColumnLength = this
					.configuration
					.lines[row]
					.columns
					.length;


		// update parent fields
		this.updateParents(row, column, 'removeColumn');

		// Remove parent connections if column removed
		if (currentColumnLength > 1 && column !== -1 && column < currentColumnLength) {

			this
					.configuration
					.lines[row]
					.columns
					.splice(column, 1);
		}
		this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
		this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
	}


	// Remove parent connections if line or column removed, nestings updated
	updateParents(row, column, switchType) {
		let newRow, newColumn;
		let pos1, pos2;
		let updatePositions = true;

		angular.forEach(this.configuration.lines, (line) => {
			angular.forEach(line.columns, (column) => {
				if (column.control.templateOptions && typeof(column.control.templateOptions.parentId) === 'object') {
					let position = column.control.templateOptions.parentId.name.match(/([0-9]+)\,([0-9]+)/);
					if (typeof position === 'object' && position != null && position[1] && position[2]) {
						pos1 = parseInt(position[1]);
						pos2 = parseInt(position[2]);
						updatePositions = true;

            switch (switchType) {
              case 'removeLine':
                if (pos1 === row) {
                  updatePositions = false;
                  column.control.templateOptions.parentId = "";
                } else {
                  newRow = (pos1 > row) ? pos1 - 1 : pos1;
                  newColumn = pos2;
                }
                break;

              case 'upLine':
                newRow = pos1;
								if (pos1 === row) newRow = pos1 - 1;
								if (pos1 === row - 1) newRow = pos1 + 1;
                newColumn = pos2;
                break;

              case 'downLine':
                newRow = pos1;
								if (pos1 === row) newRow = pos1 + 1;
								if (pos1 === row + 1) newRow = pos1 - 1;
                newColumn = pos2;
                break;

              case 'removeColumn':
                if (pos2 === column) {
                  updatePositions = false;
                  column.control.templateOptions.parentId = "";
                } else {
                  newRow = pos1;
                  newColumn = (pos2 > column) ? pos2 - 1 : pos2;
                }
                break;

               default:
                newRow = pos1;
                newColumn = pos2;
            }

            if (updatePositions) {
              column.control.templateOptions.parentId.name =
                (this.configuration.lines[pos1].columns[pos2].control.templateOptions.label ?
                  this.configuration.lines[pos1].columns[pos2].control.templateOptions.label :
                  'Field'
                ) +
                ' ' + newRow + ',' + newColumn + ' - ' + this.configuration.lines[pos1].columns[pos2].control.type + ' ' +
                this.configuration.lines[pos1].columns[pos2].control.subtype;
            }
					}
				}
			});
		});
	}


	removeOption(selectObj, AtIndex, parentsBasic) {
		let fullResponse = {
			resultFlag : false,
			details : ''
		};

		if (AtIndex !== -1) {
			for (let i = 0; i < selectObj.rows.length; i++) {
				if (selectObj.rows[i].parentId.id === selectObj.rows[AtIndex].referenceId) {
					selectObj.rows[i].parentId = {
						id: '',
						name: 'No value',
						value: ''
					};
				}
			}

			selectObj.rows.splice(AtIndex, 1);
			selectObj.parents = parentsBasic.concat(selectObj.rows);

			fullResponse.resultFlag = true;
			fullResponse.details= '';
			return fullResponse;
		}else{
			fullResponse.resultFlag = false;
			fullResponse.details= 'Option index not valid';
			return fullResponse;
		}
	}




	resetStepCounter() {
		this.configuration.configStepCounter = 0;
	}


	nextConfigStep() {
		var configStepCounterMAX = this.configuration.listConfigStep.length -1;
		if (this.configuration.configStepCounter !== configStepCounterMAX) {
				this.configuration.configStepCounter ++;
		}
		this.setTrueThisStepIndicator(this.configuration.configStepCounter);
	}


	resetAllIndicators(){
		for (var i = this.configuration.stepIndicators.length - 1; i >= 0; i--) {
			this.configuration.stepIndicators[i] = false;
		}
	}


	setTrueThisStepIndicator(indexIndicator){
			this.resetAllIndicators();
			this.configuration.stepIndicators[indexIndicator] = true;
	}


	previousConfigStep() {
		if (this.configuration.configStepCounter !== 0) {
			this.configuration.configStepCounter --;
		}
		this.setTrueThisStepIndicator(this.configuration.configStepCounter);
	}


	stepReachable(indexStep) {
		if (indexStep < this.configuration.configStepCounter) {
			return 'disabled';
		}else{
			return 'enabled';
		}
	}

	prepareExistingColumns(currentReferenceId) {
		let field = '';
		let titleColumns = [{
			id: null,
			name: 'No value',
			type: null,
			subtype: null,
			optionsSourceType: 'static'
		}];
		let columns = angular.copy(titleColumns);

		angular.forEach(this.configuration.lines, (line, lineKey) => {
			angular.forEach(line.columns, (column, columnKey) => {
				if (column.control.templateOptions) {
					if (column.control.templateOptions.referenceId !== currentReferenceId) {
						field = {
							id: column.control.templateOptions.referenceId,
							name: (column.control.templateOptions.label ? column.control.templateOptions.label : 'Field') +
								' ' + lineKey + ',' + columnKey + ' - ' + column.control.type + ' ' + column.control.subtype,
							type: column.control.type,
							subtype: column.control.subtype,
							optionsSourceType: column.control.templateOptions.optionsSourceType ? column.control.templateOptions.optionsSourceType : 'static'
						}
						if (column.control.type == 'header' || column.control.type == 'subTitle') {
							titleColumns.push(field);
						} else {
							columns.push(field);
						}
					}
				}
			});
		});

		return {
			titleColumns: titleColumns,
			columns 		: columns
		};
	}

	prepareAllOptions() {
		let options = {};

		angular.forEach(this.configuration.lines, (line, lineKey) => {
			angular.forEach(line.columns, (column, columnKey) => {
				if (column.control.type == 'radio' || column.control.type == 'basicSelect' || column.control.type == 'groupedSelect') {
					angular.forEach(column.control.templateOptions.options, (option, optionKey) => {
						if (! options[column.control.templateOptions.referenceId]) {
							options[column.control.templateOptions.referenceId] = [];
						}
						options[column.control.templateOptions.referenceId].push({
							referenceId: option.referenceId,
							id: option.uniqueValue,
							name: option.name
						});
					});
				}
			});
		});

		return options;
	}

	showModalAddCtrlToColumn(size, indexLine, numcolumn) {
		let editControlModal = {};
		let nyaSelect = this.$modalProxy.getNyASelectFromSelectedLineColumn(this.nyaSelect, this.configuration,indexLine, numcolumn);

		let columns = this.prepareExistingColumns(nyaSelect.temporyConfig.referenceId);

		angular.extend(editControlModal, {
			animation		: this.animationsEnabled,
			template		: editControlModalTemplate,
			controller	: EDIT_MODAL_CONTROLLER_NAME,
			controllerAs: EDIT_MODAL_CONTROLLERAS_NAME,
			size				: this.editControlModalSize,
			resolve			: {
				titleColumns 						: () => columns.titleColumns,
				columns 								: () => columns.columns,
				activeLine 							: indexLine,
				activeColumn 						: numcolumn,
				activeLineColumnsCount 	: () => this.configuration.lines[indexLine].columns.length,
				nyaSelect 							: () => nyaSelect,
				allOptions 							: () => this.prepareAllOptions()
			}
		});

		let modalInstance = this.$modal.open(editControlModal);
		modalInstance.result.then(
			(modalAddCtrlModel) => {
				this.$modalProxy.bindConfigurationModelFromModalReturn(indexLine, numcolumn, modalAddCtrlModel, this.configuration);
				this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
				this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);

				if (this.$modalProxy.columnRemoved) {
					this.decreaseNumberOfColumns(indexLine, numcolumn);
					this.$modalProxy.columnRemoved = false;
				}
				if (this.$modalProxy.columnUpdated) {
					this.updateParents(indexLine, numcolumn, '');
					this.$modalProxy.columnUpdated = false;
				}
			},
			() => {
				//$log.info('Modal dismissed at: ' + new Date());
			});
	}

	previewExistingform(formlyform) {
		let configlines = JSON.parse(formlyform.formlyField);
		//here to replace with $scope.configuration : initialise configuration with lines
		this.configurationLoaded = {};
		this.$formlyProxy.bindConfigurationLines(this.configurationLoaded,configlines);
		this.$formlyProxy.applyConfigurationToformlyModel(this.configurationLoaded, this.previewLoadedForm.fieldsModel, this.dataModel);
		this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
		this.previewLoadedForm.cancelButtonText = formlyform.cancelButtonText;
		this.previewLoadedForm.submitButtonText = formlyform.submitButtonText;
	}


	saveThisForm() {
		if (typeof this.configuration.formName === 'undefined') {
		this.toaster.pop({
						type: 'warning',
						timeout:2000,
						title: 'Form name is undefined',
						body: 'Form has not been saved.',
						showCloseButton: true
			});
			return false;
		}
		if (this.configuration.formName === '') {
		this.toaster.pop({
						type: 'warning',
						timeout:2000,
						title: 'Form name is required',
						body: 'Form has not been saved.',
						showCloseButton: true
			});
			return false;
		}
		this.toaster.pop({
						type: 'wait',
						timeout:10000,
						title: 'Form is being saved',
						body: 'Wait.',
						showCloseButton: true
		});
		this.toaster.clear();
		this.returnSaveEvent = true;
		return true;
	}
}


const toInject = [
	'easyFormGenVersion',
	'$filter',
	'toaster',
	'$timeout',
	'$uibModal',
	'$log',
	'$formlyProxy',
	'$modalProxy',
	'$scope',
	'$translate',
	'easyFormSteWayConfig'
];

edaStepWayEasyFormGenController.$inject = toInject;
export default edaStepWayEasyFormGenController;
export {STEP_WAY_MAIN_CONTROLLER_NAME, STEP_WAY_MAIN_CONTROLLERAS_NAME};
