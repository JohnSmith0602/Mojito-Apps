/*
 * Copyright (c) 2011-2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */


/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/


YUI.add('IntlHTMLFrameMojit', function (Y, NAME) {

    'use strict';

    Y.namespace('mojito.controllers')[NAME] = {

        index: function (ac) {

            // composite execution for the children structure
            // coming from application.json specs.
            ac.composite.execute(ac.config.get(), function (data, meta) {

                // meta.assets from children should be piped into
                // the frame's assets before doing anything else.
                ac.assets.addAssets(meta.assets);

                // deploying YUI to the client side
                ac.deploy.constructMojitoClientRuntime(ac.assets, meta.binders);

                // 1. mixing bottom and top fragments from assets into
                //    the template data, along with title and mojito version.
                // 2. mixing meta with child metas, along with some extra
                //    headers.
                ac.done(
                    Y.merge(data, ac.assets.renderLocations(), {
                        "name": NAME,
                        "page-title": "some fancy title... from intl",
                        "greeting": ac.intl.lang("GREETING"),
                        "says": ac.intl.lang("SAYS"),
                        "preposition": ac.intl.lang("PREPOSITION"),
                        "today": ac.intl.formatDate(new Date()),
                        "mojito_version": Y.mojito.version
                    }),
                    Y.merge(meta, {

                        http: {
                            headers: {
                                'content-type': 'text/html; charset="utf-8"'
                            }
                        },

                        view: {
                            name: 'index'
                        }

                    })
                );

            });

        }

    };

}, '0.1.0', {requires: [
    'mojito',
    'mojito-assets-addon',
    'mojito-deploy-addon',
    'mojito-config-addon',
    'mojito-composite-addon',
    'mojito-intl-addon'
]});
