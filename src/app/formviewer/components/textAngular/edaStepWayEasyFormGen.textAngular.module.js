/* global angular */
import textAngularConfig, {TEXTANGULAR_CONFIG} from './edaStepWayEasyFormGen.textAngular';

const TEXTANGULAR_MODULE = 'eda.easyFormGenerator.textAngular';

export default angular
								.module(TEXTANGULAR_MODULE, ['textAngular'])
								.config(textAngularConfig);
