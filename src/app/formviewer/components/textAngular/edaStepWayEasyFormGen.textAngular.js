const TEXTANGULAR_CONFIG = 'easyFormTextAngularConfig';

function textAngularConfig($provide) {
  $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {

    taOptions.toolbar = [
        ['bold', 'italics', 'underline', 'redo', 'undo', 'clear'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
        ['html', 'wordcount', 'charcount']
    ];

    return taOptions;
  }]);
}

textAngularConfig.$inject = ['$provide'];
export default textAngularConfig;
export {TEXTANGULAR_CONFIG};
