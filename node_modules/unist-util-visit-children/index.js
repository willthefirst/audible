/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unist:util:visit-children
 * @fileoverview Unist utility to visit direct children of a parent.
 */

'use strict';

/* eslint-env commonjs */

/**
 * Visitor for children of `parent`.
 *
 * @typedef visitChildren~callback
 * @param {Node} child - Current iteration;
 * @param {number} index - Position of `child` in `parent`;
 * @param {Node} parent - Parent node of `child`.
 */

/**
 * Function invoking a bound `fn` for each child of `parent`.
 *
 * @typedef visitChildren~visitor
 * @param {Node} parent - Node with children.
 * @throws {Error} - When not given a parent node.
 */

/**
 * Turns `callback` into a child-visitor accepting a parent.
 *
 * @param {visitChildren~callback} callback - Function to wrap.
 * @return {visitChildren~visitor} - Wrapped `fn`.
 */
function visitorFactory(callback) {
    return function (parent) {
        var index = -1;
        var children = parent && parent.children;

        if (!children) {
            throw new Error('Missing children in `parent` for `visitor`');
        }

        while (++index in children) {
            callback(children[index], index, parent);
        }
    };
}

/*
 * Expose.
 */

module.exports = visitorFactory;
