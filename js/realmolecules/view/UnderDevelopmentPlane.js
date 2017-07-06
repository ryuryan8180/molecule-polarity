// Copyright 2017, University of Colorado Boulder

/**
 * Used to disable the 'Real Molecules' screen and display a message indicating that it's under development.
 * This will be deleted when the 3D viewer is implemented, see https://github.com/phetsims/molecule-polarity/issues/15.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var moleculePolarity = require( 'MOLECULE_POLARITY/moleculePolarity' );
  var LinkText = require( 'JOIST/LinkText' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Panel = require( 'SUN/Panel' );
  var Plane = require( 'SCENERY/nodes/Plane' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  var underDevelopmentLine1String = require( 'string!MOLECULE_POLARITY/underDevelopment.line1' );
  var underDevelopmentLine2String = require( 'string!MOLECULE_POLARITY/underDevelopment.line2' );

  /**
   * @constructor
   */
  function UnderDevelopmentPlane( layoutBounds ) {

    var line1 = new Text( underDevelopmentLine1String, { font: new PhetFont( 22 ) } );
    var line2 = new Text( underDevelopmentLine2String, { font: new PhetFont( 16 ) } );

    var legacyLink = new LinkText(
      'https://phet.colorado.edu/en/simulation/legacy/molecule-polarity',
      'https://phet.colorado.edu/en/simulation/legacy/molecule-polarity', {
        font: new PhetFont( 16 )
      } );

    var vBox = new VBox( {
      align: 'left',
      spacing: 20,
      children: [
        line1,
        new VBox( { align: 'left', children: [ line2, legacyLink ] } )
      ]
    } );

    var panel = new Panel( vBox, {
      cornerRadius: 10,
      xMargin: 25,
      yMargin: 50,
      fill: 'white',
      stroke: 'black',
      center: layoutBounds.center
    } );

    Plane.call( this, {
      children: [ panel ],
      fill: 'rgba( 0, 0, 0, 0.2 )',
      pickable: true // blocks interaction with anything behind this Plane
    } );
  }

  moleculePolarity.register( 'UnderDevelopmentPlane', UnderDevelopmentPlane );

  return inherit( Plane, UnderDevelopmentPlane );
} );