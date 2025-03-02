export class Target{
    constructor(targetName){
        this.target = targetName ;
        this.commands = [];
        this.telemetries = [];
    }
}

export class Command{
    constructor(commandName,ENDIAN,dec){
        this.command = commandName ;
        this.ENDIAN = ENDIAN ;
        this.dec = dec ;
        this.HAZARD = {
            state  : false , msg : ""
        }
        this.Parameters = [] ;
    }
}
export class Parameter{
    constructor(paramType,paramName,no_of_Bit,dataType,min,max,defaultValue,dec="",Endianness="LITTLE_ENDIAN",units={},STATES={}){
        this.paramType = paramType ;
        this.paramName = paramName ;
        this.no_of_Bit = no_of_Bit ;
        this.dataType = dataType ;
        this.min = min ;
        this.max = max ;
        this.defaultValue= defaultValue ;
        this.dec = dec;
        this.Endianness = Endianness ;
        this.units = units;
        this.STATES = STATES;
    }
}

class Telemetrie{

}