// Copyright 2002-2014, University of Colorado Boulder

/**
 * A make-believe atom whose electronegativity is mutable.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Property = require( 'AXON/Property' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {String} name
   * @param {Number} diameter
   * @param {Color|String} color
   * @param {Number} electronegativity
   * @param {Vector2} location defaults to (0,0)
   * @constructor
   */
  function Atom( name, diameter, color, electronegativity, location ) {
    this.name = name;
    this.diameter = diameter;
    this.color = color;
    this.electronegativityProperty = new Property( electronegativity );
    this.locationProperty = new Property( location || new Vector2( 0, 0 ) );
    this.partialChargeProperty = new Property( 0 ); // partial charge is zero until this atom participates in a bond
  }

  Atom.prototype = {

    reset: function() {
      this.electronegativityProperty.reset();
      // do not reset location and partial charge, they will be reset by their parent molecule
    }
  };

  return Atom;
} );