/* global angular */
const DEBUG_MODEL = {
	showDebug : false,
	configurationModelNumberofLines : 1,
	numberOfNewFields : 0
};

const initDebugModel = () => angular.copy(DEBUG_MODEL);

const DEFAULT_TAB_MODEL = {
	editTab			: {
		active : true
	},
	previewTab 	: {
		active 				: false,
		tabVisible 		: true,
		modelsVisible : true
	}
};

const initTabModel = (isPreviewPanelVisible, arePreviewModelsVisible) => {
	let _tabModel = angular.copy(DEFAULT_TAB_MODEL);
	angular.extend(_tabModel.previewTab, {
		tabVisible 		: isPreviewPanelVisible,
		modelsVisible : arePreviewModelsVisible
	});
	return _tabModel;
};

const initColumnTemplate = (newReferenceId) => {
	return {
		numColumn		: -1,
		exist				:true,
		control			: {
			type		:'none',
			key			: 'none',
			subtype	: 'none',
			new: true,
			defaultValue: '',
			templateOptions: {
				referenceId: newReferenceId
			//                     label: 'none',
			//                     placeholder: 'none',
			//                     required: false,
			//                     description: 'Descriptive text'
	    }
		}
	}
};

const initLineTemplate = (newReferenceId) => {
	return {
		line:-1,
		activeColumn : 1,
		columns: [{
			numColumn: 1,
			exist:true,
			control: {
				type:'none',
				key: 'none',
				new: true,
				defaultValue: '',
				templateOptions: {
					referenceId: newReferenceId
				//                     label: 'none',
				//                     placeholder: 'none',
				//                     required: false,
				//                     description: 'Descriptive text'
	      }
			}
		}]
	}
};

export {
	initDebugModel,
	initTabModel,
	initColumnTemplate,
	initLineTemplate
};
