/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('BodyMojitBinderIndex', function(Y, NAME) {

/**
 * The fooBinderIndex module.
 *
 * @module fooBinderIndex
 */

    /**
     * Constructor for the fooBinderIndex class.
     *
     * @class fooBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            node.append('<p>We are now ready to control the body of this page!!!</p>');
        }

    };

}, '0.0.1', {requires: ['mojito-client']});
