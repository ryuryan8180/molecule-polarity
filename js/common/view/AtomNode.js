// Copyright 2014-2017, University of Colorado Boulder

/**
 * Visual representation of an atom.
 * Controls its own position, so clients should not attempt to position it.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var moleculePolarity = require( 'MOLECULE_POLARITY/moleculePolarity' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var ShadedSphereNode = require( 'SCENERY_PHET/ShadedSphereNode' );
  var Text = require( 'SCENERY/nodes/Text' );

  /**
   * @param {Atom} atom
   * @constructor
   */
  function AtomNode( atom ) {

    // atom
    var sphereNode = new ShadedSphereNode( atom.diameter, { mainColor: atom.color } );

    // name centered on atom
    var textNode = new Text( atom.name, {
      font: new PhetFont( { size: 32, weight: 'bold' } ),
      maxWidth: 0.75 * atom.diameter,
      centerX: sphereNode.centerX,
      centerY: sphereNode.centerY
    } );

    Node.call( this, {
      children: [ sphereNode, textNode ]
    } );

    // sync location with model, unlink not needed
    atom.locationProperty.linkAttribute( this, 'translation' );
  }

  moleculePolarity.register( 'AtomNode', AtomNode );

  return inherit( Node, AtomNode );
} );