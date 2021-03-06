// Copyright 2014-2017, University of Colorado Boulder

/**
 * Constants used throughout this sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Bounds2 = require( 'DOT/Bounds2' );
  var moleculePolarity = require( 'MOLECULE_POLARITY/moleculePolarity' );
  var MPGlobalOptions = require( 'MOLECULE_POLARITY/common/MPGlobalOptions' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var RangeWithValue = require( 'DOT/RangeWithValue' );

  var MPConstants = {

    // ScreenView
    SCREEN_VIEW_OPTIONS: { layoutBounds: new Bounds2( 0, 0, 1100, 700 ) },

    // View
    GLOBAL_OPTIONS: new MPGlobalOptions(),

    // Model
    ELECTRONEGATIVITY_RANGE: new RangeWithValue( 2, 4, 2 ),
    ELECTRONEGATIVITY_TICK_SPACING: 0.2,
    ATOM_DIAMETER: 100,
    BOND_LENGTH: 150, // must be longer than ATOM_DIAMETER

    CONTROL_ICON_X_SPACING: 10,  // horizontal space between labels and icons
    CONTROL_PANEL_Y_SPACING: 15, // vertical space between controls

    // options for titles in control panels
    CONTROL_PANEL_TITLE_OPTIONS: {
      font: new PhetFont( { size: 20, weight: 'bold' } ),
      maxWidth: 250 // i18n, determined empirically
    },

    // options for text labels on controls
    CONTROL_TEXT_OPTIONS: {
      font: new PhetFont( 18 ),
      maxWidth: 175 // i18n, determined empirically
    },

    // Controls the width of the gradient used to fill the 2D surfaces.
    // Smaller values result in a more noticeable change as the EN sliders are dragged.
    SURFACE_GRADIENT_WIDTH_MULTIPLIER: 5
  };

  moleculePolarity.register( 'MPConstants', MPConstants );

  return MPConstants;
} );
