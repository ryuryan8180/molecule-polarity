// Copyright 2014-2015, University of Colorado Boulder

/**
 * The 'Real Molecules' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MPColors = require( 'MOLECULE_POLARITY/common/MPColors' );
  var Screen = require( 'JOIST/Screen' );
  var RealMoleculesModel = require( 'MOLECULE_POLARITY/realmolecules/model/RealMoleculesModel' );
  var RealMoleculesView = require( 'MOLECULE_POLARITY/realmolecules/view/RealMoleculesView' );

  // strings
  var screenRealMoleculesString = require( 'string!MOLECULE_POLARITY/screen.realMolecules' );

  // images
  var homeIcon = require( 'image!MOLECULE_POLARITY/RealMolecules-home-icon.png' );
  var navigationBarIcon = require( 'image!MOLECULE_POLARITY/RealMolecules-navbar-icon.png' );

  function RealMoleculesScreen() {
    Screen.call( this,
      screenRealMoleculesString,
      new Image( homeIcon ),
      function() { return new RealMoleculesModel(); },
      function( model ) { return new RealMoleculesView( model ); },
      {
        backgroundColor: MPColors.SCREEN_BACKGROUND,
        navigationBarIcon: new Image( navigationBarIcon )
      }
    );
  }

  return inherit( Screen, RealMoleculesScreen );
} );