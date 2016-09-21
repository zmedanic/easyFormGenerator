import './eda.easyFormViewer.vendors.adapaters';
import edaEasyFormViewConfig, {
    EASY_FORM_VIEWER_VERSION_NAME,
    EASY_FORM_VIEWER_VERSION_VALUE }      from './config/eda.easyFormViewer.conf.easyFormConf';
import formlyConfig                       from './config/eda.easyFormViewer.config';
import translateConfig                    from './components/translate/edaStepWayEasyFormGen.translate.module';
import edaFormViewerMainModule 						from './components/main/eda.easyFormViewer.main.module';
import edaFormViewerCoreModule						from './components/core/eda.easyFormViewer.core.module';
import edaFormViewerModelTranslatorModule	from './components/modelsTranslator/eda.easyFormViewer.modelTranslator.module';

const MAIN_MODULE_NAME                = 'eda.easyFormViewer';
const DEP_TO_INJECT_IN_MAIN = [
  edaFormViewerCoreModule.name,
  translateConfig.name,
	edaFormViewerMainModule.name,
	edaFormViewerModelTranslatorModule.name
];

let mainModule = angular
									.module(MAIN_MODULE_NAME, DEP_TO_INJECT_IN_MAIN)
                  .value(EASY_FORM_VIEWER_VERSION_NAME, EASY_FORM_VIEWER_VERSION_VALUE)
                  .config(formlyConfig)
                  .config(edaEasyFormViewConfig);

export default mainModule;
