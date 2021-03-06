// Copyright 2014-2019, University of Colorado Boulder

/**
 * A pair of arrows that are placed around an atom to indicate that the atom can be translated.
 * Shapes are created in global coordinates, so this node's location should be (0,0).
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArrowShape = require( 'SCENERY_PHET/ArrowShape' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Matrix3 = require( 'DOT/Matrix3' );
  var moleculePolarity = require( 'MOLECULE_POLARITY/moleculePolarity' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Path = require( 'SCENERY/nodes/Path' );
  var Transform3 = require( 'DOT/Transform3' );

  /**
   * @param {Molecule} molecule
   * @param {Atom} atom
   * @param {Object} [options]
   * @constructor
   */
  function TranslateArrowsNode( molecule, atom, options ) {

    options = _.extend( {
      length: 25 // relatively short, so we don't need curved arrows
    }, options );

    var leftArrowNode = new Path( null, { fill: atom.color, stroke: 'gray' } );
    var rightArrowNode = new Path( null, { fill: atom.color, stroke: 'gray' } );

    // create "normalized" shapes at (0,0) with no rotation
    var arrowShapeOptions = { headWidth: 30, headHeight: 15, tailWidth: 15 };
    var radius = atom.diameter / 2;
    var spacing = 2;
    var leftArrow = new ArrowShape( -( radius + spacing ), 0, -( radius + spacing + options.length ), 0, arrowShapeOptions );
    var rightArrow = new ArrowShape( ( radius + spacing ), 0, ( radius + spacing + options.length ), 0, arrowShapeOptions );

    assert && assert( !options.children, 'decoration not supported' );
    options.children = [ leftArrowNode, rightArrowNode ];

    // unlink not needed
    atom.locationProperty.link( function() {

      // transform the arrow shapes to account for atom location and relationship to molecule location
      var v = molecule.location.minus( atom.locationProperty.get() );
      var angle = v.angle - ( Math.PI / 2 );
      var transform = new Transform3( Matrix3.translationFromVector( atom.locationProperty.get() ).timesMatrix( Matrix3.rotation2( angle ) ) );
      leftArrowNode.shape = transform.transformShape( leftArrow );
      rightArrowNode.shape = transform.transformShape( rightArrow );
    } );

    Node.call( this, options );
  }

  moleculePolarity.register( 'TranslateArrowsNode', TranslateArrowsNode );

  return inherit( Node, TranslateArrowsNode );
} );