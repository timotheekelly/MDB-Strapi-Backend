'use strict';

/**
 * component-version router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::component-version.component-version');
