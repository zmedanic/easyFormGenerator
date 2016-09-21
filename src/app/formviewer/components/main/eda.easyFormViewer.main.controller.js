const EASY_FORM_VIEWER_CONTROLLER 	= 'edaEasyFormViewerCtrl';
const EASY_FORM_VIEWER_CONTROLLERAS	= 'vm';

class edaEasyFormViewerController{

	constructor(edaEasyFormViewerConfig){
		this.edaEasyFormViewerConfig	= edaEasyFormViewerConfig;

		this.init();
	}

	init(){
		this.model 						= {};
		this.fields 					= {};
		this.hasJustSumitted 	= false;
		this.hasJustCancelled = false;
	}

	edaSubmitThisDataModel(){
		this.hasJustSumitted = true;
	}

	edaCancelEvent(){
		this.hasJustCancelled = true;
	}

}

edaEasyFormViewerController.$inject = [
	'edaEasyFormViewerConfig'
];

export default edaEasyFormViewerController;

export {
	EASY_FORM_VIEWER_CONTROLLER,
	EASY_FORM_VIEWER_CONTROLLERAS
};
