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
    constructor(paramType,paramName,no_of_Bit,dataType,min,max,defaultValue,dec="",endianness="LITTLE_ENDIAN",units={},STATES={}){
        this.paramType = paramType ;
        this.paramName = paramName ;
        this.no_of_Bit = no_of_Bit ;
        this.dataType = dataType ;
        this.min = min ;
        this.max = max ;
        this.defaultValue= defaultValue ;
        this.dec = dec;
        this.endianness = endianness ;
        this.units = units;
        this.STATES = STATES;
    }
}

export class APPEND_ARRAY_PARAMETER{
    constructor(paramType,paramName,item_bit_size,item_data_type,array_bit_size,description="",endianness="LITTLE_ENDIAN"){
        this.paramType =paramType ;
        this.paramName = paramName;
        this.item_bit_size = item_bit_size ;
        this.item_data_type = item_data_type;
        this.array_bit_size = array_bit_size;
        this.description = description;
        this.endianness = endianness ;
    }
}

class Telemetrie{

}