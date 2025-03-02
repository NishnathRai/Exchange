# Configuration Documentation

## Overview

This document provides details about the configuration parameters and their structure.

## JSON Structure

The configuration follows a JSON-like structure:

```json
[
    {
        "target": "BB1",
        "commands": [{
                    "command": "LVC-YP-FILE-INFO",
                    "ENDIAN": "",
                    "dec": "",
                    "HAZARD": {
                            "state": true,
                            "msg": ""
                    },
                    "Parameters":[{
                                "paramType": "A.PyPar",
                                "paramName":"LENGTH",
                                "no_of_Bit": 32,
                                "dataType": "Unit 8",
                                "min": 0,
                                "max": 5,
                                "defaultValue": 5,
                                "dec": "Param dec",
                                "units":{"unitName":"unitSymbol"},
                                "STATES": {
                                    "Key": "Val" ,
                                    "k1": "v1" 
                                }
                    }], 
        }],
        "telemetries":["working on it"]
    },
]
