const blankTemplate = `<div></div>`;

const subTitleTemplate = `
  <div class="row">
    <div class="">
      <h4 class="text-center">
        {{options.templateOptions.label}}
      </h4>
    </div>
  </div>
  <div class="row">
    <div class="">
      {{options.templateOptions.description}}
    </div>
  </div>
  <hr/>`;

const inputTemplate = `
  <input
    id="{{::id}}_{{fieldIndex}}"
    name="{{::id}}_{{fieldIndex}}"
    class="form-control"
    ng-model="model[options.key][fieldIndex]"
  />`;

const datepickerTemplate = `
  <div>
    <p class="input-group">
      <span class="input-group-btn">
        <button
          type="button"
          class="btn btn-default"
          ng-click="formlyDatePicker.open($event, fieldIndex)"
        >
          <i class="glyphicon glyphicon-calendar"></i>
        </button>
      </span>
      <input
        type="text"
        id="{{::id}}_{{fieldIndex}}"
        name="{{::id}}_{{fieldIndex}}"
        ng-model="model[options.key][fieldIndex]"
        class="form-control"
        ng-click="datepicker.open($event, fieldIndex)"
        uib-datepicker-popup="{{to.datepickerOptions.format}}"
        is-open="datepicker.opened[fieldIndex]"
        datepicker-options="to.datepickerOptions"
        ng-model-options="{timezone: 0}"
      />
    </p>
  </div>`;

const textareaTemplate = `
  <textarea
    id="{{::id}}_{{fieldIndex}}"
    name="{{::id}}_{{fieldIndex}}"
    class="form-control"
    ng-model="model[options.key][fieldIndex]"
  >
  </textarea>`;

const richTextTemplate = `
  <text-angular
    id="{{::id}}_{{fieldIndex}}"
    name="{{::id}}_{{fieldIndex}}"
    class="richTextAngular"
    ng-model="model[options.key || index][fieldIndex]"
  >
  </text-angular>`;

const radioTemplate = `
  <div class="radio-group">
    <div
      ng-repeat="(key, option) in to.options"
      ng-class="{ 'radio': !to.inline, 'radio-inline': to.inline }"
    >
      <label>
        <input
          type="radio"
          id="{{id + '_'+ $index}}"
          tabindex="0"
          ng-value="option.referenceId || option.uniqueValue"
          ng-model="model[options.key]"
        />
        {{option[to.labelProp || 'name']}}
        <p
          ng-if="option.description.length > 0"
          class="help-block help-inline"
        >
          ({{option.description}})
        </p>
      </label>
    </div>
  </div>`;

const basicSelectTemplate = `
  <ol
    class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12"
    ng-model="model[options.key || index]"
    id="{{id}}"
    disabled="options.templateOptions.options.length === 0"
    title="{{'NOTHING_SELECTED' | translate}}"
    data-live-search="true"
  >
    <li
      class="nya-bs-option"
      ng-if="!options.templateOptions.required"
      data-value=""
    >
      <a>{{'NOTHING_SELECTED' | translate}}</a>
    </li>
    <li
      class="nya-bs-option"
      nya-bs-option="option in options.templateOptions.options"
      data-value="{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}"
    >
      <a>
        <span>{{option.name}}</span>
        <span
          ng-if="option.description.length > 0"
          class="help-block help-inline">
          ({{option.description}})
        </span>
      </a>
    </li>
  </ol>`;

const basicMultiSelectTemplate = `
  <ol
    class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12"
    ng-model="model[options.key || index]"
    multiple
    id="{{id}}"
    disabled="options.templateOptions.options.length === 0"
    title="{{'NOTHING_SELECTED' | translate}}"
    data-live-search="true"
  >
    <li
      class="nya-bs-option"
      nya-bs-option="option in options.templateOptions.options"
      data-value="{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}"
      ng-class="{disabled: isDisabled(model[options.key || index], option.uniqueValue, options)}"
    >
      <a>
        <span>{{option.name}}</span>
        <span
          ng-if="option.description.length > 0"
          class="help-block help-inline"
        >
          ({{option.description}})
        </span>
      </a>
    </li>
  </ol>`;

const groupedSelectTemplate = `
  <ol class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12"
    ng-model="model[options.key || index]"
    data-live-search="true"
    disabled="options.templateOptions.options.length === 0"
    title="{{'NOTHING_SELECTED' | translate}}"
    data-live-search="true"
  >
    <li
      class="nya-bs-option"
      ng-if="!options.templateOptions.required"
      data-value=""
    >
      <a>{{'NOTHING_SELECTED' | translate}}</a>
    </li>
    <li
      nya-bs-option="option in options.templateOptions.options group by option.group"
      value="{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}"
    >
      <span class="dropdown-header">{{$group}}</span>
      <a>
        <span>{{option.name}}</span>
        <span
          ng-if="option.description.length > 0"
          class="help-block help-inline"
        >
          ({{option.description}})
        </span>
        <span class="glyphicon glyphicon-ok check-mark"></span>
      </a>
    </li>
  </ol>`;

const groupedMultiSelectTemplate = `
  <ol class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg-12"
    ng-model="model[options.key || index]"
    multiple
    data-live-search="true"
    disabled="options.templateOptions.options.length === 0"
    title="{{'NOTHING_SELECTED' | translate}}"
    data-live-search="true"
  >
    <li
      nya-bs-option="option in options.templateOptions.options group by option.group"
      data-value="{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}"
      ng-class="{disabled: isDisabled(model[options.key || index], option.uniqueValue, options)}"
    >
      <span class="dropdown-header">{{$group}}</span>
      <a>
        <span>{{option.name}}</span>
        <span
          ng-if="option.description.length > 0"
          class="help-block help-inline"
        >
          ({{option.description}})
        </span>
        <span class="glyphicon glyphicon-ok check-mark"></span>
      </a>
    </li>
  </ol>`;

const uploadTemplateListFiles = `
  <div ng-if="options.type == \'upload\' && options.templateOptions.files">
    <div
      ng-repeat="file in options.templateOptions.files"
      style="padding-bottom: 20px"
    >
      <div class="row">
        <div class="col-sm-9 col-xs-12 col-md-9 col-lg-9">
          <a class="upload-files" href="{{file.path}}" target="_blank">{{file.name}}</a>
        </div>
        <div class="col-sm-3 col-xs-12 col-md-3 col-lg-3">
          <button
            class="btn btn-sm btn-danger upload-files"
            ng-click="deleteFile(file.referenceId)"
          >
            {{'REMOVE' | translate}}
          </button>
        </div>
      </div>
    </div>
  </div>
  <formly-transclude></formly-transclude>`;

const uploadTemplate = `
  <div
    ng-hide="!(options.templateOptions.allowMultiple == -1 || !(options.templateOptions.files && options.templateOptions.files.length >= options.templateOptions.allowMultiple))"
  >
    <input
      type="file"
      class="form-control"
      ng-model="model[options.key][fieldIndex]"
      id="{{::id}}_{{fieldIndex}}"
      name="{{::id}}_{{fieldIndex}}"
    />
  </div>`;

const validationTemplate = `
  <div
    class="formly-template-wrapper form-group"
    ng-class="{\'has-error\': options.validation.errorExistsAndShouldBeVisible}"
  >
    <formly-transclude></formly-transclude>
    <div class="validation"
      ng-if="!options.templateOptions.canDisplayMultiple && fc[0] && fc[0].$invalid && (fc[0].$touched || fc[0].$viewValue)"
      ng-messages="fc[0].$error"
    >
      <div ng-messages-include="validation.html"></div>
      <div ng-message="{{name}}" ng-repeat="(name, value) in fc[0].$error">
        <div ng-if="value && options.validation.messages[name]">
          {{options.validation.messages[name](fc[0].$viewValue, fc[0].$modelValue, this)}}
        </div>
      </div>
    </div>
    <div class="validation"
      ng-if="!options.templateOptions.canDisplayMultiple && !fc[0] && fc.$invalid && (fc.$touched || fc.$viewValue)"
      ng-messages="fc.$error"
    >
      <div ng-messages-include="validation.html"></div>
      <div ng-message="{{name}}" ng-repeat="(name, value) in fc.$error">
        <div ng-if="value && options.validation.messages[name]">
          {{options.validation.messages[name](fc.$viewValue, fc.$modelValue, this)}}
        </div>
      </div>
    </div>
  </div>`;

const validationTemplateMultiple = `
  <div
    ng-repeat="item in model[options.key] track by $index" ng-init="fieldIndex = $index"
  >
    <div class="row">
      <div class="col-sm-9 col-xs-12 col-md-9 col-lg-9">
        <formly-transclude></formly-transclude>
      </div>
      <div class="col-sm-3 col-xs-12 col-md-3 col-lg-3" style="margin-bottom: 20px;">
        <button
          type="button"
          id="delete-{{::id}}"
          class="btn btn-sm btn-danger"
          ng-click="model[options.key].splice($index, 1)"
          ng-if="model[options.key].length > 1"
        >
          {{'REMOVE' | translate}}
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12">
        <div class="validation"
          ng-if="fc[$index] && fc[$index].$invalid && (fc[$index].$touched || fc[$index].$viewValue)"
          ng-messages="fc[$index].$error"
        >
          <div ng-messages-include="validation.html"></div>
          <div ng-message="{{name}}" ng-repeat="(name, value) in fc[$index].$error">
            <div ng-if="value && options.validation.messages[name]">
              {{options.validation.messages[name](fc[$index].$viewValue, fc[$index].$modelValue, this)}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p
    ng-if="options.templateOptions.allowMultiple == -1 || (options.type != \'upload\' && model[options.key].length < options.templateOptions.allowMultiple) || (options.type == \'upload\' && options.templateOptions.files && options.templateOptions.files.length + model[options.key].length < options.templateOptions.allowMultiple)">
    <button
      type="button"
      class="btn btn-primary"
      ng-click="model[options.key].push('')">
      {{'ADD_NEW' | translate}}
    </button>
  </p>`;

const descriptionTemplate = `
  <formly-transclude></formly-transclude>
  <p
    class="help-block"
    ng-if="to.descriptionNew"
  >
    {{to.descriptionNew}}
  </p>`;


export {
  blankTemplate,
  subTitleTemplate,
  inputTemplate,
  datepickerTemplate,
  textareaTemplate,
  richTextTemplate,
  radioTemplate,
  basicSelectTemplate,
  basicMultiSelectTemplate,
  groupedSelectTemplate,
  groupedMultiSelectTemplate,
  uploadTemplate,
  uploadTemplateListFiles,
  validationTemplate,
  validationTemplateMultiple,
  descriptionTemplate
};
