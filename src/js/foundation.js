/**
 * BootstrapValidator (http://bootstrapvalidator.com)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation frameworks
 *
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc
 * @license     http://bootstrapvalidator.com/license/
 */

// Support Zurb Foundation framework
(function($) {
    FormValidator.Foundation = function(element, options) {
        options = $.extend(true, {
            clazz: {
                row: {
                    selector: '.row',
                    valid: '',
                    invalid: 'error',
                    feedback: 'fv-has-feedback'
                },
                message: {
                    clazz: 'error',
                    parent: '^.*((small|large)-[0-9]+)\\s.*(columns).*$'
                },
                // Foundation doesn't support feedback icon as Bootstrap
                // Might be we have to adjust the CSS manually
                icon: {
                    valid: null,
                    invalid: null,
                    validating: null,
                    feedback: 'fv-control-feedback'
                }
            }
        }, options);

        FormValidator.Base.apply(this, [element, options]);
    };

    FormValidator.Foundation.prototype = $.extend({}, FormValidator.Base.prototype, {
        /**
         * Create a tooltip or popover
         * It will be shown when focusing on the field
         *
         * @param {jQuery} $field The field element
         * @param {String} message The message
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _createTooltip: function($field, message, type) {
            // TODO
        },

        /**
         * Destroy the tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _destroyTooltip: function($field, type) {
            // TODO
        },

        /**
         * Hide a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _hideTooltip: function($field, type) {
            // TODO
        },

        /**
         * Show a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _showTooltip: function($field, type) {
            // TODO
        }
    });

    // Plugin definition
    $.fn.foundationValidator = function(option) {
        var params = arguments;
        return this.each(function() {
            var $this   = $(this),
                data    = $this.data('foundationValidator'),
                options = 'object' === typeof option && option;
            if (!data) {
                data = new FormValidator.Foundation(this, options);
                $this.data('foundationValidator', data);
            }

            // Allow to call plugin method
            if ('string' === typeof option) {
                data[option].apply(data, Array.prototype.slice.call(params, 1));
            }
        });
    };

    $.fn.foundationValidator.Constructor = FormValidator.Foundation;
}(jQuery));
