'use strict';

var escapeHTML = require('../Utils').escapeHTML;

var domQuery = require('min-dom').query;

var entryFieldDescription = require('./EntryFieldDescription');


var textField = function(options, defaultParameters) {

  // Default action for the button next to the input-field
  var defaultButtonAction = function(element, inputNode) {
    var input = domQuery('input[name="' + options.modelProperty + '"]', inputNode);
    input.value = '';

    return true;
  };

  // default method to determine if the button should be visible
  var defaultButtonShow = function(element, inputNode) {
    var input = domQuery('input[name="' + options.modelProperty + '"]', inputNode);

    return input.value !== '';
  };


  var resource = defaultParameters,
      label = options.label || resource.id,
      dataValueLabel = options.dataValueLabel,
      buttonLabel = (options.buttonLabel || 'X'),
      actionName = (typeof options.buttonAction != 'undefined') ? options.buttonAction.name : 'clear',
      actionMethod = (typeof options.buttonAction != 'undefined') ? options.buttonAction.method : defaultButtonAction,
      showName = (typeof options.buttonShow != 'undefined') ? options.buttonShow.name : 'canClear',
      showMethod = (typeof options.buttonShow != 'undefined') ? options.buttonShow.method : defaultButtonShow,
      canBeDisabled = !!options.disabled && typeof options.disabled === 'function',
      canBeHidden = !!options.hidden && typeof options.hidden === 'function',
      description = options.description;

  resource.html =
    '<label for="activiti-' + escapeHTML(resource.id) + '" ' +
      (canBeDisabled ? 'data-disable="isDisabled" ' : '') +
      (canBeHidden ? 'data-show="isHidden" ' : '') +
      (dataValueLabel ? 'data-value="' + escapeHTML(dataValueLabel) + '"' : '') + '>'+ escapeHTML(label) +'</label>' +
    '<div class="bpp-field-wrapper" ' +
      (canBeDisabled ? 'data-disable="isDisabled"' : '') +
      (canBeHidden ? 'data-show="isHidden"' : '') +
      '>' +
      '<input id="activiti-' + escapeHTML(resource.id) + '" type="text" name="' + escapeHTML(options.modelProperty) + '" ' +
        (canBeDisabled ? 'data-disable="isDisabled"' : '') +
        (canBeHidden ? 'data-show="isHidden"' : '') +
        ' />' +
      '<button class="' + escapeHTML(actionName) + '" data-action="' + escapeHTML(actionName) + '" data-show="' + escapeHTML(showName) + '" ' +
        (canBeDisabled ? 'data-disable="isDisabled"' : '') +
        (canBeHidden ? ' data-show="isHidden"' : '') + '>' +
        '<span>' + escapeHTML(buttonLabel) + '</span>' +
      '</button>' +
    '</div>';

    if (resource.id == 'assignee') {
        resource.html =
        '<label for="activiti-' + escapeHTML(resource.id) + '" ' +
        (canBeDisabled ? 'data-disable="isDisabled" ' : '') +
        (canBeHidden ? 'data-show="isHidden" ' : '') +
        (dataValueLabel ? 'data-value="' + escapeHTML(dataValueLabel) + '"' : '') + '>'+ escapeHTML(label) +'</label>' +
        '<div class="bpp-field-wrapper" ' +
        (canBeDisabled ? 'data-disable="isDisabled"' : '') +
        (canBeHidden ? 'data-show="isHidden"' : '') +
        '>' +

      '<div class="activiti-text-input-wrapper">' +

        '<input id="activiti-' + escapeHTML(resource.id) + '" type="text" name="' + escapeHTML(options.modelProperty) + '" ' +
          (canBeDisabled ? 'data-disable="isDisabled"' : '') +
          (canBeHidden ? 'data-show="isHidden"' : '') +
          ' />' +
        '<button class="' + escapeHTML(actionName) + '" data-action="' + escapeHTML(actionName) + '" data-show="' + escapeHTML(showName) + '" ' +
          (canBeDisabled ? 'data-disable="isDisabled"' : '') +
          (canBeHidden ? ' data-show="isHidden"' : '') + '>' +
          '<span>' + escapeHTML(buttonLabel) + '</span>' +
        '</button>' +
        '</div>';

        '<input type="button" class="btn-select" value="选择代理人" onclick="_select_assignee(this)"/>' +
        '</div>';
      }

      if (resource.id == 'assignee') {
        resource.html =
        '<label for="activiti-' + escapeHTML(resource.id) + '" ' +
        (canBeDisabled ? 'data-disable="isDisabled" ' : '') +
        (canBeHidden ? 'data-show="isHidden" ' : '') +
        (dataValueLabel ? 'data-value="' + escapeHTML(dataValueLabel) + '"' : '') + '>'+ escapeHTML(label) +'</label>' +
        '<div class="bpp-field-wrapper" ' +
        (canBeDisabled ? 'data-disable="isDisabled"' : '') +
        (canBeHidden ? 'data-show="isHidden"' : '') +
        '>' +

        '<div class="activiti-text-input-wrapper">' +

        '<input id="activiti-' + escapeHTML(resource.id) + '" type="text" name="' + escapeHTML(options.modelProperty) + '" ' +
          (canBeDisabled ? 'data-disable="isDisabled"' : '') +
          (canBeHidden ? 'data-show="isHidden"' : '') +
          ' />' +
        '<button class="' + escapeHTML(actionName) + '" data-action="' + escapeHTML(actionName) + '" data-show="' + escapeHTML(showName) + '" ' +
          (canBeDisabled ? 'data-disable="isDisabled"' : '') +
          (canBeHidden ? ' data-show="isHidden"' : '') + '>' +
          '<span>' + escapeHTML(buttonLabel) + '</span>' +
        '</button>' +
        '</div>';

        '<input type="button" class="btn-select" value="选择代理人" onclick="select_assignee(this)"/>' +
        '</div>';
      }

      if (resource.id == 'candidateUsers') {
        resource.html =
        '<label for="activiti-' + escapeHTML(resource.id) + '" ' +
        (canBeDisabled ? 'data-disable="isDisabled" ' : '') +
        (canBeHidden ? 'data-show="isHidden" ' : '') +
        (dataValueLabel ? 'data-value="' + escapeHTML(dataValueLabel) + '"' : '') + '>'+ escapeHTML(label) +'</label>' +
        '<div class="bpp-field-wrapper" ' +
        (canBeDisabled ? 'data-disable="isDisabled"' : '') +
        (canBeHidden ? 'data-show="isHidden"' : '') +
        '>' +

        '<div class="activiti-text-input-wrapper">' +

        '<input id="activiti-' + escapeHTML(resource.id) + '" type="text" name="' + escapeHTML(options.modelProperty) + '" ' +
          (canBeDisabled ? 'data-disable="isDisabled"' : '') +
          (canBeHidden ? 'data-show="isHidden"' : '') +
          ' />' +
        '<button class="' + escapeHTML(actionName) + '" data-action="' + escapeHTML(actionName) + '" data-show="' + escapeHTML(showName) + '" ' +
          (canBeDisabled ? 'data-disable="isDisabled"' : '') +
          (canBeHidden ? ' data-show="isHidden"' : '') + '>' +
          '<span>' + escapeHTML(buttonLabel) + '</span>' +
        '</button>' +
        '</div>';

        '<input type="button" class="btn-select" value="选择候选人" onclick="select_candidateUsers(this)"/>' +
        '</div>';
      }

      if (resource.id == 'candidateGroups') {
        resource.html =
        '<label for="activiti-' + escapeHTML(resource.id) + '" ' +
        (canBeDisabled ? 'data-disable="isDisabled" ' : '') +
        (canBeHidden ? 'data-show="isHidden" ' : '') +
        (dataValueLabel ? 'data-value="' + escapeHTML(dataValueLabel) + '"' : '') + '>'+ escapeHTML(label) +'</label>' +
        '<div class="bpp-field-wrapper" ' +
        (canBeDisabled ? 'data-disable="isDisabled"' : '') +
        (canBeHidden ? 'data-show="isHidden"' : '') +
        '>' +

        '<div class="activiti-text-input-wrapper">' +

        '<input id="activiti-' + escapeHTML(resource.id) + '" type="text" name="' + escapeHTML(options.modelProperty) + '" ' +
          (canBeDisabled ? 'data-disable="isDisabled"' : '') +
          (canBeHidden ? 'data-show="isHidden"' : '') +
          ' />' +
        '<button class="' + escapeHTML(actionName) + '" data-action="' + escapeHTML(actionName) + '" data-show="' + escapeHTML(showName) + '" ' +
          (canBeDisabled ? 'data-disable="isDisabled"' : '') +
          (canBeHidden ? ' data-show="isHidden"' : '') + '>' +
          '<span>' + escapeHTML(buttonLabel) + '</span>' +
        '</button>' +
        '</div>';

        '<input type="button" class="btn-select" value="选择候选组" onclick="select_candidateGroups(this)"/>' +
        '</div>';
      }

  // add description below text input entry field
  if (description) {
    resource.html += entryFieldDescription(description);
  }

  resource[actionName] = actionMethod;
  resource[showName] = showMethod;

  if (canBeDisabled) {
    resource.isDisabled = function() {
      return options.disabled.apply(resource, arguments);
    };
  }

  if (canBeHidden) {
    resource.isHidden = function() {
      return !options.hidden.apply(resource, arguments);
    };
  }

  resource.cssClasses = ['bpp-textfield'];

  return resource;
};

module.exports = textField;
