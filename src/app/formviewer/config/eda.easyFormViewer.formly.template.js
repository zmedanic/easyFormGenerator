
const richTextTemplate = `
	<text-angular name="{{id}}"
		class="richTextAngular"
		ng-model="model[options.key || index]">
	</text-angular>`;


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

const basicSelectTemplate = `
<div class="row">
  <ol
    class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12"
    ng-model="model[options.key || index]"
    ng-if="options.templateOptions.allowMultiple == 1"
    id="{{id}}"
    disabled="options.templateOptions.options.length === 0">
    <li
      class="nya-bs-option"
      ng-if="!options.templateOptions.required"
      data-value="">
      <a>{{'NOTHING_SELECTED' | translate}}</a>
    </li>
    <li
      class="nya-bs-option"
      nya-bs-option="option in options.templateOptions.options"
      data-value="{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}">
      <a>
        <span>{{option.name}}</span>
        <span
          ng-if="option.description.length > 0"
          class="help-block help-inline">
          ({{option.description}})
        </span>
      </a>
    </li>
  </ol>
  <ol
    class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12"
    ng-model="model[options.key || index]"
    ng-if="options.templateOptions.allowMultiple != 1"
    multiple
    id="{{id}}"
    disabled="options.templateOptions.options.length === 0">
    <li
      class="nya-bs-option"
      nya-bs-option="option in options.templateOptions.options"
      data-value="{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}"
      ng-class="{disabled: isDisabled(model[options.key || index], option.uniqueValue, options)}">
      <a>
        <span>{{option.name}}</span>
        <span
          ng-if="option.description.length > 0"
          class="help-block help-inline">
          ({{option.description}})
        </span>
      </a>
    </li>
  </ol>
</div>`;

const groupedSelectTemplate = `
<div class="row">
  <ol class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12"
    ng-model="model[options.key || index]"
    ng-if="options.templateOptions.allowMultiple == 1"
    data-live-search="true"
    disabled="options.templateOptions.options.length === 0">
    <li
      class="nya-bs-option"
      ng-if="!options.templateOptions.required"
      data-value="">
      <a>{{'NOTHING_SELECTED' | translate}}</a>
    </li>
    <li
      nya-bs-option="option in options.templateOptions.options group by option.group"
      value="{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}">
      <span class="dropdown-header">{{$group}}</span>
      <a>
        <span>{{option.name}}</span>
        <span
          ng-if="option.description.length > 0"
          class="help-block help-inline">
          ({{option.description}})
        </span>
        <span class="glyphicon glyphicon-ok check-mark"></span>
      </a>
    </li>
  </ol>
  <ol class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12"
    ng-model="model[options.key || index]"
    ng-if="options.templateOptions.allowMultiple != 1"
    multiple
    data-live-search="true"
    disabled="options.templateOptions.options.length === 0">
    <li
      nya-bs-option="option in options.templateOptions.options group by option.group"
      value="{referenceId: option.referenceId, name: option.name, uniqueValue: option.uniqueValue}"
      ng-class="{disabled: isDisabled(model[options.key || index], option.uniqueValue, options)}">
      <span class="dropdown-header">{{$group}}</span>
      <a>
        <span>{{option.name}}</span>
        <span
          ng-if="option.description.length > 0"
          class="help-block help-inline">
          ({{option.description}})
        </span>
        <span class="glyphicon glyphicon-ok check-mark"></span>
      </a>
    </li>
  </ol>
</div>`;

const datepickerTemplate = `
  <p class="input-group">
    <span class="input-group-btn">
        <button
          type="button"
          class="btn btn-default"
          ng-click="formlyDatePicker.open($event)">
          <i class="glyphicon glyphicon-calendar"></i>
        </button>
    </span>
    <input  type="text"
            id="{{::id}}"
            name="{{::id}}"
            ng-model="model[options.key]"
            class="form-control"
            ng-click="datepicker.open($event)"
            uib-datepicker-popup="{{to.datepickerOptions.format}}"
            is-open="datepicker.opened"
            datepicker-options="to.datepickerOptions"
    />
  </p>
  `;

const validationTemplate = `
	<div class="formly-template-wrapper form-group"
						ng-class="{\'has-error\': options.validation.errorExistsAndShouldBeVisible}">
				<formly-transclude></formly-transclude>
				<div class="validation"
							ng-if="options.validation.errorExistsAndShouldBeVisible"
							ng-messages="options.formControl.$error">
					<div ng-messages-include="validation.html"></div>
					<div ng-message="{{::name}}" ng-repeat="(name, message) in ::options.validation.messages">
            <div ng-if="options.formControl.$error[name]">
						  {{message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}
            </div>
					</div>
				</div>
			</div>`;

const radioTemplate = `
  <div class="radio-group">
    <div
      class="radio"
      ng-repeat="option in options.templateOptions.options">
      <label>
        <input
          type="radio"
          ng-model="model[options.key]"
          id="{{::id}}"
          name="{{::id}}"
          ng-value="option.referenceId || option.uniqueValue">
        {{option.name}}
        <p
          ng-if="option.description.length > 0"
          class="help-block help-inline">
          ({{option.description}})
        </p>
      </label>
    </div>
  </div>
`;

export {
	richTextTemplate,
	blankTemplate,
	subTitleTemplate,
  radioTemplate,
	basicSelectTemplate,
	groupedSelectTemplate,
	datepickerTemplate,
	validationTemplate
};
