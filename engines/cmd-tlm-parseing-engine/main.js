import { targets } from "../../targets/targets.js";
import { Target , Command ,Parameter} from "./definations.js";
///
let tlm_cmd_arr = [  ];
/// 
async function readCmdAndTlm(){
    targets.map( (target)=>{
        tlm_cmd_arr.push( new Target( target ) );
        constructData( target );
    })
}
///
async function splitInLines(target){
    const responce = await fetch(`../../targets/${target}/cmd_tlm/cmd.txt`);
    const textInFile = await responce.text();
    const linesArr = textInFile.split("\n");
    return linesArr;
}
///
async function constructData(target) {
    let linesArr = await splitInLines( target );
    let commandObj = null ;
    let preParameter = null ;
    linesArr.forEach( (line)=>{
        ///end of one CMD
        if(line=="") {
            if( commandObj!=null ){
                tlm_cmd_arr.filter((mainObj)=>{
                    return mainObj.target == target ;
                })[0].commands.push( commandObj );
                commandObj = null;
                preParameter = null;
            }
            return;
        }
        ///spliting a single line into an Arr -- > lineArr
        let lineArr = line.match(/"[^"]*"|\S+/g).map(item => item.replace(/^"|"$/g, ''));
        /// dividing the line based on first line
        if(lineArr[0]=="COMMAND"){
            commandObj = new Command( lineArr[2] , lineArr[3] ,lineArr[4] );
        }
        else if(lineArr[0]=="HAZARDOUS"){
            commandObj.HAZARD = {
                state : true,
                msg : lineArr[1]
            }
        }
        else if(lineArr[0]=="APPEND_PARAMETER" || lineArr[0]=="APPEND_ID_PARAMETER"){
            preParameter = new Parameter( ...lineArr );
            commandObj.Parameters.push( preParameter );
        }
        else if(lineArr[0]=="STATE"){
            preParameter.STATES[ lineArr[1] ] = lineArr[2];
        }
        else if(lineArr[0]=="UNITS"){
            preParameter.units[lineArr[1]] = lineArr[2];
        }
        else{
            console.log("some thing new command",lineArr);
        }
    });
    console.log( tlm_cmd_arr );
}

export default readCmdAndTlm;