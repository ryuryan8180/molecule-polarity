// Copyright 2002-2014, University of Colorado Boulder

/**
 * The 'Two Atoms' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'SCENERY/nodes/Line' );
  var MPColors = require( 'MOLECULE_POLARITY/common/MPColors' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Screen = require( 'JOIST/Screen' );
  var ShadedSphereNode = require( 'SCENERY_PHET/ShadedSphereNode' );
  var Text = require( 'SCENERY/nodes/Text' );
  var TwoAtomsModel = require( 'MOLECULE_POLARITY/twoatoms/model/TwoAtomsModel' );
  var TwoAtomsView = require( 'MOLECULE_POLARITY/twoatoms/view/TwoAtomsView' );

  // strings
  var screenTitle = require( 'string!MOLECULE_POLARITY/twoAtoms' );
  var aString = require( 'string!MOLECULE_POLARITY/A' );
  var bString = require( 'string!MOLECULE_POLARITY/B' );

  // creates the icon for this screen, a diatomic molecule with atoms 'A' and 'B'
  var createScreenIcon = function() {

    var atomDiameter = 225;
    var bondLength = 1.15 * atomDiameter;
    var bondWidth = 0.15 * atomDiameter;
    var font = new PhetFont( { size: 94, weight: 'bold' } );

    var background = new Rectangle( 0, 0, 548, 373, { fill: MPColors.SCREEN_BACKGROUND } );
    var bond = new Line( 0, 0, bondLength, 0, { stroke: MPColors.BOND, lineWidth: bondWidth, center: background.center } );
    var atomA = new ShadedSphereNode( atomDiameter, { mainColor: MPColors.ATOM_A, centerX: bond.left, y: bond.centerY } );
    var atomB = new ShadedSphereNode( atomDiameter, { mainColor: MPColors.ATOM_B, centerX: bond.right, y: bond.centerY } );
    var textA = new Text( aString, { font: font, center: atomA.center } );
    var textB = new Text( bString, { font: font, center: atomB.center } );

    return new Node( { children: [ background, bond, atomA, atomB, textA, textB ] } );
  };

  function TwoAtomsScreen() {
    Screen.call( this,
      screenTitle,
      createScreenIcon(),
      function() { return new TwoAtomsModel(); },
      function( model ) { return new TwoAtomsView( model ); },
      { backgroundColor: MPColors.SCREEN_BACKGROUND }
    );
  }

  return inherit( Screen, TwoAtomsScreen );
} );