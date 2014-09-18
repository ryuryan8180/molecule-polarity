// Copyright 2002-2014, University of Colorado Boulder

//TODO investigate JSmol and figure out how to do this
/**
 * Scenery node that displays a Jmol viewer.
 * Jmol scripting language is documented at http://chemapps.stolaf.edu/jmol/docs
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // inherit
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'SCENERY/nodes/Line' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var SubSupText = require( 'SCENERY_PHET/SubSupText' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  /**
   * @param {Property<RealMolecule>} moleculeProperty
   * @param {JSmolProperties} jsmolProperties
   * @constructor
   */
  function JSmolViewerNode( moleculeProperty, jsmolProperties, options ) {

    options = _.extend( {
      backgroundColor: 'white',
      viewerSize: new Dimension2( 200, 200 )
    }, options );

    var thisNode = this;
    this.moleculeProperty = moleculeProperty; // @private

    var rectNode = new Rectangle( 0, 0, options.viewerSize.width, options.viewerSize.height, { stroke: 'rgba(0,0,0,0.25)', fill: options.backgroundColor } );
    var titleNode = new Text( 'JSmol viewer goes here', { font: new PhetFont( { size: 22, weight: 'bold' } ) } );
    var font = new PhetFont( 18 );
    var moleculeText = new SubSupText( '?', { font: font } );
    this.bondDipolesText = new Text( 'bond dipoles', { font: font } );
    this.molecularDipoleText = new Text( 'molecular dipole', { font: font } );
    this.partialChargesText = new Text( 'partial charges', { font: font } );
    this.atomLabelsText = new Text( 'atom labels', { font: font } );
    this.surfaceTypeText = new Text( '?', { font: font } );

    titleNode.centerX = rectNode.centerX;
    titleNode.centerY = rectNode.centerY;

    moleculeProperty.link( function( molecule ) {
      moleculeText.text = molecule.symbol + ' (' + molecule.name + ')';
    } );

    var debugText = new VBox( {
      align: 'left',
      spacing: 10,
      centerX: rectNode.centerX,
      centerY: rectNode.centerY,
      children: [
        titleNode,
        new Line( 0, 0, 0, 30 ),
        moleculeText,
        new Line( 0, 0, 0, 30 ),
        this.bondDipolesText,
        this.molecularDipoleText,
        this.partialChargesText,
        this.atomLabelsText,
        this.surfaceTypeText
      ]
    } );

    Node.call( this, { children: [ rectNode, debugText ] } );

    jsmolProperties.bondDipolesVisibleProperty.link( function( visible ) {
      thisNode.setBondDipolesVisible( visible );
    } );

    jsmolProperties.molecularDipoleVisibleProperty.link( function( visible ) {
      thisNode.setMolecularDipoleVisible( visible );
    } );

    jsmolProperties.partialChargesVisibleProperty.link( function( visible ) {
      thisNode.setPartialChargesVisible( visible );
    } );

    jsmolProperties.atomLabelsVisibleProperty.link( function( visible ) {
      thisNode.setAtomLabelsVisible( visible );
    } );

    jsmolProperties.surfaceTypeProperty.link( function( surfaceType ) {
      thisNode.setSurfaceType( surfaceType );
    } );
  }

  return inherit( Node, JSmolViewerNode, {

    // @return {Array<Element>}
    getElements: function() {
      return []; //TODO
    },

    setBondDipolesVisible: function( visible ) {
      //TODO
      this.bondDipolesText.fill = visible ? 'black' : 'gray';
    },

    setMolecularDipoleVisible: function( visible ) {
      //TODO
      this.molecularDipoleText.fill = visible ? 'black' : 'gray';
    },

    setPartialChargesVisible: function( visible ) {
      //TODO
      this.partialChargesText.fill = visible ? 'black' : 'gray';
    },

    setAtomLabelsVisible: function( visible ) {
      //TODO
      this.atomLabelsText.fill = visible ? 'black' : 'gray';
    },

    setSurfaceType: function( surfaceType ) {
      //TODO
      this.surfaceTypeText.text = ( 'surface: ' + surfaceType );
    }
  } );
} );
