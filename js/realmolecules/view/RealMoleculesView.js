// Copyright 2002-2014, University of Colorado Boulder

/**
 * View for the 'Real Molecules' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var MPConstants = require( 'MOLECULE_POLARITY/common/MPConstants' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PropertySet = require( 'AXON/PropertySet' );
  var RealMoleculesComboBox = require( 'MOLECULE_POLARITY/realmolecules/view/RealMoleculesComboBox' );
  var RealMoleculesControlPanel = require( 'MOLECULE_POLARITY/realmolecules/view/RealMoleculesControlPanel' );
  var ResetAllButton = require( 'SCENERY_PHET/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var SurfaceColorKey = require( 'MOLECULE_POLARITY/common/view/SurfaceColorKey' );
  var SurfaceType = require( 'MOLECULE_POLARITY/common/view/SurfaceType' );

  /**
   * @param {TwoAtomsModel} model
   * @constructor
   */
  function RealMoleculesView( model ) {

    var thisView = this;
    ScreenView.call( thisView, { renderer: 'svg' } );

    // view-specific properties
    var viewProperties = new PropertySet( {
      bondDipolesVisible: false,
      molecularDipoleVisible: false,
      partialChargesVisible: false,
      atomElectronegativitiesVisible: false,
      atomLabelsVisible: true,
      surfaceType: SurfaceType.NONE
    } );

    // nodes
    var comboBoxListParent = new Node();
    var moleculesComboBox = new RealMoleculesComboBox( model.molecules, model.currentMolecule, comboBoxListParent );
    var electrostaticPotentialRWBColorKey = SurfaceColorKey.createElectrostaticPotentialRWBColorKey();
    var electrostaticPotentialROYGBColorKey = SurfaceColorKey.createElectrostaticPotentialROYGBColorKey();
    var electronDensityColorKey = SurfaceColorKey.createElectronDensityColorKey();
    var controlPanel = new RealMoleculesControlPanel( viewProperties );
    var resetAllButton = new ResetAllButton( function() {
      model.reset();
      viewProperties.reset();
    } );

    // Parent for all nodes added to this screen
    var rootNode = new Node( { children: [
      // nodes are rendered in this order
      moleculesComboBox,
      controlPanel,
      electrostaticPotentialRWBColorKey,
      electrostaticPotentialROYGBColorKey,
      electronDensityColorKey,
      resetAllButton,
      comboBoxListParent // last, so that combo box list is on top
    ] } );
    thisView.addChild( rootNode );

    // layout
    {
      // bottom center
      moleculesComboBox.centerX = this.layoutBounds.centerX;
      moleculesComboBox.bottom = this.layoutBounds.bottom - 25;

      // right center
      controlPanel.right = this.layoutBounds.right - 50;
      controlPanel.centerY = this.layoutBounds.centerY;

      // top center
      electrostaticPotentialRWBColorKey.centerX = electrostaticPotentialROYGBColorKey.centerX = electronDensityColorKey.centerX = this.layoutBounds.centerX;
      electrostaticPotentialRWBColorKey.top = electrostaticPotentialROYGBColorKey.top = electronDensityColorKey.top = 25;

      // bottom-right corner of the screen
      resetAllButton.right = this.layoutBounds.right - 40;
      resetAllButton.bottom = this.layoutBounds.bottom - 20;
    }

    // synchronization with view properties
    {
      viewProperties.bondDipolesVisibleProperty.link( function( visible ) {
        //TODO
//        moleculeNode.setBondDipolesVisible( visible );
      } );

      viewProperties.molecularDipoleVisibleProperty.link( function( visible ) {
        //TODO
//        moleculeNode.setMolecularDipoleVisible( visible );
      } );

      viewProperties.partialChargesVisibleProperty.link( function( visible ) {
        //TODO
//        moleculeNode.setPartialChargesVisible( visible );
      } );

      viewProperties.atomElectronegativitiesVisibleProperty.link( function( visible ) {
        //TODO
//        moleculeNode.setAtomElectronegativitiesVisible( visible );
      } );

      viewProperties.atomLabelsVisibleProperty.link( function( visible ) {
        //TODO
//        moleculeNode.setAtomLabelsVisible( visible );
      } );

      viewProperties.surfaceTypeProperty.link( function( surfaceType ) {
        //TODO
//        moleculeNode.setSurfaceType( surfaceType );
        electrostaticPotentialRWBColorKey.visible = ( surfaceType === SurfaceType.ELECTROSTATIC_POTENTIAL_RWB );
        electrostaticPotentialROYGBColorKey.visible = ( surfaceType === SurfaceType.ELECTROSTATIC_POTENTIAL_ROYGB );
        electronDensityColorKey.visible = ( surfaceType === SurfaceType.ELECTRON_DENSITY );
      } );
    }
  }

  return inherit( ScreenView, RealMoleculesView, { layoutBounds: MPConstants.LAYOUT_BOUNDS } );
} );