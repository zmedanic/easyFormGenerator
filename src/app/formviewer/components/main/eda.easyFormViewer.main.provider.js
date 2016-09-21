/* global angular */
const EASY_FORM_VIEWER_CONFIG_NAME = 'edaEasyFormViewerConfig';

function edaEasyFormViewerConfig($translateProvider) {
	let _defaultLanguage		= getDefaultLanguage();
	let _currentLanguage		= initDefaultLanguage();
	/* jshint validthis:true */
	this.$get 							= easyFormViewConfigGET;
	this.setLanguage				= setLanguage;
	this.getCurrentLanguage	= getCurrentLanguage;

	function getCurrentLanguage(){
			return _currentLanguage;
	}

	//language : set default to english
	function getDefaultLanguage(){
		let lang = 'en';
		return lang;
	}

	function setDefaultLanguage(){
		_currentLanguage = _defaultLanguage;
		$translateProvider.preferredLanguage(_currentLanguage);
		return _currentLanguage;
	}

	function setLanguage(language){
		if (angular.isString(language)) {
			_currentLanguage = language;
			$translateProvider.preferredLanguage(language);
		}else{
			setDefaultLanguage();
		}
	}

	function initDefaultLanguage(){
		$translateProvider.useSanitizeValueStrategy('escape'); 	//security : Enable escaping of HTML
		$translateProvider.fallbackLanguage(_defaultLanguage);	//fallback language to default language
		$translateProvider.preferredLanguage(_defaultLanguage);
		return _defaultLanguage;
	}

	//$get implementation :
	easyFormViewConfigGET.$inject = ['$translate'];
	function easyFormViewConfigGET($translate){

		let service = {
			setLanguage 						: switchLanguage,
			getCurrentLanguage			: getCurrentLanguage
		};
		return service;

		function switchLanguage(language){
			if (angular.isString(language)) {
				_currentLanguage = language;
				$translate.use(language);
			}else{
				setDefaultLanguage();
			}
		}

	}

}

edaEasyFormViewerConfig.$inject = ['$translateProvider'];
export default edaEasyFormViewerConfig;

export {EASY_FORM_VIEWER_CONFIG_NAME};
