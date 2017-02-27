const TEXTANGULAR_CONFIG = 'easyFormTextAngularConfig';

function textAngularConfig($provide) {
  $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {

    taOptions.toolbar = [
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
        ['html', 'wordcount', 'charcount']
    ];

    return taOptions;
  }]);
}

textAngularConfig.$inject = ['$provide'];
export default textAngularConfig;
export {TEXTANGULAR_CONFIG};
