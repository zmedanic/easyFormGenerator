/* global angular */
import edaFormViewerDirective, {
	EASY_FORM_VIEWER_DIRECTIVE_NAME
}																	from './eda.easyFormViewer.main.directive';

import edaEasyFormViewerController, {
	EASY_FORM_VIEWER_CONTROLLER
}																	from './eda.easyFormViewer.main.controller';
import edaEasyFormViewerConfig, {
  EASY_FORM_VIEWER_CONFIG_NAME
}                                 from './eda.easyFormViewer.main.provider';

const FORM_VIEWER_MAIN_MODULE_NAME = 'edaFormViewerMainModule';

export default angular
								.module(FORM_VIEWER_MAIN_MODULE_NAME, [])
								.controller(EASY_FORM_VIEWER_CONTROLLER, edaEasyFormViewerController)
                .directive(EASY_FORM_VIEWER_DIRECTIVE_NAME, edaFormViewerDirective)
                .provider(EASY_FORM_VIEWER_CONFIG_NAME, edaEasyFormViewerConfig);
