import easyFormConfig 	from '../../easyFormConfig.json!json';

const EASY_FORM_VIEWER_VERSION_NAME   = 'easyFormViewerVersion';
let EASY_FORM_VIEWER_VERSION_VALUE  = easyFormConfig.formviewer.version;

function easyFromConfig(edaEasyFormViewerConfigProvider){
}

easyFromConfig.$inject = ['edaEasyFormViewerConfigProvider'];

export default easyFromConfig;
export {EASY_FORM_VIEWER_VERSION_NAME, EASY_FORM_VIEWER_VERSION_VALUE};


