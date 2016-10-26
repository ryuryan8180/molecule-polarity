// Copyright 2014-2015, University of Colorado Boulder

/**
 * Main entry point for the 'Molecule Polarity' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var MPOptionsNode = require( 'MOLECULE_POLARITY/common/view/MPOptionsNode' );
  var MPQueryParameters = require( 'MOLECULE_POLARITY/common/MPQueryParameters' );
  var RealMoleculesScreen = require( 'MOLECULE_POLARITY/realmolecules/RealMoleculesScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var ThreeAtomsScreen = require( 'MOLECULE_POLARITY/threeatoms/ThreeAtomsScreen' );
  var TwoAtomsScreen = require( 'MOLECULE_POLARITY/twoatoms/TwoAtomsScreen' );

  // strings
  var moleculePolarityTitleString = require( 'string!MOLECULE_POLARITY/molecule-polarity.title' );

  var simOptions = {
    optionsNode: new MPOptionsNode(), // user interface for the Options dialog
    credits: {
      leadDesign: 'Kelly Lancaster',
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)',
      designTeam: 'Julia Chamberlain, Emily B. Moore, Robert Parson, Kathy Perkins'
    }
  };

  SimLauncher.launch( function() {

    var screens = [
      new TwoAtomsScreen(),
      new ThreeAtomsScreen()
    ];

    // developer-only features
    if ( MPQueryParameters.dev ) {

      screens.push( new RealMoleculesScreen() ); //TODO move this to screens initialization when fully implemented

      simOptions = _.extend( {
        screens: 3
      }, simOptions );
    }

    var sim = new Sim( moleculePolarityTitleString, screens, simOptions );
    sim.start();
  } );
} );