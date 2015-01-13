// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for the 'Real Molecules' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var mol2Data = require( 'MOLECULE_POLARITY/realmolecules/model/mol2Data' );
  var Property = require( 'AXON/Property' );
  var RealMolecule = require( 'MOLECULE_POLARITY/realmolecules/model/RealMolecule' );

  // string
  var hydrogenString = require( 'string!MOLECULE_POLARITY/hydrogen' );
  var nitrogrenString = require( 'string!MOLECULE_POLARITY/nitrogen' );
  var oxygenString = require( 'string!MOLECULE_POLARITY/oxygen' );
  var fluorineString = require( 'string!MOLECULE_POLARITY/fluorine' );
  var hydrogenFluorideString = require( 'string!MOLECULE_POLARITY/hydrogenFluoride' );
  var waterString = require( 'string!MOLECULE_POLARITY/water' );
  var carbonDioxideString = require( 'string!MOLECULE_POLARITY/carbonDioxide' );
  var hydrogenCyanideString = require( 'string!MOLECULE_POLARITY/hydrogenCyanide' );
  var ozoneString = require( 'string!MOLECULE_POLARITY/ozone' );
  var ammoniaString = require( 'string!MOLECULE_POLARITY/ammonia' );
  var boraneString = require( 'string!MOLECULE_POLARITY/borane' );
  var boronTrifluorideString = require( 'string!MOLECULE_POLARITY/boronTrifluoride' );
  var formaldehydeString = require( 'string!MOLECULE_POLARITY/formaldehyde' );
  var methaneString = require( 'string!MOLECULE_POLARITY/methane' );
  var fluoromethaneString = require( 'string!MOLECULE_POLARITY/fluoromethane' );
  var difluoromethaneString = require( 'string!MOLECULE_POLARITY/difluoromethane' );
  var trifluoromethaneString = require( 'string!MOLECULE_POLARITY/trifluoromethane' );
  var tetrafluoromethaneString = require( 'string!MOLECULE_POLARITY/tetrafluoromethane' );
  var chloroformString = require( 'string!MOLECULE_POLARITY/chloroform' );

  /**
   * @constructor
   */
  function RealMoleculesModel() {

    this.molecules = [

      new RealMolecule( 'H2', hydrogenString, mol2Data.H2 ),
      new RealMolecule( 'N2', nitrogrenString, mol2Data.N2 ),
      new RealMolecule( 'O2', oxygenString, mol2Data.O2 ),
      new RealMolecule( 'F2', fluorineString, mol2Data.F2 ),
      new RealMolecule( 'HF', hydrogenFluorideString, mol2Data.HF ),

      new RealMolecule( 'H2O', waterString, mol2Data.H2O ),
      new RealMolecule( 'CO2', carbonDioxideString, mol2Data.CO2 ),
      new RealMolecule( 'HCN', hydrogenCyanideString, mol2Data.HCN ),
      new RealMolecule( 'O3', ozoneString, mol2Data.O3 ),

      new RealMolecule( 'NH3', ammoniaString, mol2Data.NH3 ),
      new RealMolecule( 'BH3', boraneString, mol2Data.BH3 ),
      new RealMolecule( 'BF3', boronTrifluorideString, mol2Data.BF3 ),
      new RealMolecule( 'CH2O', formaldehydeString, mol2Data.CH2O ),

      new RealMolecule( 'CH4', methaneString, mol2Data.CH4 ),
      new RealMolecule( 'CH3F', fluoromethaneString, mol2Data.CH3F ),
      new RealMolecule( 'CH2F2', difluoromethaneString, mol2Data.CH2F2 ),
      new RealMolecule( 'CHF3', trifluoromethaneString, mol2Data.CHF3 ),
      new RealMolecule( 'CF4', tetrafluoromethaneString, mol2Data.CF4 ),
      new RealMolecule( 'CHCl3', chloroformString, mol2Data.CHCl3 )
    ];

    this.moleculeProperty = new Property( this.molecules[ 4 ] );
  }

  return inherit( Object, RealMoleculesModel, {

    reset: function() {
      this.moleculeProperty.reset();
    }
  } );
} );
