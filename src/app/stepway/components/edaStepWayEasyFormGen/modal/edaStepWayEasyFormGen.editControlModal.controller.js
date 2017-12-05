const EDIT_MODAL_CONTROLLER_NAME 		= 'editControlModalController';
const EDIT_MODAL_CONTROLLERAS_NAME 	= 'editControlModCtrl';

class editControlModalController {

	constructor(  $uibModalInstance,
								nyaSelect,
								toaster,
								selectOptionManage,
								$modalProxy,
								titleColumns,
								columns,
								activeLine,
								activeColumn,
								activeLineColumnsCount,
								$scope) {

		this.$modalInstance 					= $uibModalInstance;
		this.nyaSelect 								= nyaSelect;
		this.toaster 									= toaster;
		this.selectOptionManage 			= selectOptionManage;
		this.$modalProxy 							= $modalProxy;
		this.titleColumns							= titleColumns;
		this.columns									= columns;
		this.activeLine 							= activeLine;
		this.activeColumn 						= activeColumn;
		this.activeLineColumnsCount 	= activeLineColumnsCount;

		this.populateSourceTables = function() {
			this.optionsSourceDbTables		= [{id: null, name: 'Nothing selected'}];
			$scope.$emit('sourceTables');
		}

		this.populateSourceFields = function(value) {
			this.optionsSourceDbFields = [
				{
					value: '[VALUE]',
					text: 'Field value',
				},
				{
					value: '{',
					text: 'Optional display start',
				},
				{
					value: '}',
					text: 'Optional display end',
				},
			];
			$scope.$emit('sourceFields', value);
			if (this.nyaSelect.temporyConfig.optionsSourceDbFormat && this.nyaSelect.temporyConfig.optionsSourceDbFormat.length > 0) {
				angular.forEach(this.nyaSelect.temporyConfig.optionsSourceDbFormat, (formatPart) => {
					let matches = formatPart.match(/\[CHAR_[0-9]*:(.*?)\]/);
					if (matches && matches.length == 2 && matches[1] && matches[1].length > 0) {
						this.optionsSourceDbFields.push({value: formatPart, text: matches[1]});
					}
				});
			}
		}

		this.init();
	}

	init() {
		const initOptionModel 					= { rows:[], parents:[] };

		this.parentsBasic = [{
			option			: 'No value',
			description : '',
			parentId 		: '',
			referenceId : '',
			order 			: -1,
			uniqueValue : '',
		}];
		this.radioRowCollection 				= initOptionModel;
		this.newOptionRadio     				= {saisie: '', description: ''};
		this.basicSelectRowCollection 	= initOptionModel;
		this.newOptionBasicSelect     	= {saisie: '', description: ''};
		this.groupedSelectRowCollection = initOptionModel;
		this.newOptionGroupedSelect     = {saisie: '', description: ''};
		this.GroupedSelectGroups        = { list:[] };
		this.newGroupGroupedSelect      = {saisie: ''};
		this.basicSelectGroupClick      = {showList : false};
		this.groupSelectGroupClick      = {showList : false};
		this.demodt         						= {dt: [new Date()], opened: [false]};
		this.dateOptions    						= this.dateOptionsInit();
		this.demodt.formats 						= ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'mediumDate', 'longDate', 'fullDate'];
		this.defaultdt         					= {};
		this.nyaSelect.selectedControl  = this.nyaSelect.temporyConfig.selectedControl;
		this.nyaSelectFiltered 					= {};
		this.modelNyaSelect							= {};

		let optionsSourceDbFormatConfigIndex = this.nyaSelect.temporyConfig.optionsSourceDbFormat ? this.nyaSelect.temporyConfig.optionsSourceDbFormat.length : 0;
		this.optionsSourceDbFormatConfig = {
			create: function(input) {
				optionsSourceDbFormatConfigIndex++;
				let obj = {
					'value': '[CHAR_' + optionsSourceDbFormatConfigIndex + ':' + input + ']',
					'text': input,
				};
				return obj;
			},
			maxItems: 10,
		}

		//init nyaSelect model depending selected control
		this.initNyaSelectConformingSelectedControl();
	}

	initNyaSelectConformingSelectedControl(){
		//place nya-select to selection if not none :
		if (this.nyaSelect.selectedControl !== 'none') {
			for (let i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
				if (this.nyaSelect.controls[i].id === this.nyaSelect.selectedControl) this.modelNyaSelect = this.nyaSelect.controls[i];
			}
			if (this.nyaSelect.selectedControl === 'BasicSelect') 	this.bindBasicSelectFromNYA();
			if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectFromNYA();
			if (this.nyaSelect.selectedControl === 'Radio') 				this.bindRadioFromNYA();
		}
		this.initNyaSelectFiltered();

		// console.info(`modal controller : nyaSelect`);
		// console.dir(this.nyaSelect);
	}

	initNyaSelectFiltered(){
		let listCtrl = [].concat(this.$modalProxy.getFilteredNyaSelectObject());
		angular.extend(this.nyaSelectFiltered,{
			'controls'        : listCtrl,
			'selectedControl' : this.nyaSelect.selectedControl,
			'temporyConfig'   : this.nyaSelect.temporyConfig
		});
	}

	bindBasicSelectFromNYA(){
		if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
			for (let i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length-1; i++){
				let newOption = {
					'option'			: this.nyaSelect.temporyConfig.formlyOptions[i].name,
					'description' : this.nyaSelect.temporyConfig.formlyOptions[i].description,
					'order'				: i,
					'uniqueValue'	: this.nyaSelect.temporyConfig.formlyOptions[i].uniqueValue,
					'group'				: '',
					'parentId' 		: angular.copy(this.nyaSelect.temporyConfig.formlyOptions[i].parentId),
					'referenceId'	:	this.nyaSelect.temporyConfig.formlyOptions[i].referenceId
				};
				this.basicSelectRowCollection.rows.push(newOption);
			}
			this.basicSelectRowCollection.parents = this.parentsBasic.concat(this.basicSelectRowCollection.rows);
		}
	}

	bindRadioFromNYA() {
		if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
			for (let i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length-1; i++){
				let newOption = {
						'option'			: this.nyaSelect.temporyConfig.formlyOptions[i].name,
						'description' : this.nyaSelect.temporyConfig.formlyOptions[i].description,
						'order'				: i,
						'uniqueValue'	: this.nyaSelect.temporyConfig.formlyOptions[i].uniqueValue,
						'group'				: '',
						'parentId' 		: angular.copy(this.nyaSelect.temporyConfig.formlyOptions[i].parentId),
						'referenceId'	:	this.nyaSelect.temporyConfig.formlyOptions[i].referenceId
				};
				this.radioRowCollection.rows.push(newOption);
			}
			this.radioRowCollection.parents = this.parentsBasic.concat(this.radioRowCollection.rows);
		}
	}



	bindGroupedSelectFromNYA(){
		if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
			for (let i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length-1; i++){
				var newOption = {
					'option'			: this.nyaSelect.temporyConfig.formlyOptions[i].name,
					'description' : this.nyaSelect.temporyConfig.formlyOptions[i].description,
					'order'				: i,
					'uniqueValue'	: this.nyaSelect.temporyConfig.formlyOptions[i].uniqueValue,
					'group'				: this.nyaSelect.temporyConfig.formlyOptions[i].group,
					'parentId' 		: angular.copy(this.nyaSelect.temporyConfig.formlyOptions[i].parentId),
					'referenceId'	:	this.nyaSelect.temporyConfig.formlyOptions[i].referenceId
				};
				this.groupedSelectRowCollection.rows.push(newOption);
			}
			var filteredgroup = _.uniq(_.pluck(this.groupedSelectRowCollection.rows, 'group'));
			angular.copy(filteredgroup, this.GroupedSelectGroups.list);
			this.groupedSelectRowCollection.parents = this.parentsBasic.concat(this.groupedSelectRowCollection.rows);
		}
	}



	addNewOptionRadio() {
		let result = this.selectOptionManage.addNewOptionRadio(this.radioRowCollection, this.newOptionRadio, this.parentsBasic, this.nyaSelect.temporyConfig.allowEmptyOption);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: `'${this.newOptionRadio.saisie}' cannot be added.`,
				showCloseButton: true
			});
		}
		this.newOptionRadio = {saisie: '', description: ''}; //reset input
	}



	removeRadioRow(index) {
		let result = this.selectOptionManage.removeOption(this.radioRowCollection, index, this.parentsBasic);
			if (result.resultFlag === false) {
				this.toaster.pop({
					type			: 'warning',
					timeout		: 2000,
					title			: result.details,
					body			: 'Delete was cancelled.',
					showCloseButton: true
				});
		}
	}

	upThisRadioRow(index) {
		let result = this.selectOptionManage.upthisOption(this.radioRowCollection, index, this.parentsBasic);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: 'Operation cancelled.',
				showCloseButton: true
			});
		}
	}


	downThisRadioRow(index) {
		let result = this.selectOptionManage.downthisOption(this.radioRowCollection, index, this.parentsBasic);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: 'Operation cancelled.',
				showCloseButton: true
			});
		}
	}


	addNewOptionBasicSelect() {
		let result = this.selectOptionManage.addNewOptionBasicSelect(this.basicSelectRowCollection, this.newOptionBasicSelect, this.parentsBasic, this.nyaSelect.temporyConfig.allowEmptyOption);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: `'${this.newOptionBasicSelect.saisie}' cannot be added.`,
				showCloseButton: true
			});
		}
		this.newOptionBasicSelect = {saisie: '', description: ''}; //reset input
	}

	removeRow(index) {
		let result = this.selectOptionManage.removeOption(this.basicSelectRowCollection, index, this.parentsBasic);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	:2000,
				title		: result.details,
				body		: 'Delete was cancelled.',
				showCloseButton: true
			});
		}
	}

	upThisRow(index) {
		let result = this.selectOptionManage.upthisOption(this.basicSelectRowCollection, index, this.parentsBasic);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: 'Operation cancelled.',
				showCloseButton: true
			});
		}
	}

	downThisRow(index) {
		let result = this.selectOptionManage.downthisOption(this.basicSelectRowCollection, index, this.parentsBasic);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: 'Operation cancelled.',
				showCloseButton: true
			});
		}
	}

	showBasicListToChoose() {
		this.basicSelectGroupClick.showList = !this.basicSelectGroupClick.showList;
	}

	showGroupListToChoose() {
		this.groupSelectGroupClick.showList = !this.groupSelectGroupClick.showList;
	}

	addNewGroupToGroupedSelect(){
		if (this.newGroupGroupedSelect.saisie !== '') {
			for (let i = this.GroupedSelectGroups.list.length - 1; i >= 0; i--) {
				if (this.GroupedSelectGroups.list[i] === this.newGroupGroupedSelect.saisie) {
					this.toaster.pop({
						type		: 'warning',
						timeout	: 2000,
						title		: 'Group already exists',
						body		: 'No group added.',
						showCloseButton: true
					});
				}
			}
			this.GroupedSelectGroups.list.push(this.newGroupGroupedSelect.saisie);
		}else{
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: 'Not a valid group to add',
				body		: 'No group added.',
				showCloseButton: true
			});
		}
		this.newGroupGroupedSelect.saisie = '';
	}



	addNewOptionGroupedSelect() {
		let result = this.selectOptionManage.addNewOptionGroupedSelect(this.groupedSelectRowCollection, this.newOptionGroupedSelect, '', this.parentsBasic, this.nyaSelect.temporyConfig.allowEmptyOption);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: `'${this.newOptionGroupedSelect.saisie}' cannot be added.`,
				showCloseButton: true
			});
		}
		//bind nya : dont bind here $apply is not done fast enough
		//bindGroupedSelectToNya();
		//reset input
		this.newOptionGroupedSelect = {saisie: '', description: ''};
	}


	removeGroupedSelectRow(index) {
		let result = this.selectOptionManage.removeOption(this.groupedSelectRowCollection, index, this.parentsBasic);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: 'Delete was cancelled.',
				showCloseButton: true
			});
		}
	}


	upThisGroupedSelectRow(index){
		let result = this.selectOptionManage.upthisOption(this.groupedSelectRowCollection, index, this.parentsBasic);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: 'Operation cancelled.',
				showCloseButton: true
			});
		}
	}

	downThisGroupedSelectRow(index){
		let result = this.selectOptionManage.downthisOption(this.groupedSelectRowCollection, index, this.parentsBasic);
		if (result.resultFlag === false) {
			this.toaster.pop({
				type		: 'warning',
				timeout	: 2000,
				title		: result.details,
				body		: 'Operation cancelled.',
				showCloseButton: true
			});
		}
	}

	today(field, position) {
		if (position >= 0) {
			this[field].dt[position] = new Date();
		}
	}

	open($event, field, position) {
		$event.preventDefault();
		$event.stopPropagation();
		if (position >= 0) {
			this[field].opened[position] = true;
		} else {
			this[field].opened = true;
		}
	}

	dateOptionsInit(){
		return  {
			formatYear	: 'yy',
			startingDay	: 1,
			showWeeks		: true,
			initDate		: null
		};
	}

	selectThisControl(controlName) {
		this.nyaSelect.selectedControl = 'none';
		this.resetTemporyConfig();
		for (let i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
			if (this.nyaSelect.controls[i].id === controlName) this.nyaSelect.selectedControl = this.nyaSelect.controls[i].id;
		}
		if (this.nyaSelect.selectedControl === 'Date') this.initDatePicker();
	}


	ok() {
		if (this.nyaSelect.selectedControl === 'BasicSelect') 	this.bindBasicSelectToNya();
		if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectToNya();
		if (this.nyaSelect.selectedControl === 'Radio') 				this.bindRadioToNya();
		//save config to control
		this.$modalProxy.applyConfigToSelectedControl(this.nyaSelect);
		this.$modalProxy.columnUpdated = true;
		//return current model to parent controller :
		this.$modalInstance.close(this.nyaSelect);
	}

	cancel() {
		this.$modalInstance.dismiss('cancel');
	}

	removeColumn() {
		this.$modalProxy.columnRemoved = true;
		this.$modalInstance.close(this.nyaSelect);
	}

	bindBasicSelectToNya() {
		let resetNyASelectOptions = [];
		this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
		if (this.basicSelectRowCollection.rows.length > 0) {
			for (let i = 0; i <= this.basicSelectRowCollection.rows.length - 1; i++){
				let newOption = {
					'name'				: this.basicSelectRowCollection.rows[i].option,
					'description' : this.basicSelectRowCollection.rows[i].description,
					'value'				: i,
					'uniqueValue' : this.basicSelectRowCollection.rows[i].uniqueValue,
					'group'				: '',
					'parentId' 		: angular.copy(this.basicSelectRowCollection.rows[i].parentId),
					'referenceId'	:	this.basicSelectRowCollection.rows[i].referenceId
				};
				if (this.basicSelectRowCollection.rows[i].new) {
					newOption.new = this.basicSelectRowCollection.rows[i].new;
				}
				this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
			}
		}
	}

	bindGroupedSelectToNya() {
		this.nyaSelect.temporyConfig.formlyOptions = [];
		for (let i = 0; i <= this.groupedSelectRowCollection.rows.length - 1; i++){
			let newOption = {
				'name'				: this.groupedSelectRowCollection.rows[i].option,
				'description' : this.groupedSelectRowCollection.rows[i].description,
				'value'				: i,
				'uniqueValue' : this.groupedSelectRowCollection.rows[i].uniqueValue,
				'group'				: this.groupedSelectRowCollection.rows[i].group,
				'parentId' 		: angular.copy(this.groupedSelectRowCollection.rows[i].parentId),
				'referenceId'	:	this.groupedSelectRowCollection.rows[i].referenceId
			};
			if (this.groupedSelectRowCollection.rows[i].new) {
				newOption.new = this.groupedSelectRowCollection.rows[i].new;
			}
			this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
		}
	}

	bindRadioToNya(){
		let resetNyASelectOptions = [];
		this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
		if (this.radioRowCollection.rows.length > 0) {
			for (let i = 0; i <= this.radioRowCollection.rows.length - 1; i++){
				let newOption = {
					'name'				: this.radioRowCollection.rows[i].option,
					'description' : this.radioRowCollection.rows[i].description,
					'value'				: i,
					'uniqueValue' : this.radioRowCollection.rows[i].uniqueValue,
					'group'				: '',
					'parentId' 		: angular.copy(this.radioRowCollection.rows[i].parentId),
					'referenceId'	:	this.radioRowCollection.rows[i].referenceId
				};
				if (this.radioRowCollection.rows[i].new) {
					newOption.new = this.radioRowCollection.rows[i].new;
				}
				this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
			}
		}
	}


	initDatePicker() {
		this.nyaSelect.temporyConfig.datepickerOptions = {
      format : this.demodt.formats[0]
    };
	}


	resetTemporyConfig(){
		this.nyaSelectFiltered.temporyConfig = {
			formlyLabel				: '',
			formlyLabelShort	: '',
			formlyRequired		: false,
			formlyUnique			: false,
			formlyDefaultValue: '',
			displayAddOption	: true,
			displayEditOption	: true,
			allowMultiple 		: 1,
			formlyPlaceholder	: '',
			formlyDesciption	: '',
			formlyOptions			: [],
			parentId					: '',
			referenceId 			: ''
		};
	}
}


const toInject =  [
	'$uibModalInstance',
	'nyaSelect',
	'toaster' ,
	'selectOptionManage',
	'$modalProxy',
	'titleColumns',
	'columns',
	'activeLine',
	'activeColumn',
	'activeLineColumnsCount',
	'$scope'
];

editControlModalController.$inject = toInject;
export default editControlModalController;
export {
	EDIT_MODAL_CONTROLLER_NAME,
	EDIT_MODAL_CONTROLLERAS_NAME};
